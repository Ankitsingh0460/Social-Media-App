import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";

const Postlist = () => {
  const { postList } = useContext(PostListData);


  return (

    <>
      {postList.map((post) => (<Post />))}
    </>
  )
}

export default Postlist;