import { Link } from "react-router-dom";

export default function AddBtn() {
  return (
    <Link className="btn btn-primary" to="/dashboard/user/add">
      Add User
    </Link>
  );
}
