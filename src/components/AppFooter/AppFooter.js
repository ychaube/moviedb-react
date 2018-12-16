import React from 'react';
import './AppFooter.css';

const AppFooter = (param) => {

    let pageStatus = " ";
    let pageCount = "";
    let paginationGrp = {
        display: 'none'
    };
    if (param.totalPage > 0) {
        pageStatus = param.currentPage + " / " + param.totalPage;
        pageCount = param.resultCount + " results";
        paginationGrp = {
            display: 'block'
        };
    }

    return (
        <div className="App-Footer">
            <div className="Results-Counter">{pageCount}</div>
            <div className="Pagination-Group" style={paginationGrp}>
                <span onClick={param.onPagePrev}>❮ Prev </span>
                <span onClick={param.onPageNext}> Next ❯</span>
            </div>
            <div className="Page-Number">{pageStatus}</div>
        </div>
    );
}

export default AppFooter;