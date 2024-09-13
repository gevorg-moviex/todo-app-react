import React from 'react';

export default function Items({ tasks, onDelete }) {
    return (
        <div className='w-2/4 border border-solid border-cyan-400 px-10 py-3'>
            {tasks.length > 0 ? (
                <ul className='flex flex-col gap-5'>
                    {tasks.map((task, index) => (
                        <div key={task.id} className='flex justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-6 h-6 border-solid border border-cyan-300 flex items-center justify-center'>
                                    <span>{index + 1}</span>
                                </div>
                                <li className='border-b border-cyan-300'>{task.text}</li>
                            </div>
                            <div className='flex gap-5'>
                                <i
                                    className='fa-solid fa-x cursor-pointer'
                                    onClick={() => onDelete(task.id)}
                                ></i>
                                <i className="fa-solid fa-pen cursor-pointer"></i>
                            </div>
                        </div>
                    ))}
                </ul>
            ) : (
                <p className='text-center text-gray-500'>No tasks added</p>
            )}
        </div>
    );
}
