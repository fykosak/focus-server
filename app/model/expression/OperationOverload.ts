import ExpressionTypeDescriptor from "@app/model/expression/ExpressionTypeDescriptor";
import Operation from "@app/model/expression/Operation";
import Expression from "@app/model/expression/Expression";

/**
 * Overload for specific operation defined as generic parameter.
 */
export default abstract class OperationOverload<OverloadedOperation extends Operation> implements Expression {
    /**
     * Object defined in Operation.ts class containing epressions
     */
    protected data: NonNullable<ReturnType<OverloadedOperation['transformData']>>;

    public constructor(data: NonNullable<ReturnType<OverloadedOperation['transformData']>>) {
        this.data = data;
    }

    /**
     * Based on types of subexpression in this.data this function decides if this overload is suitable.
     * @return Whether this specialization should be used
     */
    public abstract isSuitable(): boolean;

    /**
     * Evaluates expression and returns result
     * @param formData
     * @return Type of the result must match getType()
     */
    public abstract invoke(formData: any): ReturnType<this["getType"]>['type'];

    /**
     * Type of this expression
     */
    public abstract getType(): ExpressionTypeDescriptor;
}
