import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import { Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const PrettoSlider = withStyles({
  root: {
    color: "#2196f3",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
})(Slider);

const ParametersComponent = () => {
  const [outputLength, setOutputLength] = useState(512);
  const [temperature, setTemperature] = useState(0.7);
  const [topP, setTopP] = useState(0.7);
  const [topK, setTopK] = useState(50);
  const [repetitionPenalty, setRepetitionPenalty] = useState(1);

  const handleChangeOutputLength = (event, newValue) => {
    setOutputLength(newValue);
  };

  const handleChangeTemperature = (event, newValue) => {
    setTemperature(newValue);
  };

  const handleChangeTopP = (event, newValue) => {
    setTopP(newValue);
  };

  const handleChangeTopK = (event, newValue) => {
    setTopK(newValue);
  };

  const handleChangeRepetitionPenalty = (event, newValue) => {
    setRepetitionPenalty(newValue);
  };

  return (
    <>
      <Box
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginRight: "10px" }}>Output Length:</p>
        <p
          style={{
            marginRight: "7px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {outputLength}
        </p>
      </Box>
      <Box mx="auto" width="90%" mt="-10px">
        <PrettoSlider
          value={outputLength}
          min={0}
          max={1024}
          onChange={handleChangeOutputLength}
          valueLabelDisplay="auto"
          aria-label="output length slider"
        />
      </Box>

      <Box
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginRight: "10px" }}>Temperature:</p>
        <p
          style={{
            marginRight: "7px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {temperature}
        </p>
      </Box>
      <Box mx="auto" width="90%" mt="-10px">
        <PrettoSlider
          value={temperature}
          min={0}
          max={1}
          step={0.01}
          onChange={handleChangeTemperature}
          valueLabelDisplay="auto"
          aria-label="temperature slider"
        />
      </Box>

      <Box
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginRight: "10px" }}>Top-P:</p>
        <p
          style={{
            marginRight: "7px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {topP}
        </p>
      </Box>
      <Box mx="auto" width="90%" mt="-10px">
        <PrettoSlider
          value={topP}
          min={0}
          max={1}
          step={0.01}
          onChange={handleChangeTopP}
          valueLabelDisplay="auto"
          aria-label="top P slider"
        />
      </Box>

      <Box
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginRight: "10px" }}>Top-K:</p>
        <p
          style={{
            marginRight: "7px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {topK}
        </p>
      </Box>
      <Box mx="auto" width="90%" mt="-10px">
        <PrettoSlider
          value={topK}
          min={0}
          max={100}
          onChange={handleChangeTopK}
          valueLabelDisplay="auto"
          aria-label="top K slider"
        />
      </Box>

      <Box
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ marginRight: "10px" }}>Repetition Penalty:</p>
        <p
          style={{
            marginRight: "7px",
            backgroundColor: "#f1f1f1",
            borderRadius: "5px",
            padding: "5px",
          }}
        >
          {repetitionPenalty}
        </p>
      </Box>
      <Box mx="auto" width="90%" mt="-10px">
        <PrettoSlider
          value={repetitionPenalty}
          min={0}
          max={2}
          step={0.1}
          onChange={handleChangeRepetitionPenalty}
          valueLabelDisplay="auto"
          aria-label="repetition penalty slider"
        />
      </Box>
    </>
  );
};

export default ParametersComponent;