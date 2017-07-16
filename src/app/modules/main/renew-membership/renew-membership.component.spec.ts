import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewMembershipComponent } from './renew-membership.component';

describe('RenewMembershipComponent', () => {
  let component: RenewMembershipComponent;
  let fixture: ComponentFixture<RenewMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
