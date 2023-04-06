import { qs } from '../dom-helpers';

class VideoPlayer {
  constructor(videoWrapper) {
    this.videoWrapper = videoWrapper;
    this.thumbnail = qs('.video-thumbnail', videoWrapper);
    this.videoPlayer = qs('.video-player', videoWrapper);
    this._run();
  }

  _run() {
    try {
      this._registerEventListeners();
    } catch (e) {
      console.error(e); // eslint-disable-line
    }
  }

  _registerEventListeners() {
    // if (this.thumbnail) {
    //   this.thumbnail.addEventListener('click', () => this._handleShowVideo());
    // }

    this.thumbnail.addEventListener('click', () => {
      if (VideoPlayer.currentVideoPlayer && VideoPlayer.currentVideoPlayer !== this) {
        VideoPlayer.currentVideoPlayer._handleStopVideo();
      }

      VideoPlayer.currentVideoPlayer = this;
      this._handleShowVideo();
    });

    if (this.videoPlayer) {
      this.videoPlayer.addEventListener('click', () => this._handleStopVideo());
    }
  }

  _handleShowVideo() {
    if (typeof this.videoWrapper !== 'undefined') {
      this.videoWrapper.classList.add('show-video');
      this.videoPlayer.play();
    }
  }

  _handleStopVideo() {
    if (typeof this.videoWrapper !== 'undefined') {
      this.videoWrapper.classList.remove('show-video');
      this.videoPlayer.pause();
    }
  }
}

VideoPlayer.currentVideoPlayer = null;

export default VideoPlayer;
