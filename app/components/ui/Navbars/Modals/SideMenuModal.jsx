import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ModalReg from "./ModalRegister.jsx";
import ModalLog from "./ModalLogin.jsx";
import Link from "next/link.js"



export default function SideMenuModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState('blur')
  
  const handleOpen = (backdrop) => {
    setBackdrop(backdrop)
    onOpen();
  }

  return (
    <>
       <FontAwesomeIcon icon={faBars} onClick={handleOpen}  className=' relative w-[20px] h-[20px]'/>
        <Modal 
        backdrop='blur'
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="center"
        className="max-h-[600px] overflow-y-auto "
      >
        <ModalContent>
          {(onClose) => (
            <>
              
              <ModalBody>
              <ModalHeader className="flex flex-col space-y-2 text-center mb-0 pb-0">
                <h1> URBANESWIM KENYA</h1>
                <p className="font-normal text-base text-start "> Kenya&apos;s closet for premium swimwear for both men and women</p>
              </ModalHeader>
                     {/* Side menu */}                    
                      <div className="relative flex flex-col space-y-2 p-2  m-2 text-lg text-black">
                      <ul className='flex flex-col space-y-4 p-4 '>
                      <li className='my-2 hover:font-semibold'>
                          <Link href='' >
                            <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                              Shop All
                            </p>
                          </Link>
                        </li>
                        <li className='my-2 hover:font-semibold'>
                          <Link href='' >
                            <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                              New Arrivals
                            </p>
                          </Link>
                        </li>
                        <li className='my-2 hover:font-semibold'>
                          <Link href='' >
                            <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                            Sale
                            </p>
                          </Link>
                        </li>
                        <li className='my-2 hover:font-semibold'>
                          <Link href='/pages/products/gift-card' >
                            <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                              Gift Cards
                            </p>
                          </Link>
                        </li>
              </ul>
              {/* Category menu */}
              <ul className='flex flex-col space-y-4 p-4 '>
              <li className="my-2 font-semibold">Something For Everyone</li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                     Men
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                   Women
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                     Children
                  </p>
                </Link>
              </li>
              {/* Modal menu */}
              <div className='my-2'>
                <p className='text-base text-slate-600 font-semibold p-2 m-2'>
                  Become a member at UrbaneSwim and enjoy exclusive offers and discounts
                </p>
                <div className='flex flex-row space-x-4 text-sm'>
                  <ModalReg />
                  <ModalLog />
                </div>
              </div>
              <li className='my-2 hover:font-semibold'>
                <Link href=''>
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                    <FontAwesomeIcon icon={faCartShopping} /> Orders
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                    <FontAwesomeIcon icon={faLocationDot} /> Our Store
                  </p>
                </Link>
              </li>
            </ul>
            {/* Help meu */}
              <ul className="flex flex-col space-y-4 p-4 ">
                <li className="font-semibold ">Need Help?</li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/pages/contact' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                     Contact Us
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/pages/faq' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                     Frequently Asked Questions
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/pages/care-tips' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                  Care Guide
                  </p>
                </Link>
              </li>
              <li className='my-2 hover:font-semibold'>
                <Link href='/pages/fit-guide' >
                  <p className='hover:underline underline-offset-8 decoration-2 decoration-black'>
                  Size Guide
                  </p>
                </Link>
              </li>
              </ul>

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
