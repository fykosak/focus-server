import IStatement from './IStatement';
import { FocusFormData } from '../interface';

export default abstract class VariadicStatement<RETURN_TYPE, ARGS_TYPE = RETURN_TYPE> implements IStatement<RETURN_TYPE> {

    protected readonly arguments: IStatement<ARGS_TYPE>[];

    public constructor(...args: IStatement<ARGS_TYPE>[]) {
        this.arguments = args;
    }

    public abstract invoke(formData: FocusFormData): RETURN_TYPE;
}


