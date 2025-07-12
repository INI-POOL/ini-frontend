
import { Button, Input, InputGroup, Span } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"


const MAX_CHARACTERS = 20

const SearchInput = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  return (
    <InputGroup
     padding={0}
     style={{borderRadius:"0.625rem"}}
     border="1px solid var(--input-border, #3B3B3B);"
      endElement={
        <IconButton  className="search-btn" onClick={() => navigate('/mining')}>
          <LuSearch className="search-ico"/>
        </IconButton>
      }
    >
      <Input
        placeholder="Enter your message"
        value={value}
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

