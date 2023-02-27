import React from 'react';



export default function NotFoundError(){
    return(
        <div className='container my-5  user-select-none'>
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
                <div className="container-fluid py-5">
                    <h1 className='display-1 fw-5 text-center'>404</h1>
                    <h2 className="display-5 fw-bold mb-4 text-center">&#128557; Contenido no encontrado &#128557;</h2>
                    <h3 className="fs-4 text-center">Aca no hay nada capo, el link no existe</h3>
                </div>
            </div>
        </div>
    )
}