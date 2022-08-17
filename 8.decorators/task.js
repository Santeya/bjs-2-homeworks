function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');

    const objectInCache = cache.find((item) => item['hash'] === hash);

    if (objectInCache) {
      return ('Из кэша: ' + objectInCache['value']);
    }

    const value = func(...args);
    cache.push({ 'hash': hash, 'value': value });
    if (cache.length > 5) {
      cache.shift();
    }
    return ('Вычисляем: ' + value);
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;
  function wrapper(...args) {
    wrapper.allCount++;

    if (timeoutId === null) {
      func(...args);
      wrapper.count++;
    } else if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }
  return wrapper;
}