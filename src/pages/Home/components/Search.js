
import { Button, Input, InputGroup, Span } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';


const MAX_CHARACTERS = 20

const SearchInput = () => {
  const [value, setValue] = useState("")
  const navigate = useNavigate();
  return (
    <InputGroup
     padding={0}
     style={{borderRadius:"0.9375rem"}}
     border="1px solid var(--input-border, #3B3B3B);"
      endElement={
        <Button  onClick={() => navigate('/mining')}>
         {/* <SearchIcon color="gray.400" /> */}
          搜索
        </Button>

      }
    >
      <Input
        placeholder="Enter your message"
        value={value}
        border={"none"}
        borderRadius={"0.9375rem"}
        onChange={(e) => {
          setValue(e.currentTarget.value.slice(0, MAX_CHARACTERS))
        }}
      />
    </InputGroup>
  )
}

export default SearchInput;

