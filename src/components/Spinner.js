import React from 'react';
import '../styles/Spinner.css';
import PropTypes from 'prop-types';

const Spinner = ({spinner}) => {
     if(!spinner) return null;

     return (
          <div className="spinner"></div>
     );
}
Spinner.propTypes = {
     spinner: PropTypes.bool.isRequired
}
export default Spinner
