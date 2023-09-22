import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Description = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  // Using useParam I got the data

  const params = useParams();

  // console.log("params", params)

  const handleClose = () => {
    setOpen(false);
    navigate("/")
  };

  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
            position: "relative",
          },
        }}
      >
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            ❌
          </Button>
        </DialogActions>
        <DialogContent>
          <Typography
            variant="h4"
            sx={{ alignSelf: "center", fontWeight: "bold" }}
          >
            Description!!!!!
          </Typography>

          <h3> {params.id} </h3>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Description;
