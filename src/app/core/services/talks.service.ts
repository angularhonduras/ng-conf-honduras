import { ITalk } from '../models/talk.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TalksService {
  constructor(private afs: AngularFirestore) {}

  getTalks(): Observable<ITalk[]> {
    return this.afs
      .collection('talks', (ref) =>
        ref.where('active', '==', true).orderBy('order')
      )
      .valueChanges()
      .pipe(map((docs) => docs as ITalk[]));
  }
}
