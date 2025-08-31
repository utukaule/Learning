import React from 'react'

const CreateTask = () => {
  return (
   <div className="p-5 bg-[#1c1c1c mt-7 rounded]">
        <form className="flex flex-wrap w-full items-start justify-between ">
          <div className="w-1/2">
            <div className='mb-3'>
              <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Make a design"
              />
            </div>
            <div className='mb-3'>
              <h3 className="text-sm text-gray-300 mb-1">Date</h3>
              <input
                className="text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="date"
              />
            </div>
            <div className='mb-3'>
              <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="Employee name"
              />
            </div>
            <div className='mb-3'>
              <h3 className="text-sm text-gray-300 mb-1">Category</h3>
              <input
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
                type="text"
                placeholder="design, dev,etc..."
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3>Description</h3>
            <textarea name="" id=""></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
