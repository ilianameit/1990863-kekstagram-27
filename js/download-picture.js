import {ModalWindow} from './modal-window.js';
import {standartImg} from'./filters.js';
import {inputHashtag, inputDescription } from './pristine-image-form.js';
const buttonFile = document.querySelector('.img-upload__control');
const windowDownload = document.querySelector('.img-upload__overlay');
//const formFilters = document.querySelector('.img-filters__form');
const cancelForm = document.querySelector('#upload-cancel');
const modalDownloadWindow = new ModalWindow(windowDownload);

buttonFile.addEventListener('click', () => {
  standartImg();
  modalDownloadWindow.openPopup();
});
cancelForm.addEventListener('click', () => {
  modalDownloadWindow.closePopup();
  standartImg();
});

modalDownloadWindow.removeEsc(inputHashtag);
modalDownloadWindow.removeEsc(inputDescription);
