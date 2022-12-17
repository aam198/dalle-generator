// Using the openai Library
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      // Text to describe image, will eventually come from front-end
      prompt: "A cute baby sea otter",
      // Number of images
      n: 1,
      size: "512x512"
    });
    // To get the url from reponse
    const imageUrl = response.data.data[0].url
    // What to respond with
    res.status(200).json({
      success: true,
      data: imageUrl
    });
  }
  catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    res.status(400).json({
      success: false,
      error: 'Image could not be generated.'
    });
  }
}


// Function to test with PostMan to make sure all is working
// const generateImage = async (req, res) => {
//   res.status(200).json({
//     success: true,
//   });
// }

module.exports = {generateImage };