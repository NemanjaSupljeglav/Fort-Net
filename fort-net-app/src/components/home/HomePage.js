import PostCard from "../postsCard/PostCard";
import "./homePage.scss";
import { useState } from "react";
import { useEffect } from "react";
function HomePage() {
  const [post, setPost] = useState([]);
  const [postLoad, setPostLoad] = useState(false);

  const getPosts = async () => {
    const res = await fetch(
      "https://staging-api.fort-net.org/Objects?Skip=1&Take=50"
    );
    const posts = await res.json();
    console.log(posts.result);
    setPost(posts.result);
    setPostLoad(true);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-page-wrapper">
      {post.map((post) => {
        return (
          <PostCard
            key={post.id}
            postImages={post.photoUrl}
            objectType={post.objectType}
            name={post.name}
          ></PostCard>
        );
      })}
    </div>
  );
}

export default HomePage;
