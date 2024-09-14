import React, { createContext, useState } from 'react';

export const Postcontext = createContext(null);

const PostContext = (props) => {
  const [post, setPost] = useState("This looks like a post");

  return (
    <Postcontext.Provider value={[post, setPost]}>
      {props.children}
    </Postcontext.Provider>
  );
};

export default PostContext;
