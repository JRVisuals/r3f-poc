// This function takes any three.js loader and returns a promisifiedLoader
const promisifyLoader = (loader, onProgress) => {
  function promiseLoader(url) {
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, onProgress, reject);
    });
  }

  return {
    originalLoader: loader,
    load: promiseLoader,
  };
};

export default promisifyLoader;
