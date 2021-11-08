
export default function useFetch(path) {
  const url = process.env.VUE_APP_ENDPOINT_API + path;

  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error('Response: Somenthing Error');

      return res.json();
    })
    .then(res => res)
    .catch(res => res);

}