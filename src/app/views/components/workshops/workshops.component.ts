import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  @Input() workshop: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
