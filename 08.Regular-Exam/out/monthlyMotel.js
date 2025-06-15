"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
const types_1 = require("./types");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    rooms = new Map();
    bookings = new Map();
    totalBudget = 0;
    getTotalBudget() {
        return `Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName}\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }
    addRoom(room) {
        if (typeof room !== 'object' || room === null ||
            !('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)) {
            return "Value was not a Room.";
        }
        const r = room;
        if (!types_1.validRoomNumbers.includes(r.roomNumber)) {
            return "Value was not a Room.";
        }
        if (this.rooms.has(r.roomNumber)) {
            return `Room '${r.roomNumber}' already exists.`;
        }
        this.rooms.set(r.roomNumber, r);
        return `Room '${r.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookedMonths = this.bookings.get(roomNumber) || new Set();
        if (bookedMonths.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }
        bookedMonths.add(bookedMonth);
        this.bookings.set(roomNumber, bookedMonths);
        const room = this.rooms.get(roomNumber);
        this.totalBudget += room.totalPrice;
        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }
    cancelBooking(roomNumber, bookedMonth) {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const bookedMonths = this.bookings.get(roomNumber);
        if (!bookedMonths || !bookedMonths.has(bookedMonth)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }
        bookedMonths.delete(bookedMonth);
        if (bookedMonths.size === 0) {
            this.bookings.delete(roomNumber);
        }
        const room = this.rooms.get(roomNumber);
        this.totalBudget -= room.cancellationPrice;
        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
}
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map