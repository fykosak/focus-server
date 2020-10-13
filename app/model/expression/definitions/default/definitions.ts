import {
    DiffOperation, DivOperation, IntegerDiffOperation, IntegerDivOperation, IntegerModOperation, IntegerMulOperation,
    IntegerSumOperation, ModOperation, MulOperation, RealDiffOperation, RealDivOperation, RealMulOperation,
    RealSumOperation, StringSumOperation, SumOperation
} from "@app/model/expression/definitions/default/arithmetics";
import OperationManager from "@app/model/expression/OperationManager";
import {
    BooleanConstantOperation,
    ConstantOperation,
    IntConstantOperation,
    RealConstantOperation, StringConstantOperation
} from "@app/model/expression/definitions/default/constants";
import OperationDefinitions from "@app/model/expression/OperationDefinitions";
import {
    AndOperation,
    BooleanAndOperation,
    BooleanOrOperation, BooleanToTSOperationOverload,
    OrOperation, ToTSOperation
} from "@app/model/expression/definitions/default/logic";
import {
    EqualOperation,
    GreaterThanOperation,
    GreaterThanOrEqualOperation,
    IntegerEqualOperationOverload,
    LessThanOperation,
    LessThanOrEqualOperation,
    NumberGreaterThanOperationOverload, NumberGreaterThanOrEqualOperationOverload, NumberLessThanOperationOverload,
    NumberLessThanOrEqualOperationOverload,
    StringEqualOperationOverload
} from "@app/model/expression/definitions/default/compare";

/**
 * Default operation definitions for FOCUS platform
 */

let DefaultDefinitions =  ((operationManager: OperationManager) => {

    operationManager.registerOperation('constant', ConstantOperation)
        .registerOverload(IntConstantOperation)
        .registerOverload(RealConstantOperation)
        .registerOverload(BooleanConstantOperation)
        .registerOverload(StringConstantOperation);

    operationManager.registerOperation('sum', SumOperation)
        .registerOverload(IntegerSumOperation)
        .registerOverload(RealSumOperation)
        .registerOverload(StringSumOperation);

    operationManager.registerOperation('dif', DiffOperation)
        .registerOverload(IntegerDiffOperation)
        .registerOverload(RealDiffOperation);

    operationManager.registerOperation('mul', MulOperation)
        .registerOverload(IntegerMulOperation)
        .registerOverload(RealMulOperation);

    operationManager.registerOperation('div', DivOperation)
        .registerOverload(IntegerDivOperation)
        .registerOverload(RealDivOperation);

    operationManager.registerOperation('mod', ModOperation)
        .registerOverload(IntegerModOperation);

    operationManager.registerOperation('and', AndOperation)
        .registerOverload(BooleanAndOperation);

    operationManager.registerOperation('or', OrOperation)
        .registerOverload(BooleanOrOperation);

    operationManager.registerOperation('tots', ToTSOperation)
        .registerOverload(BooleanToTSOperationOverload);

    operationManager.registerOperation('equals', EqualOperation)
        .registerOverload(IntegerEqualOperationOverload)
        .registerOverload(StringEqualOperationOverload);

    operationManager.registerOperation('>', GreaterThanOperation)
        .registerOverload(NumberGreaterThanOperationOverload);

    operationManager.registerOperation('>=', GreaterThanOrEqualOperation)
        .registerOverload(NumberGreaterThanOrEqualOperationOverload);

    operationManager.registerOperation('<', LessThanOperation)
        .registerOverload(NumberLessThanOperationOverload);

    operationManager.registerOperation('<=', LessThanOrEqualOperation)
        .registerOverload(NumberLessThanOrEqualOperationOverload);

}) as OperationDefinitions;

export default DefaultDefinitions;
