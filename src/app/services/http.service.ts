import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

const BASEURL = 'https://ngx.ampath.or.ke/patient-feedbackserver/';

@Injectable()
export class HttpService {
    constructor(private http: Http) {}

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
