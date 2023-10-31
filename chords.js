const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const NOTE_COUNT = 11;

const CHORDS = {
    '047': 'major',
    '037': 'minor',
    '0479': 'major7',
    '0379': 'minor7',
    // and so on
}

let selected_notes = {};

function getChord(notes)
{
    let unique_notes = [];
    for (let index in notes) {
        let note = notes[index] % NOTE_COUNT;
        if (unique_notes.indexOf(note) != -1) {
            continue;
        }
        unique_notes.push(note);
    }
    unique_notes.sort();
    let root = unique_notes[0];
    let relation = unique_notes.map((item) => item - root).join('');

    return NOTES[root] + ' ' + CHORDS[relation];
}

function addNote(root, note)
{
    selected_notes[root] = root + note;
    document.getElementById('output').innerText = getChord(selected_notes.valuesg));
}
