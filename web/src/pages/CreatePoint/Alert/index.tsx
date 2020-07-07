import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

const Alert = () => {
  return (
    <div id="success">
      <span><FiCheckCircle /></span>
      <h1>Cadastro concluído</h1>
    </div>
  );
};

export default Alert;
