import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseControl } from '../../form-controls/base-control';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
  @Input() question: BaseControl<string>;
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
