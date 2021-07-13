let user_data = {
  lines: [0, 1, 2, 3],
  fills: ["hello"],
  title: "wassup",
};

window.addEventListener(
  "message",
  (event) => {
    if (event.data.fn == "qrk_load_data") {
      qrk_load_data(event.data.payload.data);
    }
    if (event.data.fn == "qrk_save_data") {
      event.source.postMessage(
        { fn: "qrk_save_data", payload: user_data },
        event.origin
      );
    }
  },
  false
);

const qrk_load_data = (data) => {
  user_data = data;
  let target = document.querySelector("#data");
  target.innerHTML = `data: ${Object.values(data)}`;
  console.log("tool data ", data);
  return user_data;
};

const qrk_save_data = () => {
  return user_data;
};
