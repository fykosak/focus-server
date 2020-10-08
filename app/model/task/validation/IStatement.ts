import { FocusFormData } from '../interface';

export default interface IStatement<RETURN_TYPE> {
    invoke(formData: FocusFormData): RETURN_TYPE;
}
