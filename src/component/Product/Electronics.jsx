import { useEffect, useState } from "react";
import ElectronicAction from "./redux/ElectronicAction";
import {useDispatch} from 'react-redux'
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function Electronics() {
  const [state, setState] = useState([]);
  const dispatch = useDispatch()

const data = useSelector((productData)=>{

    return productData.product.electronic
})

  useEffect(() => {

    if(data.length===0){
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((res) => {
        setState(res)
        ElectronicAction(res, dispatch)
  })}else{
    setState(data)
  }

    
    
     }   ,[])
  

  return (
    <div>
      {state.map((el) => {
        return <div>
            <h4>{el.title}</h4>
        </div>;
      })}
    </div>
  );
}

export default Electronics;
