document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('closepreloader');
		if( !preloader.classList.contains('done') )
		{
			preloader.style.visibility ="visible"
		}

	}, 2000);
}