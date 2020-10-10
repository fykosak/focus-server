import {
    AndOperation, BooleanAndOperation, BooleanOrOperation,
    DiffOperation, DivOperation, IntegerDiffOperation, IntegerDivOperation, IntegerModOperation, IntegerMulOperation,
    IntegerSumOperation, ModOperation, MulOperation, OrOperation, RealDiffOperation, RealDivOperation, RealMulOperation,
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

}) as OperationDefinitions;

export default DefaultDefinitions;
