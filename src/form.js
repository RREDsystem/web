
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    alert("hello weold")
    $('.selectpicker').selectpicker('mobile',{
        size: 5,
        width: '100%' 
    });
}

$('.selectpicker').selectpicker({
  //style: 'btn-info',
  size: 5,
  width: '100%'
});

/*message error*/

function errorMessage(ageData){
    $(".messageError").css("display", "blok").fadeIn(600);

    console.log("ERROR SEND");

    if(ageData){
        $(".ageError").fadeOut(200);
    }else if($("#age").val() != undefined){
        $(".ageError").css("display", "blok").fadeIn(200);
    }else{ };
}

/*onResetForm*/

function onResetForm(){
    $("#validationForm").validate().resetForm();

    document.getElementById("validationForm").reset();

    $(".ageError , .messageError").fadeOut(200);
}

// send form
function sendFrom(){
        $("#validationForm").validate({
            rule:{
                name:"required",
                lastName:"required",
                DNI:{
                    required:true,
                    maxlength:8,
                    minlength:8
                },
                CUIT:{
                    required:true,
                    maxlength:11,
                    minlength:11
                },
                age:{
                    required:true,
                    maxlength:2,
                    minlength:1
                },
                salary:{
                    required:true,
                    maxlength:7,
                    minlength:4
                },
                situation:"required",
                sex:"required",
                childrenNumber:{
                    required:true,
                    minlength:1,
                    maxlength:2
                },
                email:{
                    required:true,
                    email:true
                }
                
            },
            rules: {
                childrenNumber:{
                    range: [1, 15]
                },
                DNI:{
                    digits: true
                },
                CUIT:{
                    digits: true
                },
                salary:{
                    digits: true,
                    range: [7000, 100000]
                },
                age:{
                    range: [18, 90]
                }
            },
            messages:{
                name:"",
                lastName:"",
                DNI:{
                    required:null,
                    minlength:null,
                    maxlength:null
                },
                CUIT:{
                    required:"",
                    minlength:"",
                    maxlength:""
                },
                salary:{
                    required:"",
                    maxlength:"",
                    mixlength:""
                },
                age:{
                    required:"",
                    maxlength:"",
                    mixlength:""
                },
                situation:"",
                sex:"",
                children:"",
                email:{
                  required:"",
                  email:"Email inválido"
                }
            }
        });

        var ageData = $("#age").val() >= 18 && $("#age").val() <= 90;
       
        if($("#validationForm").valid() && ageData ){
            console.log("send form")
            /*
            algoritmo
            */
            onResetForm();
             $('#messageStatusForm').modal('show');

        }else{
            errorMessage(ageData);
         };
}

/*childrenNumber validation*/

var childrenNumber =$("#childrenNumber");
childrenNumber.prop('disabled', true);

$(".children").click(function () {
	if($('input:radio[name=children]:checked').val() == "Si"){
        childrenNumber.prop('disabled', false);
       childrenNumber.css("background-color", "white");
    }else{
        childrenNumber.prop('disabled', true);
        childrenNumber.val(null) ;
        childrenNumber.css("background-color", "rgb(235, 235, 228)");
        childrenNumber.css("border-left", "2px solid #28aac7");
    }
});

/*input text*/
function onKeyValidate(e) { // 1
    tecla = (document.all) ? e.keyCode : e.which; // 2
    if (tecla==8) return true; // 3
    pattern =/[A-Za-z\s]/; // 4
    te = String.fromCharCode(tecla); // 5
    return pattern.test(te); // 6
}

