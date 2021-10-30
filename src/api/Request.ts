export const request = async <T>(
  url: string,
  method = 'GET',
  initialBody?: unknown,
  initialHeaders = {}
): Promise<T> => {
  try {
    let body = null;
    let headers = initialHeaders;
    if (initialBody) {
      body = JSON.stringify(initialBody);
      headers = { ...headers, 'Content-Type': 'application/json' };
    }
    const response = await fetch(
      `https://api.sayhiyourfriend.xyz${url}`,
      {
        method,
        body,
        headers,
      }
    );

    const data = await response.json();

    return data;
  } catch (err) {
    throw new Error("err");
  }
};
