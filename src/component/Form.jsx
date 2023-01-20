import React, { useEffect, useState } from 'react';

const Form = ({addProduct,productSelect,updateProduct,deselectProduct}) => {

    const [name,setName]=useState("")
    const [category,setCategory]=useState("")
    const [price,setPrice]=useState("")
    const [isAvailable,setIsAvailable]=useState(false)

    useEffect (()=>{
        if(productSelect!==null){
        setName(productSelect.name)
        setCategory(productSelect.category)
        setPrice(productSelect.price)
    }else{
        reset()
    }
    },[productSelect])

    const submit=e=>{
        e.preventDefault();
        const newProduct={
            name,
            category,
            price
            
        }
        if(productSelect!==null){
            newProduct.id=productSelect.id
            updateProduct(newProduct)
            deselectProduct()
        }else{
            newProduct.id=Date.now();
        addProduct(newProduct)
        reset()
        }
        
    }
    const reset=()=>{
        setName("");
        setCategory("");
        setPrice("");
        setIsAvailable(false);
    }
    
    return (
        <div>
            <h2 className='tile-form'>Product Form</h2>
            <form className='form' onSubmit={submit}>
                <div className="input-container">
                <label htmlFor="name">Name: </label>
                <input 
                type="text" 
                id='name' 
                placeholder='name'
                onChange={e=>setName(e.target.value)}
                value={name}
                />
            </div>
            <div className="input-container">
                <label htmlFor="category">Category: </label>
                <input 
                type="text" 
                id='category' 
                placeholder='category'
                onChange={e=>setCategory(e.target.value)}
                value={category}
                />
            </div>
            <div className="input-container">
                <label htmlFor="price">Price: </label>
                <input 
                type="number" 
                id='price'
                placeholder='price'
                onChange={e=>setPrice(e.target.value)}
                value={price}
                />
            </div>
           <div className="cont-butom">
            <button  type='submit'>{productSelect!==null? "actualizar":"crear"}</button>
            {productSelect !== null && (<button onClick={deselectProduct} type='button'>deseleccionar</button>)}
            
            
           </div>
            </form>
            
        </div>
    );
};

export default Form;