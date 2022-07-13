import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  console.log('hahahhahahh1')
  const { email, password, firstName, lastName } = req.body;

  try {
    console.log('hahahhahahh2')
    const oldUser = await UserModal.findOne({ email });
console.log('hahahhahahh2.1',oldUser)
    if (oldUser) return res.status(400).json({ message: "User already exists" });

    console.log('hahahhahahh3')
    const hashedPassword = await bcrypt.hash(password, 12);
console.log('hahahhahahh4')
    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
console.log('hahahhahahh5')
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );
console.log('hahahhahahh6')
    res.status(201).json({ result, token });
    console.log('hahahhahahh7')
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
