import { FocusFormData } from '../../interface';
import IStatement from '@app/model/task/validation/IStatement';

export default class Times implements IStatement<number> {
    private readonly a: IStatement<number>;
    private readonly b: IStatement<number>;

    constructor(a: IStatement<number>, b: IStatement<number>) {
        this.a = a;
        this.b = b;
    }

    public invoke(formData: FocusFormData): number {
        return this.a.invoke(formData) / this.b.invoke(formData);
    }
}
