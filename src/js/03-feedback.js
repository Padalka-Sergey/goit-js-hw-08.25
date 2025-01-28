import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');

const data = {};
const KEYSTORAGE = 'feedback-form-state';
const savedData = localStorage.getItem(KEYSTORAGE);

populateTextStart();

formRef.addEventListener('input', throttle(inputSaveStorage, 500));
formRef.addEventListener('submit', submitForm);

function inputSaveStorage(evt) {
  data[evt.target.name] = evt.target.value;

  onInputEmptyData('email');
  onInputEmptyData('message');

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

  evt.currentTarget.reset();
  localStorage.removeItem(KEYSTORAGE);
}

function onInputEmptyData(param) {
  if (!data[param]) {
    data[param] = formRef.elements[param].value;
  }
}

function populateTextStart() {
  if (savedData) {
    const parsedData = JSON.parse(savedData);

    formRef.elements.email.value = parsedData.email;
    formRef.elements.message.value = parsedData.message;
  }
}
