import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Blog from './Components/Home/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
// import Header from './Components/Shared/Hearder/Header';
// import Footer from './Components/Shared/Footer/Footer';
import Explore from './Components/Home/Explore/Explore';
import Products from './Components/Products/Products/Products';
import AddProduct from './Components/Dashboard/AddProduct/AddProduct';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './Components/Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import OrderSuccess from './Components/Order/OrderSuccess/OrderSuccess';
import Review from './Components/Home/Review/Review';
import PurchaseOrder from './Components/Order/PurchaseOrder/PurchaseOrder';
import DashboardHome from './Components/Dashboard/DashboardHome/DashboardHome';
import Payment from './Components/Order/Payment/Payment';
import ReviewBody from './Components/Home/Review/ReviewBody';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Header></Header> */}
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>
            <Route path='/explore'>
              <Explore></Explore>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path='/addProduct'>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/reviewBody'>
              <ReviewBody></ReviewBody>
            </Route>
            {/* <Route path='/review'>
              <Review></Review>
            </Route> */}
            <PrivateRoute path='/orderedProducts/:productId'>
              <PurchaseOrder></PurchaseOrder>
            </PrivateRoute>
            {/* <Route path='/purchaseOrder'>
              <PurchaseOrder></PurchaseOrder>
            </Route> */}
            <Route path='/orderSuccess'>
              <OrderSuccess></OrderSuccess>
            </Route>
            <PrivateRoute path='/dashboardHome'>
              <DashboardHome></DashboardHome>
            </PrivateRoute>
            <PrivateRoute path='/payment'>
              <Payment></Payment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer></Footer> */}
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
