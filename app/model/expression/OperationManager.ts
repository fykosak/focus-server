import IRegisteredOperation from "@app/model/expression/IRegisteredOperation";
import RegisteredOperation from "@app/model/expression/RegisteredOperation";
import Expression from "@app/model/expression/Expression";
import ExpressionError from "@app/model/expression/ExpressionError";
import Operation from "@app/model/expression/Operation";

/**
 * Central class for registering operations and creating expression trees.
 */
export default class OperationManager {
    /**
     * For default values in JSON syntax use this operation as handler.
     * This is syntactic sugar allowing to write simply 12, "foo" or false instead of {constant: 12} etc.
     */
    public constantOperationHandler: string = 'constant';

    private operations = new Map<string, IRegisteredOperation>();

    /**
     * Registers a new operation
     * @param name string Operation.ts name
     * @param operation class Operation.ts class to be registered (implements Operation.ts interface)
     */
    public registerOperation<OperationType extends Operation>(name: string, operation: {new(): OperationType}): RegisteredOperation<OperationType> {
        let op = new RegisteredOperation<OperationType>(new operation(), this, name);
        this.operations.set(name, op);
        return op;
    }

    /**
     * Creates an expression tree from JSON description
     * @param data
     */
    public constructTree(data: any): Expression {
        let key: string = "";
        let innerData: any = null;

        if (typeof data === 'object') {
            let keys = Object.keys(data);
            if (keys.length !== 1) {
                throw new ExpressionError(`Unable to parse JSON description. Expected object having 1 key with operation name but got ${keys.length}.`);
            }

            key = keys[0];
            innerData = data[key];
        } else {
            // Trick to avoid unnecessary large describing objects
            key = this.constantOperationHandler;
            innerData = data;
        }

        let operation = this.operations.get(key);

        if (!operation) {
            throw new ExpressionError(`Unknown operation ${key}.`);
        } else {
            return operation.constructTreeFromInnerData(innerData);
        }
    }
}
