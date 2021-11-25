import React, { useEffect, useState } from 'react';
import "./nextPage.css"

function NextPage(props) {
    const [pageSelect, setPageSelect] = useState(1);

    return (
        <div className="NextPage-wrapeer">
            <button onClick={() => { props.setSkipPage(props.skipPage - 9) }}>Nazad</button>
            <a onClick={() => { props.setSkipPage(0) }} className={pageSelect == 1 ? "page-num-select" : "page-num"}>1</a>
            <a onClick={() => { props.setSkipPage(9) }} className={pageSelect == 2 ? "page-num-select" : "page-num"}>2</a>
            <a onClick={() => { props.setSkipPage(18) }} className={pageSelect == 3 ? "page-num-select" : "page-num"}>3</a>
            <a onClick={() => { props.setSkipPage(27) }} className={pageSelect == 4 ? "page-num-select" : "page-num"}>4</a>
            <a onClick={() => { props.setSkipPage(35) }} className={pageSelect == 5 ? "page-num-select" : "page-num"}>5</a>
            <a onClick={() => { props.setSkipPage(54) }} className={pageSelect == 6 ? "page-num-select" : "page-num"}>6</a>
            <a onClick={() => { props.setSkipPage(63) }} className={pageSelect == 7 ? "page-num-select" : "page-num"}>7</a>
            ...
            <button onClick={() => { props.setSkipPage(props.skipPage + 9) }}>Dalje</button>
        </div>
    );
}

export default NextPage;
