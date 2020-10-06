import IStatement from '../IStatement';
import IAccessor from '../accessor/IAccessor';
import { FocusFormData } from '../../interface';

export default abstract class AbstractCheck<T> implements IStatement {

    private readonly accessor: IAccessor<T>;

    protected constructor(accessor: IAccessor<T>) {
        this.accessor = accessor;
    }

    protected getValue(formData: FocusFormData): T {
        return this.accessor.invoke(formData);
    }

    abstract evaluate(formData: FocusFormData): boolean;
}
