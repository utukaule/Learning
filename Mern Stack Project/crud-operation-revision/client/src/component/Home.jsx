import React, { useState } from "react";
import { bookBaseUrl } from "../axiosInstance";
const Home = () => {
  const [bookForm, setBookForm] = useState({
    BookName: "",
    BookTitle: "",
    Author: "",
    SellingPrice: "",
    PublishDate: "",
    Id: "",
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setBookForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 const handleSubmit = async () => {
  console.log("clicked");
  if (
    !bookForm.BookName ||
    !bookForm.BookTitle ||
    !bookForm.Author ||
    !bookForm.PublishDate ||
    !bookForm.SellingPrice
  ) {
    alert("All fields are compulsory!");
    return; // Prevent further execution
  }

  try {
    const { data } = await bookBaseUrl.post("/addbook", bookForm);
    if (data?.success) {
      alert(data?.message);
    }
  } catch (error) {
    console.log("error while sending the data", error);
    alert("Failed to submit. Please try again.");
  }
};
  return (
    <div className="w-full px-5 min-h-[calc(100vh - 60px)]">
      {/* input fields */}
      <div className="w-full grid grid-cols-5 gap-4 my-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2"
            name="BookName"
            value={bookForm.BookName}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input
            type="text"
            placeholder="Book Title"
            className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2"
            name="BookTitle"
            value={bookForm.BookTitle}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Author</label>
          <input
            type="text"
            placeholder="Author"
            className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2"
            name="Author"
            value={bookForm.Author}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price</label>
          <input
            type="text"
            placeholder="Selling Price"
            className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2"
            name="SellingPrice"
            value={bookForm.SellingPrice}
            onChange={handleFormChange}
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Publish Date</label>
          <input
            type="date"
            placeholder="Publish Date"
            className="w-full border border-gray-500 border-gray-300 rounded-md outline-1  h-10 px-2"
            name="PublishDate"
            value={bookForm.PublishDate}
            onChange={handleFormChange}
          />
        </div>
      </div>

      {/* button */}
      <div className="w-full flex justify-end">
        <button
          onClick={handleSubmit}
          className="bg-gray-700 text-white h-9 px-6 rounded-md cursor-pointer"
        >
          Submit
        </button>
      </div>

      {/* table */}
      <div className="w-full mt-10">
        <div className="w-full">
          <table className="w-full bg-white divide-y divide-gray-100">
            <thead className="bg-gray-50">
              <tr>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Name
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Book Title
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Author
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Selling Price
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Publish Date
                </th>
                <th className="tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className=" bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-200">
                <td className="px-6 py-3 whitespace-nowrap"></td>
                <td className="px-6 py-3 whitespace-nowrap"></td>
                <td className="px-6 py-3 whitespace-nowrap"></td>
                <td className="px-6 py-3 whitespace-nowrap"></td>
                <td className="px-6 py-3 whitespace-nowrap"></td>
                <td className="px-6 py-3 whitespace-nowrap text-left">
                  <span className=" cursor-pointer me-2">❌</span>
                  <span className=" mx-2 cursor-pointer">✒️</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
