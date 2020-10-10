import ExpressionTypeDescriptor from "@app/model/expression/ExpressionTypeDescriptor";

export class IntegerType extends ExpressionTypeDescriptor {
    public type!: number;
}

export class RealType extends ExpressionTypeDescriptor {
    public type!: number
}

export class StringType extends ExpressionTypeDescriptor {
    public type!: string;
}

export class BooleanType extends ExpressionTypeDescriptor {
    public type!: boolean;
}

export class TaskStateType extends ExpressionTypeDescriptor {
    public type!: 'fail' | 'pending' | 'skipped' | 'success';
}
