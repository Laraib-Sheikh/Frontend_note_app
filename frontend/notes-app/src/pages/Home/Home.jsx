import { useState } from "react";
import { MdAdd } from "react-icons/md";
import NoteCard from "../../componets/Cards/NoteCard";
import Navbar from "../../componets/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";

const Home = () => {

  const [openAddEditModel, setOpenAddEditModel] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
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
      <button className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 absolute right-10 bottom-10" onClick={() => {setOpenAddEditModel({isShown: true, type: "add", data: null})}}>
<MdAdd className="text-[32px] text-white"/>
      </button>

<Modal
isOpen={openAddEditModel.isShown}
onRequestClose={() => {
  
}}

style={{
  overlay: {
    backgroundColor: "rgba(0,0,0,0.2)",
  },
}}

contentLabel=""
className="mx-auto bg-white rounded-md w-[40%] max-h-3/4 mt-14 p-5 overflow-y-auto"
>
<AddEditNotes />
</Modal>
      
    </>
  );
};

export default Home;
