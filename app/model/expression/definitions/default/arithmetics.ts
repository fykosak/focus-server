import OperationManager from "@app/model/expression/OperationManager";
import OperationOverload from "@app/model/expression/OperationOverload";
import {IntegerType, RealType, StringType} from "@app/model/expression/definitions/default/types";
import Operation from "@app/model/expression/Operation";

export class SumOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of sum operation, array expected
        return data.map(item => operationManager.constructTree(item));
    }
}

export class DiffOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of sum operation, array expected
        if (!(data.length == 1 || data.length == 2)) return null; // Weird signature of sum operation, array expected
        return data.map(item => operationManager.constructTree(item));
    }
}

export class MulOperation implements Operation {
    public transformData(data: any, operationManager: OperationManager) {
        if (!Array.isArray(data)) return null; // Weird signature of sum operation, array expected
        return data.map(item => operationManager.constructTree(item));
    }
}

/**********************************************************************************************************************/

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

/**********************************************************************************************************************/

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

/**********************************************************************************************************************/

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