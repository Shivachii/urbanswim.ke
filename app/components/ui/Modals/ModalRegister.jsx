'use client';
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon.jsx';
import { LockIcon } from './LockIcon.jsx';
// VALIDATION IMPORTS
import { auth } from '@/app/api/firebase/firebaseconfig.js'; 
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function ModalReg() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent form default submission
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail(''); // Clear email input
      setPassword(''); // Clear password input
      onOpenChange(false); // Close modal on successful sign-up
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Button onPress={onOpen} className="bg-black text-white">Sign Up</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign Up</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                  <Input
                    autoFocus
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    value={email}
                    name="email"
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                     className="required:border-red-500 valid:border-green-500 invalid:border-red-500"
                  />
                  <Input
                    endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    name="password"
                    variant="bordered"
                    value={password}
                    required
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                      className="valid:border-green-500 invalid:border-red-500"
                  />
                  <div className="flex py-2 px-1 justify-between">
                    <Checkbox
                      classNames={{
                        label: "text-small",
                      }}
                    >
                      Remember me
                    </Checkbox>
                    <Link color="primary" href="#" size="sm">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="flex py-2 px-1 justify-between">
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" type="submit">
                      Sign Up
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
