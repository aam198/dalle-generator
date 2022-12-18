function onSubmit(e){
  e.preventDefault();
  const prompt = document.querySelector('#prompt').value;
  const size = document.querySelector('#size').value;

  if (prompt === ''){
    alert('Please add some descripter text');
    return;
  }

  console.log('Success');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
