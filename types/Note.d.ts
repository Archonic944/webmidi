/**
 * The `Note` class represents a single note to be played. The `Note` can be played on a single
 * channel by using [OutputChannel.playNote()]{@link OutputChannel#playNote} or on multiple
 * channels at once by using [Output.playNote()]{@link Output#playNote}.
 *
 * If the note's `duration` property is set, the note will be stopped at the end of the duration. If
 * no duration is set, it will play until it is explicitly stopped using
 * [OutputChannel.stopNote()]{@link OutputChannel#stopNote} or
 * [Output.stopNote()]{@link Output#stopNote}.
 *
 * @param value {string|number} The name or note number of the note to create. If a number is used,
 * it must be an integer between 0 and 127. If a string is used, it must be the note name followed
 * by the octave (`"C3"`, `"G#4"`, `"F-1"`, `"Db7"`, etc.). The octave range must be between -1 and
 * 9. The lowest note is C-1 (MIDI note number 0) and the highest note is G9 (MIDI note number 127).
 *
 * @param {Object} [options={}]
 *
 * @param {number} [options.duration=Infinity] The number of milliseconds before the note should be
 * explicitly stopped.
 *
 * @param {number} [options.attack=0.5] The note's attack velocity as a decimal number between 0 and
 * 1.
 *
 * @param {number} [options.release=0.5] The note's release velocity as a decimal number between 0
 * and 1.
 *
 * @param {number} [options.rawAttack=64] The note's attack velocity as an integer between 0 and
 * 127.
 *
 * @param {number} [options.rawRelease=64] The note's release velocity as an integer between 0 and
 * 127.
 *
 * @throws {Error} Invalid note name.
 * @throws {Error} Invalid note number.
 * @throws {RangeError} Invalid duration.
 * @throws {RangeError} Invalid attack value.
 * @throws {RangeError} Invalid rawAttack value.
 * @throws {RangeError} Invalid release value.
 * @throws {RangeError} Invalid rawRelease value.
 *
 * @since 3.0.0
 */
export class Note {
    constructor(value: any, options?: {});
    set number(arg: number);
    /**
     * The MIDI note number as an integer between 0 and 127
     * @type {number}
     */
    get number(): number;
    set name(arg: string);
    /**
     * The name of the note with the octave number (`"C3"`, `"G#4"`, `"F-1"`, `"Db7"`, etc.)
     *
     * @type {string}
     */
    get name(): string;
    set duration(arg: number);
    /**
     * The duration of the note as a positive decimal number representing the number of milliseconds
     * that the note should play for.
     *
     * @type {number}
     */
    get duration(): number;
    set attack(arg: number);
    /**
     * The attack velocity of the note as a decimal number between 0 and 1.
     * @type {number}
     */
    get attack(): number;
    set release(arg: number);
    /**
     * The release velocity of the note as a decimal number between 0 and 1.
     * @type {number}
     */
    get release(): number;
    set rawAttack(arg: number);
    /**
     * The raw attack velocity of the note as an integer between 0 and 127.
     * @type {number}
     */
    get rawAttack(): number;
    set rawRelease(arg: number);
    /**
     * The raw release velocity of the note as an integer between 0 and 127.
     * @type {number}
     */
    get rawRelease(): number;
    _number: number | false;
    _duration: number;
    _rawAttack: number;
    _rawRelease: number;
    /**
     * The octave of the note as an integer between -1 and 9.
     * @type {number}
     */
    get octave(): number;
}
