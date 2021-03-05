import { Observable, combineLatest } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { groupBy } from 'lodash-es';
import { map } from 'rxjs/operators';

// Services
import { CommunityPartnersService } from 'src/app/core/services/community-partners.service';
import { TalksService } from 'src/app/core/services/talks.service';
import { TicketsService } from './../../../core/services/tickets.service';
import { SponsorsService } from 'src/app/core/services/sponsors.service';
import { WorkshopsService } from 'src/app/core/services/workshops.service';

// Models 
import { ISponsor } from './../../../core/models/sponsor.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public sponsors$: Observable<_.Dictionary<ISponsor[]>>;
  public data$: Observable<any>;

  constructor(
    private communityPartnersService: CommunityPartnersService,
    private talkService: TalksService,
    private ticketsService: TicketsService,
    private sponsorsService: SponsorsService,
    private workshopService: WorkshopsService
  ) {
    this.sponsors$ = this.sponsorsService
      .getSponsors()
      .pipe(map((data) => groupBy(data, 'sponsorshipPlan')));
  }

  ngOnInit(): void {
    this.data$ = combineLatest([
      this.sponsors$,
      this.ticketsService.getTickets(),
      this.communityPartnersService.getCommunityPartners(),
      this.workshopService.getWorkshops(),
      this.talkService.getTalks(),
    ]);
  }
}
