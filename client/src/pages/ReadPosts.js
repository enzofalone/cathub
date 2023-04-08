import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import './ReadPosts.css'
import { supabase } from "../client";
const ReadPosts = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    setPosts(props.data);
  }, [props]);

  return (
    <div className="ReadPosts">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => (
          <Card
            id={post.id}
            title={post.title}
            imageUrl={post.imageUrl}
            description={post.description}
            upvotes={post.upvotes}
          />
        ))
      ) : (
        <h2>{"No entries :("}</h2>
      )}
    </div>
  );
};

export default ReadPosts;
