$(document).ready( function() {
    $("#telefone").mask("(00) 0000-0000", {
        placeholder: "(DDD) 0000-0000"
    });

    $("#form_contato").validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        submitHandler: function(form) {
            alert("Mensagem enviada.");
            form.reset();
        }
    })
});;