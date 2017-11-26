(function() {
  
  var users = ["HG"];
  var displayNames = ["Hudson Green"];
  var verifiedUsers = ["HG"];
  
  var profileID = getUrlParameters("", "", true);
  
  for(var i = 0; i < users.length; ++i) {
    if(users[i] == profileID) {
      $(".profile-name").html(displayNames[i]);
      break;
    }
  }
  
  function getUrlParameters(parameter, staticURL, decode){

       var currLocation = (staticURL.length)? staticURL : window.location.search,
           parArr = currLocation.split("?")[1].split("&"),
           returnBool = true;

       for(var i = 0; i < parArr.length; i++){
            parr = parArr[i].split("=");
            if(parr[0] == parameter){
                return (decode) ? decodeURIComponent(parr[1]) : parr[1];
                returnBool = true;
            }else{
                returnBool = false;            
            }
       }

       if(!returnBool) return false;  
    }
  
})();
