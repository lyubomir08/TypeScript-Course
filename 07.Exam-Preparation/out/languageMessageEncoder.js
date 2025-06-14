"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageMessageEncoder = void 0;
const partialMessageEncoder_1 = require("./contracts/implemented/partialMessageEncoder");
class LanguageMessageEncoder extends partialMessageEncoder_1.PartialMessageEncoder {
    encodedCharactersCount = 0;
    decodedCharactersCount = 0;
    constructor(lang, cipher) {
        super(lang, cipher);
    }
    encodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const strippedMessage = this.stripForbiddenSymbols(secretMessage);
        const isCompatible = this.language.isCompatibleToCharset(strippedMessage);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        const encodedMessage = this.cipher.encipher(strippedMessage);
        this.encodedCharactersCount += encodedMessage.length;
        return encodedMessage;
    }
    decodeMessage(secretMessage) {
        if (typeof secretMessage !== 'string' || secretMessage.length === 0) {
            return "No message.";
        }
        const isCompatible = this.language.isCompatibleToCharset(secretMessage);
        if (!isCompatible) {
            return "Message not compatible.";
        }
        const decodedMessage = this.cipher.decipher(secretMessage);
        this.decodedCharactersCount += decodedMessage.length;
        return decodedMessage;
    }
    totalProcessedCharacters(type) {
        let totalChars = 0;
        if (type === 'Encoded') {
            totalChars = this.encodedCharactersCount;
        }
        else if (type === 'Decoded') {
            totalChars = this.decodedCharactersCount;
        }
        else if (type === 'Both') {
            totalChars = this.encodedCharactersCount + this.decodedCharactersCount;
        }
        return `Total processed characters count: ${totalChars}`;
    }
    stripForbiddenSymbols(message) {
        let forbiddenSymbols = partialMessageEncoder_1.PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
}
exports.LanguageMessageEncoder = LanguageMessageEncoder;
//# sourceMappingURL=languageMessageEncoder.js.map