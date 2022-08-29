document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.subject.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });



$(function (){

       $('#contact-form').submit(function(e) {

        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
          type: 'POST',
          url: 'php/contact.php',
          data: postdata,
          dataType: 'json',
          success: function(result) {
            
            if(result.isSuccess)
            {
              $("#contact-form").append("p class='Thank you for contacting Divine Home Care'> We will get back to you shortly...</p>");
              $("#contact-form")[0].reset();
            }

            else
            {
              $("#name + .comments").html(result.nameError);
              $("#subject + .comments").html(result.subjectError);
              $("#email + .comments").html(result.emailError);
              $("#message + .comments").html(result.messageError);
            }

          }


        });

       });
})