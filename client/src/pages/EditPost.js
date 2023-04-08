import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import {supabase} from "../client";

const EditPost = ({ data }) => {
  const { id } = useParams();
  const [post, setPost]= useState(data.filter((item) => item.id === parseInt(id))[0])

  const updatePost = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        imageUrl: post.imageUrl,
        description: post.description,
      })
      .eq("id", id);

    window.location = "/";
  };

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
    <div>
      <form onSubmit={updatePost}>
        <label htmlFor="title">Title</label> <br />
        <input type="text" id="title" name="title" value={post.title} onChange={onChange} />
        <br />
        <br />
        <label htmlFor="author">Image URL</label>
        <br />
        <input type="text" id="imageUrl" name="imageUrl" value={post.imageUrl} onChange={onChange}/>
        <br />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          value={post.description}
          name="description"
          onChange={onChange}
        />
        <br />
        <input type="submit" value="Submit" />
        <button className="deleteButton" onClick={deletePost}>Delete</button>
      </form>
    </div>
  );
};

export default EditPost;
