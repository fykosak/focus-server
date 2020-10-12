/**
 * JSON processing and type checking errors
 */
export class ExpressionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExpressionError";
    }
}

/**
 * Unable to find any overload for the operation with such child types.
 */
export class NoMatchingOverloadExpressionError extends ExpressionError { }

/**
 * There is no operation having such name.
 */
export class UnknownOperationNameExpressionError extends ExpressionError { }

/**
 * The expression description does not match the expected interface.
 */
export class InvalidExpressionDescriptionExpressionError extends ExpressionError { }

/**
 * Data passed to the operation does not match its interface.
 */
export class InvalidOperationFormatExpressionError extends ExpressionError { }
