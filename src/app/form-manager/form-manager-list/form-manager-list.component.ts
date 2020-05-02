import { Component, OnInit } from '@angular/core';
import { FormManagerService } from '../services/form-manager-service.service';
import { DynamicForm, DropDownOptions } from './dynamic-form.model';

@Component({
  selector: 'app-form-manager-list',
  templateUrl: './form-manager-list.component.html',
  styleUrls: ['./form-manager-list.component.scss']
})
export class FormManagerListComponent implements OnInit {

  formsList: Array<DynamicForm>;
  formControls: DynamicForm;
  constructor(private formService: FormManagerService) { }

  async ngOnInit() {
    await this.getAllForms();
  }

  private async getAllForms() {
    try {
      this.formsList = await this.formService.getAll();
    } catch (error) {
      alert(error.message);
    }
  }

  public async GetFormById(id: number) {
    try {
      this.formControls = await this.formService.getById(id);
    } catch (error) {
      alert(error.message);
    }
  }
  public getOptionsString(options: DropDownOptions): string {
    return JSON.stringify(options);
  }
}
