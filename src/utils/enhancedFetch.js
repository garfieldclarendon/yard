import 'isomorphic-fetch';

/* function process(response) {
  const json = response.json();
  if (response.ok) {
    return json;
  }
  return json.then(Promise.reject.bind(Promise));
} */

export default function enhancedFetch(url, options) {
  const bodyValue = (typeof options.body !== 'string')
    ? JSON.stringify(options.body) : options.body;
  const post = Object.assign({}, options, {
    body: bodyValue,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  return fetch(url, post);
}
