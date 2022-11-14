import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const cancel = () => setShowModal(false);

  const continues = () => {
    alert('hello');
  };

  const buttons = [
    {type: 'btn btn-primary', label: 'Continue', onClick: continues},
    {type: 'btn btn-danger', label: 'Close', onClick: cancel}
  ];

  return (
    <>
      <Alert showAlert={showAlert}/>
      <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <button className="w-100 btn btn-primary" onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
      <Modal show={showModal} title="Modal title" onClose={cancel}>
        <div className="modal-footer">
          {buttons.map((button) => (
            <button className={button.type} onClick={button.onClick}>{button.label}</button>
            )
          )}
        </div>
      </Modal>
    </>
  );
}

export default App;
