
$("#watch-headline-title").append($('<input id="buttonHTML5"></input>').attr({'type': 'button'})
	.val("HTML5 me baby").click(function(){
            goToHTML5();
        }));

$("#buttonHTML5").css("background-image: url(icon.png");

function goToHTML5() {
	var tablink = $(location).attr('href');

	var strs = tablink.split("v=");
	var id = strs[1].split("&")[0];
	var url = "http://www.youtube.com/embed/"+id+"?feature=player_detailpage&html5=1";

	$(location).attr('href',url);

}