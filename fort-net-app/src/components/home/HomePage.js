import PostCard from "../postsCard/PostCard";
import "./homePage.css";
import { useState } from "react";
import { useEffect } from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import NextPage from "../nextPage/NextPage"

function HomePage() {
  const [post, setPost] = useState([]);
  const [postLoad, setPostLoad] = useState(false);
  const [postType, setPostType] = useState("");
  const [pageNum, setPageNum] = useState(9);
  const [skipPage, setSkipPage] = useState(0);
  const [search, setSearch] = useState("");

  const ObjectType = [
    "Object",
    "Accommodation",
    "EnoGastro",
    "Heritage",
    "Tourism",
  ];
  console.log("search");
  console.log(search.target);
  console.log("search");
  const getPosts = async () => {
    const res = await fetch(
      `https://api.fort-net.org/Objects?Text=${search}&ObjectType=${postType}&Skip=${skipPage}&Take=${pageNum}`

    );
    const posts = await res.json();

    console.log("posts.result.length");
    console.log(posts.result);
    console.log("posts.result.length");

    setPost(posts.result);
    setPostLoad(true);
  };
  useEffect(() => {
    getPosts();
  }, [postType, search, skipPage]);

  return (
    <div className="home-page-wrapper-all">
      <Search setSearch={setSearch}></Search>
      <div className="home-page-wrapper">
        <Filter
          className="filter-posts-home"
          setPostType={setPostType}
          postType={postType}
        ></Filter>

        <div className="posts-card-maping">
          {post?.map((post) => {
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

      <NextPage setPageNum={setPageNum} setSkipPage={setSkipPage} skipPage={skipPage}></NextPage>
    </div>

  );

}
export default HomePage;
