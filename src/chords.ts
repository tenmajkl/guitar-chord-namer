const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const NOTE_COUNT = 12;

const CHORDS = {
    '0,4,7': 'major',
    '0,3,7': 'minor',
    '0,4,7,11': 'major7',
    '0,3,7,11': 'minor7',
    // and so on
}

export function getChord(notes: [int]): String
{
    console.log(notes);
    let unique_notes = [];
    for (let index in notes) {
        let note = notes[index] % NOTE_COUNT;
        if (unique_notes.indexOf(note) != -1) {
            continue;
        }
        unique_notes.push(note);
    }
    unique_notes.sort((a, b) => a > b);

    let root = unique_notes[0];
    let relation = unique_notes.map((item) => item - root).join(',');
    console.log(relation);
    if (CHORDS[relation] == undefined) {
        return '';
    }

    return NOTES[root] + ' ' + CHORDS[relation];
}
