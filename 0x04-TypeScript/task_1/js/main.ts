interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
  [key: string]: any;
}

const teacher1: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  yearsOfExperience: 3,
  location: "London",
  contract: false,
};

console.log(teacher1);

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  contract: false,
  numberOfReports: 17,
};
console.log(director1);

// interface printTeacherFunction {
//   ({firstName, lastName}: Teacher): string;
// }

// const printTeacher: printTeacherFunction = ({firstName, lastName}) => {
//   return `${firstName.charAt(0)}. ${lastName}`;
// }

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}): string {
  return `${firstName}. ${lastName}`;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currently working"
  }
  displayName(): string {
    return this.firstName
  }
}
