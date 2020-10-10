import OperationOverload from "@app/model/expression/OperationOverload";
import {BooleanType, IntegerType, RealType, StringType} from "@app/model/expression/definitions/default/types";
import Operation from "@app/model/expression/Operation";

export class ConstantOperation implements Operation {
    public transformData(data: any): any {
        return data;
    }
}

export class IntConstantOperation extends OperationOverload<ConstantOperation> {
    public isSuitable() {
        return Number.isInteger(this.data);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke() {
        return this.data
    }
}

export class RealConstantOperation extends OperationOverload<ConstantOperation> {
    public isSuitable(): boolean {
        return (typeof this.data === 'number') && !Number.isInteger(this.data);
    }

    public getType() {
        return new RealType();
    }

    public invoke() {
        return this.data
    }
}

export class BooleanConstantOperation extends OperationOverload<ConstantOperation> {
    public isSuitable(): boolean {
        return typeof this.data === 'boolean';
    }

    public getType() {
        return new BooleanType();
    }

    public invoke() {
        return this.data
    }
}

export class StringConstantOperation extends OperationOverload<ConstantOperation> {
    public isSuitable(): boolean {
        return typeof this.data === 'string';
    }

    public getType() {
        return new StringType();
    }

    public invoke() {
        return this.data
    }
}
