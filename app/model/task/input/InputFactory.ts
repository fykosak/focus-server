export default class InputFactory {
    private readonly names: string[];
    private readonly descriptions: string[];
    private readonly unit?: string = null;
    private readonly type: string;

    constructor(type: string, names: string[], descriptions: string[], unit?: string) {
        this.descriptions = descriptions;
        this.names = names;
        this.unit = unit;
        this.type = type;
    }

    public create(lang: string): any {
        return {
            name: this.names,
            description: this.descriptions,
            unit: this.unit,
            type: this.type,
        };
    }
}
