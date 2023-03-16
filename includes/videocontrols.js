(function(window) {
  function setupVideo()
  {
    var v = document.getElementById("video1");
    v.addEventListener('mouseover', function() { this.controls = true; }, false);
    v.addEventListener('mouseout', function() { this.controls = false; }, false);

    var v2 = document.getElementById("video2");
    v2.addEventListener('mouseover', function() { this.controls = true; }, false);
    v2.addEventListener('mouseout', function() { this.controls = false; }, false);

    var v3 = document.getElementById("video3");
    v3.addEventListener('mouseover', function() { this.controls = true; }, false);
    v3.addEventListener('mouseout', function() { this.controls = false; }, false);

    var v4 = document.getElementById("video4");
    v4.addEventListener('mouseover', function() { this.controls = true; }, false);
    v4.addEventListener('mouseout', function() { this.controls = false; }, false);
  }

  window.addEventListener('load', setupVideo, false);
})(window);