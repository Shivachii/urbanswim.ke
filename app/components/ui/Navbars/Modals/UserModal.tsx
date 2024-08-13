import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalReg from "./ModalRegister.jsx";
import ModalLog from "./ModalLogin.jsx";



export default function UserModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <FontAwesomeIcon icon={faUser}  onClick={onOpen} className='relative w-[20px] h-[20px]'/>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              
              <ModalBody>
              <ModalHeader className="flex flex-col gap-1 text-center">
                <h1>WELCOME TO URBANESWIM KENYA</h1>
                <p className="font-normal text-sm"> Kenya's closet for premium swimwear for both men and women</p>
              </ModalHeader>
                <div className="flex py-2 px-1 items-center justify-center space-x-4">
                  <ModalReg/>
                  <ModalLog/>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
