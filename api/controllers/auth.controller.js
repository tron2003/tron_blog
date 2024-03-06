import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"
export const signup = async (req, res) => {
  const { username, email,password } = req.body;
   
  if (!username || !email || !password|| username === "" || email === "") {
    return res.status(400).json({ message: "All fields are required" });
  }

// var salt = bcrypt.genSaltSync(10);

var hash = bcryptjs.hashSync(password,10);
const newuser = new User({ username, email, password:hash});
try{

    await newuser.save();

    res.json("Sign up successful")
}
catch(error){
res.status(500).json({message:error.message})
}
};
