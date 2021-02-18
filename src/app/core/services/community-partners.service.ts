import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICommunityPartner } from '../models/community-partner.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityPartnersService {

  constructor(private afs: AngularFirestore) { }

  getCommunityPartners(): Observable<ICommunityPartner[]>{
    return this.afs.collection('community-partners', ref =>   ref.where('active', '==', true).orderBy('order'))
    .valueChanges().pipe(
      map(docs => docs as ICommunityPartner[])
    );
  }
}
