"use client";

import { useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const BooksyWidget = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <Modal>
      <Modal.Button>
        <Button
          size="large"
          className="hover:border-2 hover:border-primary hover:bg-primary"
        >
          Book Appointment
        </Button>
      </Modal.Button>
      <Modal.Content
        className="flex h-full w-full items-center justify-center border-0 p-0 md:w-full md:max-w-[calc(100vw-100px)]"
        closeButtonClasses="right-5 top-4 bg-white p-1 rounded-full shadow-lg"
      >
        <div className="h-full w-full overflow-hidden">
          <iframe
            src="https://www.massagebook.com/therapists/the-mindful-body-massage/widget/services"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default BooksyWidget;
