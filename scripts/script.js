var img = chrome.runtime.getURL('../images/htmlify.png');

$("#watch-like-dislike-buttons").append(
	$('<img></img>').attr(
		{'class':'yt-uix-button yt-uix-button-icon yt-uix-button-empty','type': 'image','id':'buttonHTML5','src': img}
	).val("HTML5 me baby").click(
		function(){
            goToHTML5();
		}
	).css(
		'border-style', 'none'
	).hover(
		function(){
			$("#buttonHTML5").css("opacity","0.6");
		},function(){
			$("#buttonHTML5").css("opacity","1");
		}
	)
);
		
function goToHTML5() {
	var tablink = $(location).attr('href');

	var strs = tablink.split("v=");
	var id = strs[1].split("&")[0];
	var url = "http://www.youtube.com/embed/"+id+"?feature=player_detailpage&html5=1";

	$(location).attr('href',url);

}