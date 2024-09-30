// Promise
const token = ~~[Math.random() * 10000];
const pictures = ["image1", "image2", "image3"];

const login = (userName) => {
  console.log("processing user login");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName !== "raflytch") {
        reject("User not found");
      } else {
        resolve(`Welcome ${userName} ini adalah tokenmu ${token}`);
      }
    }, 1000);
  });
};

const getApiKey = (token) => {
  console.log("processing get api key");
  return new Promise((resolve, reject) => {
    if (token) {
      setTimeout(() => {
        resolve({ apiKey: "apiKey67123681638168" });
      }, 1000);
    } else {
      reject("Token not found");
    }
  });
};

const getPictures = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (apiKey) {
      setTimeout(() => {
        resolve(pictures);
      }, 1000);
    } else {
      reject("Api key not found");
    }
  });
};

const user = login("raflytch");
user
  .then((res) => {
    console.log(res);
    const getUserApiKey = getApiKey(token);
    getUserApiKey.then((res) => {
      console.log(res);
      const getPicture = getPictures(res.apiKey);
      getPicture.then((res) => {
        console.log(res);
      });
    });
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
