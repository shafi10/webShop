import React,{useState} from 'react'
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../actions/product';


const PostProduct = (props) => {
 
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
     const dispatch = useDispatch()
    const {name ,category , image, price, brand, rating, numReviews, inStock} = formData
   const onChange = e => setFormData({...formData, [e.target.name]:e.target.value});
   const onSubmit = async e => {
       e.preventDefault();
        dispatch(addProduct({name ,category , image, price, brand, rating, numReviews, inStock}));
        setFormData({
          name:'',
          category:'',
          image:'',
          price:'',
          brand:'',
          rating:'',
          numReviews:'',
          inStock:''
      })
   }
    return (
        <div className="container">
            <h1 className="large text-primary heading">Add a new product</h1>
      <h3 className="lead"></h3>
      <form className="form" onSubmit = {e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" class="form-control" placeholder="Name" name="name"
          value = {name}
          onChange = {e => onChange(e)}
          required />
        </div>
        <div className="form-group">
          <input type="text" class="form-control" placeholder="category" name="category"
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
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
        </div>
    )
}


export default PostProduct;