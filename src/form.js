function validate(){
        

        $("#validationForm").validate({
            rule:{
                name:"required",
                email:{
                    required:true,
                    email:true
                }
            },
            messages:{
                name:"nombre obligatorio",
                email:{
                  required:"campo requerido",
                  email:"email invalido"
                }

            }
        })
        console.log("hello validate",$("#validationForm").valid());
}

