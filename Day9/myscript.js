function oddeven(){
	var num_;
	num_ = Number(document.frmNumber.txtNumber.value);
	if(isNaN(num_)){
		document.getElementById('answer').innerHTML = " is not a number.";
	} else if(num_ == 0){
		document.getElementById('answer').innerHTML = " is zero.";
	} else if(num_ % 2 == 0){
		document.getElementById('answer').innerHTML = " is even.";
	} else {
		document.getElementById('answer').innerHTML = " is odd.";
	}
}