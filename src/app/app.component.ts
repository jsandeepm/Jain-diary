import {Component} from '@angular/core';
import {faCoffee, faHospitalUser, faMusic, faTheaterMasks} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jain-diary';
  faCoffee = faCoffee;
  faHospitalUser = faHospitalUser;
  faMusic = faMusic;
  faTheaterMasks = faTheaterMasks;
}
