up.on("up:fragment:inserted", function(e) {
	registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register(URLBASE+'/static/js/sw.js');
    } catch (e) {
      console.log(`SW registration failed`);
    }
  }
}