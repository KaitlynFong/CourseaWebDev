(function(window){

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
s
  window.byeSpeaker = byeSpeaker;

})(window);