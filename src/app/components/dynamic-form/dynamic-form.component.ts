import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseControl } from '../../form-controls/base-control';
import { FormControlService } from '../../services/form-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input()
  set questions(data) {
    if (data) {
      this.form = this.qcs.toFormGroup(data);
    }

  }
  _questions: Array<BaseControl<string>> = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: FormControlService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
