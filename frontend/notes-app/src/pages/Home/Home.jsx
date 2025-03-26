import { MdAdd } from "react-icons/md";
import NoteCard from "../../componets/Cards/NoteCard";
import Navbar from "../../componets/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="hello this is the demo"
            date="2/3/2033"
            content="hello this is demo data"
            tags="#Meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>
      <button className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10" onClick={() => {}}>
<MdAdd className="text-[32px] text-white"/>
      </button>

      <AddEditNotes />
    </>
  );
};

export default Home;
