const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { findByIdAndUpdate } = require('../models/user');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login, 
  updateHighScore
};

async function signup(req, res) {
  const user = new User(req.body);
  user.highScore = 0;
  try {
    await user.save();
    // Send back a JWT instead of the user
    const token = createJWT(user);
    res.json({token});
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function updateHighScore(req, res) {
  console.log("Backend BABYEEEEEE!?", req.body);
  console.log("And here that param butt", req.params);
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedUser);
}


// Make helper functions for JWT

function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}