import React, {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useAnimationControls,
} from "framer-motion";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const ModalContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {
    console.log("");
  },
});

const Modal = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <MotionConfig
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 1 }}
    >
      <ModalContext.Provider value={{ open, setOpen }}>
        <Dialog.Root modal open={open} onOpenChange={setOpen}>
          {children}
        </Dialog.Root>
      </ModalContext.Provider>
    </MotionConfig>
  );
};

function ModalButton({ children }: { children: ReactNode }) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

Modal.Button = ModalButton;

function ModalClose({ children }: { children: ReactNode }) {
  return <Dialog.Close asChild>{children}</Dialog.Close>;
}

Modal.Close = ModalClose;

const DropdownMenuContext = createContext({ closeMenu: () => console.log("") });

interface ModalProps extends React.ComponentProps<typeof Dialog.Portal> {
  children: ReactNode;
  className?: string;
  overlayClasses?: string;
  CloseButton?: React.FC<{ onClick: () => void }>;
}

function ModalChildren({
  children,
  className,
  overlayClasses,
  CloseButton,
  ...props
}: ModalProps) {
  const { open, setOpen } = useContext(ModalContext);
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start("closed");
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      void controls.start("open");
    }
  }, [controls, open]);

  return (
    <DropdownMenuContext.Provider value={{ closeMenu: () => void closeMenu() }}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount {...props}>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                className={twMerge(
                  "absolute inset-0 z-40 w-screen bg-black/50",
                  overlayClasses
                )}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: "translate(-50%, -50%) scale(.75)",
                }}
                animate={{
                  opacity: 1,
                  transform: "translate(-50%, -50%) scale(1)",
                }}
                exit={{
                  opacity: 0,
                  transform: "translate(-50%, -50%) scale(.75)",
                }}
                className={twMerge(
                  "fixed left-1/2 top-1/2 z-50 max-h-[calc(100vh-50px)] min-h-[50px] w-full min-w-[150px] max-w-[calc(100vw-30px)] -translate-x-1/2 -translate-y-1/2 overflow-x-hidden rounded-xl border-4 border-transparent bg-white p-8 shadow sm:max-w-[calc(100vw-50px)] md:w-1/2",
                  className
                )}
              >
                {children}
                <Dialog.Close asChild>
                  {CloseButton ? (
                    <CloseButton
                      aria-label="Close"
                      onClick={() => void closeMenu()}
                    />
                  ) : (
                    <Button
                      className="fixed right-1 top-1"
                      variant="text"
                      aria-label="Close"
                      onClick={() => void closeMenu()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                  )}
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuContext.Provider>
  );
}

Modal.Content = ModalChildren;

export default Modal;
