import React from "react";
import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";
import { supabase } from "../client";

const Card = (props) => {
  const [count, setCount] = useState(props.upvotes);

  const updateCount = async () => {
    // setCount((count) => count + 1);
    const resultUpvote = await supabase
      .from("Posts")
      .update({ upvotes: parseInt(count) + 1 })
      .eq("id", props.id)
      .select();
    console.log(resultUpvote.data);
    setCount(resultUpvote.data[0].upvotes);
  };

  return (
    <div className="Card">
      <div className="card-content">
        <h2 className="title">{props.title}</h2>
        <p className="description">{props.description}</p>
        <img style={{ width: "400px" }} alt="imagee" src={props.imageUrl} />
        <div className="upvote-wrapper">
          <p style={{ margin: "0 30px 0 0 " }}>{count || "0"} upvotes</p>
          <button
            className="betButton"
            onClick={updateCount}
            style={{ fontSize: 24, margin: 0, padding: 0 }}
          >
            {"👍"}
          </button>
          <p>Created {props.createdAt}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
