import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  programs = [];

  constructor(private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {  }

  onStart() {
    this.router.navigate(['/survey']);
  }

  onLogout(){
    this.router.navigate(['/login']);
  }

  onCancel() {
    const loc_id = window.sessionStorage.getItem('location');
    this.router.navigate(['location/' + loc_id + '/cancel']);
  }

}
