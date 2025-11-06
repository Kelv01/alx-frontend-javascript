// Make sure this is in the Subjects namespace
namespace Subjects {
  // Use declaration merging to add the optional attribute
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  // Create the React class, extending from Subject
  export class React extends Subject {
    
    // Method to return requirements
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to check for an available React teacher
    getAvailableTeacher(): string {
      // Check if the teacher has experience in React
      if (this.teacher && this.teacher.experienceTeachingReact > 0) {
        return `Available Teacher: ${this.teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}