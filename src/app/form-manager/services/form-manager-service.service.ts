import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseControl } from 'src/app/form-controls/base-control';
import { DynamicForm } from '../form-manager-list/dynamic-form.model';

@Injectable({
  providedIn: 'root'
})
export class FormManagerService {
  apiUrl = 'http://localhost:5000/api/DynamicForm';

  constructor(private httpClient: HttpClient) { }

  public async getAll(): Promise<Array<DynamicForm>> {
    return await this.httpClient.get<Array<DynamicForm>>(this.apiUrl).toPromise();
  }

  public async getById(id: number): Promise<DynamicForm> {
    return await this.httpClient.get<DynamicForm>(`${this.apiUrl}/${id}`).toPromise();
  }

  public async Add(dynamicForm: DynamicForm) {
    return await this.httpClient.post(this.apiUrl, dynamicForm).toPromise();
  }
}
