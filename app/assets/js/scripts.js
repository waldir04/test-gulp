$(function(){

	function waldir(){
		alert('click');
		console.log('linea 5');
	}

	$('#btn').on('click', function(e){
		waldir();	
	});

});