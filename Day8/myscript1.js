function printTable(){
	var tabNum, table__='';
	document.getElementById('print_').innerHTML = '';
	
	tabNum = Number(document.getElementById('table').value);
	
	for(loop1 = 1; loop1<= 10; loop1++ ){
		table__ = table__ + "<div class='row_'>" + tabNum + " x " + loop1 + " = " + tabNum*loop1 + "</div><div class='newline'></div>";
	}
	
	if(document.getElementById('table').value != ''){
		document.getElementById('print_').innerHTML = table__;
	} 
}