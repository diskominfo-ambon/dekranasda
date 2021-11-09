
export default function useFetch(path) {
  const url = process.env.VUE_APP_ENDPOINT_API + path;


  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (!res.ok) throw new Error('Response: Somenthing Error');

      return res.json();
    })
    .then(res => res)
    .catch(res => {
      console.log(res);
      throw new Error(res.message);
    });

}