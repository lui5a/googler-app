import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  dataSource = ELEMENT_DATA;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dataSource = [];
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
    this.dataSource = [];
    this.dataSource.push(this.newNote);
    console.log(this.dataSource)
  }
}
