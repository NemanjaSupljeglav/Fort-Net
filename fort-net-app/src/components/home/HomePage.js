import PostCard from "../postsCard/PostCard";
import "./homePage.scss";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
function HomePage() {
  const [post, setPost] = useState([]);
  const [postLoad, setPostLoad] = useState(false);
  const [postType, setPostType] = useState(0);

  const ObjectType = [
    "Object",
    "Accommodation",
    "EnoGastro",
    "Heritage",
    "Tourism",
  ];

  const getPosts = async (type = null) => {
    const res = await fetch(
      "https://staging-api.fort-net.org/Objects?Skip=1&Take=90"
    );
    const posts = await res.json();

    console.log(posts.result);
    const newData = posts.result.filter(
      (post) => post.objectType == postType || !postType
    );
    setPost(newData);
    setPostLoad(true);
  };
  useEffect(() => {
    getPosts();
  }, [postType]);

  return (
    <div className="home-page-wrapper-all">
      {/*<Search ></Search>*/}
      <div className="home-page-wrapper">
        <Filter
          className="filter-posts-home"
          setPostType={setPostType}
          postType={postType}
        ></Filter>

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
    </div>
  );
}

export default HomePage;
