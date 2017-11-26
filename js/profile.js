(function() {
  
  var users = ['HG'];
  var displayNames = ['Hudson Green'];
  var verifiedUsers = ['HG'];
  var admins = ['HG'];
  
  var profileID = getUrlParameters('', '', true);
  
  for(var i = 0; i < users.length; ++i) {
    if(users[i] == profileID) {
      $('.profile-name').html(displayNames[i]);
      break;
    }
  }
  
  for(var i = 0; i < verifiedUsers.length; ++i) {
    if(verifiedUsers[i] == profileID) {
      $('.profile-name').after(
        '&nbsp;<span class="fa-stack badge-verified" style="font-size: 80%;">' +
	      '<i class="fa fa-lg fa-certificate fa-stack-1x"></i>' +
	      '<i class="fa fa-check fa-stack-1x fa-inverse"></i>' +
	'</span>'
      );
    }
  }
  
  for(var i = 0; i < admins.length; ++i) {
    if(admins[i] == profileID) {
      $('.profile-name-wrapper').after('<h5 class="profile-rank rank-admin">Admin</h5>');
    }
  }
  
  function getUrlParameters(parameter, staticURL, decode){

       var currLocation = (staticURL.length)? staticURL : window.location.search,
           parArr = currLocation.split('?')[1].split('&'),
           returnBool = true;

       for(var i = 0; i < parArr.length; i++){
            parr = parArr[i].split('=');
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
