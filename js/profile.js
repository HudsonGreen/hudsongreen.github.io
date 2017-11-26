$(function() {
  
  var users = ["HG"];
  var verifiedUsers = ["HG"];
  
  var profileName = getUrlParameters("", "", true);
  
  for(var i = 0; i < users.length; ++i) {
    if(users[i] == profileName) {
      $(".profile-name").innerHTML() = profileName;
    }
  }
  
});
