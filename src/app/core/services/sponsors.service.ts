import { AngularFirestore } from '@angular/fire/firestore';
import { ISponsor } from './../models/sponsor.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor(private afs: AngularFirestore) { }

  getSponsors(): Observable<ISponsor[]>{
    return this.afs.collection('sponsors', ref => ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as ISponsor[])
    );
  }
}
