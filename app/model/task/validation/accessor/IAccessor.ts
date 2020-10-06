import { FocusFormData } from '../../interface';

export default interface IAccessor<T = any> {
    invoke(formData: FocusFormData): T;
}
