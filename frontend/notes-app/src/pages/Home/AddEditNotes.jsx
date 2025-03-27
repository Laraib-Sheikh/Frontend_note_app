import { MdAdd, MdClose } from "react-icons/md";
import { useState } from "react";

const AddEditNotes = ({onClose, type, noteData}) => {
  const [inputValue, setInputValue] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "" && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };

  const editNote = async () => {
    
  }

  const addNewNote = async () => {
    
  }

  const handleAddNotes = () => {
    if (type === "edit"){
      editNote();
    }else{
      addNewNote();
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <div className="relative">
      <button
      className="w-10 h-10 rounded-full bg-slate-100 flex justify-center items-center absolute -right-3 -top-3 hover:bg-slate-500"
      onClick={onClose}
      >
<MdClose className="text-xl text-slate-400"/>
      </button>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">TITLE</label>
        <input
          type="text"
          className="text-xl text-slate-900 outline-none"
          placeholder="Go to gym at 5pm"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-xs text-slate-400">CONTENT</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-md"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mt-3">
        <label className="flex items-center gap-2 flex-wrap mt-2">TAGS</label>
        <div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-200 text-blue-800 px-2 py-1 rounded flex items-center"
                >
                  #{tag}
                  <button onClick={() => handleRemoveTag(index)} className="ml-2">
                    <MdClose />
                  </button>
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4 mt-3">
            <input
              type="text"
              className="text-xs bg-transparent border px-3 py-2 rounded outline-none"
              placeholder="Add Tags"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button
              className="w-8 h-8 border border-blue-400 hover:bg-blue-700 rounded-full flex items-center justify-center text-white"
              onClick={addNewTag}
            >
              <MdAdd className="text-xl text-blue-700 hover:text-white" />
            </button>
          </div>
        </div>
      </div>
      <button onClick={handleAddNotes} className="bg-blue-400 font-medium mt-5 p-3 w-full cursor-pointer">ADD</button>
    </div>
  );
};

export default AddEditNotes;
