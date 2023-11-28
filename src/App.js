import {Time} from "./lib/index"
import { Box } from "@mui/material";

const App = () => {
  const style = {
    "color" : "red"
  }
  
  // const sevenDaysAgo = new Date(1701150663732);
  const sevenDaysAgo = new Date();
  // sevenDaysAgo.setDate(sevenDaysAgo.getDate());
  sevenDaysAgo.setDate(sevenDaysAgo.getDate()-1);
  return (
      <Box>
        {/* <Tooltip title={"Drag me!"} className='dragHandle'> */}
          <Time style={style} date={sevenDaysAgo } />
        {/* </Tooltip> */}
          {console.log(new Date())}
      </Box>
  )
}
export default App;