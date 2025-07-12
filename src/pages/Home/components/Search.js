
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
        // <Button  onClick={() => navigate('/mining')} style={{borderRadius:"0.9375rem",borderRadius: "0.3125rem",
        //   background: "linear-gradient(90deg, #C9BFFF 0%, #AC9DFB 100%)"}} >
        //  <LuSearch className="search-ico"/>
        //   搜索
        // </Button>

          <IconButton  className="search-btn" style={{width:'4rem'}} onClick={() => navigate('/mining')}>
            <LuSearch className="search-ico"/>搜索
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

