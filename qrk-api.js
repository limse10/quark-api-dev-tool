let user_data = {
  lines: [0, 1, 2, 3],
  fills: ["hello"],
  title: "wassup",
};

const qrk_load_data = (data) => {
  user_data = data;
  let target = document.querySelector("#data");
  target.innerHTML = `data: ${Object.values(data)}`;
  console.log();
  return user_data;
};

const qrk_save_data = () => {
  return user_data;
};
