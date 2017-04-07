$(document).ready(function()
{
	
	var uid = 0;

	
	$("#saveBtn").click(function(){
		
		var fName = $('#fName').val();
		var lName = $('#lName').val();
		var telNum = $('#telNum').val();
		var email = $('#email').val();

		var toAdd = "<tr class = 'contact-style' align='center'><td>"+uid+"</td><td class='fNames'>"+fName+"</td><td class='lNames'>"+lName+"</td><td class='telNums'>"+telNum+"</td><td class='emails'>"+email+"</td><td><button class = 'delete'>Delete</button><button class = 'editBtn'>Edit</button>"+
					"<button class = 'saveBtn' style='display: none;'>Save</button></td></tr>";
		
		if(email.indexOf("@") === -1){

			alert("You have not entered a valid email!")
			$("#email").focus();

		}else{
			
			if(isNaN($("#telNum").val())){
			
				alert("Invalid Telephone Number!")
				$("#telNum").focus();

			}else{
			
			$("#contacts-table tbody").append(toAdd);

			uid++;

			$('#fName').val("");
			$('#lName').val("");
			$("#telNum").val("");
			$('#email').val("");
			}
		}
		
	});	
		

	$("#contacts-table tbody").on('click', '.delete', function (){

    		$(this).closest('tr').remove();

	});	
		
	$("#discardBtn").click(function(){

			$('#fName').val("");
			$('#lName').val("");
			$('#email').val("");
	});

	$("#contacts-table tbody").on('click', '.editBtn', function (){

    	$('.editBtn').hide();
    	$('.saveBtn').show();

 	    $(this).closest("tr").find(".fNames").prop("contenteditable", true).focus();
 	    $(this).closest("tr").find(".fNames").css({ 'background': 'White' });
 	    $(this).closest("tr").find(".lNames").prop("contenteditable", true).focus();
 	    $(this).closest("tr").find(".lNames").css({ 'background': 'White' });
 	    $(this).closest("tr").find(".telNums").prop("contenteditable", true).focus();
 	    $(this).closest("tr").find(".telNums").css({ 'background': 'White' });
 	    $(this).closest("tr").find(".emails").prop("contenteditable", true).focus();
 	    $(this).closest("tr").find(".emails").css({ 'background': 'White' });

 	});	

	$("#contacts-table tbody").on('click', '.saveBtn', function (){

    	$('.saveBtn').hide();
    	$('.editBtn').show();
    	$(this).closest("tr").find(".fNames").prop("contenteditable", false).focus();
 		$(this).closest("tr").find(".fNames").css({ 'background': '#999' });
 		$(this).closest("tr").find(".lNames").prop("contenteditable", false).focus();
 	    $(this).closest("tr").find(".lNames").css({ 'background': '#999' });
 	    $(this).closest("tr").find(".telNums").prop("contenteditable", false).focus();
 	    $(this).closest("tr").find(".telNums").css({ 'background': '#999' });
 	    $(this).closest("tr").find(".emails").prop("contenteditable", false).focus();
 	    $(this).closest("tr").find(".emails").css({ 'background': '#999	' });

 	});
 
    
 });
	

