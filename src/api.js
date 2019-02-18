import axios from "axios";
import unsplash from "./unsplash";
import mockaroo from "./mockaroo";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/"
});

export function call(config) {
  return axiosInstance(config)
    .then(response => {
      return response;
    })
    .catch(e => {
      //TODO: dispatch error handling
      return e;
    });
}

export function isAuth() {
  const config = {
    method: "get",
    withCredentials: true,
    url: "check",
    data: {}
  };
  return call(config).then(response => {
    if (response.status == 200) {
      return true;
    }
    return false;
  });
}

export function getRandomUnsplashImages(query, count = 1) {
  var url = `${unsplash.baseUrl}photos/random?client_id=${
    unsplash.key
  }&count=${count}`;

  if (query) url = url.concat(`&query=${query}`);

  const config = {
    method: "get",
    url: url
  };

  return call(config)
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
}

export function getPets(count = 10, species = undefined) {
  var url = `${mockaroo.baseUrl}pets.json?key=${mockaroo.key}&count=${count}`;

  if (species) url = url.concat(`&species=${species}`);

  const config = {
    method: "get",
    url: url
  };

  return call(config)
    .then(response => {
      //TODO: this is just tmp solution for displaying nice images...
      getRandomUnsplashImages(species, response.data.length).then(images => {
        var iter = 0;
        response.data.map(item => {
          item.image_small = images[iter].urls["small"];
          item.image_regular = images[iter].urls["regular"];
          iter++;
        });
      });

      return response.data;
    })
    .catch(e => {
      alert(e);
      return e;
    });
}
