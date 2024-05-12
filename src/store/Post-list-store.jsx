import { createContext, useReducer } from "react"

//this is for suggestion or pasaa in the value.
export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
})
//this is the reducer method.
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(post => post.id !== action.payload.postId)
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}
//Reducer function
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_List);
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

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  //this is the props return
  return (<PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>

  );
};

//this is the value which is default
const Default_Post_List = [{
  id: "1",
  title: "Going to Mumbai",
  body: "Hi Friends I am going to Mumbai",
  reaction: 2,
  userId: "user-1",
  tags: ["vaction", "mumbai", "masti"],
},
{
  id: "2",
  title: "Passing Btech",
  body: "Hello frend I am Graduate",
  reaction: 15,
  userId: "user-5",
  tags: ["graduation", "collage"],
}
]



export default PostListProvider