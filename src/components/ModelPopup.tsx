import React, { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";

export default function ModelPopup() {
  const [isOpen, setIsOpen] = useState(true); // Set isOpen to true initially

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Use useEffect to open the modal when the component is mounted
  useEffect(() => {
    openModal();
  }, []);

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              You can enter your Email Address
            </AlertDialogTitle>
            <AlertDialogDescription>
              We will send you a mail when we are ready to launch and you can be
              the first to know about it!
              {/* input */}
              <AlertDialogDescription className=" my-4">
                <Input className="border-2" placeholder="Enter your email" />
              </AlertDialogDescription>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
