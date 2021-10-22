import {Component} from "@angular/core";

@Component({
  selector:'app-warning-alert',
  template:`
  <p>this is a warning</p>`,
  styles:[`
  p {
    background-color: red;
    border: 1px solid red;
    width: fit-content;
    padding: 20px;
  }`]
})
export class WarningAlertComponent {

}
