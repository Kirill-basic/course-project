import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  // @ts-ignore
  @Input() number: number;

  constructor() { }

  ngOnInit(): void {
  }

}
