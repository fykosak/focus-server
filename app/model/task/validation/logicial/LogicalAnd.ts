import VariadicStatement from '../VariadicStatement';
import { FocusFormData } from '../../interface';

export default class LogicalAnd extends VariadicStatement<boolean, boolean> {

    public invoke(formData: FocusFormData): boolean {
        return this.arguments.every((arg) => {
            return arg.invoke(formData);
        });
    }
}
