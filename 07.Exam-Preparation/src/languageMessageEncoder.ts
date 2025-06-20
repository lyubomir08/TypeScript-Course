import { Cipher } from "./contracts/cipher";
import { PartialMessageEncoder } from "./contracts/implemented/partialMessageEncoder";
import { Language } from "./contracts/language";
import { MessageEncoder } from "./contracts/messageEncoder";
import { ProcessedCharsType } from "./types";

export class LanguageMessageEncoder<TLang extends Language, TCipher extends Cipher<TLang>> extends PartialMessageEncoder implements MessageEncoder {
    private encodedCharactersCount = 0;
    private decodedCharactersCount = 0;

    constructor(lang: TLang, cipher: TCipher) {
        super(lang, cipher);
    }

    public encodeMessage(secretMessage: unknown) {
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

    public decodeMessage(secretMessage: unknown): string {
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

    public totalProcessedCharacters(type: ProcessedCharsType): string {
        let totalChars = 0;

        if (type === 'Encoded') {
            totalChars = this.encodedCharactersCount;
        } else if (type === 'Decoded') {
            totalChars = this.decodedCharactersCount;
        } else if (type === 'Both') {
            totalChars = this.encodedCharactersCount + this.decodedCharactersCount;
        }

        return `Total processed characters count: ${totalChars}`;
    }

    protected stripForbiddenSymbols(message: string): string {
        let forbiddenSymbols = PartialMessageEncoder.forbiddenSymbols;
        forbiddenSymbols.forEach(x => message = message.replaceAll(x, ''));
        return message;
    }
}
