import { expect } from 'chai';
import OperationManager from "../../app/model/expression/OperationManager";
import DefaultDefinitions from "../../app/model/expression/definitions/default/definitions";
import {
    InvalidOperationFormatExpressionError,
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

describe('Expressions testing', () => { // the tests container
    it('Integer operations succeeds', () => { // the single test
        const operationManager = new OperationManager();
        DefaultDefinitions(operationManager);

        const expression = operationManager.constructTree(sumSucceeds);

        const result: number = expression.invoke(null);

        expect(result).to.equal(1022);
    });

    for (const op of ['sum', 'dif', 'div', 'mul', 'mod']) {
        it(`Operation ${op} having object as body fail`, () => {
            const operationManager = new OperationManager();
            DefaultDefinitions(operationManager);

            expect(function(){
                operationManager.constructTree({
                    [op]: {}
                });
            }).to.throw(InvalidOperationFormatExpressionError);

        });
    }

    it('Unknown operation name fail', () => {
        const operationManager = new OperationManager();
        DefaultDefinitions(operationManager);

        expect(function(){
            operationManager.constructTree({unknown_operation: "fails"})
        }).to.throw(UnknownOperationNameExpressionError);
    });

    for (const op of ['div', 'dif', 'mod', 'mul']) {
        it(`Passing string literal to ${op} fail`, () => {
            const operationManager = new OperationManager();
            DefaultDefinitions(operationManager);

            expect(function () {
                operationManager.constructTree({[op]: ["string", "another"]})
            }).to.throw(NoMatchingOverloadExpressionError);
        });
    }

    const quadruplets: [number, number, string, boolean][] = [
        [5, 4  , '>', 5 > 4  ],
        [5, 5  , '>', 5 > 5  ],
        [5, 6.2, '>', 5 > 6.2],

        [5, 4  , '>=', 5 >= 4  ],
        [5, 5  , '>=', 5 >= 5  ],
        [5, 6.2, '>=', 5 >= 6.2],

        [5, 4  , '<', 5 < 4  ],
        [5, 5  , '<', 5 < 5  ],
        [5, 6.2, '<', 5 < 6.2],

        [5, 4  , '<=', 5 <= 4  ],
        [5, 5  , '<=', 5 <= 5  ],
        [5, 6.2, '<=', 5 <= 6.2],
    ];

    for (const q of quadruplets) {
        it(`Compare operator ${q[0]} ${q[2]} ${q[1]} === ${q[3]} success`, () => {
            const operationManager = new OperationManager();
            DefaultDefinitions(operationManager);

            const expression = operationManager.constructTree({[q[2]]: [q[0], q[1]]});

            const result: boolean = expression.invoke(null);

            expect(result).to.equal(q[3]);
        });
    }
});
