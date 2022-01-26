import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  appName = 'Data binding one way.';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 70;
  n2 = 20;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Chaen";

  //style binding
  appliedCSSClass = "red";
  notappliedCSS = true;
  myColor = "green";

  //two way data binding
  showData($event:any){
    console.log("Button is clicked.")
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }
}