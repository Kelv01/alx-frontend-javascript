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

interface Directors extends Teacher {
  numberOfReports: number,
  
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  contract: false,
  numberOfReports: 17,
};
console.log(director1);