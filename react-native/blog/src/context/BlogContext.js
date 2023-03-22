import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // let author = { name: "Prison Mike" };
  // let blogPosts = [
  //   { title: "There are no movies in prison" },
  //   { title: "Your Boss is nice" },
  //   { title: "You gotta good life!" },
  //   { title: "Worst thing about the prison was the Dementors" },
  // ];
  const addBlogPost = () => {
    console.log("add Blog POST TRIGGERED");
    setPosts([...posts, { title: `Blog Post #${posts.length + 1}` }]);
  };
  // let initialStorage = {
  //   author: author,
  //   posts: posts,
  // };
  return (
    <BlogContext.Provider value={{ data: posts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
