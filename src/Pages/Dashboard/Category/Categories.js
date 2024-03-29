import { useEffect, useState } from "react";
import { CAT, Cat } from "../../../Api/Api";
import { Axios } from "../../../Api/axios";
import { Link } from "react-router-dom";
import TableShow from "../../../Components/Dashboard/Table";
import PaginationShow from "../../../Components/Dashboard/Pagination/Pagination";
export default function Categories() {
  // States
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(5);
  const [limit, setLimit] = useState(3);

  // Get ALl Categories
  useEffect(() => {
    Axios.get(`/${CAT}`)
      .then((data) => setCategories(data.data))
      .catch((err) => console.log(err));
  }, []);
  const header = [
    { key: "title", name: "Title" },
    {
      key: "image",
      name: "Image",
    },
  ];

  // Handle Delete
  async function handleDelete(id) {
    try {
      const res = await Axios.delete(`${Cat}/${id}`);
      setCategories((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-white w-100 px-4 py-3 rounded shadow-sm">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Categories Page</h1>
        <Link className="btn btn-primary" to="/dashboard/category/add">
          Add Category
        </Link>
      </div>

      <TableShow
        limit={limit}
        page={page}
        header={header}
        data={categories}
        delete={handleDelete}
      />
      <PaginationShow pages={Math.ceil(categories.length / limit)} />
    </div>
  );
}
