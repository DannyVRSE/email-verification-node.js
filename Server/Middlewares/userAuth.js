import express from "express";
import db from "../Model/index.js";

const User=db.users;

//check if username/email is already in the db
const saveUser = async (req, res, next) => {
    //search the database to see if user exist
    try {
      const username = await User.findOne({
        where: {
          userName: req.body.userName,
        },
      });
      //if username exist in the database respond with a status of 409
      if (username) {
        return res.json(409).send("username already taken");
      }
  
      //checking if email already exist
      const emailcheck = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      //if email exist in the database respond with a status of 409
      if (emailcheck) {
        return res.json(409).send("Authentication failed");
      }
  
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  //exporting module
  export default saveUser;