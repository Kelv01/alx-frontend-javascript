// Make sure this is in the Subjects namespace
namespace Subjects {
  // Use declaration merging to add the optional attribute
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  // Create the Java class, extending from Subject
  export class Java extends Subject {
    
    // Method to return requirements
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to check for an available Java teacher
    getAvailableTeacher(): string {
      // Check if the teacher has experience in Java
      if (this.teacher && this.teacher.experienceTeachingJava > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}