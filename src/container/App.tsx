import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";

function App() {
    const [showModal, setShowModal] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    // const close = () => setShowAlert(false);

    const cancel = () => setShowModal(false);

  return (
    <>
      <Alert showAlert={showAlert}/>
      <button className="w-100 btn btn-primary" onClick={() => setShowModal(true)}>
        Show Modal
      </button>
      <button className="w-100 btn btn-primary" onClick={() => setShowAlert(true)}>
        Show Alert
      </button>
      <Modal show={showModal} title="Order" onClose={cancel}>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
