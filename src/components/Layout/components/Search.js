
import { Button, Input, InputGroup, Span } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@chakra-ui/react"
// import { LuSearch } from "react-icons/lu"
import SearchIcon from "@/assets/img/search.svg"


const MAX_CHARACTERS = 20

const SearchInput = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  return (
    <InputGroup
     padding={0}
     
     style={{borderRadius:"0.625rem"}}
     _hover={{
      border: "1px solid var(--input-border, #3B3B3B)", // 不变色
      boxShadow: "none"
    }}
    _focusWithin={{
      border: "1px solid var(--input-border, #3B3B3B)", // 保持一致
      boxShadow: "none"
    }}
     border="1px solid var(--input-border, #3B3B3B);"
      endElement={
        <IconButton  className="search-btn" onClick={() => navigate('/mining')}>
          <img src={SearchIcon} alt="search" className="search-ico" />  
        </IconButton>
      }
    >
      <Input
        placeholder="Enter your message"
        value={value}
        className="myinput"
        border={"none"}
        borderRadius={"0.625rem"}
        onChange={(e) => {
          setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
        }}
      />
    </InputGroup>
  )
}

export default SearchInput;

