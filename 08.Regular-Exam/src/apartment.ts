import { Room } from "./contracts/room";
import { ValidRoomNumbers } from "./types";

export class Apartment implements Room {
    readonly roomNumber: ValidRoomNumbers;
    readonly totalPrice: number;
    readonly cancellationPrice: number;

    constructor(price: number, roomNumber: ValidRoomNumbers, numberOfGuests: number) {
        this.roomNumber = roomNumber;
        this.totalPrice = numberOfGuests * price;
        this.cancellationPrice = this.totalPrice * 0.8;
    }
}