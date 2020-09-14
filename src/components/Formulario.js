import React, {Fragment, useState} from 'react';
import PropTypes from 'prop-types';
const Formulario = ({title, agregarCotizacion}) => {
     const [cotizacion, changeCotizacion] = useState({
          marca: '',
          year: '',
          plan: '',
          error: ''
     })
     const {marca, year, plan, error} = cotizacion;

     const handleCotizacion = (e) => {
          changeCotizacion({
               ...cotizacion,
               [e.target.name]: e.target.value
          })
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if(marca.trim() === '' || year.trim() === '' || plan.trim() === ''){
               changeCotizacion({
                    ...cotizacion,
                    error: 'Los campos son requeridos'
               })
               return null;
          }
          //!Precio base de la actualidad
           let preciobase = 2000;

           //!Aumento por la marca del automovil
           //!Americano 15%
           //!Asiatico 5%
           //!Europeo 30%
          preciobase = obtenerPrecioMarca(marca, preciobase);

          //!Obtener la difrenecia de años con respecto a la actualidad
          const diferencia = obtenerDiferenciaYear(year);
          //!Por cada añop hay que restar el 3% del precio base de la actualidad
          preciobase *= 1 - 0.03 * diferencia;
          
          //!Basico aumenta 20% y completo 50%
          preciobase = obtenerPrecioPlan(plan, preciobase).toFixed(2);
          
          agregarCotizacion({
               ...cotizacion,
               precio: preciobase
          });
          changeCotizacion({
               marca: '',
               year: '',
               plan: '',
               error: ''
          })
           
     }
     const obtenerPrecioMarca = (marca, preciobase) => {
          if(marca === 'americano'){
               return preciobase * 1.15;
          }else if (marca === 'asiatico'){
               return preciobase * 1.05;
          }else if (marca === 'europeo'){
               return preciobase * 1.3;
          }
     }
     const obtenerDiferenciaYear = (year) => {
          return new Date().getFullYear() - year
     }
     const obtenerPrecioPlan = (plan, preciobase) => {
          if(plan === 'basico'){
               return preciobase * 1.2
          }else if(plan === 'completo'){
               return preciobase * 1.5
          }
     }
     
     return (
         <Fragment>
               <div className="formulario bg-primary card">
                    <div className="formulario-header card-header text-center">
                         <h2 className="card-title text-white mb-0">{title}</h2>
                    </div>
                    <div className="formulario-body card-body bg-dark text-white">
                         {error ? <div className="alert alert-danger">{error}</div> : null}
                         <form onSubmit={handleSubmit}>
                              <div className="input-group input-group-lg mb-3">
                                   <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary">
                                             <i className="fas fa-marker mr-2"></i>
                                             Marca
                                        </span>
                                   </div>
                                   <select value={marca} name="marca" id="marca" className="form-control form-control-lg" onChange={handleCotizacion}>
                                        <option value="" disabled>...Seleccionar</option>
                                        <option value="americano">Americano</option>
                                        <option value="europeo">Europeo</option>
                                        <option value="asiatico">Asiático</option>
                                   </select>
                              </div>

                              <div className="input-group input-group-lg mb-3">
                                   <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary">
                                             <i className="far fa-calendar-alt mr-2"></i>
                                             Año
                                        </span>
                                   </div>
                                   <select value={year} name="year" id="year" className="form-control form-control-lg" onChange={handleCotizacion}>
                                        <option value="" disabled>...Seleccionar</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                   </select>
                              </div>
                              <div className="input-group input-group-lg mb-3">
                                   <div className="input-group-prepend">
                                        <span className="input-group-text bg-primary">
                                             <i className="fas fa-seedling mr-2"></i>
                                             Plan
                                        </span>
                                   </div>
                                   <div className="form-control d-flex justify-content-around">
                                        <div className="form-check form-check-inline">
                                             <input className="form-check-input" type="radio" name="plan" id="basico" value="basico" checked={plan === 'basico'} onChange={handleCotizacion}/>
                                             <label className="form-check-label" htmlFor="basico">Basico</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                             <input className="form-check-input" type="radio" name="plan" id="completo" value="completo" checked={plan === 'completo'} onChange={handleCotizacion}/>
                                             <label className="form-check-label" htmlFor="completo">Completo</label>
                                        </div>
                                   </div>
                              </div>
                              <button type="submit" className="btn btn-primary btn-lg btn-block">Cotizar</button>
                         </form>
                    </div>
               </div>
         </Fragment>
     );
}
Formulario.propTypes = {
     title: PropTypes.string.isRequired,
     agregarCotizacion: PropTypes.func.isRequired
}
export default Formulario;