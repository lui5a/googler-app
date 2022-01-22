import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePathComponent } from './choose-path.component';

describe('ChoosePathComponent', () => {
  let component: ChoosePathComponent;
  let fixture: ComponentFixture<ChoosePathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
