const backendUrl = "http://localhost:5000";

interface ImageServiceCreateProps {
  gitRepositoryLink: string,
  baseImage: string,
  updateCommand: string,
  buildCommand: string,
  startCommand: string,
}

const create = async ({
  gitRepositoryLink,
  baseImage,
  updateCommand,
  buildCommand,
  startCommand
}: ImageServiceCreateProps) => {
  const response = await fetch(
    `${backendUrl}/create/image`,
    {
      method: 'POST',
      body: JSON.stringify({
        gitRepositoryLink,
        envInfo: {
          baseImage,
          buildCommand,
          updateCommand,
          startCommand,
          packages: []
        }
      }),
    }
  );

  const responseJson = await response.json();
  if (responseJson.error) {
    console.error(responseJson.error);
  }

  return responseJson;
};

const fetchAll = async () => {
  const response = await fetch(`${backendUrl}/fetch/image/info/all`);
  const responseJson = await response.json();

  if (responseJson.error) {
    console.error(responseJson.error);
  }

  return responseJson.images;
};

const actions = {
  create,
  fetchAll,
};

export default actions;

