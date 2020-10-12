import Operation from "@app/model/expression/Operation";
import IRegisteredOperation from "@app/model/expression/IRegisteredOperation";
import OperationOverload from "@app/model/expression/OperationOverload";
import OperationManager from "@app/model/expression/OperationManager";
import {NoMatchingOverloadExpressionError} from "@app/model/expression/ExpressionError";

/**
 * This class represents an Operation which was registered by OperationManager.
 * You can register overloads here.
 */
export default class RegisteredOperation<OperationType extends Operation> implements IRegisteredOperation {
    private operation: OperationType;
    private overloads: {new(data: NonNullable<ReturnType<OperationType['transformData']>>): OperationOverload<OperationType>}[] = [];
    private readonly operationManager: OperationManager;
    private readonly name: string;

    public constructor(operation: OperationType, operationManager: OperationManager, name: string) {
        this.operation = operation;
        this.operationManager = operationManager;
        this.name = name;
    }

    /**
     * Registers new overload class.
     * @param overload
     */
    public registerOverload(overload: {new(data: NonNullable<ReturnType<OperationType['transformData']>>): OperationOverload<OperationType>}): RegisteredOperation<OperationType> {
        this.overloads.push(overload);
        return this;
    }

    /**
     * Selects the best overload and constructs expression tree.
     * @param rawData
     */
    public constructTreeFromInnerData(rawData: any): OperationOverload<OperationType> {
        let data = this.operation.transformData(rawData, this.operationManager);

        for (let overload of this.overloads) {
            let o = new overload(data);
            if (o.isSuitable()) {
                return o;
            }
        }

        throw new NoMatchingOverloadExpressionError(`Operation '${this.name}': No matching overload found. Check types and number of arguments.`);
    }
}
