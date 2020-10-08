import {FocusFormData} from "../interface";

export default interface ExpressionNode {
    /**
     * Evaluate expression and get result
     * @param formData
     */
    invoke(formData: FocusFormData): any;

    /**
     * Creates an expression tree from data obtained in constructor
     */
    constructTree(): void;

    /**
     * Checks type coherency in the expression tree
     */
    getType(): string;
}
