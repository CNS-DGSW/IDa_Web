const asyncLocalStorage = {
  setItem: async function (key: string, value: string) {
    await null;
    return localStorage.setItem(key, value);
  },
  getItem: async function (key: string) {
    await null;
    return localStorage.getItem(key);
  },
};

export default asyncLocalStorage;
