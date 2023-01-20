import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './component/Form'
import List from './component/List'
import './component.Css/fom.css'
import './component.Css/list.css'
function App() {
  const initialproducts=[
    {
      id:1,
      name:"audifonos",
      category:"tecnologia",
      price:100,
      
    },
    {
      id:2,
      name:"coca cola",
      category:"food",
      price:2,
      
    }
  ]
  
 
  const [products,setProduts]=useState(initialproducts)
  const[productSelect,setProductSelect]=useState(null)
  const addProduct=(newProduct)=>{

    setProduts([ ...products, newProduct])
  }
  const eliminar=(id)=>{
    const filteid=products.filter(product=>product.id!==id)
    setProduts(filteid)
}
const selectProduct=(product)=>{
  setProductSelect(product)
}

 const deselectProduct=()=>{
    setProductSelect(null)
  }
const updateProduct=(newProduct)=>{
  const index=products.findIndex(product=>product.id===newProduct.id)
products[index]=newProduct;
setProduts([...products])

}

  return (
    <div className="App">
      <div className="butonForm">
        
      <label className='activarForm' htmlFor="btn-menu"><b>Formulario</b> </label>
      
      </div>
      <input id='btn-menu' type="checkbox" />
      <div  className="container-menu">
        <div className="cont-menu">
          <label className='x'  htmlFor="btn-menu"><i className="fa-solid fa-xmark"></i></label>
          <Form className='app-form'
           deselectProduct={deselectProduct}
            addProduct={addProduct} 
            productSelect={productSelect}
             updateProduct={updateProduct}/>
        </div>
      </div>
      <div >
        <List 
        products={products} 
        eliminar={eliminar}
        selectProduct={selectProduct}/>
    
      </div>
      </div>
  )
}

export default App
