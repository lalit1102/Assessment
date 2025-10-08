let data = [];

function showMessage(message, type = "success") {
  const msgDiv = document.getElementById("msg");
  msgDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  setTimeout(() => {
    msgDiv.innerHTML = "";
  }, 3000);
}

const saveData = () => {
  let nm = document.getElementById("name").value;
  let eml = document.frm.email.value;
  let evt = document.frm.event.value;
  let rat = document.frm.rating.value;
  let comnt = document.frm.comments.value;

  document.getElementById("nameErr").innerHTML = "";
  document.getElementById("emailErr").innerHTML = "";
  document.getElementById("eventErr").innerHTML = "";
  document.getElementById("ratingErr").innerHTML = "";
  document.getElementById("commentsErr").innerHTML = "";
  let status = 1;

  if (nm == "") {
    document.getElementById('nameErr').innerHTML = "Plz enter name";
    status = 0;
  }
  if (nm.trim() != "" && (nm.length < 2 || nm.length > 25)) {
    document.getElementById('nameErr').innerHTML = "Name must be between 2 to 25 characters";
    status = 0;
  }
  var ptrn = /^[A-Za-z ]*$/;
  if (nm != '' && !ptrn.test(nm.trim())) {
    document.getElementById('nameErr').innerHTML = "Must enter alphabetics not use digit";
    status = 0;
  }

  if (eml == "") {
    document.getElementById('emailErr').innerHTML = "Please enter your email";
    status = 0;
  }
  var email_ptn = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (eml != "" && !email_ptn.test(eml)) {
    document.getElementById('emailErr').innerHTML = "Please enter a valid email";
    status = 0;
  }

  if (evt === "" || evt === "Select_Events") {
    document.getElementById('eventErr').innerHTML = "Please select an event";
    status = 0;
  }

  if (
    rat === "" ||
    rat === "Select_Rating" ||
    isNaN(rat) ||
    rat < 1 ||
    rat > 5
  ) {
    document.getElementById('ratingErr').innerHTML = "Rating must be a number between 1 and 5";
    status = 0;
  }

  if (comnt.length < 10) {
    document.getElementById("commentsErr").innerHTML =
      "Comments must be at least 10 characters";
    status = 0;
  }

  if (status == 0) {
    showMessage("Please fix the errors above.", "danger");
    return false;
  }

  let alldata = JSON.parse(localStorage.getItem("userinfo")) || [];
  let obj = {
    id: alldata.length + 1,
    name: nm,
    email: eml,
    event: evt,
    rating: rat,
    comments: comnt,
  };
  alldata.push(obj);
  localStorage.setItem("userinfo", JSON.stringify(alldata));
  document.frm.reset();
  showMessage("Feedback saved successfully!", "success");
  disp();
  return false;
};

const disp = () => {
  let dt = localStorage.getItem("userinfo");
  let res = JSON.parse(dt) || [];
  dispTable(res);
};

const dispTable = (dataToShow) => {
  let res;
  if (dataToShow) {
    res = dataToShow;
  } else {
    let dt = localStorage.getItem("userinfo");
    res = JSON.parse(dt) || [];
  }
  let tr = "";
  if (res.length === 0) {
    tr = `<tr><td colspan="8" class="text-center text-danger">No feedback found</td></tr>`;
  } else {
  res.forEach((i) => {
    tr += `<tr>
      <td>${i.id}</td>
      <td>${i.name}</td>
      <td>${i.email}</td>
      <td>${i.event}</td>
      <td>${i.rating}</td>
      <td>${i.comments}</td>
      <td><button class="btn btn-danger" onclick="editData(${i.id})">Edit</button></td>
      <td><button class="btn btn-danger" onclick="delData(${i.id})">Delete</button></td>
    </tr>`;
  });
}
  document.getElementById("alldata").innerHTML = tr;
};

const editData = (id) => {
  let alldata = JSON.parse(localStorage.getItem("userinfo")) || [];
  let res = alldata.find((i) => i.id == id);
  if (res) {
    document.frm.name.value = res.name;
    document.frm.email.value = res.email;
    document.frm.event.value = res.event;
    document.frm.rating.value = res.rating;
    document.frm.comments.value = res.comments;
  }
};

const searchData = () => {
  let txt = document.getElementById("srcdata").value.toLowerCase();
  let alldata = JSON.parse(localStorage.getItem("userinfo")) || [];
  let res = alldata.filter((i) => {
    return (
      i.name.toLowerCase().includes(txt) ||
      i.event.toLowerCase().includes(txt) 
     
     
    );
  });
  dispTable(res);
};

const delData = (id) => {
  let alldata = JSON.parse(localStorage.getItem("userinfo")) || [];
  let res = alldata.filter((i) => i.id != id);
  res = res.map((item, idx) => ({ ...item, id: idx + 1 }));
  localStorage.setItem("userinfo", JSON.stringify(res));
  showMessage("Feedback deleted.", "success");
  disp();
};

disp();