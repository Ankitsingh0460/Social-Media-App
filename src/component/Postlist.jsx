import { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";


const Postlist = () => {
  const { postList, addPostServer } = useContext(PostListData);
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addPostServer(data.posts);
      });
  }, [])

  return (

    <>


      {postList.length === 0 && <WelcomeMsg />}
      {postList.map((post) => (<Post key={post.id}
        post={post}

      />))}
    </>
  );
};

export default Postlist;