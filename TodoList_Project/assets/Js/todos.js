//specific todo check
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
//Click to delete 
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var ttext = $(this).val();
		//creating a new li and add to ul
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " +  ttext +"</li>");
	}
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});