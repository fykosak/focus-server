import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

export default class LogicalNot implements IStatement {

    private expression: IStatement;

    constructor(expression: IStatement) {
        this.expression = expression;
    }

    public evaluate(formData: FocusFormData): boolean {
        return !this.expression.evaluate(formData);
    }
}
