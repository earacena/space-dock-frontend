const backendUrl = "http://localhost:5000";

const create = async (imageId: string) => {
  const response = await fetch(`${backendUrl}/create/container/${imageId}`, {
    method: 'POST'
  });

  const responseJson = await response.json();
  if (responseJson.error) {
    console.error(responseJson.error);
  }

  return responseJson;
};

const fetchAll = async () => {
  const response = await fetch(`${backendUrl}/fetch/container/info/all`);
  const responseJson = await response.json();

  if (responseJson.error) {
    console.error(responseJson.error);
  }

  return responseJson.containers;

}

const actions = {
  fetchAll,
  create,
};

export default actions;

