import { Component, OnInit } from '@angular/core';

import { Person } from '../../models/person';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-read-only',
  templateUrl: './read-only.component.html',
  styleUrls: ['./read-only.component.scss']
})
export class ReadOnlyComponent implements OnInit {

  // personList: List<Person>;
  personList: Person[];

  constructor(public personsService: PersonsService) { }

  ngOnInit() {
    this.personsService.getList().subscribe(personList => {
      console.log('subscribe read-only');
      this.personList = personList;
    });
  }

}
