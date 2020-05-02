import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormManagerListComponent } from './form-manager-list/form-manager-list.component';



@NgModule({
  declarations: [FormManagerListComponent],
  imports: [
    CommonModule
  ],
  exports: [FormManagerListComponent]
})
export class FormManagerModule { }
