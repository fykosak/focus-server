import Expression from "@app/model/expression/Expression";

export default interface IRegisteredOperation {
    constructTreeFromInnerData(rawData: any): Expression;
}
