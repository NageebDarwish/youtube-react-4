import { Pagination } from "react-bootstrap";

export default function PaginationShow({ pages }) {
  const data = [];
  function showData() {
    for (let i = 0; i < pages; i++) {
      data.push(<Pagination.Item>{i}</Pagination.Item>);
    }
    return data;
  }
  return (
    <Pagination className="d-flex align-items-center justify-content-end">
      {showData()}
    </Pagination>
  );
}
