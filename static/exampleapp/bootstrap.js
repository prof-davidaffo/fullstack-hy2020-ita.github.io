(function () {
  if (!('serviceWorker' in navigator)) {
    window.exampleAppReady = Promise.resolve()
    return
  }

  var basePath =
    window.location.pathname.split('/exampleapp')[0] + '/exampleapp/'

  window.exampleAppReady = navigator.serviceWorker
    .register(basePath + 'service-worker.js', { scope: basePath })
    .then(function () {
      return navigator.serviceWorker.ready
    })
    .then(function () {
      if (!navigator.serviceWorker.controller) {
        window.location.reload()
        return new Promise(function () {})
      }
    })
})()
