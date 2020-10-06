import AbstractCheck from './AbstractCheck';
import IAccessor from '../accessor/IAccessor';
import { FocusFormData } from '../../interface';

export default class RealCheck extends AbstractCheck<number> {

    private readonly correct: number;
    private readonly tolerance: [number, number];


    constructor(correct: number, tolerance: [number, number], accessor: IAccessor) {
        super(accessor);
        this.correct = correct;
        this.tolerance = tolerance;
    }

    public evaluate(formData: FocusFormData): boolean {
        const value = this.getValue(formData);
        if (value < this.correct - this.tolerance[0]) {
            return false;
        } else if (value > this.correct + this.tolerance[1]) {
            return false;
        }
        return true;
    }
}
