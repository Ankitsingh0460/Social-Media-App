import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-list-store";


function Post({ post }) {

  const { deletePost } = useContext(PostList)

  return <div className="card post-card" style={{ width: "30rem" }}>
    <div className="card-body">
      <h5 className="card-title">{post.title}

        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)}>
          <MdDelete />
        </span>
      </h5>
      <p className="card-text">{post.body}</p>

      {post.tags.map(tag => <span key={tag} className="badge text-bg-primary tags ">{tag}</span>)}

    </div>
    <div className="alert alert-success reaction" role="alert">
      This post is reacted by {post.reaction} People
    </div>
  </div>

}

export default Post;