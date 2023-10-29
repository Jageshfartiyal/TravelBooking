const User = require('../models/signup.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });
    
    await newUser.save();
    const token = newUser.generateAuthToken();

    console.log("the token is ",token)

    res.status(201).json({ message: 'Successfully signed up', user: newUser, token });
  } catch (error) {
    res.status(400).json({ message: 'Signup failed', error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by their email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate a JWT token for the authenticated user
    const token = user.generateAuthToken();

    // Respond with the token and user data
    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error: error.message });
  }
};



module.exports = {
    signup,
    login
}
