import React from 'react';
import PropTypes from 'prop-types';

const Resumen = ({title, cotizacion}) => {
     const {marca, year, plan} = cotizacion;
     
     const convertirPrimerLetraMayuscula = (texto) => {
          return texto.charAt(0).toUpperCase() + texto.slice(1);
     }
     if(Object.keys(cotizacion).length === 0) return null;
     return (
          <div className="card bg-dark text-white my-3 text-center">
               <div className="card-header bg-primary">
                    <h3 className="card-title">{title}</h3>
               </div>
               <div className="card-body">
                    <ul className="list-group list-group-flush lead">
                         <li className="list-group-item bg-dark"><span className="font-weight-bolder">Marca: </span>{convertirPrimerLetraMayuscula(marca)}</li>
                         <li className="list-group-item bg-dark"><span className="font-weight-bolder">Plan: </span>{convertirPrimerLetraMayuscula(plan)}</li>
                         <li className="list-group-item bg-dark"><span className="font-weight-bolder">Año del Auto: </span>{year}</li>
                    </ul>
               </div>
          </div>
     );
}
Resumen.propTypes = {
     title: PropTypes.string.isRequired,
     cotizacion: PropTypes.object.isRequired
}
export default Resumen;