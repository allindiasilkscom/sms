import React from 'react';
import Ssm from '../Assets/pdf/SMS.pdf';

const Certificates = () => {
  return (
    <div className='bg-cyan-900 h-screen'>
      <embed src={Ssm} type="application/pdf" width="100%" height="100%" />
    </div>
  );
};

export default Certificates;
