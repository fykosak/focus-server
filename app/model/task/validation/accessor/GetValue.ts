import IAccessor from './IAccessor';
import { FocusFormData } from '../../interface';

export default class GetValue implements IAccessor<any> {
    private readonly index;

    constructor(index: number) {
        this.index = index;
    }

    public invoke(formData: FocusFormData): any {
        return formData[this.index];
    }
}
