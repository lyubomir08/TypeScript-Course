"use strict";
function summarizePerson(id, firstName, lastName, age, middleName, hobbies, workInfo) {
    const fullName = middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`;
    const hobbiesStr = hobbies ? hobbies.join(', ') : '-';
    const workInfoStr = workInfo ? `${workInfo[0]} -> ${workInfo[1]}` : '-';
    return [
        id,
        fullName,
        age,
        hobbiesStr,
        workInfoStr
    ];
}
//# sourceMappingURL=05.js.map