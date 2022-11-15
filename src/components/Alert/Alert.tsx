import React from 'react';

interface Props extends React.PropsWithChildren {
  showAlert?: boolean;
  showNewAlert?: boolean;
  type: string;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({showAlert, showNewAlert, type, onDismiss, children}) => {
  return (
    <>
      <div className={"alert m-2 alert-" + type}
           style={{display: showAlert || showNewAlert ? 'block' : 'none'}}>
        {children}
        <button type="button" className={onDismiss ? 'btn-close float-end' : 'd-none'} onClick={onDismiss}></button>
      </div>
    </>
  );
};

export default Alert;