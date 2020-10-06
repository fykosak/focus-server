type langKey = 'cs' | 'sk' | 'en' | 'pl' | 'hu' | 'es';

type LocalizedProperty<P> = {
    [lang in langKey]: P;
}

interface Task {
    answer: string;
    name: LocalizedProperty<string>;
    file: LocalizedProperty<string>;
    inputs: {
        [index: number]: {
            name: LocalizedProperty<string>;
            description?: LocalizedProperty<string>;
            unit?: string;
        }
    }
}

interface ImportData {
    [taskId: number]: Task;
}

export type FocusFormData = any;
