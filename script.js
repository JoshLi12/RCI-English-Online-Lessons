function submitFeedback(event) {
  event.preventDefault();
  var name  = document.getElementById('name-input').value;
  var email  = document.getElementById('email-input').value;
  var feedback  = document.getElementById('feedback-input').value;
  if (feedback) {
    writeToDatabase(name, email, feedback)
    document.getElementById("name-input").value = "";
    document.getElementById('email-input').value = "";
    document.getElementById('feedback-input').value = "";
    document.getElementById("feedback-page-error-message").style.display = "none";
  }
  else {
    document.getElementById("feedback-page-error-message").style.display = "inline-block";
  }
}

var form  = document.getElementById('forms');
form.addEventListener('submit', submitFeedback)

let writeToDatabase = (name, email, feedback) => {
  const backendlessEndpoint = "https://storieddinner.backendless.app/api/data/User_feedback_info";
  const feedbackData = { Name: name, Email: email, Feedback_message: feedback };
  fetch(backendlessEndpoint, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedbackData),
  })
    .then((response) => response.json())
}

var dropped = false;
function dropMenu() {
  if (!dropped) {
    document.getElementById("dropdown-page").style.display = "flex";
    document.getElementById("dropdown-page").style["animation-name"] = "dropdownDown";
    document.getElementById("dropdown-home").style["animation-name"] = "buttonsUp";
    document.getElementById("dropdown-home").style.display = "block";
    document.getElementById("dropdownIconTop").style["animation-name"] = "dropdownIconTopMoveUp";
    document.getElementById("dropdownIconBottom").style["animation-name"] = "dropdownIconBottomMoveUp";

  }
  else {
    document.getElementById("dropdown-page").style["animation-name"] = "dropdownUp";
    document.getElementById("dropdownIconTop").style["animation-name"] = "dropdownIconTopMoveDown";
    document.getElementById("dropdownIconBottom").style["animation-name"] = "dropdownIconBottomMoveDown";
  }
  dropped = !dropped;
}

function saveInput() {
  document.getElementById("base-page-overbound-error").style.display = "none";
  document.getElementById("base-page-empty-error").style.display = "none";
  const lessons = new Map([
    [1, "./videos/video-1.html"],
    [2, "./videos/video-2.html"],
    [3, "./videos/video-3.html"],
    [4, "./videos/video-4.html"],
    [5, "./videos/video-5.html"],
    [6, "./videos/video-6.html"],
    [7, "./videos/video-7.html"],
    [8, "./videos/video-8.html"],
    [9, "./videos/video-9.html"],
    [10, "./videos/video-10.html"],
    [11, "./videos/video-11.html"],
    [12, "./videos/video-12.html"],
    [13, "./videos/video-13.html"],
    [14, "./videos/video-14.html"],
    [15, "./videos/video-15.html"],
    [16, "./videos/video-16.html"],
    [17, "./videos/video-17.html"],
    [18, "./videos/video-18.html"],
    [19, "./videos/video-19.html"],
    [20, "./videos/video-20.html"],
    [21, "./videos/video-21.html"],
    [22, "./videos/video-22.html"],
    [23, "./videos/video-23.html"],
    [24, "./videos/video-24.html"],
    [25, "./videos/video-25.html"],
    [26, "./videos/video-26.html"],
    [27, "./videos/video-27.html"],
    [28, "./videos/video-28.html"],
    [29, "./videos/video-29.html"],
    [30, "./videos/video-30.html"],
    [31, "./videos/video-31.html"],
    [32, "./videos/video-32.html"],
    [33, "./videos/video-33.html"],
    [34, "./videos/video-34.html"],
    [35, "./videos/video-35.html"],
    [36, "./videos/video-36.html"],
    [37, "./videos/video-37.html"],
    [38, "./videos/video-38.html"],
    [39, "./videos/video-39.html"],
    [40, "./videos/video-40.html"]
  ]);
  if (document.getElementById("lesson-number-input").value) {
    var lessonInput = parseInt(document.getElementById("lesson-number-input").value);
    if (lessonInput <= 40) {
      let temp = lessons.get(lessonInput);
      window.location.href = temp;
      console.log(document.getElementById("submit-input-link"));
    }
    else {
      document.getElementById("base-page-overbound-error").style.display = "block";
    }
  } else{
    document.getElementById("base-page-empty-error").style.display = "block";
  }
}
