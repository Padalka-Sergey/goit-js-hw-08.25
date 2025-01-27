import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const data = {};
const KEYSTORAGE = 'feedback-form-state';
const savedData = localStorage.getItem(KEYSTORAGE);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formRef.elements.email.value = parsedData.email;
  formRef.elements.message.value = parsedData.message;
} else {
  formRef.elements.email.value = '';
  formRef.elements.message.value = '';
}

formRef.addEventListener('input', throttle(inputSaveStorage, 500));
formRef.addEventListener('submit', submitForm);

function inputSaveStorage(evt) {
  if ('email' === evt.target.name) {
    data.email = evt.target.value;
  }
  if (!data.email) {
    data.email = formRef.elements.email.value;
  }
  if ('message' === evt.target.name) {
    data.message = evt.target.value;
  }
  if (!data.message) {
    data.message = formRef.elements.message.value;
  }

  const dataJson = JSON.stringify(data);

  localStorage.setItem(KEYSTORAGE, dataJson);
}

function submitForm(evt) {
  evt.preventDefault();
  const savedData = localStorage.getItem(KEYSTORAGE);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    console.log(parsedData);
  }
  formRef.elements.email.value = '';
  formRef.elements.message.value = '';
  localStorage.removeItem(KEYSTORAGE);
}
