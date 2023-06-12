
//You tube video embbed button functionalty
(function (window) {

  'use strict';

  window.code = window.code || {};

  window.code.lightweightYoutubePlayer = function () {

    var dataYoutubeVideos = '[data-youtube]';

    var youtubeVideos = [...document.querySelectorAll(dataYoutubeVideos)];

    function init() {
      youtubeVideos.forEach(function (element) {
        bindYoutubeVideoEvent(element);
      });
    }

    function bindYoutubeVideoEvent(element) {
      var button = element.querySelector('[data-youtube-button]');

      button.addEventListener('click', createIframe);
    }

    function createIframe(event) {
      var url = event.target.dataset.youtubeButton;
      var youtubePlaceholder = event.target.parentNode;

      var htmlString = '<div class="video__youtube"> <iframe class="video__iframe" src="' + url + '?autoplay=1" frameborder="0" allowfullscreen></iframe></div>';

      youtubePlaceholder.style.display = 'none';
      youtubePlaceholder.insertAdjacentHTML('beforebegin', htmlString);
      youtubePlaceholder.parentNode.removeChild(youtubePlaceholder);
    }

    return {
      init: init
    }
  };

})(window)

ready();

function ready() {
  var lightweightYoutubePlayer = new code.lightweightYoutubePlayer()

  if (document.readyState != 'loading') {
    page.init()
  } else {
    document.addEventListener('DOMContentLoaded', lightweightYoutubePlayer.init);
  }
}
//end

//Sidebars toggle
function leftSideToggle() {
  var x = document.getElementById("leftSideBar");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Below header text and right side nav auto text taking
var pageTitle1 = document.getElementById('PageTitle1').innerHTML;
document.getElementById('belowHeaderHeading').innerHTML = pageTitle1;
document.getElementById('rightNavHeading1').innerHTML = pageTitle1;

var pageTitle2 = document.getElementById('PageTitle2').innerHTML;
document.getElementById('rightNavHeading2').innerHTML = pageTitle2;

var pageTitle3 = document.getElementById('PageTitle3').innerHTML;
document.getElementById('rightNavHeading3').innerHTML = pageTitle3;

var pageTitle4 = document.getElementById('PageTitle4').innerHTML;
document.getElementById('rightNavHeading4').innerHTML = pageTitle4;

var pageTitle5 = document.getElementById('PageTitle5').innerHTML;
document.getElementById('rightNavHeading5').innerHTML = pageTitle5;

var pageTitle6 = document.getElementById('PageTitle6').innerHTML;
document.getElementById('rightNavHeading2').innerHTML = pageTitle2;

var pageTitle7 = document.getElementById('PageTitle7').innerHTML;
document.getElementById('rightNavHeading7').innerHTML = pageTitle7;

var pageTitle8 = document.getElementById('PageTitle8').innerHTML;
document.getElementById('rightNavHeading8').innerHTML = pageTitle9;

var pageTitle10 = document.getElementById('PageTitle10').innerHTML;
document.getElementById('rightNavHeading10').innerHTML = pageTitle10;

var pageTitle11 = document.getElementById('PageTitle11').innerHTML;
document.getElementById('rightNavHeading11').innerHTML = pageTitle11;

var pageTitle12 = document.getElementById('PageTitle12').innerHTML;
document.getElementById('rightNavHeading12').innerHTML = pageTitle12;

var pageTitle13 = document.getElementById('PageTitle13').innerHTML;
document.getElementById('rightNavHeading13').innerHTML = pageTitle13;

var pageTitle14 = document.getElementById('PageTitle14').innerHTML;
document.getElementById('rightNavHeading14').innerHTML = pageTitle14;
var pageTitle15 = document.getElementById('PageTitle15').innerHTML;
document.getElementById('rightNavHeading15').innerHTML = pageTitle15;

var pageTitle16 = document.getElementById('PageTitle16').innerHTML;
document.getElementById('rightNavHeading16').innerHTML = pageTitle16;



