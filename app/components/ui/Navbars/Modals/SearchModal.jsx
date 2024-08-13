import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from 'next/navigation';

export default function SearchModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();  

  // Handle search params
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name'); // Ensure 'name' matches the input name attribute

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };

  return (
    <>
      <FontAwesomeIcon icon={faSearch} onClick={onOpen} className='relative w-[20px] h-[20px]' />
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top"
      >
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSearch}>
              <Input
                name="name"  // Added name attribute to the input
                autoFocus
                endContent={
                  <FontAwesomeIcon icon={faSearch} />
                }
                label="Search"
                placeholder="Type to Search"
                variant="bordered"
                className="mt-5 pt-5"
              />
              <div className="flex flex-row justify-between m-3 p-3">
                <Button color="primary" type="submit">
                  Search
                </Button>
                <Button color="danger" variant="flat" onPress={() => onOpenChange(false)}>
                  Close
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
