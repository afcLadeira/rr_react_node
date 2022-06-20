export async function fetchData(url) {
    return new Promise((resolve, reject) => {
     fetch(url ? url : "/api/test")
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error))
    });
  }

  export const isBiggerThan = (num) => {
    return function (array) {
      return array.length > num;
    };
  };
  
  export const isBiggerThan2 = isBiggerThan(2);