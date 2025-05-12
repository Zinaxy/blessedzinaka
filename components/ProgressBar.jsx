import React from 'react';

const ProgressBar = ({ width }) => {
  return (
    <div className='w-full border border-primary rounded-md'>
      <div
        className='bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none'
        style={{ width: `${width}` }}
      >
        {width}
      </div>
    </div>
  );
};

export default ProgressBar;
