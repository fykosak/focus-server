import { FocusFormData } from '../interface';

export const ANSWER_CORRECT = 'correct';
export const ANSWER_INCORRECT = 'incorrect';
export const ANSWER_PENDING = 'pending';

export default abstract class AbstractFactory {

    private readonly file: string;
    private readonly names: string[];

    protected constructor(file: string, names: string[]) {
        this.file = file;
        this.names = names;
    }

    public getFile(lang: string): string {
        return this.file + '.' + lang;
    }

    public getName(lang: string): string | null {
        return this.names.hasOwnProperty(lang) ? this.names[lang] : null;
    }

    public abstract validate(formData: FocusFormData): string ;

    public abstract createContainer(lang: string): any;
}
