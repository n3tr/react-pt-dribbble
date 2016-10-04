export default (id) => {
  return fetch(`https://api.dribbble.com/v1/shots/${id}?access_token=865c0ec9f1388e9df68a4a2d55d54d9bcfbe330b4e5b3bf9529cfc819b5f7b63`)
  .then((res) => res.json())
}
