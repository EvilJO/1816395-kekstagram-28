import { generateDomThumbnails } from './renderThumbnails.js';
import { getData } from './api.js';
import { takeData } from './renderBigImage.js';
// import { generateSuccessMessage } from './handlerMessages.js';
import './util.js';
import './handlerFormValidator.js';
import './api.js';


getData(generateDomThumbnails, takeData);


