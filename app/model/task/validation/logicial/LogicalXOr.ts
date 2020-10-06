import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

class LogicalXOr implements IStatement {

    private a: IStatement;
    private b: IStatement;

    constructor(a: IStatement, b: IStatement) {
        this.a = a;
        this.b = b;
    }

    public evaluate(formData: FocusFormData): boolean {
        return this.a.evaluate(formData) !== this.b.evaluate(formData);
    }
}
