import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{P as a,t as n}from"./assets/vendor-CX6c_3_z.js";const i=document.querySelector("#vimeo-player"),o=new a(i);let t=localStorage.getItem("videoplayer-current-time");o.on("timeupdate",n(c,1e3));t&&o.setCurrentTime(t).then(function(e){console.log(`${e}  -  the actual time that the player seeked to`)}).catch(function(e){switch(e.name){case"RangeError":console.log("the time was less than 0 or greater than the video’s duration");break;default:console.log("some other error occurred");break}});function c(e){const r=JSON.stringify(e.seconds);localStorage.setItem("videoplayer-current-time",r)}
//# sourceMappingURL=02-video.js.map
