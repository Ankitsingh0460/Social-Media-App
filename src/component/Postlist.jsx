import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingScreen from "./LoadingScreen";


const Postlist = () => {
  const { postList, addPostServer } = useContext(PostListData);

  const [fetching, setFetching] = useState(false)


  useEffect(() => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then((data) => {
        addPostServer(data.posts);
        setFetching(false)
      });
  }, [])

  return (

    <>

      {fetching && <LoadingScreen />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => (<Post key={post.id}
        post={post}

      />))}
    </>
  );
};

export default Postlist;