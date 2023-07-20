import {Time} from "./lib/index"
import { Box } from "@mui/material";

const App = () => {
  const style = {
    "color" : "red"
  }

  return (
      <Box>
        {/* <Tooltip title={"Drag me!"} className='dragHandle'> */}
          <Time style={style} date={new Date()} />
        {/* </Tooltip> */}
        
      </Box>
  )
}
export default App;