const backendUrl = "http://localhost:5000";

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
};

export default actions;

