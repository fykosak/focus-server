import OperationOverload from "@app/model/expression/OperationOverload";
import {IntegerType, RealType, StringType} from "@app/model/expression/definitions/default/types";
import {
    TupleOperation,
    UnaryBinaryOperation,
    BinaryOperation
} from "@app/model/expression/definitions/default/operation-templates";

// Sum of numbers, strings, arrays, matrices
export class SumOperation extends TupleOperation { protected _staticTypeCheck !: 'SUM_OPERATION__TYPE_CHECK' }

// Difference of numbers, arrays, matrices
export class DiffOperation extends UnaryBinaryOperation { protected _staticTypeCheck !: 'DIFF_OPERATION__TYPE_CHECK' }

// Multiplication of numbers, arrays, matrices, scalars and arrays
export class MulOperation extends TupleOperation { protected _staticTypeCheck !: 'MUL_OPERATION__TYPE_CHECK' }

// Normal number division
export class DivOperation extends UnaryBinaryOperation { protected _staticTypeCheck !: 'DIV_OPERATION__TYPE_CHECK' }

// Integer number division
export class ModOperation extends BinaryOperation { protected _staticTypeCheck !: 'MOD_OPERATION__TYPE_CHECK' }

export class IntegerSumOperation extends OperationOverload<SumOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke(formData: any) {
        return this.data.reduce((sum, statement) => sum + statement.invoke(formData), 0);
    }
}

export class RealSumOperation extends IntegerSumOperation {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof RealType);
    }

    public getType() {
        return new RealType();
    }
}

export class StringSumOperation extends OperationOverload<SumOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof StringType);
    }

    public getType() {
        return new StringType();
    }

    public invoke(formData: any) {
        return this.data.reduce((sum, statement) => sum + statement.invoke(formData), "");
    }
}

export class IntegerDiffOperation extends OperationOverload<DiffOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke(formData: any) {
        if (this.data.length == 1) {
            return -this.data[0].invoke(formData)
        } else {
            return this.data[0].invoke(formData) - this.data[1].invoke(formData);
        }
    }
}

export class RealDiffOperation extends IntegerDiffOperation {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof RealType);
    }

    public getType() {
        return new RealType();
    }
}

export class IntegerMulOperation extends OperationOverload<MulOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke(formData: any) {
        return this.data.reduce((sum, statement) => sum * statement.invoke(formData), 1);
    }
}

export class RealMulOperation extends IntegerMulOperation {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new RealType();
    }
}

export class IntegerDivOperation extends OperationOverload<DivOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke(formData: any) {
        if (this.data.length == 1) {
            return Math.floor(1/this.data[0].invoke(formData));
        } else {
            return Math.floor(this.data[0].invoke(formData)/this.data[1].invoke(formData));
        }
    }
}

export class RealDivOperation extends OperationOverload<DivOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof RealType);
    }

    public getType() {
        return new RealType();
    }

    public invoke(formData: any) {
        if (this.data.length == 1) {
            return 1/this.data[0].invoke(formData);
        } else {
            return this.data[0].invoke(formData)/this.data[1].invoke(formData);
        }
    }
}

export class IntegerModOperation extends OperationOverload<ModOperation> {
    public isSuitable() {
        return this.data.every(item => item.getType() instanceof IntegerType);
    }

    public getType() {
        return new IntegerType();
    }

    public invoke(formData: any) {
        return this.data[0].invoke(formData) % this.data[1].invoke(formData);
    }
}

