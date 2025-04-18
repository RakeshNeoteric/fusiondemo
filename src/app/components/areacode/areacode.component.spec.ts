import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreacodeComponent } from './areacode.component';

describe('AreacodeComponent', () => {
  let component: AreacodeComponent;
  let fixture: ComponentFixture<AreacodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreacodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreacodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
