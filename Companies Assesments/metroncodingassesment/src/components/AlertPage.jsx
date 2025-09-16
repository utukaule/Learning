import React, { useContext, useEffect, useState } from "react";
import { AlertsContext } from "../context/AlertContext";
import { Link } from "react-router-dom";
const AlertPage = () => {
  const { alerts } = useContext(AlertsContext);
  console.log("alert page", alerts);
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showAlert, setShowAlert] = useState([]);
  const handleSearch = (e) => {};

  if (!alerts.length) return <p>No alerts available.</p>;
  return (
    <>
      <h1 className="text-red-500 text-3xl px-5">Alerts</h1>
      <input
        type="text"
        className="border border-black p-3 mx-5 font-3xl w-[20%] mt-4"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>
        {alerts.map((item) => {
          let severityClass =
            item.severity === "Critical"
              ? "bg-red-700 text-white"
              : item.severity === "High"
              ? "bg-orange-500 text-white"
              : item.severity === "Medium"
              ? "bg-yellow-400 text-black"
              : "bg-green-400 text-black";
          return (
            <>
              <div className="w-[100%]" key={item.id}>
                <Link to={`/alerts/${item.id}`}>
                  <div
                    className={`border border-black w-[20%] rounded p-5 m-5 hover:bg-red-500 hover:text-white ${severityClass}`}
                  >
                    <div className="flex justify-between ">
                      <h3>{item.type}</h3>
                      <p>{item.severity}</p>
                    </div>

                    <p className="pt-2">{item.timestamp}</p>
                  </div>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AlertPage;
