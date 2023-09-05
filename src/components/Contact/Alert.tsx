import React from 'react';

interface AlertProps {
  severity: boolean;
  children: string;
}

const Alert: React.FC<AlertProps> = ({ severity, children }) => {
  let bgColor = '';
  let textColor = '';

  switch (severity) {
    case true:
      bgColor = 'bg-green-200';
      textColor = 'text-green-800';
      break;
    default:
      break;
  }

  return (
    <div
      className={` fixed bottom-1/2  rounded-xl border-l-4 ${bgColor} border-green-500 p-4`}
      role='alert'
    >
      <p className={` font-bold ${textColor} `}>{children}</p>
    </div>
  );
};

export default Alert;
