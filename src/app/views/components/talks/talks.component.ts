import { Component, Input, OnInit } from '@angular/core';
import { ITalk } from 'src/app/core/models/talk.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss'],
})
export class TalksComponent implements OnInit {
  @Input() talk: ITalk[];
  active: number = 1;
  talks: any;
  test: any;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {}

  tabChange(value: number) {
    this.active = value;
  }
  
}
