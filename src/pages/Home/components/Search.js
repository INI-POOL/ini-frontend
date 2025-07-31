
import { Input, InputGroup, Text, Image, Flex } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { IconButton} from "@chakra-ui/react"
import SearchIcon from "@/assets/img/search.svg"
import { useGlobalDialog } from "@/components/ui/GlobalDialogProvider";


const MAX_CHARACTERS = 500

const SearchInput = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const { openDialog } = useGlobalDialog();
  const showDialog = () => {
    openDialog({
      title: "Prompt",
      body: "Invalid address",
      onConfirm: () => {
        console.log("Item deleted");
      },
    });
  };

  return (
    <InputGroup
      padding={"0.625rem 0.625rem 0.625rem 0rem"}
      className="search-box"
      height={{ base: "2.5rem", md: "3.75rem" }}
      _hover={{
        boxShadow: "none"
      }}
      _focusWithin={{
        boxShadow: "none"
      }}
      borderRadius={{ base: "0.625rem", md: "0.9375rem" }}
      endElement={
        <IconButton backgroundColor={'linear-gradient(90deg, #C9BFFF 0%, #AC9DFB 100%)'}
          className="search-btn" height={{ base: "1.5rem", md: "2.5rem" }}
          borderRadius={{ base: "0.625rem" }}
          width={{ base: "1.5rem", md: "7.5rem" }} onClick={() => {
            if (value == "" || !value.startsWith("ox")) {
              showDialog()
              return
            }
            navigate('/mining/' + value)
          }}>
          <Image src={SearchIcon} width={{ base: "0.875rem", md: "1.25rem" }} height={{ base: "0.875rem", md: "1.25rem" }} alt="search" className="search-ico" />
          <Text className="isMobileHide" color={"#000"}>Search</Text>
        </IconButton>
      }
    >
        <Input
          placeholder="Please enter address"
          value={value}
          className="myinput"
          padding={"0.625rem 0.625rem 0.625rem 1.25rem"}
          height={{ base: "2.5rem", md: "3.75rem" }}
          focusBorderColor="transparent"
          border="none"
          _hover={{ border: "none", boxShadow: "none" }}
          _focus={{ border: "none", boxShadow: "none" }}
          onChange={(e) => {
            setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
          }}
        />
    </InputGroup>
  )
}

export default SearchInput;

