"use strict";
// function assignTask(
//     user: { username: string, signupDate: Date },
//     task: {
//         status: 'Logged' | 'Started' | 'InProgress' | 'Done',
//         title: string,
//         daysRequired: number,
//         assignedTo: {
//             username: string,
//             signupDate: Date
//         } | undefined,
//         changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void
//     }
// ) {
//     if (task.assignedTo == undefined) {
//         task.assignedTo = user;
//         console.log(`User ${user.username} assigned to task '${task.title}'`);
//     }
// }
function assignTask(user, task) {
}
let user1 = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};
let task1 = {
    status: 'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus) {
        this.status = newStatus;
    }
};
let task2 = {
    status: 'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined, changeStatus(newStatus) { this.status = newStatus; }, moreProps: 300, evenMore: 'wow'
};
assignTask(user1, task1);
assignTask(user1, task2);
//# sourceMappingURL=08.js.map