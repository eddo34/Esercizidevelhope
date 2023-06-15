const user = {
  id: 1,
  name: "John",
  age: 25,
};


function localSaveObj(obj, key) {
  let jsonObj = JSON.stringify(obj)
  localStorage.setItem(key, `${jsonObj}`)
};

localSaveObj(user, "user");

function getData(key) {
  const data = localStorage.getItem(key)
  console.log(JSON.parse(data));
}

getData("user");




