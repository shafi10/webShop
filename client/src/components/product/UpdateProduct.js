import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom";
import { useDispatch ,useSelector} from 'react-redux';
import { updateProduct,single_product } from '../../actions/product';


const UpdateProduct = (props) => {
    const dispatch = useDispatch()
    const singleProduct = useSelector(state => state.product)
    const {product,error,loading } = singleProduct
 
    useEffect(()=>{
      dispatch(single_product(props.match.params.id))
    }, []);


    const [formData, setFormData ] = useState({
        name:'',
        category:'',
        image:'',
        price:'',
        brand:'',
        rating:'',
        numReviews:'',
        inStock:''
    });
    const openData =(product)=>{
      setFormData({
        name:product.name,
        category:product.category,
        image:product.image,
        price: product.price,
        brand: product.brand,
        rating:product.rating,
        numReviews:product.numReviews,
        inStock:product.inStock,
      })
    }

   const {name ,category , image, price, brand, rating, numReviews, inStock} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
        dispatch(updateProduct(product._id,formData));
        props.history.push('/admin');
   }
    return (
      loading ? <div>loading</div> :  
        <div className="container">
          <div className="up-confirm">
             Are you sure to update? <input type="submit" onClick={() => openData(product)} className="btn btn-primary" value="Click Here" />
         </div>
            <h1 className="large text-primary heading">Update product</h1>
      <h3 className="lead"></h3>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input class="form-control" type="text" placeholder="Name" name="name"
          value = {name}
          onChange = {e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input  type="text" class="form-control" placeholder="category" name="category"
          value = {category}
          onChange = {e => onChange(e)}
          required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Image URL"
            name="image"
            value = {image}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Price"
            name="price"
            value = {price}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="brand"
            name="brand"
            value = {brand}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Rating"
            name="rating"
            value = {rating}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Number of Reviews"
            name="numReviews"
            value = {numReviews}
          onChange = {e => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            class="form-control"
            placeholder="Number of Stock"
            name="inStock"
            value = {inStock}
          onChange = {e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Update" />
      </form>
        </div>
    )
}


export default UpdateProduct;