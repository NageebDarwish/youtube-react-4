import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Website/HomePage";
import Login from "./Pages/Auth/AuthOperations/Login";
import Register from "./Pages/Auth/AuthOperations/Register";
import Users from "./Pages/Dashboard/Users/Users";
import GoogleCallBack from "./Pages/Auth/AuthOperations/GoogleCallBack";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAuth from "./Pages/Auth/Protecting/RequireAuth";
import User from "./Pages/Dashboard/Users/User";
import AddUser from "./Pages/Dashboard/Users/AddUser";
import Err404 from "./Pages/Auth/Errors/404";
import RequireBack from "./Pages/Auth/Protecting/RequireBack";
import Categories from "./Pages/Dashboard/Category/Categories";
import Category from "./Pages/Dashboard/Category/Category";
import AddCategory from "./Pages/Dashboard/Category/AddCategory";
import Products from "./Pages/Dashboard/Product/Products";
import AddProduct from "./Pages/Dashboard/Product/AddProduct";
import UpdateProduct from "./Pages/Dashboard/Product/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route element={<RequireBack />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/auth/google/callback" element={<GoogleCallBack />} />
        <Route path="/*" element={<Err404 />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRole={["1996", "1995", "1999"]} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<AddUser />} />
            </Route>
            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
              {/* Categories */}
              <Route path="categories" element={<Categories />} />
              <Route path="categories/:id" element={<Category />} />
              <Route path="category/add" element={<AddCategory />} />
              {/* Products */}
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<UpdateProduct />} />
              <Route path="product/add" element={<AddProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
