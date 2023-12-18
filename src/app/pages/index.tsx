import { useEffect, useState } from "react"
import NotesCards from "../components/NotesCards"

const DUMMY_DATA = [
    {
        id: '1',
        title: 'task',
        description: 'this is the task description'
    },
    {
        id: '2',
        title: 'task',
        description: 'this is the task description'
    },
    {
        id: '3',
        title: 'task',
        description: 'this is the task description'
    }
]

export default function Home() {
    const [notesData, setNoteData] = useState(null);

    useEffect( ()=> {
        setNoteData( DUMMY_DATA )
    }, []);

    <>
    {
        notesData?
        <NotesCards notes={notesData} />
        :
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
    }
    </>
}