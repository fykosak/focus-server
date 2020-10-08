import AbstractCheck from './AbstractCheck';
import { FocusFormData } from '../../interface';
import IStatement from '@app/model/task/validation/IStatement';

export default class RealCheck extends AbstractCheck<number> {

    private readonly correct: number;
    private readonly tolerance: [number, number];


    constructor(correct: number, tolerance: [number, number], accessor: IStatement<number>) {
        super(accessor);
        this.correct = correct;
        this.tolerance = tolerance;
    }

    public invoke(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        if (value < this.correct - this.tolerance[0]) {
            return false;
        } else if (value > this.correct + this.tolerance[1]) {
            return false;
        }
        return true;
    }
}
