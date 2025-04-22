import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsByLocationComponent } from './earnings-by-location.component';

describe('EarningsByLocationComponent', () => {
  let component: EarningsByLocationComponent;
  let fixture: ComponentFixture<EarningsByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EarningsByLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningsByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
