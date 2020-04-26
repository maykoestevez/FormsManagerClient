import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormControlDataService } from 'src/app/services/form-controls-data.service';
import { BaseControl } from 'src/app/form-controls/base-control';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  questions: Array<BaseControl<string>>;

  constructor(private service: FormControlDataService) {
    // const observable = service.getQuestions();

    // service.getQuestions().then((data) => {
    //   this.questions$ = of(data);

    // });
    // this.questions =  this.service.getQuestions();
    // console.log(this.questions);
  }
  async ngOnInit() {
    const data = await this.service.getQuestions();
    this.questions = data;
    console.log(this.questions);
  }
}
