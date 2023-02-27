import React, { useState } from 'react';
import '../styles/App.css';

import { Link, useParams } from 'react-router-dom';

import data from '../assets/data/product.json';

export function Flag(){
    return (
        <div>
            <h3>Bandera</h3>
        </div>
    )
}


export function ProductItem(props){
    return (
        <form className='card col-sm-3 py-4 my-3 mx-2 px-4 shadow-sm border-0' onSubmit={(event) => {
            event.preventDefault();
        }}>
            <h3 className='card-title text-start'>{props.nombre}</h3>
            <span className='card-text text-start'>${props.precio}</span>
            <Link className='btn btn-primary mt-4' to={{pathname:`/product/${props.id}`}}>Comprar</Link>
        </form>
    );
}



export function ProductList(){

    const [products, setProduct] = useState(data);
    
    return(
        <div className='container'>
            <div className='row my-5 p-5 mb-4 bg-light rounded-3 shadow-sm'>
                <h1>Productos</h1>
                {products.products.map((product, index) => (
                    <ProductItem key={index.toString()} id={index} nombre={product.nombre} precio={product.precio}></ProductItem>
                ))}
            </div>
        </div>
    );
}

export function Product(props){
    const { id } = useParams();

    const [products, setProduct] = useState(data);

    let product = products.products[id];

    return (
        <div className='container'>
            <div className='row my-5 p-5 mb-4 bg-light rounded-3 shadow-sm'>
                <h1 className='card-title text-start'>{product.nombre}</h1>
                <span className='card-text text-start'>${product.precio}</span>
            </div>
        </div>
    );

}





