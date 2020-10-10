import Operation from "@app/model/expression/Operation";
import OperationManager from "@app/model/expression/OperationManager";
import Expression from "@app/model/expression/Expression";

/**
 * For operations accepting list of statements
 */
export class AssociativeOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of associative operation, array expected
        return data.map(item => operationManager.constructTree(item));
    }
}

/**
 * Operations accepting list of 1 or 2 statements
 */
export class NonCommutativeBinaryOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of operation, array expected
        if (!(data.length == 1 || data.length == 2)) return null;
        return data.map(item => operationManager.constructTree(item)) as [Expression] | [Expression, Expression];
    }
}

/**
 * Operations accepting list of exactly 2 statements
 */
export class NonCommutativeStrictlyBinaryOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of operation, array expected
        if (data.length != 2) return null;
        return data.map(item => operationManager.constructTree(item)) as [Expression, Expression];
    }
}
