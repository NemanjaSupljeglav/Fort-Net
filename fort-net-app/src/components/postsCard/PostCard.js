import "./postCard.scss";

function PostCard() {
  return (
    <div className="post-card-wrapper">
      <p className="post-type">Active tourism</p>
      <img
        className="post-cover-image"
        src="https://fort-net.org/wp-content/uploads/2021/07/20210624125807_Pjesacenje-1-1024x683.jpg"
      ></img>
      <h2 className="post-card-title">pjesacenje</h2>
    </div>
  );
}

export default PostCard;
