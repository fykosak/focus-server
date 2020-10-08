import AbstractCheck from './AbstractCheck';
import { FocusFormData } from '../../interface';
import IStatement from '@app/model/task/validation/IStatement';

export default class StringCheck extends AbstractCheck<string> {

    private readonly correct: string;

    constructor(correct: string, accessor: IStatement<string>) {
        super(accessor);
        this.correct = correct;
    }

    public invoke(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        return value === this.correct;
    }
}
