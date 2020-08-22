import React,{useEffect} from 'react'
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
     <div className="row mt-5">
     <div className="col-md-4">
     <Link className="btn btn-primary" to="/addProduct">Insert Product</Link>
    </div>
   <div className="col-md-8">
     <h1>Welcome Admin Dashboard</h1>
   </div>
  </div>


<div className="product-table">
<div className="border-bottom text-success mb-2 mt-4"><h1>Products Details</h1></div>
   <table className="table table-bordered">
   <thead>
     <tr className="table-success">
       <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col" >image</th>
       <th scope="col">price</th>
      <th scope="col">brand</th>
       <th scope="col">Reviews</th>
      <th scope="col">Stock</th>
      <th scope="col">Rating</th>
      <th scope="col">Action</th>
  </tr>
  </thead>
  {products.map(p => 
  <tbody>
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
      <Link className="btn btn-primary mr-2" to={'/upProduct/'+ p._id}>Update</Link>
      <button className="btn btn-primary"onClick={() => delProduct(p._id)} >Delete</button>
    </td>
  </tr>
  </tbody>
    )}
</table>
</div>

<div>
{load ? <div>Loading</div>:
      <div>
       <div className="border-bottom text-success mb-2 mt-4"><h1>Order Details</h1></div>
       <table className="table table-bordered">
       <thead>
         <tr className="table-warning">
           <th>Order ID</th>
           <th>Status</th>
           <th>Price</th>
           <th>Action</th>
          </tr>
       </thead>
          {orders.map( data =>
          <tbody>
            <tr>
            <td>{data._id}</td> 
            <td>{data.status}</td> 
            <td>{data.totalPrice}</td> 
              <td>
               <Link className="btn btn-primary" to={'/orderDetails/'+ data._id}>Details</Link>
                </td> 
              </tr>
              </tbody>
            )}
          </table>
          </div>
        }
      </div>  
        </div>
    )
}

export default Admin;
