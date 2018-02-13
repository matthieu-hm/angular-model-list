import { Component, OnInit, Input } from '@angular/core';
import * as faker from 'faker';

import { Person } from '../../models/person';

@Component({
  selector: 'app-person-editor',
  templateUrl: './person-editor.component.html',
  styleUrls: ['./person-editor.component.scss']
})
export class PersonEditorComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

  changePersonName(person: Person): void {
    person.firstName = faker.name.firstName();
    person.lastName = faker.name.lastName();
  }
}
