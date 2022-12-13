import { Avatar, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogTitle, ListItemText, MenuItem, ListItemAvatar } from "@mui/material";
import { Box } from "@mui/system";

function ToppingsDialog({ open, handleClose, toppings }) {
  const selectedTopp = [];
  const handleChange = () => {
    console.log("test", selectedTopp);
    handleClose();
  }
  const getTopp = (e) => {
    const topp = e.target.value;
    console.log("test", topp);
    selectedTopp.push(topp);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Toppings</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
          {toppings.map((topp, i) => {
            console.log(topp.tname);
            console.log(i);
            return (
              <MenuItem
                key={i}
                value={{
                  name: topp.tname,
                  price: parseFloat(topp.price),
                }}
              >
                <Checkbox color="primary" />
                <ListItemAvatar>
                  <Avatar src={topp.timg}></Avatar>
                </ListItemAvatar>
                <ListItemText primary={topp.tname} style ={{width : '100%', justifyContent:'space-between'}}/>
                <ListItemText primary={topp.price} />
              </MenuItem>
            )
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleChange}>Add</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ToppingsDialog;