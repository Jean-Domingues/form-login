export const getItemStorage = (key) => {
  key = String(key)
  const data = localStorage.getItem(key)
  if (data) return JSON.stringify(data)
  return null;
}

export const setItemStorage = (key, data) => {
  key = String(key);
  data = String(data);
  localStorage.setItem(key, data)
}