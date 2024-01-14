import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./table.css";
import PaginationShow from "./Pagination/Pagination";

export default function TableShow(props) {
  const currentUser = props.currentUser || {
    name: "",
  };

  let paginateData = [];

  if (props.data.length !== 0) {
    for (
      let i = (props.page - 1) * props.limit;
      i < props.page * props.limit;
      i++
    ) {
      paginateData.push(props.data[i]);
    }
  }

  // Header Show
  const headerShow = props.header.map((item) => (
    <th className="text-white f-cairo">{item.name}</th>
  ));
  // Body Show
  const dataShow = paginateData.map((item, key) => (
    <tr key={key}>
      <td>{item.id}</td>
      {props.header.map((item2, key2) => (
        <td key={key2}>
          {item2.key === "image" ? (
            <img width="50px" src={item[item2.key]} alt="" />
          ) : item2.key === "images" ? (
            <div className="d-flex aling-items-center justify-content-start gap-2 flex-wrap">
              {item[item2.key].map((img) => (
                <img className="" width="50px" src={img.image} alt="" />
              ))}
            </div>
          ) : item[item2.key] === "1995" ? (
            "admin"
          ) : item[item2.key] === "2001" ? (
            "User"
          ) : item[item2.key] === "1996" ? (
            "Writer"
          ) : item[item2.key] === "1999" ? (
            "Product Manger"
          ) : (
            item[item2.key]
          )}
          {currentUser && item[item2.key] === currentUser.name && " (You)"}
        </td>
      ))}
      <td>
        <div className="d-flex align-items-center gap-2">
          <Link to={`${item.id}`}>
            <FontAwesomeIcon fontSize={"19px"} icon={faPenToSquare} />
          </Link>
          {currentUser.name !== item.name && (
            <FontAwesomeIcon
              onClick={() => props.delete(item.id)}
              fontSize={"19px"}
              color="red"
              cursor={"pointer"}
              icon={faTrash}
            />
          )}
        </div>
      </td>
    </tr>
  ));

  const totalPages = Math.ceil(props.data.length / props.limit);

  // Return Data
  return (
    <>
      <Table
        className="table-shadow rounded overflow-hidden text-white"
        striped
        hover
      >
        <thead className="px-2">
          <tr>
            <th className="f-cairo text-white">id</th>
            {headerShow}
            <th className="f-cairo text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.length === 0 && (
            <tr className="text-center">
              <td colSpan={12}>Loading...</td>
            </tr>
          )}
          {dataShow}
        </tbody>
      </Table>
    </>
  );
}
