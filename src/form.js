
function errorMessage(ageData,childrenData){
            $(".messageError").css("display", "blok").fadeIn(600);
            console.log("ERROR SEND");

            if(ageData){
                $(".ageError").fadeOut(200);
            }else if($("#age").val()){
                $(".ageError").css("display", "blok").fadeIn(200);
            }else{

            };

            if(childrenData == false && $('input:radio[name=children]:checked').val() == "Si"){
                $("#childrenNumber").css("background", "rgba(177, 42, 61, 0.1)");
                $("#childrenNumber").css("border-left", "2px solid #b12a3d");
            }
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
        var childrenData = (($('input:radio[name=children]:checked').val() == "Si") && $('#childrenNumber').val() > 0 && $('#childrenNumber').val() < 16) || $('input:radio[name=children]:checked').val() == "No";


        if($("#validationForm").valid() && ageData && childrenData){
            console.log("send form")
            /*
            algoritmo
            */
        }else{
            errorMessage(ageData,childrenData);
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

