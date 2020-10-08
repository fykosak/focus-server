import AbstractFactory from '@app/model/task/factory/AbstractFactory';
import DefaultFactory from '@app/model/task/factory/DefaultFactory';
import LogicalAnd from '@app/model/task/validation/logicial/LogicalAnd';
import LogicalOr from '@app/model/task/validation/logicial/LogicalOr';
import LogicalXOr from '@app/model/task/validation/logicial/LogicalXOr';
import LogicalNot from '@app/model/task/validation/logicial/LogicalNot';
import Sum from '@app/model/task/validation/accessor/Sum';
import Times from '@app/model/task/validation/accessor/Times';
import StringCheck from '@app/model/task/validation/check/StringCheck';
import IntCheck from '@app/model/task/validation/check/IntCheck';
import RealCheck from '@app/model/task/validation/check/RealCheck';

class TaskDispatchFactory {

    private factories: { [key: number]: AbstractFactory } = {};

    public getFactory(taskId: number): AbstractFactory {
        if (!this.factories.hasOwnProperty(taskId)) {
            this.factories[taskId] = this.createFactory(taskId);
        }
        return this.factories[taskId];
    }
    private createFactory(taskId: number): AbstractFactory {
        return new DefaultFactory('', [], []);
    }
/*
    private compileEntity(statement: any): any {
        if (typeof statement === 'object') {
            for (const factory in statement) {
                if (statement.hasOwnProperty(factory)) {
                    const args = statement[factory];
                    if (statementMap.hasOwnProperty(factory)) {
                        return new statementMap[factory](...args);
                    }
                }

            }
        }
        return statement;
    }

    private compileArgs(args: any): any {

    }*/
}

const statementMap = {
    and: LogicalAnd,
    or: LogicalOr,
    xor: LogicalXOr,
    not: LogicalNot,

    sum: Sum,
    times: Times,

    string: StringCheck,
    int: IntCheck,
    real: RealCheck,
};

type AnswerStatement = {
    [key in keyof typeof statementMap]: AnswerStatement[] | { [key: string]: AnswerStatement }
} | string | number | boolean

type StringCheck = {
    correct: string;
    value: AnswerStatement;
}

type IntCheck = {
    correct: number;
    value: AnswerStatement;
}

type RealCheck = {
    correct: number;
    tolerance: [number, number];
    value: AnswerStatement;
}


export const taskDispatchFactory = new TaskDispatchFactory();


