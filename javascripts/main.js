function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var
  input = document.querySelectorAll('.required.email.input')[0],
  modal = document.querySelectorAll('.modal')[0],
  send = document.querySelectorAll('.send')[0],
  validator = document.querySelectorAll('.validator')[0]
;

input.addEventListener('keyup',function(){
  var formInput = input.value;
  if(validateEmail(formInput)){
    validator.className = "validator valid";
    send.className = "send valid";
  }
  else{
    validator.className = "validator hide";
    send.className = "send hide";
  }
});

send.addEventListener('click',function(){
  modal.className = "modal sent";
});
