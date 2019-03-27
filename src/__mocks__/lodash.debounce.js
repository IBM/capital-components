let timer = null;
module.exports = function debounce(fn, delay) {
  return function wrappedFunction(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(function invokeFunction() {
      fn.apply(context, args);
    }, delay);
  };
};
