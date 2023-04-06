import './polyfill';

import {
  qs,
  qsAll,
} from './dom-helpers';

import Header from './modules/Header';
import VideoPlayer from './modules/Video';

class Main {
  constructor() {
    this.videoWrappers = qsAll('.video-wrapper');
    this._run();
  }

  _run() {
    try {
      this._registerGlobalObjects();
      this._registerVideoWrappers();
      new Header();
      new VideoPlayer();
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }

  _registerGlobalObjects() {
    window.qs = qs;
    window.qsAll = qsAll;
  }

  _registerVideoWrappers() {
    this.videoWrappers.forEach((el) => new VideoPlayer(el));
  }
}

document.addEventListener('DOMContentLoaded', () => new Main());
