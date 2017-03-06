$(document).ready(function(){

	$('a').click(function(e){
		$('#imgLoading').fadeIn();
		$('#error').fadeOut();
		e.preventDefault();
		var terms=$('#searchTerms').val();
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
		})

	})
})
