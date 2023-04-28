
const backendUrl = "http://localhost:5000";

interface ImageServiceCreateProps {
  gitRepositoryLink: string,
  baseImage: string,
  updateCommand: string,
  buildCommand: string,
  startCommand: string,
}

export const create = async ({
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

