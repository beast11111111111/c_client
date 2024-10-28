import { DarkThemeToggle } from "flowbite-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/Footer";
import BillTransaction from "../components/BillTransaction";

const server_url = process.env.REACT_APP_SERVER_URL || 'http://localhost:5000';

export default function Previouscomponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(server_url + '/api/getProducts')
      .then(res => setData(res.data.data.bill_of_all.sort((a, b) => b.transaction_id - a.transaction_id)));
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-between">
        <div className="flex-grow flex flex-col items-center w-[85%] border rounded m-2 bg-white bg-opacity-20 backdrop-blur-lg">
          {
            data.length === 0
            ? (
                <div className="text-2xl font-bold mt-20">
                  You don't have any transactions
                </div>
              )
            : (
                <div className="w-full mt-10">
                  {data.map((bill, key) => (
                    <BillTransaction key={key} data={bill} />
                  ))}
                </div>
              )
          }
        </div>
        
        <FooterComponent className="w-full" />
      </div>
    </>
  );
}
