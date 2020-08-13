let id = parseInt(window.localStorage.getItem('idMax') || '0');
const createId = (): number => {
  id += 1;
  return id;
};
export {createId};