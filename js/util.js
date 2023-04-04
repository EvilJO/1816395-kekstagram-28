const ALERT_SHOW_TIME = 5000;

const util = {
  getElement: function (optionName, parent = document) {
    return parent.querySelector(optionName);
  },
  getElements: function (optionName, parent = document) {
    return parent.querySelectorAll(optionName);
  }
  ,
  getRandom: function (max) {
    return Math.floor(Math.random() * max);
  },
  isEscape: function (evt) {
    return evt.key === 'Escape';
  },
  isEnter: function (evt) {
    return evt.key === 'Enter';
  },
  getCount: function (start, step) {
    let count = start;
    return function generateCount() {
      return (count = count + step);
    };
  },
  openModal: function (modal = '', body) {
    body.classList.add('modal-open');
    if (modal) {
      modal.classList.remove('hidden');
    }
  },
  closeModal: function (modal = '', body) {
    body.classList.remove('modal-open');
    if (modal) {
      modal.classList.add('hidden');
    }
  },
  openModalInput: function (modalForm, body) {
    body.classList.add('modal-open');
    modalForm.classList.remove('visually-hidden');
  },
  closeModalForm: function (modalForm, body) {
    body.classList.remove('modal-open');
    modalForm.classList.add('visually-hidden');
  },
  filterClassName: function (className) {
    const classWithoutDot = className.replace('.', '');
    return classWithoutDot;
  },
  getCurrentPicture: function (DATA, thumbnail) {
    return DATA.find((item) => item.id === +thumbnail.dataset.pictureId);
  },
  showAlert: function (message, body) {
    const alertContainer = document.createElement('div');
    alertContainer.style.zIndex = '100';
    alertContainer.style.position = 'absolute';
    alertContainer.style.left = '0';
    alertContainer.style.top = '0';
    alertContainer.style.right = '0';
    alertContainer.style.padding = '10px 3px';
    alertContainer.style.fontSize = '30px';
    alertContainer.style.textAlign = 'center';
    alertContainer.style.backgroundColor = 'red';

    alertContainer.textContent = message;

    body.append(alertContainer);

    setTimeout(() => {
      alertContainer.remove();
    }, ALERT_SHOW_TIME);
  },

};


export { util };

