import React,{useEffect,useState} from 'react'
import {single_product} from '../../actions/product'
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
  });

const ProductDetails = (props) => {

    const [ qty ,setQty] = useState(1)
    const singleProduct = useSelector(state => state.product)
    const {product,error,loading } = singleProduct
   const dispatch = useDispatch();
     useEffect(()=>{
       dispatch(single_product(props.match.params.id))
     }, []);

   const sendAddToCart = () =>{
       props.history.push("/cart/"+ props.match.params.id + "?qty=" + qty);
   }

     const { isAuthenticated } = useSelector(state => state.auth);

     const classes = useStyles();
    return (
        <div className="container">
            <div className="card">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="400"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <h3>Product Name:  {product.name}</h3>
            <p>Brand: {product.brand}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <h3>Price: {product.price} Taka</h3> 
           <h5> Rating: {product.rating}</h5>
          </Typography>
          QTY: <select className="qty" value={qty} onChange= { (e) => setQty(e.target.value)}>
              {[...Array(product.inStock).keys()].map(x => 
                <option key={x+1} value={x+1}>{x+1}</option>)}
          </select>
        </CardContent>
      </CardActionArea>
      <CardActions>
        { isAuthenticated ? <div>
         {product.inStock > 0 ? <Button size="small" color="primary" onClick={sendAddToCart}>
          Add To Cart
        </Button>: <div>Out Of Stock</div>} </div>: <div>Login to add item in cart <Link className="btn" to='/login'>Login</Link></div>}
          
      </CardActions>
    </Card>
    </div>
    </div>
    )
}

export default ProductDetails
