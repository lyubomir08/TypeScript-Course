"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`;
    }
    static createSampleTasks() {
        return [
            new Task('Do Calc HW', 'Complete all 200 problems', 'Lyubo'),
            new Task('Clean room', 'sad', 'Pesho')
        ];
    }
}
const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());
const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12.js.map