import AbstractFactory, { ANSWER_PENDING } from './AbstractFactory';
import { FocusFormData } from '../interface';

class ImageFactory extends AbstractFactory {

    constructor(file: string, names: string[]) {
        super(file, names);
    }

    public validate(formData: FocusFormData): string {
        return ANSWER_PENDING;
    }

    public createContainer(lang: string): any {
        return {
            type: 'image',
            accept: ['image/png']
        }
    }
}
