import { Injectable } from '@angular/core';

import { TextboxControl } from '../form-controls/textbox-control';
import { BaseControl } from '../form-controls/base-control';
import { DropdownControl } from '../form-controls/dropdown-control';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FormControlDataService {

    baseUrl = 'http://localhost:5000/api/';
    constructor(private http: HttpClient) {


    }

    // TODO: get from a remote source of question metadata
    async getQuestions() {

      return  await this.http.get<Array<BaseControl<string>>>(`${this.baseUrl}FormControl`).toPromise();

            //return of(data.sort((a, b) => a.order - b.order));
           // return data;


    }
}
