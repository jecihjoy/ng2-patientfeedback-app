import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import * as _ from 'lodash';

import "inputmask/dist/inputmask/phone-codes/phone.js";
import { sendRequest } from "selenium-webdriver/http";

widgets.icheck(Survey);
widgets.select2(Survey);

widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

@Component({
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div>`
})
export class SurveyComponent {
  public questions;
  // added by JM
  @Output() onCompleteClicked = new EventEmitter<{}>();

  @Input()
  set json(value: any) {
    const surveyModel = new Survey.Model(value);
    setTimeout(() => {
      if (value) {
        this.questions = value.pages;
      }
    },500);
      
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) return;

      //Add a button;
      var btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      var question = options.question;
      btn.onclick = function() {
        //showDescription(question);
        alert(options.question.popupdescription);
      };
      var header = options.htmlElement.querySelector("h5");
      var span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });

    surveyModel.onComplete.add((sender, options) => {
      let keys = Object.keys(sender.data);
      let response = [];
      if(keys.length > 0){
        keys.forEach((el) => {
          this.questions.forEach(data => {    
            let check = _.find(data.elements, { name: el  });
            if (check && check.name === el) {
              sender.data.title = check.title;
              response.push({
                name : check.name,
                title : check.title,
                answer : sender.data[el],
                programuuid: data.programuuid,
                departmentuuid: data.departmentuuid
              });
            }
          });
        });
        this.onCompleteClicked.emit(response);
      }
    });
  }


}
