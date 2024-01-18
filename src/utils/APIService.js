export async function getData(registerRoute, userInfo) {
  const { name, email, password, confirm_password } = userInfo;
  return await fetch(registerRoute, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password, confirm_password }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
