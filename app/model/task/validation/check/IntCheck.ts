import AbstractCheck from './AbstractCheck';
import IAccessor from '../accessor/IAccessor';
import { FocusFormData } from '../../interface';

export default class IntCheck extends AbstractCheck<number> {

    private readonly correct: number;

    public constructor(correct: number, accessor: IAccessor) {
        super(accessor);
        this.correct = correct;
    }

    public evaluate(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        return +value === this.correct;
    }
}
