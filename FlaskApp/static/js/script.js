document.addEventListener('DOMContentLoaded', () => {

    //ready
    document.querySelector('body').classList.remove('no-js');

    //------------------------------------------------------------------------//

    //fakelink
    const fakeLinks = document.querySelectorAll('a[href="#"]');

    for (let value of fakeLinks) {
        value.addEventListener('click', (event) => {
            event.preventDefault();
        });
    }

    //------------------------------------------------------------------------//

    var validator = $("#padForm").validate({
        rules: {
            padText: {
                required: true,
                minlength: 4,
                number: true
            }
        },
        messages: {
            padText: {
                required: "Please enter a number",
                minlength: "Please enter a valid 4 digits number"
            }
        },
        submitHandler: function(form) {
            location.href='payment-choose-24.html';
            return false;  // block the default submit action
        }
    });

    let padInput = $('.pad-input');
    $(document).on('click', '.pad .number', function(event) {
        event.preventDefault();
        validator.resetForm();

        let thisText = $(this).text();
            thisTextLength = padInput.val().length;

        if (thisTextLength < 4) {
            padInput.val( padInput.val() + thisText );
            //validator.element('#padText');
        }

    });

    $(document).on('click', '.number-delete', function(event) {
        event.preventDefault();
        padInput.val( padInput.val().slice(0, -1) );
    });

    $(document).on('click', '.number-reset', function(event) {
        event.preventDefault();
        padInput.val('');
    });

    $(document).on('click', '.number-ok', function(event) {
        validator.element('#padText');
    });

}); //DOMContentLoaded

