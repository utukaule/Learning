import React from "react";

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh - 60px)]">
      <div className="w-full grid grid-cols-5 gap-4 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input type="text" placeholder="Book Name" className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input type="text" placeholder="Book Title" className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author</label>
          <input type="text" placeholder="Author" className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price</label>
          <input type="text" placeholder="Selling Price" className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input type="date" placeholder="Publish Date" className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
