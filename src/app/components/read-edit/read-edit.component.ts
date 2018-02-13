import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';

import { PersonsService } from '../../services/persons.service';
import { Person } from '../../models/person';

@Component({
  selector: 'app-read-edit',
  templateUrl: './read-edit.component.html',
  styleUrls: ['./read-edit.component.scss']
})
export class ReadEditComponent implements OnInit {

  personList: Person[];

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getList().subscribe(personList => {
      console.log('subscribe read-edit');
      this.personList = personList;
    });
  }

  addPerson(): void {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();

    const person = new Person({
      id: faker.random.alphaNumeric(10),
      firstName,
      lastName,
      email: faker.internet.email(firstName, lastName)
    });

    this.personList.push(person);
  }

  removePerson(personToRemove: Person): void {
    // this.personList.list = this.personList.list.filter(person => person.id !== personToRemove.id);
    const index = this.personList.indexOf(personToRemove);
    this.personList.splice(index, 1);
  }

}
