import InputFactory from '../input/InputFactory';
import IStatement from '../validation/IStatement';
import AbstractFactory, { ANSWER_CORRECT, ANSWER_INCORRECT } from './AbstractFactory';
import { FocusFormData } from '../interface';

export default class DefaultFactory extends AbstractFactory {

    private answerStatement: IStatement;

    private inputs: InputFactory[];

    constructor(file: string, names: string[], inputs: InputFactory[]) {
        super(file, names);
        this.inputs = inputs;
    }

    public validate(formData: FocusFormData): string {
        return this.answerStatement.evaluate(formData) ? ANSWER_CORRECT : ANSWER_INCORRECT;
    }

    public createContainer(lang: string): any {
        return this.inputs.map((input) => {
            return input.create(lang);
        });
    }
}
