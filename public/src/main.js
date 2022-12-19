function onSubmit(e){
  e.preventDefault();
  const prompt = document.querySelector('#prompt').value;
  const size = document.querySelector('#size').value;

  if (prompt === ''){
    alert('Please add some descripter text');
    return;
  }

  console.log('Success', prompt, size);

  generateImageRequest(prompt, size);
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

async function generateImageRequest(prompt, size) {
  // Show spinner if loading

}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
