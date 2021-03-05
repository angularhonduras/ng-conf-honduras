import { Component, Input, OnInit } from '@angular/core';
import { IWorkshop } from 'src/app/core/models/workshop.interface';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent implements OnInit {
  @Input() workshop: IWorkshop[];

  constructor() {}

  ngOnInit(): void {}
}
