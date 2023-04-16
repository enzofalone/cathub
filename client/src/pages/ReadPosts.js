import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import "./ReadPosts.css";
import { supabase } from "../client";
import { Link } from "react-router-dom";
const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(props.data);
    setPosts(props.data);
  }, [props]);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Link to={`/${post.id}`}>
            <Card
              id={post.id}
              title={post.title}
              imageUrl={post.imageUrl}
              description={post.description}
              upvotes={post.upvotes}
              createdAt={post.created_at}
            />
          </Link>
        ))
      ) : (
        <h2>{"No entries :("}</h2>
      )}
    </div>
  );
};

export default ReadPosts;
