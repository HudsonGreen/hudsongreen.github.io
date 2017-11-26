$(document).ready(function() {
  
  var users = ["HG"];
  var verifiedUsers = ["HG"];
  
  var profileName = getUrlParameters("", "", true);
  
  alert(profileName);
  
  for(var i = 0; i < users.length; ++i) {
    if(users[i] == profileName.toString()) {
      alert("success");
      $(".profile-name").innerHTML = profileName;
      break;
    }
  }
  
});
