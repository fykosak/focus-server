import Operation from "@app/model/expression/Operation";
import OperationManager from "@app/model/expression/OperationManager";
import Expression from "@app/model/expression/Expression";
import {InvalidOperationFormatExpressionError} from "@app/model/expression/ExpressionError";

/**
 * Unary operations
 * data: <expression>
 */
export abstract class UnaryOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        return operationManager.constructTree(data);
    }
}

/**
 * Tuple operations (for example addition, multiplication)
 * data: [<expression>?, ...]
 */
export abstract class TupleOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        return data.map(item => operationManager.constructTree(item));
    }
}

/**
 * Operations accepting list of 1 or 2 statements
 * data: [<expression>, <expression>?]
 */
export abstract class UnaryBinaryOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        if (!(data.length == 1 || data.length == 2)) throw new InvalidOperationFormatExpressionError(`Expected array of 1 or 2 expressions, ${data.length} given.`);
        return data.map(item => operationManager.constructTree(item)) as [Expression] | [Expression, Expression];
    }
}

/**
 * Operations accepting list of exactly 2 statements
 * data: [<expression>, <expression>]
 */
export abstract class BinaryOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        if (data.length != 2) throw new InvalidOperationFormatExpressionError(`Expected array of 1 or 2 expressions, ${data.length} given.`);
        return data.map(item => operationManager.constructTree(item)) as [Expression, Expression];
    }
}
