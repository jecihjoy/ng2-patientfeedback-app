import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  locationArray: {'uuid': string, 'display': string}[];
  constructor(private router: Router,
              private httpService: HttpService,
              private route: ActivatedRoute) {}

  onSave(location) {
    if (location !== 'Select Location') {
      let loc_name;
      for (const loc of this.locationArray) {
        if (loc.display === location) {
          loc_name = loc.display;
        }
      }
      window.sessionStorage.setItem('location', loc_name);
      this.router.navigate(['/clinic'], { relativeTo: this.route });
    }
  }
  ngOnInit() {
    this.httpService.getLocations().subscribe(
      (response: Response) => {
        this.locationArray = response.json();
      });
  }
}
