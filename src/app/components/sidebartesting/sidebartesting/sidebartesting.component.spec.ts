import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebartestingComponent } from './sidebartesting.component';

describe('SidebartestingComponent', () => {
  let component: SidebartestingComponent;
  let fixture: ComponentFixture<SidebartestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebartestingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebartestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
