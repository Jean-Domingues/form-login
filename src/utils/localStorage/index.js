export const getItemStorage = (key) => {
  key = String(key)
  const data = JSON.parse(localStorage.getItem(key))
  return data;
}

export const setItemStorage = (key, data) => {
  key = String(key);
  data = String(data);
  localStorage.setItem(key, data)
}