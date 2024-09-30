// Callback Hell
const token = ~~[Math.random() * 10000];
const pictures = ["image1", "image2", "image3"];

function login(userName, callback) {
  console.log("processing user login");
  setTimeout(() => {
    callback(
      {
        token: token,
        userName: userName,
      },
      500
    );
  });
}

function getUSer(token, callback) {
  console.log("processing get user");
  if (token) {
    setTimeout(() => {
      callback(
        {
          apiKey: {
            apiKey: "krowakkrowak",
          },
        },
        500
      );
    });
  }
}

const getPictures = (apiKey, callback) => {
  if (apiKey) {
    setTimeout(() => {
      callback(pictures, 2000);
    });
  }
};

login("raflytch", (res) => {
  console.log(`Welcome ${res.userName} ini adalah tokenmu ${res.token}`);
  getUSer(res.token, (res) => {
    console.log(res);
    getPictures(res.apiKey.apiKey, (res) => {
      console.log(res);
    });
  });
});
