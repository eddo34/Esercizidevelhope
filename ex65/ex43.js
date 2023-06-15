const user = {
  id: 1,
  name: "John",
  age: 25,
};



function localSaveObj(obj, key) {
  let jsonObj = JSON.stringify(obj)
  localStorage.setItem(key, jsonObj )
};


localSaveObj(user, "user"); 




