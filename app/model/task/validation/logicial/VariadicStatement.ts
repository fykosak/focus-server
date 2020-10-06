import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

export default abstract class VariadicStatement implements IStatement {

    protected readonly arguments: IStatement[];

    public constructor(...args: IStatement[]) {
        this.arguments = args;
    }

    protected abstract invoke(formData: FocusFormData): boolean;

    public evaluate(formData): boolean {
        return this.invoke(formData);
    }
}


