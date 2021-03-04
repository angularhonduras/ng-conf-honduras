import { IWorkshop } from '../models/workshop.interface';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WorkshopsService {
  constructor(private afs: AngularFirestore) {}

  getWorkshops(): Observable<IWorkshop[]> {
    return this.afs.collection('workshops', ref =>   ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as IWorkshop[])
    );
  }
}
