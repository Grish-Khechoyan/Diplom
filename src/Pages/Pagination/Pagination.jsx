import ReactPaginate from "react-paginate";

export default function Pagination({ totalPages, handlePageChange, page }) {
  const pageCount = Math.ceil(totalPages >= 50 && 50);

  return (
    <div>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        onPageChange={handlePageChange}
        marginPagesDisplayed={3}
        pageCount={pageCount} 
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={page - 1}
      />
    </div>
  );
}
