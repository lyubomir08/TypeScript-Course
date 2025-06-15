import { Motel } from "./contracts/motel";
import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { SummerMonth, WinterMonth } from "./contracts/util";
import { Room } from "./contracts/room";
import type { ValidRoomNumbers } from "./types";
import { validRoomNumbers } from "./types";

export class MonthlyMotel<TMonth extends SummerMonth | WinterMonth> extends PartialMonthlyMotel implements Motel {
    private rooms: Map<ValidRoomNumbers, Room> = new Map();
    private bookings: Map<ValidRoomNumbers, Set<TMonth>> = new Map();
    private totalBudget: number = 0;

    getTotalBudget(): string {
        return `Motel: ${PartialMonthlyMotel.MotelName}\nTotal budget: $${this.totalBudget.toFixed(2)}`;
    }

    addRoom(room: unknown): string {
        if (typeof room !== 'object' || room === null ||
            !('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)
        ) {
            return "Value was not a Room.";
        }

        const r = room as Room;
        if (!validRoomNumbers.includes(r.roomNumber)) {
            return "Value was not a Room.";
        }

        if (this.rooms.has(r.roomNumber)) {
            return `Room '${r.roomNumber}' already exists.`;
        }

        this.rooms.set(r.roomNumber, r);
        return `Room '${r.roomNumber}' added.`;
    }

    bookRoom(roomNumber: ValidRoomNumbers, bookedMonth: TMonth): string {
        if (!this.rooms.has(roomNumber)) {
            return `Room '${roomNumber}' does not exist.`;
        }

        const bookedMonths = this.bookings.get(roomNumber) || new Set<TMonth>();
        if (bookedMonths.has(bookedMonth)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }

        bookedMonths.add(bookedMonth);
        this.bookings.set(roomNumber, bookedMonths);

        const room = this.rooms.get(roomNumber)!;
        this.totalBudget += room.totalPrice;

        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: ValidRoomNumbers, bookedMonth: TMonth): string {
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

        const room = this.rooms.get(roomNumber)!;
        this.totalBudget -= room.cancellationPrice;

        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;
    }
}
