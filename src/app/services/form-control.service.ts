import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseControl } from '../form-controls/base-control';

@Injectable()
export class FormControlService {
    constructor() { }

    toFormGroup(controls: Array<BaseControl<string>>) {
        const group: {} = {};
        if (controls) {
            controls.forEach(control => {
                group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                    : new FormControl(control.value || '');
            });
            return new FormGroup(group);

        }
        // creating form control object {key:value}  and putting it into a form group

    }
}
