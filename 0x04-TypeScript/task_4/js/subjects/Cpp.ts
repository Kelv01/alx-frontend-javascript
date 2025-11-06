// Make sure this is in the Subjects namespace
namespace Subjects {
  // Use declaration merging to add the optional attribute
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // Create the Cpp class, extending from Subject
  export class Cpp extends Subject {
    
    // Method to return requirements
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to check for an available Cpp teacher
    getAvailableTeacher(): string {
      // Check if the teacher has experience in C
      if (this.teacher && this.teacher.experienceTeachingC > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}