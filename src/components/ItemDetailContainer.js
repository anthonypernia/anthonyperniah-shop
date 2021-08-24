import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {data} from "./data";
function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);

    const { id } = useParams();

    React.useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(
                () => resolve(data.filter((item) => item.id == id))
                , 3000
                );
    }).then((data)=> setProduct(data[0]));
    }, []);

    return (
      <div>
        <ItemDetail text="texto enviado de prueba 1" product={product}/>
      </div>
    );
}

export  {ItemDetailContainer};