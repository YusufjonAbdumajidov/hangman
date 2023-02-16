import React from 'react';
const HEAD = (
    <div 
    style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid #111",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}
    />
)

const BODY = (
    <div 
    style={{
        width: "10px",
        height: "100px",
        background: "#111",
        position: "absolute",
        top: "120px",
        right: "0px"
    }}
    />
)

const RIGHT_ARM = (
    <div 
    style={{
        width: "100px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom"
    }}
    />
);

const LEFT_ARM = (
    <div 
    style={{
        width: "100px",
        height: "10px",
        background: "#111",
        position: "absolute",
        top: "150px",
        right: "0px",
        rotate: "30deg",
        transformOrigin: "right bottom"
    }}
    />
)

const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
       {HEAD}
       {BODY}
       {RIGHT_ARM}
       {LEFT_ARM}
      <div style={{ position: "absolute",  height: "50px", width: "10px", background: "#111", top: "0", right: "0" }} />
      <div style={{ height: "10px", width: "200px", background: "#111", marginLeft: "120px" }} />
      <div style={{ height: "400px", width: "10px", background: "#111", marginLeft: "120px" }} />
      <div style={{ height: "10px", width: "250px", background: "#111" }} />
    </div>
  )
}

export default HangmanDrawing
