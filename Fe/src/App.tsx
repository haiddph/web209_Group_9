import { useEffect, useState } from "react";
import { Routes, Route , useNavigate} from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import ListProduct from "./pages/admin/product/ListProduct";
import AddProduct from "./pages/admin/product/AddProduct";
import UpdateProduct from "./pages/admin/product/UpdateProduct";
import {
  getAllProduct,
  deleteProduct,
  updateProduct,
  addProduct,
} from "./api/product";
import "./App.css";
import { ICategory, IProduct, IUser } from "./types/product";
import AddUser from "./pages/admin/users/AddUser";
import { IUsers, addUsers } from "./api/user";
import ListUser from "./pages/admin/users/listUser";
import Login from "./pages/admin/users/signin";
// import { addUser } from './api/auth'

// import ProductCategory from './pages/admin/product/ProductCategory';

function App() {
  const [Products, setProducts] = useState<IProduct[]>([]);
  const [Categories, setCategories] = useState<ICategory[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<{
    [categoryId: string | number]: IProduct[];
  }>({});
  const [Users, setUsers] = useState<IUsers[]>([]);
  const navigate = useNavigate();

  //Products
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) =>
      setProducts(products.data)
    );
  }, []);
  // console.log(products)

  const onhandleDelete = (id: number) => {
    deleteProduct(id).then(() =>
      setProducts(Products.filter((item: any) => item._id !== id))
    );
  };

  const onHandleAdd = (products: any) => {
    addProduct(products).then(() => setProducts([...Products, products.data]));
  };

  const onhandleUpdate = (products: any) => {
    updateProduct(products).then(() =>
      setProducts(
        Products.map((item: any) => (item.id == products._id ? products : item))
      )
    );
  };

  // const addUser = (users: any) => {
  //   addUser(users).then(() => setUsers([...users, users.data]))
  // };

  // user
  const addUser = async (users: any) => {
    await addUsers(users).then((res) => {
      if (res?.data?.accessToken) {
        alert("Bạn đã đăng kí thành công");
        navigate("/signin")
      }
    });
  };
  useEffect(() => {
    getAllProduct().then(({ data: { products } }) =>
      setProducts(products.data)
    );
  }, []);

  // const onhandlegetbyidCategory = (products: any) => {
  //   getAllProduct(categoryId).then(())
  // }
  // Category
  // useEffect(() => {
  //   getAllCategory().then(({ data: { categories } }) => setCategories(categories))
  // }, [])
  // console.log(Categories);
  // const onhandleDeleteCategory = (id: number) => {
  //   deleteCategory(id).then(() => setCategories(Categories.filter((item: any) => item._id !== id)))
  // }
  // const onHandleAddCategory = (categories: any) => {
  //   addCategory(categories).then(() => setCategories([...categories, categories]))
  // };
  // const onHandleAddUser = (users: any) => {
  //   addUser(users)
  // }
  // //Signin
  // const onHandleSignIn = async (data: IUsers) => {
  //   const { data: user } = await logInUser(data);
  //   console.log("users", user);
  //   localStorage.setItem("users ", JSON.stringify(user));
  // };
  //console.log()
  // productGetbyCategoryId

  return (
    <div className="App">
      <Routes>
        <Route path="/">
          {/* <Route index element={<HomePage />} /> */}
          {/* <Route path='products' >
            <Route index element={<Product products={Products} />} />
            <Route path=':_id' element={<ProductDetail />} />
          </Route> */}

          {/* <Route path='signin' element={<Signin onSignin={onHandleSignIn} />} /> */}
          <Route path="signup" element={<AddUser onAddUser={addUser} />} />
          <Route path="signin" element={<Login onAddUser={addUser} />} />
        </Route>
        <Route path="admin">
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route
              index
              element={
                <ListProduct products={Products} onRemove={onhandleDelete} />
              }
            />
            <Route path="add" element={<AddProduct onAdd={onHandleAdd} />} />
            {/* <Route path=':_id/category' element={<ProductCategory products={Products} />} /> */}
            <Route
              path=":_id/update"
              element={
                <UpdateProduct products={Products} onUpdate={onhandleUpdate} />
              }
            ></Route>
          </Route>
          Products
          <Route path="users">
            <Route index element={<ListUser users={Users} />} />
          </Route>
          Users
        </Route>
      </Routes>
    </div>
  );
}

export default App;
