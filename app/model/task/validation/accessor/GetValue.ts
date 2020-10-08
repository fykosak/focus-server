import { FocusFormData } from '../../interface';
import IStatement from '@app/model/task/validation/IStatement';

export default class GetValue<VALUE = any> implements IStatement<VALUE> {
    private readonly index;

    private constructor(index: number) {
        this.index = index;
    }

    public invoke(formData: FocusFormData): any {
        return formData[this.index];
    }

  /*  static createInstance(data: string): any {
        const results = /\$([0-9]+)/.exec(data);
        return new this(+results[0]);
    }*/
}
