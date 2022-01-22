import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, ReplaySubject } from 'rxjs';

export interface allNotes {
  title: string,
  description: string
}


const ELEMENT_DATA: allNotes[] = [
  {title: '',
  description: ''}
]
@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss']
})

export class NotePadComponent implements OnInit {
  noteForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  newNote = {
    title: '',
    description: ''
  };

  displayedColumns: string[] = ['title', 'description'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);
  clickedRows = new Set<allNotes>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataToDisplay =[];
    this.setValues();
  }

  setValues() {
    this.noteForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  saveNote(){
    this.newNote = {
      title: this.noteForm.get('title')?.value,
      description: this.noteForm.get('title')?.value,
    }
    this.noteForm.reset()
    this.dataToDisplay.push(this.newNote);
    this.dataSource.setData(this.dataToDisplay);
    console.log(this.dataToDisplay)
  }
}
class ExampleDataSource extends DataSource<allNotes> {
  private _dataStream = new ReplaySubject<allNotes[]>();

  constructor(initialData: allNotes[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<allNotes[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: allNotes[]) {
    this._dataStream.next(data);
  }
}
