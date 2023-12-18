export default function Note(note) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{note.title}</div>
            <p className="text-gray-700 text-base">{note.description}</p>
          </div>
        </div>
      );
};