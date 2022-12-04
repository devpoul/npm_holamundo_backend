const express = require("express");
// import express from

// const author = require ('./package.json')
//import file from ('./package.json')

//? local host:8000/api/v1/users/25

//! protocol TCP/IP
const port = 8000;

const app = express();

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
