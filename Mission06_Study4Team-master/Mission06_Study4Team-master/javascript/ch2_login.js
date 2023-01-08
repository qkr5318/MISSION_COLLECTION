function popupZipSearch(){
    new daum.Postcode({
    oncomplete: function(data) {
  
      var fullAddr = ''; 
      var extraAddr = '';
     
     
      if (data.userSelectedType === 'me_org_addr1') {
          fullAddr = data.roadAddress;
      } else {
          fullAddr = data.jibunAddress;
      }
     
  
      if(data.userSelectedType === 'R'){
        
          if(data.bname !== ''){
              extraAddr += data.bname;
          }
        
          if(data.buildingName !== ''){
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
        
          fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
      }
     
     
      document.getElementById('me_org_addr2').value = data.zonecode;
      document.getElementById("me_org_addr1").value = fullAddr;
     
      document.getElementById("me_org_addr2").focus();
    }
     
    }).open();
    }
     

    window.addEventListener('load', () => {
        const forms = document.getElementsByClassName('validation-form');
  
        Array.prototype.filter.call(forms, (form) => {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
  
            form.classList.add('was-validated');
          }, false);
        });
      }, false);