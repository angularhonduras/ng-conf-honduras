import { Component, Input, OnInit } from '@angular/core';
import { ICommunityPartner } from 'src/app/core/models/community-partner.model';

@Component({
  selector: 'app-community-partners',
  templateUrl: './community-partners.component.html',
  styleUrls: ['./community-partners.component.scss']
})
export class CommunityPartnersComponent implements OnInit {
  @Input() communityPartners: ICommunityPartner[];

  constructor() { }

  ngOnInit(): void {
  }

}
