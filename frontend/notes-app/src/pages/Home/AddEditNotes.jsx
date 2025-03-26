const AddEditNotes = () => {
  return(
    <div>
        <div className="flex flex-col gap-2">
            <label className="text-xs text-slate-400">TITLE</label>
            <input
            type="text"
            className="text-xl text-slate-900 outline-none"
            placeholder="Go to gym at 5pm"
            />
        </div>
        <div className="flex flex-col gap-2">
            <lable className="text-xs text-slate-400">CONTENT</lable>
            <textarea
            className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded-md"
            placeholder="content"
            rows={10}
            />
        </div>
    </div>
  )
}

export default AddEditNotes