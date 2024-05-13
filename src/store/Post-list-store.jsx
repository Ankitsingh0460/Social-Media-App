import { createContext, useReducer } from "react"

//this is for suggestion or pasaa in the value.
export const PostList = createContext({
  postList: [],
  addPost: () => { },
  addPostServer: () => { },
  deletePost: () => { },
})
//this is the reducer method.
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  } else if (action.type === "ADD_POSTS") {
    newPostList = action.payload.posts;
  }
  else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}
//Reducer function
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  //these method is use for passing the argument in the value.
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };

  const addPostServer = (posts) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
  };


  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  //this is the props return
  return (<PostList.Provider value={{ postList, addPost, addPostServer, deletePost }}>{children}</PostList.Provider>

  );
};

//this is the value which is default




export default PostListProvider