import React from 'react';

interface Props extends React.PropsWithChildren{
  // type: string;
  // onDismiss: () => void;
  showAlert: boolean;
}

const Alert: React.FC<Props> = ({showAlert,children}) => {
  return (
    <>
      <div className="alert alert-primary" role="alert"
           style={{display: showAlert ? 'block' : 'none'}}>
        A simple primary alert—check it out!
      </div>
      {children}
    </>
  );
};

export default Alert;