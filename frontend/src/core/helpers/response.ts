/**
 * A method to handle the response depending response statuses
 *
 * @param response Response object that comes from http client
 * @param errorMessage Optional param for custom error message
 * @returns response data if status code is 2** or throws an rrror
 */

const responseHandler = (
  response: any,
  errorMessage: string = "An error occurred! Please try again later."
) => {
  const { data, status } = response;
  if (status >= 200 && status <= 299) {
    return data;
  }

  throw Error(errorMessage);
};

export default responseHandler;
