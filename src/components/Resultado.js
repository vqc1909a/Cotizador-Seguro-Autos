import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Resultados = ({cotizacion, title}) => {
     const {precio} = cotizacion;

     let mensaje;
     if(!precio){
          mensaje = <div className="p-3 bg-primary lead border text-center text-white my-3">{title}</div>
     }else{
          mensaje = <div className="p-3 bg-primary border lead text-uppercase text-center text-white my-3">El total es: $ {precio}</div>
     }
     return (
          <Fragment>
               {mensaje} 
          </Fragment>
     );
}
Resultados.propTypes = {
     cotizacion: PropTypes.object.isRequired,
     title: PropTypes.string.isRequired
}
export default Resultados;
