document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('video');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play(); // Play the video when it's in view
        } else {
          video.pause(); // Pause the video when it's out of view
        }
      });
    }, {
      threshold: 0.5 // 50% of the video must be visible to trigger play/pause
    });
  
    observer.observe(video);
  });
  