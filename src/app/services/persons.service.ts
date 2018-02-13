import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import random from 'lodash-es/random';
import times from 'lodash-es/times';
import * as faker from 'faker';

import { Person } from '../models/person';

@Injectable()
export class PersonsService {

  // list$: Observable<List<Person>> = null;
  list$: Observable<Person[]> = null;

  constructor() { }

  // getList(): Observable<List<Person>> {
  getList(): Observable<Person[]> {
    if (this.list$ === null) {
      const nbItem = random(3, 6);
      const list: Person[] = [];

      times(nbItem, () => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        list.push(new Person({
          id: faker.random.alphaNumeric(10),
          firstName,
          lastName,
          email: faker.internet.email(firstName, lastName)
        }));
      });

      // this.list$ = Observable.of({ list });
      this.list$ = Observable.of(list);
    }

    return this.list$;
  }

}
