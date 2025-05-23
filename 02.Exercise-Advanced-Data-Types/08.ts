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

type TaskStatus = 'Logged' | 'Started' | 'InProgress' | 'Done';
type User1 = { username: string, signupDate: Date };
type Task = {
    status: TaskStatus,
    title: string,
    daysRequired: number,
    assignedTo: User1 | undefined,
    changeStatus(newStatus: TaskStatus): void
};

function assignTask(user: User1, task: Task) {

}


let user1 = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
};
let task1 = {
    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Logged',
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') {
        this.status = newStatus;
    }
};
let task2 = {
    status: <'Logged' | 'Started' | 'InProgress' | 'Done'>'Done',
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined, changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done') { this.status = newStatus; }, moreProps: 300, evenMore: 'wow'
};

assignTask(user1, task1);
assignTask(user1, task2);