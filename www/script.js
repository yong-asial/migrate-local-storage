// This is a JavaScript file


if (typeof(Storage) === "undefined") {
  window.alert('local storage is not supported!');
}

let data = null;
const key = 'migrate-local-storage-data';

const btnLoadLocalStorage = document.getElementById('loadLocalStorage');
const btnSaveToLocalStorage = document.getElementById('saveToLocalStorage');
const btnClearLocalStorage = document.getElementById('clearLocalStorage');
const divResult = document.getElementById('result');

const loadLocalStorage = () => {
  return window.localStorage.getItem(key) || '';
};

const saveToLocalStorage = () => {
  try {
    const d = new Date();
    window.localStorage.setItem(key, loadLocalStorage() + "\n" + d.toUTCString());
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

const displayData = () => {
  divResult.innerText = loadLocalStorage() || 'No Data Saved';
};

const clearData = () => {
  window.localStorage.clear();
  displayData();
};

btnSaveToLocalStorage.addEventListener('click', () => {
  if (!saveToLocalStorage()) {
    window.alert('Save to local storage failed');
    return;   
  }
  displayData();
});

btnLoadLocalStorage.addEventListener('click', displayData);

btnClearLocalStorage.addEventListener('click', clearData);

// on load
displayData();
