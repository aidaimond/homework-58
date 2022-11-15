import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showNewAlert, setShowNewAlert] = useState(false);

  const cancel = () => setShowModal(false);

  const continues = () => {
    alert('You clicked continue!');
  };

  const buttons = [
    {type: 'primary', label: 'Continue', onClick: continues},
    {type: 'danger', label: 'Close', onClick: cancel}
  ];

  const closeAlert = () => setShowAlert(false);

  return (
    <>
      <button className="w-25 btn btn-primary m-2" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <button className="w-25 btn btn-primary m-2" onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
      <button className="w-25 btn btn-primary m-2" onClick={() => setShowNewAlert(true)}>
        Show Second Alert
      </button>
      <Modal show={showModal} title="Modal title" onClose={cancel}>
        <div className="modal-footer">
          {buttons.map((button) => (
              <button key={Math.random()} className={'btn btn-' + button.type}
                      onClick={button.onClick}>{button.label}</button>
            )
          )}
        </div>
      </Modal>
      <Alert showAlert={showAlert} type={'primary'} onDismiss={closeAlert}>
        This is a primary type alert
      </Alert>
      <Alert showAlert={showNewAlert} type={'danger'}>
        This is a danger type alert
      </Alert>
    </>
  );
}

export default App;
