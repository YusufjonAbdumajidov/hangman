import React from 'react';
const HEAD = (
    <div 
    style={{
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        border: "10px solid #111",
        position: "absolute",
        top: "50px",
        right: "-25px"
    }}
    />
)

const BODY = (
    <div 
    style={{
        width: "10px",
        height: "90px",
        background: "#111",
        position: "absolute",
        top: "110px",
        right: "0px"
    }}
    />
)

const RIGHT_ARM = (
    <div 
    style={{
        width: "90px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "150px",
        right: "-90px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}
    />
);

const LEFT_ARM = (
    <div 
    style={{
        width: "90px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "150px",
        right: "10px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}
    />
)


const RIGHT_LEG = (
    <div 
    style={{
        width: "90px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "190px",
        right: "-80px",
        rotate: "60deg",
        transformOrigin: "left bottom"
    }}
    />
)


const LEFT_LEG = (
    <div 
    style={{
        width: "100px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "190px",
        right: "0px",
        rotate: "-60deg",
        transformOrigin: "right bottom"
    }}
    />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
       {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={{ position: "absolute",  height: "40px", width: "10px", background: "#111", top: "0", right: "0" }} />
      <div style={{ height: "10px", width: "160px", background: "#111", marginLeft: "120px" }} />
      <div style={{ height: "300px", width: "10px", background: "#111", marginLeft: "120px" }} />
      <div style={{ height: "10px", width: "250px", background: "#111" }} />
    </div>
  )
}

export default HangmanDrawing
