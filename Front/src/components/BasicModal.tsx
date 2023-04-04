import * as React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  outline: 0,
  transform: "translate(-50%, -50%)",
  width: "200px",
  bgcolor: "#D9D9D9",
  boxShadow: 24,
  borderRadius: "3px",
  p: 5,
}

interface IbasicModalProps {
  open: boolean
  setOpen: (a: boolean) => void
}

export default function BasicModal({ open, setOpen }: IbasicModalProps) {
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cookies are great and so are you!
          </Typography>

          <button onClick={handleClose}>I Agree</button>
        </Box>
      </Modal>
    </div>
  )
}
