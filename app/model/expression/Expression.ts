import ExpressionTypeDescriptor from "@app/model/expression/ExpressionTypeDescriptor";

export default interface Expression {
    /**
     * Invokes expression with specific form data.
     * @param formData
     */
    invoke(formData: any): ReturnType<this["getType"]>['type'];

    /**
     * Return type of the expression
     */
    getType(): ExpressionTypeDescriptor;
}
