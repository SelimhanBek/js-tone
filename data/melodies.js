// generates an array where indices correspond to midi notes
var everyNote = "C,C#,D,D#,E,F,F#,G,G#,A,A#,B,"
  .repeat(20)
  .split(",")
  .map(function (x, i) {
    return x + "" + Math.floor(i / 12);
  });

//returns the midi pitch value for the given note.
//returns -1 if not found
function toMidi(note) {
  return everyNote.indexOf(note);
}

//If you want to try out other melodies copy and paste any of these in https://github.....
var MELODY1 = {
  notes: [
    { pitch: toMidi("A3"), quantizedStartStep: 0, quantizedEndStep: 4 },
    { pitch: toMidi("D4"), quantizedStartStep: 4, quantizedEndStep: 6 },
    { pitch: toMidi("E4"), quantizedStartStep: 6, quantizedEndStep: 8 },
    { pitch: toMidi("F4"), quantizedStartStep: 8, quantizedEndStep: 10 },
    { pitch: toMidi("D4"), quantizedStartStep: 10, quantizedEndStep: 12 },
    { pitch: toMidi("E4"), quantizedStartStep: 12, quantizedEndStep: 16 },
    { pitch: toMidi("C4"), quantizedStartStep: 16, quantizedEndStep: 20 },
    { pitch: toMidi("D4"), quantizedStartStep: 20, quantizedEndStep: 26 },
    { pitch: toMidi("A3"), quantizedStartStep: 26, quantizedEndStep: 28 },
    { pitch: toMidi("A3"), quantizedStartStep: 28, quantizedEndStep: 32 },
  ],
};

//you can also just put in the midi pitch note if you know it
var MELODY2 = {
  notes: [
    { pitch: 50, quantizedStartStep: 0, quantizedEndStep: 1 },
    { pitch: 53, quantizedStartStep: 1, quantizedEndStep: 2 },
    { pitch: 58, quantizedStartStep: 2, quantizedEndStep: 3 },
    { pitch: 58, quantizedStartStep: 3, quantizedEndStep: 4 },
    { pitch: 58, quantizedStartStep: 4, quantizedEndStep: 5 },
    { pitch: 53, quantizedStartStep: 5, quantizedEndStep: 6 },
    { pitch: 53, quantizedStartStep: 6, quantizedEndStep: 7 },
    { pitch: 53, quantizedStartStep: 7, quantizedEndStep: 8 },
    { pitch: 52, quantizedStartStep: 8, quantizedEndStep: 9 },
    { pitch: 55, quantizedStartStep: 9, quantizedEndStep: 10 },
    { pitch: 60, quantizedStartStep: 10, quantizedEndStep: 11 },
    { pitch: 60, quantizedStartStep: 11, quantizedEndStep: 12 },
    { pitch: 60, quantizedStartStep: 12, quantizedEndStep: 13 },
    { pitch: 60, quantizedStartStep: 13, quantizedEndStep: 14 },
    { pitch: 60, quantizedStartStep: 14, quantizedEndStep: 15 },
    { pitch: 52, quantizedStartStep: 15, quantizedEndStep: 16 },
    { pitch: 57, quantizedStartStep: 16, quantizedEndStep: 17 },
    { pitch: 57, quantizedStartStep: 17, quantizedEndStep: 18 },
    { pitch: 57, quantizedStartStep: 18, quantizedEndStep: 19 },
    { pitch: 65, quantizedStartStep: 19, quantizedEndStep: 20 },
    { pitch: 65, quantizedStartStep: 20, quantizedEndStep: 21 },
    { pitch: 65, quantizedStartStep: 21, quantizedEndStep: 22 },
    { pitch: 57, quantizedStartStep: 22, quantizedEndStep: 23 },
    { pitch: 57, quantizedStartStep: 23, quantizedEndStep: 24 },
    { pitch: 57, quantizedStartStep: 24, quantizedEndStep: 25 },
    { pitch: 57, quantizedStartStep: 25, quantizedEndStep: 26 },
    { pitch: 62, quantizedStartStep: 26, quantizedEndStep: 27 },
    { pitch: 62, quantizedStartStep: 27, quantizedEndStep: 28 },
    { pitch: 65, quantizedStartStep: 28, quantizedEndStep: 29 },
    { pitch: 65, quantizedStartStep: 29, quantizedEndStep: 30 },
    { pitch: 69, quantizedStartStep: 30, quantizedEndStep: 31 },
    { pitch: 69, quantizedStartStep: 31, quantizedEndStep: 32 },
  ],
};

module.exports = {
  melody1: MELODY1,
  melody2: MELODY2,
};
