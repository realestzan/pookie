'use client'
import React, { useState } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

interface HLDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  button?: string;
  desc?: string;
}

const HLDialog: React.FC<HLDialogProps> = ({
  isOpen = false,
  setIsOpen = () => {},
  title = 'Default Title',
  button = 'Close',
  desc = 'Default Description'
}) => {
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <Transition appear show={isOpen}>
    <Dialog as="div" className="relative z-10 focus:outline-none" onClose={close} >
         {/* The backdrop, rendered as a fixed sibling to the panel container */}
         <div className="fixed inset-0 bg-primary/10 backdrop-blur-sm" aria-hidden="true" />
         
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto text-black">
        <div className="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0 transform-[scale(95%)]"
            enterTo="opacity-100 transform-[scale(100%)]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 transform-[scale(100%)]"
            leaveTo="opacity-0 transform-[scale(95%)]"
          >
            <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
              <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                {title}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                {desc}
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={close}
                >
                  {button}
                </Button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}

export default HLDialog
