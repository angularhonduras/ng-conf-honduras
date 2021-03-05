import { Component, Input, OnInit } from '@angular/core';
import { ITalk } from 'src/app/core/models/talk.interface';
import { IWorkshop } from '../../../core/models/workshop.interface';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  @Input() workshop: IWorkshop[];
  @Input() talk: ITalk[];

  constructor() {}
  ngOnInit(): void {
  }
}
