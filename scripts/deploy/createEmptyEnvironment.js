const { createClient } = require('contentful-management');
const catchify = require('catchify');

const createEmptyEnvironment = async (input) => {
  const { cmaToken, spaceId } = input;

  const client = createClient({
    accessToken: cmaToken,
  });

  const [emptyEnvironmentError, emptyEnvironment] = await catchify(
    client.rawRequest({
      method: 'PUT',
      url: `https://api.contentful.com/spaces/${spaceId}/environments/empty`,
      data: {
        name: 'empty',
      },
    }),
  );

  if (emptyEnvironmentError !== null || !emptyEnvironment) {
    console.error(emptyEnvironmentError);
    return {
      state: 'error',
      error: 'Failed to create an empty environment - createEnvironment error',
    };
  }

  return {
    state: 'success',
  };
};

module.exports = createEmptyEnvironment;
