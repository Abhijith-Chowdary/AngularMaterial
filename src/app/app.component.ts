import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LifeCycleMethods';
  notifications = 7;
  notifications1 = 0;
  showSpinner = false;
  showBar = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000)
  }

  loadBar(){
    this.showBar = true;
    setTimeout(() => {
      this.showBar = false
    }, 5000)
  }
}