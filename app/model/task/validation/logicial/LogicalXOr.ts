import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

export default class LogicalXOr implements IStatement<boolean> {

    private a: IStatement<boolean>;
    private b: IStatement<boolean>;

    constructor(a: IStatement<boolean>, b: IStatement<boolean>) {
        this.a = a;
        this.b = b;
    }

    public invoke(formData: FocusFormData): boolean {
        return this.a.invoke(formData) !== this.b.invoke(formData);
    }
}
