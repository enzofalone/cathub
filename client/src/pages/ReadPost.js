import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./EditPost.css";
import {supabase} from "../client";
import Card from "../components/Card";

const ReadPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost]= useState(data.filter((item) => item.id === parseInt(id))[0])
  const deletePost = async (event) => {
    event.preventDefault();

    await supabase
    .from('Posts')
    .delete()
    .eq('id', id); 

    window.location = "http://localhost:3000/";
}

  const onChange = (event) => {
    setPost((prevPost) => {
      return { ...prevPost, [event.target.name]: event.target.value };
    });
  };

  return (
  <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
    {data ? 
    <Card 
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
            upvotes={post.upvotes}
            createdAt={post.created_at}/> : <></>}
  </div>
  )
  };


export default ReadPost;