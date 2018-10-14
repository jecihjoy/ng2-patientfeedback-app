import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const BASEURL = 'https://ngx.ampath.or.ke/patient-feedbackserver/';
// const BASEURL = 'http://localhost:5100/';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    getQuestions(programs) {
        return this.http.post(BASEURL + 'getQuestions', programs, {
          headers: this.getCredentials()
        });
      }
      getQuizAns(programsQa) {
        return this.http.post(BASEURL + 'getAll', programsQa, {
          headers: this.getCredentials()
        });
      }

    getCredentials() {
        const headers = new Headers();
        const credentials = sessionStorage.getItem('auth.credentials');
        headers.append('Authorization', 'Basic ' + credentials);
        return headers;
    }
    getSurveyPrograms() {
        return this.http.get(BASEURL + 'getSurveyPrograms', {
            headers: this.getCredentials()
          });
    }
    programsSchema() {
        return this.http.get(BASEURL + 'programsJsonSchema', {
            headers: this.getCredentials()
          });
    }
    getPrograms() {
        return this.http.get(BASEURL + 'getDepts', {
            headers: this.getCredentials()
          });
    }
    getSurveys(programs) {
        return this.http.post(BASEURL + 'getSurveys', programs, {
            headers: this.getCredentials()
          });
    }
    getLocations() {
        return this.http.get(BASEURL + 'getLocations', {
            headers: this.getCredentials()
          });
    }
    storeSurveys(response) {
        return this.http.post(BASEURL + 'storeSurveys', response, {
            headers: this.getCredentials()
          });
    }
    login(response) {
        return this.http.post(BASEURL + 'login', response, {
            headers: this.getCredentials()
          });
    }
    logout() {
        return this.http.get(BASEURL + 'logout', {
            headers: this.getCredentials()
          });
    }

}
