//index.js  

$('.hide').hide();

let fzezsed = 'Yapopaf41';
function sendEmail() {
    $('.hide').hide();
    let email = $('#email').val();
    let name = $('#name').val();
    let sujet = $('#sujet').val();
    let comment = $('#comment').val();
    
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false)
    {
        $('.emailFalse').show();
        return 0
    }

    if(sujet == false){
        $('.sujetFalse').show();
        return 0
    }

    if(comment == false){
        $('.commentFalse').show();
        return 0
    }


	Email.send({
	Host: "smtp.gmail.com",
	Username : "yacine.fethi41@gmail.com",
	Password : fzezsed,
	To : 'yacine.fethi41@gmail.com',
	From : email,
	Subject : sujet,
	Body : name + '<br><br>'+comment,
	}).then(function (message) {
            alert("Message envoyé avec succès");
            $('.feedback-input').val('')
        }
	);
}