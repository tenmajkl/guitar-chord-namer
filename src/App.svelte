<script lang="ts">
import { getChord } from "/src/chords"
let selected_notes = {
    16: 16,
    11: 11,
    7: 7, 
    2: 2,
    9: 9,
    4: 4,
};

console.log(selected_notes)

let chord: String = '';
    
function addNote(root: int, note: int)
{
    if (selected_notes[root] === root + note) {
        note = 0;
    }
    selected_notes[root] = root + note;
    chord = getChord(Object.values(selected_notes).filter((item) => item !== undefined));
}

function disable(root: int)
{
    if (selected_notes[root] === undefined) {
        selected_notes[root] = root;
        chord = getChord(Object.values(selected_notes).filter((item) => item !== undefined));
        return;
    }

    selected_notes[root] = undefined;
    chord = getChord(Object.values(selected_notes).filter((item) => item !== undefined));
}

</script>
<main class="w-screen h-screen flex justify-center items-center flex-col gap-8">
    {#each [4, 9, 2, 7, 11, 16] as root}
        <div class="flex items-center">
            {#each [6, 5, 4, 3, 2, 1] as note}
                <div class="w-32 border-b-2 border-black"></div>
                <button class="bg-black rounded-full border-8 {selected_notes[root] - root === note ? 'border-yellow-400' : 'border-black'}" on:click="{() => addNote(root, note)}"></button>
            {/each}
            <div class="w-32 border-b-2 border-black"></div>
            <button class="{selected_notes[root] === undefined ? 'text-red-600' : ''}" on:click={() => disable(root)}>X</button>
        </div>
    {/each}
    {chord}
</main>
