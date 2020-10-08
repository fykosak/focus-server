import ExpressionNode from "@app/model/task/validation/ExpressionNode";
import {FocusFormData} from "@app/model/task/interface";

export default class ConstantNode implements ExpressionNode{
    private readonly value: any;

    constructor(data: any, answerExpresionTreeFactory: AnswerExpresionTreeFactory) {
        console.assert(['string', 'number', 'boolean'].includes(typeof data), "Expected primitive type");
        this.value = data;
    }

    getType(): string {
        return typeof this.value;
    }

    constructTree(): void {
        // Do nothing
    }

    invoke(formData: FocusFormData): any {
        return this.value;
    }
}
