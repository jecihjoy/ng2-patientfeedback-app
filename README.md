# Ampath patient feedback app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0 and modified to use SurveyJS and Editor libraries.

Usage

- Set up patientfeedback back end:
	- follow instructions on amrs-patientfeedback-sever repository to build the backemd
- Set up ng2-patientfeedback-app:
    - clone this repository
    - $ npm install
    - $ ng serve --open


- The survey is split up into hard-coded questions, and a survey from the SurveyJS module
- SurveyJS module: 
    - [https://www.npmjs.com/package/survey-angular](https://www.npmjs.com/package/survey-angular), cloned from [https://github.com/surveyjs/surveyjs_angular_cli](https://github.com/surveyjs/surveyjs_angular_cli)
    - To edit the SurveyJS survey being used: edit back-end/surveys.json
    - The “survey” field contains the information about the survey that is used by SurveyJS.  The other fields (“surveyId”) are used to have identifying information about such survey.  Additional fields, such as “location” (to determine which locations such survey could be administered) could be added here as well.
    - To change the actual survey, build a new survey at: https://surveyjs.io/survey/Builder/
    - After building the survey, go to the JSON Editor tag.  
    - Copy the JSON, and in your own JavaScript console, store it as “const json_survey”.  
        - Run “JSON.stringify(json_survey, null, ‘\t’);”
        - Store the output in the “survey” field of surveys.json
- To change url of amrs-patientfeedback-sever: change BASEURL in ng2-patientfeedback-app/http.service.ts

Problems to resolve:

- Location field in surveyEncounter table in the database is currently of type text
    - If continue to store location uuid rather than location name, change the type to be VARCHAR with length 36
- clinicalProgramId in surveyEncounter table not currently being used
    - This is because the survey is not currently collecting the program name
- surveyId in surveyEncounter table is not currently being dynamically updated.
    - This is because there is currently only one survey option.  The surveyId is stored in the “surveyId” field of the back-end/surveys.json file.  To set it dynamically and store it in the database, change the surveyId variable in front-end/src/app/clinic-type/clinic-type.component.ts
- Improve database storage
    - Error management
    - Should only be able to store information about surveys that exist
- Authorization
    - To change to authorizing against OpenMRS: follow instructions in validate function in back-end/index.js
- Add 404 error page
- Sanitize mySQL inputs (if eventually do free text)


SurveyJS Attribution:

- Creator: SurveyJS (https://surveyjs.io/)
- Material cloned from: https://github.com/surveyjs/surveyjs_angular_cli
- License:
    - This work is licensed under the Creative Commons Attribution-NonCommercial 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
