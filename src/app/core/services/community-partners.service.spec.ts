import { TestBed } from '@angular/core/testing';

import { CommunityPartnersService } from './community-partners.service';

describe('CommunityPartnersService', () => {
  let service: CommunityPartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityPartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
