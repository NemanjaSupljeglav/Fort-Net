import "./filter.css";
function Filter(props) {
  /*postType*/
  return (
    <div className="filter-wrapper">
      <h2 className="filter-title">Type</h2>
      <div className="filter-type-wrapper">
        <p
          className={
            props.postType == 0
              ? "filter-object-type-select"
              : "filter-object-type"
          }
          onClick={() => {
            props.setPostType("");
          }}
        >
          All
        </p>
        <p
          className={
            props.postType == 1
              ? "filter-object-type-select"
              : "filter-object-type"
          }
          onClick={() => {
            props.setPostType(1);
          }}
        >
          Accommodation
        </p>
        <p
          className={
            props.postType == 2
              ? "filter-object-type-select"
              : "filter-object-type"
          }
          onClick={() => {
            props.setPostType(2);
          }}
        >
          EnoGastro
        </p>
        <p
          className={
            props.postType == 3
              ? "filter-object-type-select"
              : "filter-object-type"
          }
          onClick={() => {
            props.setPostType(3);
          }}
        >
          Heritage
        </p>
        <p
          className={
            props.postType == 4
              ? "filter-object-type-select"
              : "filter-object-type"
          }
          onClick={() => {
            props.setPostType(4);
          }}
        >
          Tourism
        </p>
      </div>
    </div>
  );
}

export default Filter;
