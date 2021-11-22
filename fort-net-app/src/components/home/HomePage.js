import PostCard from "../postsCard/PostCard";
import "./homePage.scss";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../filter/Filter";
function HomePage() {
  const [post, setPost] = useState([]);
  const [postLoad, setPostLoad] = useState(false);
  const [postType, setPostType] = useState(2);

  const ObjectType = [
    "Object",
    "Accommodation",
    "EnoGastro",
    "Heritage",
    "Tourism",
  ];
  /*
    const newData = answer.filter(post => post.activity?.category.id == categoryValue || categoryValue == "all" || !categoryValue)
      setPostFeed(newData);*/
  const getPosts = async (type = null) => {
    const res = await fetch(
      "https://staging-api.fort-net.org/Objects?Skip=1&Take=55"
    );
    const posts = await res.json();

    console.log(posts.result);
    const newData = posts.result.filter(post => post.objectType == postType || !postType)
    setPost(newData);
    setPostLoad(true);
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="home-page-wrapper">
      <Filter className="filter-posts-home"></Filter>
      <div className="posts-card-maping">
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
    </div>
  );
}

export default HomePage;
