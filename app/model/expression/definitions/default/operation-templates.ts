import Operation from "@app/model/expression/Operation";
import OperationManager from "@app/model/expression/OperationManager";
import Expression from "@app/model/expression/Expression";
import {InvalidOperationFormatExpressionError} from "@app/model/expression/ExpressionError";

/**
 * For operations accepting list of statements
 */
export abstract class AssociativeOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        return data.map(item => operationManager.constructTree(item));
    }
}

/**
 * Operations accepting list of 1 or 2 statements
 */
export abstract class NonCommutativeBinaryOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        if (!(data.length == 1 || data.length == 2)) throw new InvalidOperationFormatExpressionError(`Expected array of 1 or 2 expressions, ${data.length} given.`);
        return data.map(item => operationManager.constructTree(item)) as [Expression] | [Expression, Expression];
    }
}

/**
 * Operations accepting list of exactly 2 statements
 */
export abstract class NonCommutativeStrictlyBinaryOperation extends Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) throw new InvalidOperationFormatExpressionError(`Expected array of expressions, ${typeof data} given.`);
        if (data.length != 2) throw new InvalidOperationFormatExpressionError(`Expected array of 1 or 2 expressions, ${data.length} given.`);
        return data.map(item => operationManager.constructTree(item)) as [Expression, Expression];
    }
}
