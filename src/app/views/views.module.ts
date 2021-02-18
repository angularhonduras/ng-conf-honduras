import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { SpeakersComponent } from './pages/speakers/speakers.component';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { TeamComponent } from './pages/team/team.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';
import { SpeakerCardComponent } from './components/speaker-card/speaker-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PlatinumSponsorsComponent } from './components/platinum-sponsors/platinum-sponsors.component';
import { GoldSponsorsComponent } from './components/gold-sponsors/gold-sponsors.component';
import { SilverSponsorsComponent } from './components/silver-sponsors/silver-sponsors.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BronzeSponsorsComponent } from './components/bronze-sponsors/bronze-sponsors.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { TicketMostPopularCardComponent } from './components/ticket-most-popular-card/ticket-most-popular-card.component';
import { CommunityPartnersComponent } from './components/community-partners/community-partners.component';

@NgModule({
  declarations: [
    SpeakersComponent,
    SponsorsComponent,
    HomeComponent,
    HeroHeaderComponent,
    TeamComponent,
    TeamMemberComponent,
    SpeakerCardComponent,
    GalleryComponent,
    AboutComponent,
    PlatinumSponsorsComponent,
    GoldSponsorsComponent,
    SilverSponsorsComponent,
    PricingComponent,
    BronzeSponsorsComponent,
    TicketsComponent,
    TicketCardComponent,
    TicketMostPopularCardComponent,
    CommunityPartnersComponent,
  ],
  imports: [CommonModule, ViewsRoutingModule, FontAwesomeModule],
})
export class ViewsModule {}
