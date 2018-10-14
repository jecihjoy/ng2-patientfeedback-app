import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clinic-type',
  templateUrl: './clinic-type.component.html',
  styleUrls: ['./clinic-type.component.css']
})
export class ClinicTypeComponent implements OnInit {
  data: any[] = [];
  departments = [];
  programs = [];
  deptValue = new FormControl('');
  checkedDepts = [];
  deptPrograms = [];
  myPrograms = [];

  ngForm: FormGroup = this.fbuilder.group({
    deptValue: this.deptValue,
  })

  constructor(private router: Router,
    private httpService: HttpService,
    private fbuilder: FormBuilder) { }

  onSave() {
    this.router.navigate(['/welcome']);
  }

  onLogout(){
    this.router.navigate(['/login']);
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  getValues(option, event) {
    if (event.target.checked) {
      this.myPrograms.push(option.proguuid);
    }  else if(!event.target.checked){
      this.myPrograms.forEach((prog)=>{
       if(prog == option.proguuid){
        this.myPrograms.splice( this.myPrograms.indexOf(option.uuid), 1 );
       }
      })
    }
    console.log(this.myPrograms);
    window.sessionStorage.setItem('program_uuid', JSON.stringify(this.myPrograms));
  }
  onCheckboxChange(option, event) {
    if (event.target.checked) {
      this.checkedDepts = [];
      this.checkedDepts.push(option.uuid);
      this.programs.forEach((prog) => {
        if (prog.deptuuid == this.checkedDepts) {
          this.deptPrograms.push(prog);
        }
      }) 
    } else if(!event.target.checked){
      this.checkedDepts.splice( this.checkedDepts.indexOf(option.uuid), 1 );
      this.deptPrograms.forEach((value)=>{
        if(value.deptuuid == option.uuid){
        this.deptPrograms.splice(this.deptPrograms.indexOf(value), 1);
        }
      })
    }
  }
  ngOnInit() {
    this.httpService.getPrograms().subscribe((data: Response) => {
      this.data = data.json().departments;
      this.data.forEach((el) => {
        this.departments.push({ name: el.name, uuid: el.uuid, checked: true });
      })
    })
    this.httpService.getSurveyPrograms().subscribe(
      (response: Response) => {
        this.programs = response.json();
        window.sessionStorage.setItem('programs', JSON.stringify(this.programs));
      });
    this.getProgramsSchema();
  }

  getProgramsSchema() {
    this.httpService.programsSchema().subscribe((data) => {
    })
  }

}
