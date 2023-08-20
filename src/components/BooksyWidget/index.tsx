import { useEffect, useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const BooksyWidget = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const injectStyles = () => {
    const iframeDocument = iframeRef?.current?.contentWindow;
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
    .booksy-override {
    }
    
    .card-header {
      display: none !important;
    }
    
    `;
    // iframeDocument?.document?.head.appendChild(styleElement);

    console.log(iframeDocument);
  };

  return (
    <Modal>
      <Modal.Button>
        <Button size="large">Book Appointment</Button>
      </Modal.Button>
      <Modal.Content className="flex h-full w-[calc(100%-50px)] items-center justify-center border-0 p-0">
        <div className="absolute right-[14px] top-[52px] z-50 flex h-10 w-12 items-center justify-center bg-transparent">
          <Modal.Close>
            <Button variant="text" className="h-full w-full"></Button>
          </Modal.Close>
        </div>
        <div className="h-full w-full overflow-hidden">
          <iframe
            id="booksy-widget"
            ref={iframeRef}
            src="https://booksy.com/widget/index.html?id=1042065&businessId=&appointmentUid=&lang=en&country=us&mode=dialog&theme=default&uniqueId=8ab50f496a"
            title="Booksey Widget"
            className="booksy-override h-[calc(100%+80px)] w-full"
            onLoad={() => injectStyles()}
          />
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default BooksyWidget;
