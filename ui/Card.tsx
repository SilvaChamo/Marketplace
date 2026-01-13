import React from 'react';

const Card: React.FC<{ title?: string; children?: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {title && <h3 className="text-lg font-bold mb-3">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
