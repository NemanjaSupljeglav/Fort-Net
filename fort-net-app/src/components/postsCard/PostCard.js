import "./postCard.css";

function PostCard(props) {
  const ObjectType = [
    "Object",
    "Accommodation",
    "EnoGastro",
    "Heritage",
    "Tourism",
  ];

  return (
    <div className="post-card-wrapper">
      <p className="post-type">{ObjectType[props.objectType]}</p>
      {props.postImages === null && (
        <img
          className="post-cover-image"
          src="noImages.png"
          alt="Post Image"
        ></img>
      )}
      {props.postImages && (
        <img
          className="post-cover-image"
          src={props.postImages}
          alt="Post Image"
        ></img>
      )}

      <h2 className="post-card-title">{props.name}</h2>
      {props.name == null && (
        <h2 className="post-card-title">There is no active name</h2>
      )}
    </div>
  );
}

export default PostCard;
