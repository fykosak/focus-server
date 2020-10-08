import AbstractCheck from './AbstractCheck';
import { FocusFormData } from '../../interface';
import IStatement from '@app/model/task/validation/IStatement';

export default class IntCheck extends AbstractCheck<number> {

    private readonly correct: number;

    public constructor(correct: number, accessor: IStatement<number>) {
        super(accessor);
        this.correct = correct;
    }

    public invoke(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        return +value === this.correct;
    }
}
