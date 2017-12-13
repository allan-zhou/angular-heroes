import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userlist-trackby',
  templateUrl: './userlist-trackby.component.html',
  styleUrls: ['./userlist-trackby.component.css']
})
export class UserlistTrackbyComponent implements OnInit, OnChanges {
  @Input() users = [];
  @Input() tempString: string;
  changeLog: Array<string> = [];

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
    console.log(this.changeLog);
  }

  trackByFn(index: number, item) {

  }
}
