import React from 'react';
import '../component.Css/list.css'
const List = ({products,eliminar,selectProduct}) => {
    
    return (

        <div>
            
            <ul className='grid-container'>
                
                    {
                        products.map(product=>(
                            
                            <li key={product.id}>
                                <h3><b>Name: </b>{product.name}</h3>
                                <h3><b>Producto: </b>{product.category}</h3>
                                <h3><b>Price: </b>{product.price} $</h3>
                                <div className="li-butom">
                                
                                    <button onClick={()=>{eliminar(product.id)}} >Eliminar</button>
                                <button  onClick={()=>{selectProduct(product)}}>Editar</button>
                            
                                </div>
                                </li>
                            
                        ))
                    }
                
            </ul>
        </div>
    );
};

export default List;