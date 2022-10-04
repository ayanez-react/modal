import data from "./assets/publications.json";
import "./assets/publications.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';

export default function Publications() {

    const [selectedPub, setselectedPub] = useState('');
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (<div>
        <h1> Publications </h1>
        <div className="row">  {

            data.body.publications.map((pub) =>

                < div className="col-md-4" >

                    <div className='mano borde-imagen-claro' >

                        <img src={pub.thumbnail}

                            className='manito'
                            onClick={() => { setModal(!modal); setselectedPub(pub) }}
                            height='300px'
                            width='200px'

                        />

                        <div> {pub.title} </div>

                    </div>

                </div>

            )
        }
        </div>

        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> {selectedPub.title} {selectedPub.date} </ModalHeader>
            <ModalBody>
                <img className='borde-imagen-oscuro' src={selectedPub.thumbnail} /> <p>{selectedPub.description}</p>
            </ModalBody>
            <ModalFooter >
                <Button color="secondary" onClick={toggle}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    </div>
    );
};