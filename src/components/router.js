import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "../App";
import { ProductList, Product} from "./product";
import Header from "./header";
import NotFoundError from "./notFoundError";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/product-list' element={<ProductList/>}/>
                <Route path='/product/:id' element={<Product/>}/>
                <Route path='*' element={<NotFoundError/>}/>
            </Routes>
        </BrowserRouter>
    );
}


