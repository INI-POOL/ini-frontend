// GlobalDialog.tsx
import {
    Dialog,
    Portal,
    CloseButton,
    DialogProps,
  } from "@chakra-ui/react";
  import { createContext, useCallback, useContext, useState } from "react";
  import { Button } from "@chakra-ui/react";
  
  const DialogContext = createContext(null);
  
  export const useGlobalDialog = () => useContext(DialogContext);
  
  export const GlobalDialogProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [dialogData, setDialogData] = useState({
      title: "",
      body: "",
      onConfirm: () => {},
    });
  
    const openDialog = useCallback(({ title, body, onConfirm }) => {
      setDialogData({ title, body, onConfirm });
      setIsOpen(true);
    }, []);
  
    const closeDialog = () => setIsOpen(false);
  
    const handleConfirm = () => {
      if (dialogData.onConfirm) dialogData.onConfirm();
      closeDialog();
    };
  
    return (
      <DialogContext.Provider value={{ openDialog }} >
        {children}
        <Dialog.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
          <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
              <Dialog.Content  style={{backgroundColor:'#24252b'}}>
                <Dialog.Header borderBottom={"solid #2c2d30 1px"}>
                  <Dialog.Title>{dialogData.title}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body paddingTop={"1.5rem"}>
                  <p>{dialogData.body}</p>
                </Dialog.Body>
                <Dialog.Footer>
                  {/* <Dialog.ActionTrigger asChild> 
                    <Button variant="outline" onClick={closeDialog}>
                      Cancel
                    </Button> 
                   </Dialog.ActionTrigger> */}
                  <Button onClick={handleConfirm} 
                  size={{base:"xs",md:"sm"}}
                  bgGradient="linear-gradient(90deg, #C9BFFF 0%, #AC9DFB 100%);"
                  color="#000"
                  minW={"4.5rem"}
                  _active={{bgGradient: "linear(90deg, #AC9DFB 0%, #C9BFFF 100%)"}}
                  _hover={{ bgGradient: "linear(90deg, #AC9DFB 0%, #C9BFFF 100%)" }}>OK</Button>
                </Dialog.Footer>
                <Dialog.CloseTrigger asChild>
                  <CloseButton size="sm" bg="transparent" color={"#6e6e6f"} />
                </Dialog.CloseTrigger>
              </Dialog.Content>
            </Dialog.Positioner>
          </Portal>
        </Dialog.Root>
      </DialogContext.Provider>
    );
  };