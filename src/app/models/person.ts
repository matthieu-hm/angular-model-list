export class Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(profile: Person.Profile) {
    Object.assign(this, profile);
  }
}

export module Person {
  export interface Profile {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }
}
