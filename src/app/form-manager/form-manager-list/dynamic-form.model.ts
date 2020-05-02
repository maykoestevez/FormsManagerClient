export class DynamicForm {
    id: number;
    name: string;
    formControls: Array<FormControl>;
}

export class FormControl {
    value: string;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    dynamicFormId: number;
    options: Array<DropDownOptions>;
}

export class DropDownOptions {
    id: number;
    key: string;
    value: string;
    dynamicFormControlId: number;
}
