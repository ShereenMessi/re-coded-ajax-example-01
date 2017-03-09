$(document).ready(function(){

	$('#sizing-addon2').click(function(e){
		$('#imgLoading').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		var terms=$('#searchTerms').val();
		/*
		$.get(`https://api.github.com/search/repositories?q=${terms}`,function(data){
			
			$.each(data['items'],function(i,itm)
			{
				
				$('#result').append(`<a href="${itm['html_url']}">${itm['name']}</a><br>`)
				$('#result').append(`<p>${itm['description']}</p>`)
				$('#result').append(`Owner <a href='${itm['owner']['html_url']}'>${itm['owner']['login']}</a>`)
			})
			$('#imgLoading').fadeOut();
		}).fail(function(error){
			$('#imgLoading').fadeOut();
			$('#error').fadeIn();
		});
		*/

		$.get(`https://api.github.com/users/${searchTerms}/repos`, function(data){
			for(i=0; i < data.length; i+2){
				$('#result').append(`<a href="${data[i+1]['html_url']}">${data[i]['name']}</a>`);
			}
		$('#imgLoading').fadeOut();
		}).fail(function(){
			$('#imgLoading').fadeOut();
			$('#error').fadeIn();
		});
		
	});
})
