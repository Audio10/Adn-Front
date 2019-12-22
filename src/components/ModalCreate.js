import React from "react";
import Modal from "./Modal";
import './styles/ModalCreate.css'

function ModalCreate(props) {
    
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div className="Modal__circulo">
                <div className="circulo"></div>
            </div>
            <div className="Modal__input__container">
                <input
                    onChange={props.onChange}
                    className="Modal__input"
                    type="text"
                    name="nombre"
                    placeholder="Nombre de humano"

                />
            </div>

            <div className="Modal__button__container">
                <button className="Modal__button btn btn-warning" onClick={props.onCreate}> Crear humano </button>
            </div>
        </Modal>
    );

}

export default ModalCreate;