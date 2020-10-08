import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

export default class LogicalNot implements IStatement<boolean> {

    private expression: IStatement<boolean>;

    constructor(expression: IStatement<boolean>) {
        this.expression = expression;
    }

    public invoke(formData: FocusFormData): boolean {
        return !this.expression.invoke(formData);
    }
}
