import OperationOverload from "@app/model/expression/OperationOverload";
import {BooleanType, TaskStateType} from "@app/model/expression/definitions/default/types";
import {TupleOperation, UnaryOperation} from "@app/model/expression/definitions/default/operation-templates";

// Binary AND
export class AndOperation extends TupleOperation {
    protected _staticTypeCheck !: 'AND_OPERATION__TYPE_CHECK'
}

// Binary OR
export class OrOperation extends TupleOperation {
    protected _staticTypeCheck !: 'OR_OPERATION__TYPE_CHECK'
}

// To task state arithmetics
export class ToTSOperation extends UnaryOperation {
    protected _staticTypeCheck !: 'ToTS_OPERATION__TYPE_CHECK'
}

/**
 * Returns true if there is no false. (Empty conjunction is considered to be true)
 */
export class BooleanAndOperation extends OperationOverload<AndOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof BooleanType);
    }

    public getType() {
        return new BooleanType();
    }

    public invoke(formData: any) {
        for (let statement of this.data) {
            if (!statement.invoke(formData)) return false;
        }
        return true;
    }
}

/**
 * Returns true if there is at least one true. (Empty disjunction is considered to be false)
 */
export class BooleanOrOperation extends OperationOverload<OrOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof BooleanType);
    }

    public getType() {
        return new BooleanType();
    }

    public invoke(formData: any) {
        for (let statement of this.data) {
            if (statement.invoke(formData)) return true;
        }
        return false;
    }
}

/**
 * Convert boolean to task state type
 */
export class BooleanToTSOperationOverload extends OperationOverload<ToTSOperation> {
    getType() {
        return new TaskStateType();
    }

    invoke(formData: any) {
        return this.data.invoke(formData) ? 'success' : 'fail';
    }

    isSuitable(): boolean {
        return this.data.getType() instanceof BooleanType;
    }
}
