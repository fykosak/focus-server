import IStatement from '../IStatement';
import { FocusFormData } from '../../interface';

export default abstract class AbstractCheck<VALUE_TYPE> implements IStatement<boolean> {

    private readonly accessor: IStatement<VALUE_TYPE>;

    protected constructor(accessor: IStatement<VALUE_TYPE>) {
        this.accessor = accessor;
    }

    protected getValue(formData: FocusFormData): VALUE_TYPE {
        return this.accessor.invoke(formData);
    }

    abstract invoke(formData: FocusFormData): boolean;
}
