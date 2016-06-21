function validateForm(){
		if(document.frmLogin.txtUsr.value == ''){
			document.getElementById('msg_').innerHTML = "X: Username please!";
			document.frmLogin.txtUsr.focus();
			document.frmLogin.txtUsr.style.background = "#ffff00";
		} else if(document.frmLogin.txtPwd.value == '') {
			document.getElementById('msg_').innerHTML = "X: Password please!"
			document.frmLogin.txtPwd.focus();
			document.frmLogin.txtPwd.style.background = "#ffff00";
		} else {
			document.frmLogin.txtUsr.style.background = "#ffffff";
			document.frmLogin.txtPwd.style.background = "#ffffff";
			document.getElementById('content_').innerHTML = "THANKS";
			//document.frmLogin.submit();
		}
}