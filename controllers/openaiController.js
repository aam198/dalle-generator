// Using the openai Library
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});




// Function to test with PostMan to make sure all is working
const generateImage = async (req, res) => {
  res.status(200).json({
    success: true,
  });
}

module.exports = {generateImage };