const addForm = document.querySelector("#addForm");
const contentWrap = document.querySelector("#contentWrap");
const userInfo = ["name", "age"];

const writeInStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    localStorage.setItem(key, []);
  }
};

const readFromStorage = (key) => {
  let data;
  try {
    data = JSON.parse(localStorage.getItem(key));
    if (!Array.isArray(data)) throw new Error("is not array");
  } catch (e) {
    data = [];
  }
  return data;
};

const createEle = (parent, ele, text, classes,id) => {
  const newEle = document.createElement(ele);
  if (text) newEle.textContent = text;
  if (classes) newEle.classList = classes;
  if(id) newEle.setAttribute('id',id)
  parent.appendChild(newEle);
  return newEle;
};

const showData = (data) => {
  contentWrap.innerHTML=""
  if(data.length===0)
  {
    const tr = createEle(contentWrap, "tr", null, "alert alert-danger")
    const td = createEle(tr, "td", "No Data Yet", "alert alert-danger")
    td.setAttribute("colspan", "5")
  }
  data.forEach((d, i) => {
    const tr = createEle(contentWrap, "tr", null, null);
    createEle(tr, "td", d.id, null,`id${i}`);
    createEle(tr, "td", d.name, null,`name${i}`);
    createEle(tr, "td", d.age, null,`age${i}`);
    createEle(tr, "td", d.status, null,`status${i}`);
    const td = createEle(tr, "td", null, null);
    const edit = createEle(td, "button", "Change Status", "btn btn-primary mx-3",null);
    const del = createEle(td, "button", "Delete", "btn btn-danger mx-3",null);

    del.addEventListener("click", (e) => {
      data.splice(i, 1);
      writeInStorage("info", data);
      showData(data);
    });

    edit.addEventListener("click",(e)=>{
      if(d.status==="active")
      {
        //document.getElementById(`status${i}`).textContent="inactive";
        d.status="inactive"
        writeInStorage("info", data);
        showData(data);
      }
      else if (d.status==="inactive") {
       // document.getElementById(`status${i}`).textContent="active";
       d.status="active"
       writeInStorage("info", data);
       showData(data);
      }
    })
  });
};

if (addForm) {
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const info = { status: "active", id: Date.now() };
    //console.log(addForm.elements['name'])
    userInfo.forEach((i) => (info[i] = addForm.elements[i].value));
    const userData = readFromStorage("info");
    console.log(userData);
    userData.push(info);
    console.log(userData);
    writeInStorage("info", userData);
    addForm.reset();
    window.location.href = "index.html";
  });
}

if (contentWrap) {
  const data = readFromStorage("info");
  console.log(data);
  showData(data);
}
