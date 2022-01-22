import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteLibraryComponent } from './note-library.component';

describe('NoteLibraryComponent', () => {
  let component: NoteLibraryComponent;
  let fixture: ComponentFixture<NoteLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
