import AbstractCheck from './AbstractCheck';
import IAccessor from '../accessor/IAccessor';
import { FocusFormData } from '../../interface';

class StringCheck extends AbstractCheck<string> {

    private readonly correct: string;

    constructor(correct: string, accessor: IAccessor) {
        super(accessor);
        this.correct = correct;
    }

    evaluate(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        return value === this.correct;
    }
}
