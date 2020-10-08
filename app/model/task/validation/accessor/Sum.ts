import { FocusFormData } from '../../interface';
import VariadicStatement from '@app/model/task/validation/VariadicStatement';

export default class Sum extends VariadicStatement<number, number> {

    public invoke(formData: FocusFormData): number {
        return this.arguments.reduce((sum, arg) => {
            return sum + arg.invoke(formData);
        }, 0);
    }
}
