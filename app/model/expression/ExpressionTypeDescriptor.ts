/**
 * Describes a type of answer data or type used in an expression tree
 */
export default abstract class ExpressionTypeDescriptor {
    /**
     * Typescript type representing the data structure having the value
     * Only for Typescript compile purposes
     */
    public abstract type: any;
}
