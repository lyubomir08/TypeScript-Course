"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
class Apartment {
    roomNumber;
    totalPrice;
    cancellationPrice;
    constructor(price, roomNumber, numberOfGuests) {
        this.roomNumber = roomNumber;
        this.totalPrice = numberOfGuests * price;
        this.cancellationPrice = this.totalPrice * 0.8;
    }
}
exports.Apartment = Apartment;
//# sourceMappingURL=apartment.js.map