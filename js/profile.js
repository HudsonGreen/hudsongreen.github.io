(function() {
  
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
