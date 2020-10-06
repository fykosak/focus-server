import VariadicStatement from './VariadicStatement';
import { FocusFormData } from '../../interface';

export default class LogicalAnd extends VariadicStatement {

    protected invoke(formData: FocusFormData): boolean {
        return this.arguments.every((arg) => {
            return arg.evaluate(formData);
        });
    }
}
