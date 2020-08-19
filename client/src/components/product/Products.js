import React,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { get_product } from '../../actions/product'
import { useDispatch,useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
      maxWidth: 270,
    },
    media: {
      height: 140,
    },
  });

const Products = () => {

const productState = useSelector(state => state.product)
 const {products,error,loading } = productState
const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(get_product())
  }, []);

    
    const classes = useStyles();

    return (

      loading ? <div>loading</div> :
      <div className="container">
        <h1>Product List</h1>
      { products.map(product => 
      <div className="productList">
        <Card className={classes.root }>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           <Link className="link" to={'product/'+ product._id}>{product.name}</Link>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <p>Brand: {product.brand}</p>
         <p className="qty">Price: {product.price} TK</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link className="link" to={'product/'+ product._id}>Details</Link>
        </Button>
      </CardActions>
    </Card>
    </div>
        )}
        </div>
    )
}


export default Products;