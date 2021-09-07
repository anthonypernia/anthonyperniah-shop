import React from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {data} from "../data";
function ItemDetailContainer() {
    const [product , setProduct] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const { id } = useParams();

    React.useEffect(() => {
        new Promise((resolve, reject) => {
            setLoading(true);
            setTimeout(
                () => resolve(data.filter((item) => item.id == id))
                , 100
                );
    }).then((data)=> setProduct(data[0])).finally(()=> setLoading(false));
    }, []);

    return (
        <React.Fragment>
            {loading ? <h3 className="align-self-center">Loading...</h3> : <ItemDetail product={product} />}
        </React.Fragment>
    
    );
}

export  {ItemDetailContainer};