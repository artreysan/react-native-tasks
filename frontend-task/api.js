const API = 'http://192.168.3.58:3000/tasks';

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};
