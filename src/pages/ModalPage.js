import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage(){

    const [showModal,setShowModal]=useState(false);

    const handleClick=()=>{
        setShowModal(true)
    }
    const handleClose=()=>{
        setShowModal(false);
    }

    const actionBar= <Button onClick={handleClose} primary>I accept</Button>
const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>here is an important agreement for you to accept</p>
</Modal>

    return <div>
        <Button onClick={handleClick} primary>Open Modal</Button>
     {showModal && modal}
    </div>
}
export default ModalPage;