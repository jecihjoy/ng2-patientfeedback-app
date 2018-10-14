import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  json: JSON;
  cached: string;


  constructor(private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.cached = JSON.parse(window.sessionStorage.getItem('program_uuid'));
    //const data = this.cached.split(/\s*,\s*/);
    this.getSuveys(this.cached);

  }

  getSuveys(uuids) {
    console.log(uuids);
    this.httpService.getSurveys(uuids).subscribe(
      (data: Response) => {
        this.json = data.json().survey;
      });

  }
  onSurveyDone(response) {
    const date = new Date().toISOString().slice(0, 10);
    const department = 'not defined';
    const program = 'not defined';
    const location = window.sessionStorage.getItem('location');
    console.log('locs', location);

    this.route.params.subscribe((params) => {
      const encounterInfo = {
        'surveyId': 1,
        'location': location,
        'date': date,
        'department': department,
        'clinicalProgramId': program
      };
      const toServer = {
        'encounterInfo': encounterInfo,
        'responseInfo': response
      };

      this.httpService.storeSurveys(toServer).subscribe();

    });

    this.router.navigate(['/success']);
  }

}
