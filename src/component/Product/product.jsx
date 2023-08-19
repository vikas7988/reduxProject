import  "./product.css"
import { Link, Outlet } from "react-router-dom";
function Product() {


   

  return <div>



        <div className='firstDiv' >
        <ul>
            <Link to='electronics'>Electronics</Link>
            <Link to='jewelery'>Jewelery</Link>
            <Link to='mensClothing'>Mens Clothing</Link>
            <Link to='womenClothing' >Womens Clothing</Link>
        </ul>
        </div>

        <div className="secondDiv">   
            <Outlet/>

        </div>
  







  </div>;
}

export default Product;
