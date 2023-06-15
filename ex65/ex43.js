const user = {
  id: 1,
  name: "John",
  age: 25,
};



function localSaveObj(obj) {
  let jsonObj = JSON.stringify(obj)
  localStorage.setItem("user", `${jsonObj}` )
};

localSaveObj(user);




