
import { Button, Input, InputGroup, Dialog, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { IconButton,CloseButton } from "@chakra-ui/react"
// import { LuSearch } from "react-icons/lu"
import SearchIcon from "@/assets/img/search.svg"


const MAX_CHARACTERS = 250

const SearchInput = () => {
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <InputGroup
     padding={0}
     style={{borderRadius:"0.625rem"}}
     _hover={{
      // border: "1px solid var(--input-border, #3B3B3B)", // 不变色
      boxShadow: "none"
    }}
    _focusWithin={{
      // border: "1px solid var(--input-border, #3B3B3B)", // 保持一致
      boxShadow: "none"
    }}
    className="search-box"
    //  border="1px solid var(--input-border, #3B3B3B);"
      endElement={
        <IconButton  className="search-btn"  onClick={() => {
          if (value == "" || value.startsWith("ox")) {
            setIsOpen(true)
            return
          }
          navigate('/mining/' + value)
        }}>
          <img src={SearchIcon} alt="search" className="search-ico" />  
        </IconButton>
      }
    >
      <Flex>
      <Input
        placeholder="Please enter address"
        value={value}
        className="myinput"
        border={"none"}
        borderRadius={"0.625rem"}
        
        onChange={(e) => {
          setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
        }}
      />
         <Dialog.Root key={"myHeaderDialog"} open={isOpen} onOpenChange={setIsOpen} zIndex={1500}>
          {/* <Dialog.Trigger />
        <Dialog.Backdrop /> */}
          <Dialog.Positioner>
            <Dialog.Content style={{backgroundColor:'#24252b'}} zIndex={1500}>
              <Dialog.CloseTrigger>
                <CloseButton size="sm" onClick={() => setIsOpen(false)} style={{color:'#eee'}} _hover={{background:'none'}}/>
              </Dialog.CloseTrigger>
              <Dialog.Header>
                <Dialog.Title >prompt</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body >
                Invalid address
              </Dialog.Body>
              <Dialog.Footer />

            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Root>
      </Flex>
     
    </InputGroup>
  )
}

export default SearchInput;

