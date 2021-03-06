import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
  width: 70%;
  height: fitcontent;
  background-color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  z-index: 99;
  text-align: center;ewa
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  initial: { top: '-50%', transition: { type: 'spring' } },
  isOpen: { top: '50%' },
  exit: { top: '-50%' },
};

const Modal = ({ handleClose, isOpen, modalContent }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          onClick={handleClose}
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer
            variants={containerVariant}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#5c3aff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#5c3aff"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </CloseButton>

            <div className="modal-container">
              <h1 className="modal-header">{modalContent.title}</h1>
              <img className="modal-image" src={modalContent.imgSrc} />
              <div>
                <a
                  className="projects-link"
                  target="_blank"
                  href={modalContent.liveLink}
                >
                  See live project
                </a>
              </div>
              <div>
                <a
                  className="projects-link"
                  target="_blank"
                  href={modalContent.gitLink}
                >
                  See project on Github
                </a>
              </div>
              <p className="modal-body">{modalContent.description}</p>
            </div>
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
