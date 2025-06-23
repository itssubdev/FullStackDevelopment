"use client";
import React, {useState, useEffect} from "react";

function page() {
    const [data, SetData] = useState([]);
    useEffect(()=>{
        fetch("https://ecommerce.bhandarishishir.com.np/api/category/")
        .then(res=>res.json())
        .then(json=>SetData(json))
    },[])

  return <div>
    {
        data.map((items)=>{
            return <div className="bg-white rounded-lg shadow-md overflow-hidden" key={items.id}>
                <h1 className="text-3xl font-bold text-gray-900 mb-8">{items.name}</h1>
            </div>
        })
    }
  </div>;
}

export default page;
