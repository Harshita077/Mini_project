var rollV, nameV, genderV, addressV;

function readFom() {
  UsernameV = document.getElementById("Username").value;
  EmailV = document.getElementById("Email").value;
  PasswordV = document.getElementById("Password").value;
  PasswordagainV = document.getElementById("Passwordagain").value;
  console.log(UsernameV, EmailV, PasswordagainV, PasswordV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UsernameV)
    .set({
        Username: UsernameV,
        Email: EmailV,
        Password: PasswordV,
        Passwordagain: PasswordagainV,
    });
  alert("Data Inserted");
  document.getElementById("Username").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("Passwordagain").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UsernameV)
    .on("value", function (snap) {
      document.getElementById("Username").value = snap.val().Username;
      document.getElementById("Email").value = snap.val().Email;
      document.getElementById("Password").value = snap.val().Password;
      document.getElementById("Passwordagain").value = snap.val().Passwordagain;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UsernameV)
    .update({
      //   Username: UsernameV,
      Email: EmailV,
      Password: PasswordV,
      Passwordagain: PasswordagainV,
    });
  alert("Data Update");
  document.getElementById("Username").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("Passwordagain").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("student/" + UsernameV)
    .remove();
  alert("Data Deleted");
  document.getElementById("Username").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Password").value = "";
  document.getElementById("Passwordagain").value = "";
};