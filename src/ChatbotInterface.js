import React, { useState } from "react";
import {
  Box,
  Container,
  InputAdornment,
  IconButton,
  Typography,
  TextField,
  Paper,
  Button,
  FormControl,
  MenuItem,
  Select,
  Divider,
  Grid,
} from "@material-ui/core";
import {
  FaArrowUp,
  FaRegCommentDots,
  FaAngleDown,
  FaSync,
} from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import ParametersComponent from "./ParametersComponent";

const ChatbotInterface = () => {
  const [showParameters, setShowParameters] = useState(false);
  const [model, setModel] = useState("Meta Liama 3 8B Chat");
  const [clickedButton, setClickedButton] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClickBtn = (buttonName) => {
    setClickedButton(buttonName);
  };

  const handleChangeModel = (event) => {
    setModel(event.target.value);
  };

  const handleButtonClick = () => {
    setShowParameters(!showParameters);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, id: prevMessages.length },
      ]);
      setInputValue("");
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <Container maxWidth="xl">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box
          display="flex"
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          backgroundColor="red"
          width="100px"
        >
          <FaRegCommentDots size={20} />
          <Typography variant="h6">CHAT</Typography>
        </Box>

        <Box
          sx={{
            bgcolor: "#fff",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.4)",
            borderRadius: 25,
            p: 1,
            marginLeft: 7,
          }}
        >
          <Typography>meta-llama/Llama-3-8b-chat-hf</Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" mt={3}>
        <Paper style={{ width: "75%", boxShadow: "none" }}>
          <Box
            style={{
              height: 400,
              marginBottom: 16,
              borderRadius: 4,
              padding: 16,
              overflowY: "auto",
              border: "1px solid #ddd",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Grid
              container
              alignItems="center"
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                borderRadius: "10px",
                width: "auto",
                padding: 5,
                marginLeft: 5,
                boxShadow: "0px 1px 3px rgba(0,0,0,0.2)",
                border: "1px solid #ddd",
              }}
            >
              <Button
                onClick={() => handleClickBtn("UI")}
                style={{
                  backgroundColor:
                    clickedButton === "UI" ? "lightblue" : "transparent",
                  borderRadius: "5px",
                  padding: "8px",
                }}
              >
                <Grid container alignItems="center" spacing={1}>
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <HiAdjustmentsHorizontal size={20} />
                  </Grid>
                  <Grid item style={{ display: "flex", alignItems: "center" }}>
                    <b>UI</b>
                  </Grid>
                </Grid>
              </Button>
              <Divider
                orientation="vertical"
                flexItem
                style={{ margin: "0 8px", height: "40px" }}
              />
              <Button
                onClick={() => handleClickBtn("API")}
                style={{
                  backgroundColor:
                    clickedButton === "API" ? "lightblue" : "transparent",
                  borderRadius: "5px",
                  padding: "8px",
                }}
              >
                <Grid container alignItems="center" spacing={1}>
                  <Grid item>
                    <b>{"</>"}</b>
                  </Grid>
                  <Grid item>
                    <b>API</b>
                  </Grid>
                </Grid>
              </Button>
            </Grid>

            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              justifyContent="flex-end"
              style={{ height: "100%" }}
            >
              {messages.map((message) => (
                <Typography
                  key={message.id}
                  variant="body1"
                  style={{
                    backgroundColor: "#2196f3",
                    borderRadius: "10px",
                    padding: "8px",
                    margin: "4px 40px",
                    alignSelf: "flex-end",
                  }}
                >
                  {message.text}
                </Typography>
              ))}
            </Box>

            <Typography
              variant="body1"
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                cursor: "pointer",
              }}
              onClick={handleClearMessages}
            >
              <FaSync />
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            style={{
              border: "1px solid #ddd",
              borderRadius: 4,
            }}
          >
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Enter text here"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSendMessage();
                }
              }}
              InputProps={{
                style: { height: 100 },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      style={{
                        backgroundColor: "#2196f3",
                        borderRadius: "50%",
                        padding: "8px",
                      }}
                      onClick={handleSendMessage}
                    >
                      <FaArrowUp style={{ color: "white" }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Paper>

        <Paper
          style={{
            width: "25%",
            marginLeft: 16,
            border: "1px solid #ddd",
            height: "545px",
            overflowY: "auto",
          }}
        >
          <Box p={2}>
            <Typography variant="p" style={{ marginLeft: "7.2px" }}>
              MODEL
            </Typography>

            <Box style={{ textAlign: "center", marginTop: "5px" }}>
              <FormControl variant="filled" style={{ width: "90%" }}>
                <Select
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  value={model}
                  onChange={handleChangeModel}
                  style={{
                    height: "40px",
                    paddingBottom: "10px",
                    borderRadius: "8px",
                  }}
                >
                  <MenuItem value="Meta Liama 3 8B Chat">
                    <em>Meta Liama 3 8B Chat</em>
                  </MenuItem>
                  <MenuItem value={"Meta Liama 3 8B Chat1"}>
                    Meta Liama 3 8B Chat 1
                  </MenuItem>
                  <MenuItem value={"Meta Liama 3 8B Chat2"}>
                    Meta Liama 3 8B Chat 2
                  </MenuItem>
                  <MenuItem value={"Meta Liama 3 8B Chat3"}>
                    Meta Liama 3 8B Chat 3
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Divider variant="middle" style={{ marginTop: "10px" }} />

            <Box display="flex" alignItems="center">
              <Button
                onClick={() => alert("Modifications expanded")}
                endIcon={<FaAngleDown />}
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Typography variant="p">MODIFICATIONS</Typography>
              </Button>
            </Box>

            <Divider variant="middle" />

            <Box display="flex" alignItems="center">
              <Button
                onClick={handleButtonClick}
                endIcon={<FaAngleDown />}
                style={{ justifyContent: "space-between", width: "100%" }}
              >
                <Typography variant="p">PARAMETERS</Typography>
              </Button>
            </Box>

            {showParameters && <ParametersComponent />}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ChatbotInterface;
