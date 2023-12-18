import Note from "../components/Note";

export default function NotesCards( {notes} ) {
    return (notes.map(note => <Note note={ note }/>));
};