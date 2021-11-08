
export default function useFetch(path, body = {}) {
  const url = process.env.VUE_APP_ENDPOINT_API + path;

  return fetch(url, {
    data: {
      ...body
    },
    method: 'GET',
  })
    .then(res => {
      if (!res.ok) throw new Error('Response: Somenthing Error');

      return res.json();
    })
    .then(res => res)
    .catch(res => {
      throw new Error(res.message);
    });

}