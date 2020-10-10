/**
 * JSON processing and type checking errors
 */
export default class ExpressionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExpressionError";
    }
}
