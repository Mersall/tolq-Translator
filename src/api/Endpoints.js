const Url = 'https://jsonplaceholder.typicode.com/'
export const ENDPOINTS = {
  posts: {
    url: `${Url}posts`,
    method: 'GET',
  },
  comments: {
    url: (id) => `${Url}comments/${id}`,
    method: 'GET',
  },
}
