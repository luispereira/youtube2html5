var img = chrome.runtime.getURL('../images/htmlify.png');
var hovimg = chrome.runtime.getURL('../images/htmlhov.png');

$("#watch-like-dislike-buttons").append(
	$('<img></img>').attr(
		{'class':'yt-uix-button yt-uix-button-icon yt-uix-button-empty','type': 'image','id':'buttonHTML5','src': img}
	).val("HTML5 me baby").click(
		function(){
            HTML5();
		}
	).css(
		'border-style', 'none'
	).hover(
		function(){
			$("#buttonHTML5").css("content","url("+ hovimg +")");
			$("#buttonHTML5").css("opacity","1");
			$("#buttonHTML5").css("border-bottom","3px solid #930");
			$("#buttonHTML5").css("padding-bottom","5px");
			$("#buttonHTML5").css("border-radius","0px");
			
			
		},function(){
			$("#buttonHTML5").css("content","url("+ img + ")");
			$("#buttonHTML5").css("opacity","0.6");
			$("#buttonHTML5").css("border","none");
		}
	)
);

function HTML5(){
	movie_player.parentNode.removeChild(movie_player);
	var tablink = $(location).attr('href');
	var strs = tablink.split("v=");
	var id = strs[1].split("&")[0];
	var url = "http://www.youtube.com/embed/"+id+"?feature=player_detailpage&html5=1";

	var player = document.createElement('iframe');
	player.setAttribute('style','width:100%; height:100%;');
	player.setAttribute('src', url);
	player.setAttribute('frameborder','0');

	document.getElementById('player-api').appendChild(player);
}
		