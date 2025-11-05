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

console.log(teacher1)