import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./LocalNews.css";

export default function LocalNews() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const [date, setDate] = useState();
  const [category, setCategory] = useState();

  async function fetchData() {
    const { data } = await axios.get(
      `https://news-box-project.herokuapp.com/news/${id}`
    );
    setTitle(data[0].title);
    setAuthor(data[0].author);
    setDescription(data[0].description);
    setImage(data[0].image);
    setDate(data[0].published_at.slice(0, 10));
    setCategory(data[0].category);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      <img className="localNews-img" src={image} alt="news" />
      <div className="localNews-container">
        <div className="localNews-text-box d-flex justify-content-center">
          <p className="text-capitalize fw-bold card-subheading-1">
            {category}
          </p>
          <p className="mb-2 fw-bold text-capitalize card-subheading-2">
            {author}
          </p>
          <p className="fw-bold card-subheading-1">{date}</p>
        </div>
        <h1>{title}</h1>
        <p className="localNews-description">{description}</p>
      </div>
    </>
  );
}
