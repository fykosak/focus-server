import LogicalAnd from '@app/model/task/validation/logicial/LogicalAnd';
import LogicalOr from '@app/model/task/validation/logicial/LogicalOr';
import LogicalXOr from '@app/model/task/validation/logicial/LogicalXOr';
import LogicalNot from '@app/model/task/validation/logicial/LogicalNot';
import Sum from '@app/model/task/validation/accessor/Sum';
import Times from '@app/model/task/validation/accessor/Times';
import StringCheck from '@app/model/task/validation/check/StringCheck';
import IntCheck from '@app/model/task/validation/check/IntCheck';
import RealCheck from '@app/model/task/validation/check/RealCheck';
import ExpressionNode from "@app/model/task/validation/ExpressionNode";

interface expressionNodeClass {
    new(data: any, answerExpresionTreeFactory: AnswerExpresionTreeFactory): ExpressionNode;
}

class AnswerExpresionTreeFactory {
    private readonly expressionNodes: { [key: string]: expressionNodeClass };

    public constructor(expressionNodes: typeof AnswerExpresionTreeFactory.prototype.expressionNodes) {
        this.expressionNodes = expressionNodes;
    }

    /**
     * Creates an expression tree from data object
     * @param data object describes the expression tree to be created
     */
    public createTree(data: any): ExpressionNode {
        let key: string = null;
        let innerData: any = null;

        if (typeof data === 'object') {
            let keys = Object.keys(data);
            if (keys.length !== 1) {
                // Error unexpected number of keys
                return null;
            }

            key = keys[0];
            innerData = data[key];
        } else {
            // Trick to avoid unnecessary large describing objects
            key = 'constant';
            innerData = data;
        }

        if (!this.expressionNodes.hasOwnProperty(key)) {
            // Error unknown expression handler
            return null;
        }

        let node = new this.expressionNodes[key](innerData, this);
        node.constructTree();

        return node;
    }
}

const statementMap = {
    and: LogicalAnd,
    or: LogicalOr,
    xor: LogicalXOr,
    not: LogicalNot,

    sum: Sum,
    times: Times,

    string: StringCheck,
    int: IntCheck,
    real: RealCheck,
};

export const taskDispatchFactory = new AnswerExpresionTreeFactory(statementMap);
