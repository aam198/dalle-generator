function onSubmit(e){
  e.preventDefault();

  // Clear out the image and message when user submits.
  document.querySelector('.msg').textContent = '';
  // document.querySelector('#image').src = '';
  const prompt = document.querySelector('#prompt').value;
  const size = document.querySelector('#size').value;

  if (prompt === ''){
    alert('Please add some descripter text');
    return;
  }

  console.log('Success', prompt, size);

  generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {
  try {
    // Calling showSpinner function  while loading
    showSpinner();
    const response = await fetch('/openai/generateimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt, 
        size
      }) 
    });
  if (!response.ok){
    removeSpinner();
    throw new Error('That image could not generated');
  }

  const data = await response.json();
  console.log(data);
  // Get image URL
  const imageURL = data.data;
  console.log(imageURL);
  // Grabbing image ID and setting src with imageURL
  document.querySelector('#image').src = imageURL;

  // Remove spinner when 
  removeSpinner();
  

  }catch (error){
    // Output error message made above
    document.querySelector('.msg').textContent = error;
  }
  

}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
  const prompt = document.querySelector('#prompt');
  prompt.value = "";
}



document.querySelector('#image-form').addEventListener('submit', onSubmit);
