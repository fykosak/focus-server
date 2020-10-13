import {TupleOperation} from "@app/model/expression/definitions/default/operation-templates";
import OperationOverload from "@app/model/expression/OperationOverload";
import {BooleanType, IntegerType, RealType, StringType} from "@app/model/expression/definitions/default/types";

export class EqualOperation extends TupleOperation { protected _staticTypeCheck !: 'EQUAL_OPERATION__TYPE_CHECK' }

abstract class GeneralEqualOperationOverload extends OperationOverload<EqualOperation> {
    getType() {
        return new BooleanType();
    }

    invoke(formData: any) {
        return this.data[0].invoke(formData) === this.data[1].invoke(formData);
    }
}

export class IntegerEqualOperationOverload extends GeneralEqualOperationOverload {
    isSuitable(): boolean {
        return this.data.every(i => i.getType() instanceof IntegerType);
    }
}

export class StringEqualOperationOverload extends GeneralEqualOperationOverload {
    isSuitable(): boolean {
        return this.data.every(i => i.getType() instanceof StringType);
    }
}

export class GreaterThanOperation extends TupleOperation { protected _staticTypeCheck !: 'GREATER_THAN_OPERATION__TYPE_CHECK' }
export class GreaterThanOrEqualOperation extends TupleOperation { protected _staticTypeCheck !: 'GREATER_THAN_OR_EQUAL_OPERATION__TYPE_CHECK' }
export class LessThanOperation extends TupleOperation { protected _staticTypeCheck !: 'LESS_THAN_OPERATION__TYPE_CHECK' }
export class LessThanOrEqualOperation extends TupleOperation { protected _staticTypeCheck !: 'LESS_THAN_OR_EQUAL_OPERATION__TYPE_CHECK' }

abstract class NumberCompareOperationsOverload<Op extends TupleOperation> extends OperationOverload<Op> {
    getType() {
        return new BooleanType();
    }

    isSuitable(): boolean {
        return this.data.every(i => i.getType() instanceof RealType);
    }
}

export class NumberGreaterThanOperationOverload extends NumberCompareOperationsOverload<GreaterThanOperation> {
    invoke(formData: any) {
        return this.data[0].invoke(formData) > this.data[1].invoke(formData);
    }
}
export class NumberGreaterThanOrEqualOperationOverload extends NumberCompareOperationsOverload<GreaterThanOrEqualOperation> {
    invoke(formData: any) {
        return this.data[0].invoke(formData) >= this.data[1].invoke(formData);
    }
}
export class NumberLessThanOperationOverload extends NumberCompareOperationsOverload<LessThanOperation> {
    invoke(formData: any) {
        return this.data[0].invoke(formData) < this.data[1].invoke(formData);
    }
}
export class NumberLessThanOrEqualOperationOverload extends NumberCompareOperationsOverload<LessThanOrEqualOperation> {
    invoke(formData: any) {
        return this.data[0].invoke(formData) <= this.data[1].invoke(formData);
    }
}
