import { FocusFormData } from '../interface';

export default interface IStatement {
    evaluate(formData: FocusFormData): boolean;
}
