
function errorMessage(ageData){
    $(".messageError").css("display", "blok").fadeIn(600);
    console.log("ERROR SEND");

    if(ageData){
        $(".ageError").fadeOut(200);
    }else if($("#age").val()){
        $(".ageError").css("display", "blok").fadeIn(200);
    }else{

    };
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
                    mixlength:8
                },
                CUIT:{
                    required:false,
                    maxlength:11,
                    mixlength:11
                },
                age:{
                    required:true,
                    maxlength:2,
                    mixlength:1
                },
                salary:{
                    required:true,
                    maxlength:7,
                    mixlength:4
                },
                situation:"required",
                sex:"required",
                email:{
                    required:true,
                    email:true
                }
                
            },
            rules: {
                childrenNumber:{
                    required:true,
                    range: [1, 15]
                },
                DNI:{
                    digits: true
                },
                CUIT:{
                    digits: true
                },
                salary:{
                    digits: true
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

        var ageData = $("#age").val()>= 18 && $("#age").val()<= 90;
       
        if($("#validationForm").valid() && ageData ){
            console.log("send form")
            /*
            algoritmo
            */
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

