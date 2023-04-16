import "./App.css";
import React, { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import ReadPosts from "./pages/ReadPosts";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import { Link } from "react-router-dom";
import { supabase } from "./client";
import ReadPost from "./pages/ReadPost";

const App = () => {
  const [posts, setPosts] = useState([]);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts data={posts} />,
    },
    {
      path: "/edit/:id",
      element: <EditPost data={posts} />,
    },
    {
      path: "/new",
      element: <CreatePost />,
    },
    {
      path: "/:id",
      element: <ReadPost data={posts} />,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase
        .from("Posts")
        .select()
        .order("created_at", { ascending: true });

      // set state of posts
      setPosts(data);
      console.log("data", data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="header">
        <h1>CatHub 😺</h1>
        <Link to="/">
          <button className="headerBtn">Home</button>
        </Link>
        <Link to="/new">
          <button className="headerBtn">Create</button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;
