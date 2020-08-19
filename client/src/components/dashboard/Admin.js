import React,{useEffect} from 'react'
import './Admincss.css';
import {Link}  from 'react-router-dom'
import {useDispatch, useSelector}  from 'react-redux'
import {get_product, removeProduct} from '../../actions/product'
import { getOrder } from '../../actions/order'

const Admin = (props) => {

   const dispatch = useDispatch()
   const delProduct = (productId) =>{
    dispatch(removeProduct(productId));
  }

  useEffect(()=>{
    dispatch(get_product())
    dispatch(getOrder())
  }, [delProduct]);
   
  const { products,error,loading  } = useSelector(state => state.product);
  const {orders, load} = useSelector(state => state.order);

    return (
     <div>
     <div className="dashcon">
     <ul className="admin-menu">
      <li className="menu-heading"><Link to="/addProduct">Insert Product</Link></li>
      <li className="menu-heading"><Link to="/addProduct">Insert Product</Link></li>
      <li className="menu-heading"><Link to="/addProduct">Insert Product</Link></li>
      <li className="menu-heading"><Link to="/addProduct">Insert Product</Link></li>
    </ul>
   <div className="hero">
     <h1>Welcome</h1>
    <h1> Admin Dashboard </h1>
   </div>
</div>
<section className="page-content">
  <section className="grid">
  <h1 className="heading">Product Details</h1>
    <article>
    <table className="products">
  <tr>
    <th>Name</th>
    <th>Category</th>
    <th>image</th>
    <th>price</th>
    <th>brand</th>
    <th>rating</th>
    <th>Reviews</th>
    <th>Stock</th>
    <th>Action</th>
  </tr>
  {products.map(p => 
    <tr>
    <td>{p.name}</td>
    <td>{p.category}</td>
    <td><img className="tb_image" src={p.image}/></td>
    <td>{p.price}</td>
    <td>{p.brand}</td>
    <td>{p.rating}</td>
    <td>{p.numReviews}</td>
    <td>{p.inStock}</td>
    <td>
      <button className="bt"><Link to={'/upProduct/'+ p._id}>Update</Link></button>
      <button className="bt"onClick={() => delProduct(p._id)} >Delete</button>
    </td>
  </tr>
    )}
</table>
    </article>
    </section>
    </section>
    <div className="order_details">
      {load ? <div>Loading</div>:
      <div>
       <p className="heading">User Order</p>
       <table className="products">
         <tr>
           <th>Order ID</th>
           <th>Status</th>
           <th>Price</th>
           <th>Action</th>
          </tr>
          {orders.map( data =>
            <tr>
            <td>{data._id}</td> 
            <td>{data.status}</td> 
            <td>{data.totalPrice}</td> 
            <td>
            <button className="bt"><Link to={'/orderDetails/'+ data._id}>Details</Link></button>
              </td> 
           </tr>
          )}
       </table>
       </div>
      }
        </div>
        </div>
    )
}

export default Admin;
