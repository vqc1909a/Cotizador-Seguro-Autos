import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';
import {CSSTransition} from 'react-transition-group';

function App() {
   const [cotizacion, changeCotizacion] = useState({});
   const [spinner, changeSpinner] =  useState(false);
  const [inProp, setInProp] = useState(false);
   const agregarCotizacion = (cotizacion) => {
     changeCotizacion(cotizacion)
   }
   useEffect(() => {
     if (Object.keys(cotizacion).length !== 0){
      changeSpinner(true);
      setInProp(false);
       setTimeout(()=>{
         changeSpinner(false);
         setInProp(true);
       }, 3000)
     }
   }, [cotizacion])
  return (
    <Fragment>
      <Header title="Cotizador de Seguros"></Header>
      <main>
         <section className="cotizador" id="cotizador">
               <div className="container">
                    <div className="row justify-content-center">
                         <div className="col-sm-10 col-md-8">
                              <Formulario title="Cotizador de Seguros" agregarCotizacion={agregarCotizacion} />
                              <Spinner spinner={spinner} />
                              
                              {!spinner
                               ?
                               <Fragment>
                                  <Resumen title="Resumen de la Cotización" cotizacion={cotizacion} />
                                  <CSSTransition in={inProp} timeout={1000} classNames="resultado">
                                    <Resultado title="Elige marca, año y tipo de seguro" cotizacion={cotizacion} />
                                  </CSSTransition>
                               </Fragment>
                                :
                                null
                              }
                         </div>
                    </div>
               </div>
          </section>
      </main>
    </Fragment>
  );
}

export default App;
