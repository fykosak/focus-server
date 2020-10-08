import VariadicStatement from '../VariadicStatement';
import { FocusFormData } from '../../interface';

export default class LogicalOr extends VariadicStatement<boolean, boolean> {

    public invoke(formData: FocusFormData): boolean {
        return this.arguments.some((arg) => {
            return arg.invoke(formData);
        });
    }
}
