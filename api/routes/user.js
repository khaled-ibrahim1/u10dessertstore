const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verityToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", async (req, res) => {
 

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
//DELETE

router.delete("/:id", async (req,res)=>{
    try{
   await User.findByIdAndDelete(req.params.id)
   res.status(200).json("user has been deleted")
    } catch(err){
        res.status(500).json(err)
    }
})

//get user
router.get("/find/:id", async (req,res) => {
    try{
   const user = await User.findById(req.params.id);
   const { password, ...others } = user._doc;
   res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);
    }
});

//get ALL USERS
router.get("/", async (req,res) => {
    const query = req.query.new;
    try{
   const users = query ? await User.find().sort({_id:-1}).limit(5) : await User.find();
   res.status(200).json(users);
    } catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;
