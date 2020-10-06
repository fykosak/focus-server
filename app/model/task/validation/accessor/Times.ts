import IAccessor from './IAccessor';
import { FocusFormData } from '../../interface';

export default class Times implements IAccessor<number> {
    private readonly a: IAccessor<number>;
    private readonly b: IAccessor<number>;

    constructor(a: IAccessor, b: IAccessor) {
        this.a = a;
        this.b = b;
    }

    public invoke(formData: FocusFormData): number {
        return this.a.invoke(formData) / this.b.invoke(formData);
    }
}
