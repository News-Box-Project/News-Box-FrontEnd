import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function LocalNews() {

    const {id}=useParams();
    const [local,setLocal]=useState();

    async function fetchData() {
        const {data} = await axios.get(`https://news-box-project.herokuapp.com/news/${id}`);
        console.log(data);
        setLocal(data)
      }

        useEffect(() => {
    fetchData();
  }, [])
        
        
        return (
    <>
      <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
    </>
  );
}
