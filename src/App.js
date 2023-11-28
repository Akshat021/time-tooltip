import {Time} from "./lib/index"
import { Box } from "@mui/material";

const App = () => {
  const style = {
    "color" : "red"
  }
  const current = new Date();
  // current.setMinutes(current.getMinutes() + 5);
  return (
      <Box>
          <Time style={style} date={current} />
      </Box>
  )
}
export default App;