const btnXHR = document.getElementById("btnXHR");
const resetBtn = document.getElementById("resetBtn");
const btnFetch = document.getElementById("btnFetch");
const resetBtnFetch = document.getElementById("resetBtnFetch");

// xhr
btnXHR.addEventListener("click", function () {
  document.querySelector(
    "#mainImg"
  ).src = `https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif`;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://api.nasa.gov/planetary/apod?api_key=ybmrJlrveDLujV2pita3bJVCBaC9av7XHpO1WvaE",
    true
  );

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      // console.log(data);
      document.querySelector("#title").innerHTML = `Title: ${data.title}`;
      document.querySelector("#date").innerHTML = `Date: ${data.date}`;
      document.querySelector(
        "#desc"
      ).innerHTML = `Description: ${data.explanation}`;
      document.querySelector("#mainImg").src = data.hdurl;
    }
  };

  xhr.send();
});

resetBtn.addEventListener("click", function () {
  document.querySelector("#title").innerHTML = "This is Title";
  document.querySelector("#date").innerHTML = "This is Date";
  document.querySelector("#desc").innerHTML = "This is Description";
  document.querySelector("#mainImg").src =
    "https://freepngimg.com/download/space/23041-1-nasa-image.png";
});

// fetch
btnFetch.addEventListener("click", function () {
  document.querySelector(
    "#mainImgFetch"
  ).src = `https://i.pinimg.com/originals/d9/f2/15/d9f21515b1e38d83e94fdbce88f623b6.gif`;

  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=ybmrJlrveDLujV2pita3bJVCBaC9av7XHpO1WvaE"
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      document.querySelector("#titleFetch").innerHTML = `Title: ${data.title}`;
      document.querySelector("#dateFetch").innerHTML = `Date: ${data.date}`;
      document.querySelector(
        "#descFetch"
      ).innerHTML = `Description: ${data.explanation}`;

      document.querySelector("#mainImgFetch").src = data.hdurl;
    })
    .catch((error) => {
      console.log(error);
    });
});

resetBtnFetch.addEventListener("click", function () {
  document.querySelector("#titleFetch").innerHTML = "This is Title";
  document.querySelector("#dateFetch").innerHTML = "This is Date";
  document.querySelector("#descFetch").innerHTML = "This is Description";
  document.querySelector("#mainImgFetch").src =
    "https://freepngimg.com/download/space/23041-1-nasa-image.png";
});
