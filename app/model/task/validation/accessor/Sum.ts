import IAccessor from './IAccessor';
import { FocusFormData } from '../../interface';

export default class Sum implements IAccessor<number> {
    private readonly args: IAccessor<number>[];

    constructor(...args: IAccessor[]) {
        this.args = args;
    }

    public invoke(formData: FocusFormData): number {
        return this.args.reduce((sum, arg) => {
            return sum + arg.invoke(formData);
        }, 0);
    }
}
