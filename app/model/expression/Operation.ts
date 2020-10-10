import OperationManager from "@app/model/expression/OperationManager";

/**
 * Represents an operation with defined signature
 *
 * Define private _staticTypeCheck !: 'identifier' to statically distinguish different operations
 */
export default interface Operation {
    /**
     * This function checks if data have correct signature and creates the same object but the parameters for this
     * operation were replaced with statements constructed from replaced data
     * @param data JSON sub-tree with parameters for this operation
     * @param operationManager used for constructing expression from parameters
     * @throws ExpressionError
     */
    transformData(data: any, operationManager: OperationManager): any;
}
