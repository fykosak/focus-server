import { expect } from 'chai';
import OperationManager from "../../app/model/expression/OperationManager";
import DefaultDefinitions from "../../app/model/expression/definitions/default/definitions";
import {
    NoMatchingOverloadExpressionError,
    UnknownOperationNameExpressionError
} from "../../app/model/expression/ExpressionError";

const sumSucceeds = {
    "sum": [
        {
            "sum": [15]
        },
        {
            "sum": [0, -2]
        },
        {
            "dif": [10, 5]
        },
        {
            "dif": [7]
        },
        {
            "mul": [100, 5, 2]
        },
        {
            "div": [100, 10]
        },
        {
            "mod": [7, 3]
        },
    ]
}

const operations = ['sum', 'dif', 'div', 'mul', 'mod'];



describe('Expressions testing', () => { // the tests container
    it('Integer operations succeeds', () => { // the single test
        let operationManager = new OperationManager();
        DefaultDefinitions(operationManager);

        let expression = operationManager.constructTree(sumSucceeds);

        let result: number = expression.invoke(null);

        expect(result).to.equal(1022);
    });

/*    for (let op of operations) {
        it(`Arithmetics operation ${op} corrupted`, () => { // the single test
            let operationManager = new OperationManager();
            DefaultDefinitions(operationManager);

            let expression = operationManager.constructTree({
                [op]: {}
            });

            expect(function(){
                expression.invoke(null);
            }).to.throw('todo');

        });
    }*/

    it('Unknown operation name fail', () => { // the single test
        let operationManager = new OperationManager();
        DefaultDefinitions(operationManager);

        expect(function(){
            operationManager.constructTree({unknown_operation: "fails"})
        }).to.throw(UnknownOperationNameExpressionError);
    });

    const disallowsString = ['div', 'dif', /*'mod',*/ 'mul'];
    for (let op of disallowsString) {
        it(`Passing string literal to ${op} fail`, () => { // the single test
            let operationManager = new OperationManager();
            DefaultDefinitions(operationManager);

            expect(function () {
                operationManager.constructTree({[op]: ["string"]})
            }).to.throw(NoMatchingOverloadExpressionError);
        });
    }
});
