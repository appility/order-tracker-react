
export async function FetchJSON(url, headers) {
  return await fetch(
    url, {
      method: 'GET',
      headers: headers
    })
    .then(response => {
      if (response.statusText !== 'OK') {
        throw Error(response.statusText)
      }
      return response;
    })
    .then(response => response.json());
}
