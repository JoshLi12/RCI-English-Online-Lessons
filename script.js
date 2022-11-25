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
    [8, "./videos/video-8.html"]
  ]);
  if (document.getElementById("lesson-number-input").value) {
    var lessonInput = parseInt(document.getElementById("lesson-number-input").value);
    if (lessonInput <= 8) {
      let temp = lessons.get(lessonInput);
      document.getElementById("submit-input-link").setAttribute("href", temp);
    }
    else {
      document.getElementById("base-page-overbound-error").style.display = "block";
    }
  } else{
    document.getElementById("base-page-empty-error").style.display = "block";
  }
}
