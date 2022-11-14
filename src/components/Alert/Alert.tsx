import React from 'react';

interface Props {
  // type: string;
  // onDismiss: () => void;
  showAlert: boolean;
}

const Alert: React.FC<Props> = ({showAlert}) => {
  return (
    <>
      <div className="alert alert-primary" role="alert"
           style={{display: showAlert ? 'block' : 'none'}}>
        A simple primary alert—check it out!
      </div>
    </>
  );
};

export default Alert;