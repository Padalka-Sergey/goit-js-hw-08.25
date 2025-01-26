import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
let currentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', throttle(onTimeUpdate, 1000));

if (currentTime) {
  player
    .setCurrentTime(currentTime)
    .then(function (seconds) {
      console.log(`${seconds}  -  the actual time that the player seeked to`);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          console.log(
            'the time was less than 0 or greater than the video’s duration'
          );
          break;

        default:
          console.log('some other error occurred');
          break;
      }
    });
}

function onTimeUpdate(data) {
  const time = JSON.stringify(data.seconds);
  localStorage.setItem('videoplayer-current-time', time);
}
