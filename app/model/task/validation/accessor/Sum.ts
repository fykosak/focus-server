import { FocusFormData } from '../../interface';
import VariadicStatement from '@app/model/task/validation/VariadicStatement';
import ExpressionNode from "@app/model/task/validation/ExpressionNode";

export default class Sum implements ExpressionNode {
    private readonly data: any;
    private answerExpresionTreeFactory: AnswerExpresionTreeFactory;

    private subexpressions: ExpressionNode[] = [];

    constructor(data: any, answerExpresionTreeFactory: AnswerExpresionTreeFactory) {
        this.data = data;
        this.answerExpresionTreeFactory = answerExpresionTreeFactory;
    }

    public invoke(formData: FocusFormData): number {
        return this.subexpressions.reduce((sum, expression) => {
            return sum + expression.invoke(formData);
        }, 0);
    }

    constructTree(): void {
        for (let element of this.data) {
            this.subexpressions.push(this.answerExpresionTreeFactory.createTree(element));
        }
    }

    getType(): string {
        for (let expression of this.subexpressions) {
            if (expression.getType() !== 'number') {
                // throw error
            }
        }
        return "number";
    }
}
