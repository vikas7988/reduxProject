import { useEffect, useState } from "react";
import jeweleryAction from "./redux/JeweleryAction";
import { useDispatch } from "react-redux";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Jewelery() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const data = useSelector((productdata)=>{

    return productdata.product.jewelery
  })
console.log(state);
  useEffect(()=>{

if(data.length===0){
   
        fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((res) => {
        jeweleryAction(res, dispatch);
        console.log(res)
        setState(res);
      })}else{
        setState(data)
      }
      

    },[])
  

  return (
    <div>
      {state.map((el) => {
        return (
          <div>
            <h4>{el.title}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Jewelery;
