/* eslint-disable max-len */
export const arnoldApi = async () => {
  const name = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  const json = await name.json();
  return json;
};
