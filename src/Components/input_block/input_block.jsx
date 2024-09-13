export default function InputBlock({text, setText, addTask, handleKeyDown}){
    return (
        <>
            <div className="w-[400px] p-3 flex justify-center items-center gap-5 mt-4 border-[1px] border-solid border-cyan-200">
                <div>
                <input type="text" placeholder='Enter your task...' className='w-[200px] h-[30px] pl-1 outline-none border-b border-cyan-400 relative' value={text} onChange={(event) => {setText(event.target.value)}} onKeyDown={handleKeyDown}/>
                <i className='fa-solid fa-x relative right-4 cursor-pointer text-sm' onClick={() => setText("")}></i>
                </div>
                <button className='cursor-pointer bg-blue-700 text-white w-20' onClick={addTask}>Add</button>
            </div>
            <h1>{text}</h1>
        </>
    )
}