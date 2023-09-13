export const getUserList = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      users.map(({ id, name, email, website }) => ({
        id,
        name,
        email,
        website
      }))
    );

export const getUserDetail = (id) =>
  fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((response) => response.json())
    .then((users) => users[0]);