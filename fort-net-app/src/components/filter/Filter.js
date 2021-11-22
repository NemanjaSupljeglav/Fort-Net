import "./filter.scss"
function Filter() {
    const ObjectType = [
        "Object",
        "Accommodation",
        "EnoGastro",
        "Heritage",
        "Tourism",
    ];
    return (
        <div className="filter-wrapper">
            <h2>Tip</h2>
            <p className="filter-object-type">Object</p>
            <p className="filter-object-type">Accommodation</p>
            <p className="filter-object-type">EnoGastro</p>
            <p className="filter-object-type">Heritage</p>
            <p className="filter-object-type">Tourism</p>


        </div>
    );
}

export default Filter;
