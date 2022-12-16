// To use express.Router()
const express = require('express');
// Bring in controller 
const { generateImage } = require ('../controllers/openaiController');
const router = express.Router();


router.post('/generateimage', generateImage);

// openai/generateimage, test with annoymous function in PostMan
// router.post('/generateimage', (req, res) => {
  
  // Object to test POST request
//   res.status(200).json({
//     success: true,
//   })
// });

// Export router
module.exports = router;