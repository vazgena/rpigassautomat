document.addEventListener('DOMContentLoaded', () => {

    const globalKeyboard = [
        {
            'key1': '1',
            'key2': '2',
            'key3': '3',
            'key4': '4',
            'key5': '5',
            'key6': '6',
            'key7': '7',
            'key8': '8',
            'key9': '9',
            'key10': '0',
            'key11': ' ',
        }
    ];

    const keyboardLang = [
        {
            'lang': 'en',
            'keys': [
                'key1': 'q',
                'key2': 'w',
                'key3': 'e',
                'key4': 'r',
                'key5': 't',
                'key6': 'y',
                'key7': 'u',
                'key8': 'i',
                'key9': 'o',
                'key10': 'p',
                'key11': 'a',
                'key12': 's',
                'key13': 'd',
                'key14': 'f',
                'key15': 'g',
                'key16': 'h',
                'key17': 'j',
                'key18': 'k',
                'key19': 'l',
                'key20': '_',
                'key21': 'z',
                'key22': 'x',
                'key23': 'c',
                'key24': 'v',
                'key25': 'b',
                'key26': 'n',
                'key27': 'm',
                'key28': '@',
                'key29': '.',
                'key30': '–'
            ]
        },
        {
            'lang': 'no',
            'keys': [
                'key1': 'q',
                'key2': 'w',
                'key3': 'e',
                'key4': 'r',
                'key5': 't',
                'key6': 'y',
                'key7': 'u',
                'key8': 'i',
                'key9': 'o',
                'key10': 'p',
                'key11': 'å',
                'key12': 'a',
                'key13': 's',
                'key14': 'd',
                'key15': 'f',
                'key16': 'g',
                'key17': 'h',
                'key18': 'j',
                'key19': 'k',
                'key20': 'l',
                'key21': 'ø',
                'key22': 'æ',
                'key23': 'z',
                'key24': 'x',
                'key25': 'c',
                'key26': 'v',
                'key27': 'b',
                'key28': 'n',
                'key29': 'm',
                'key30': '@',
                'key31': '.',
                'key32': '–',
                'key33': '_'
            ]
        },
        {
            'lang': 'de',
            'keys': [
                'key1': 'q',
                'key2': 'w',
                'key3': 'e',
                'key4': 'r',
                'key5': 't',
                'key6': 'y',
                'key7': 'u',
                'key8': 'i',
                'key9': 'o',
                'key10': 'p',
                'key11': 'ü',
                'key12': 'a',
                'key13': 's',
                'key14': 'd',
                'key15': 'f',
                'key16': 'g',
                'key17': 'h',
                'key18': 'j',
                'key19': 'k',
                'key20': 'l',
                'key21': 'ö',
                'key22': 'ä',
                'key23': 'z',
                'key24': 'x',
                'key25': 'c',
                'key26': 'v',
                'key27': 'b',
                'key28': 'n',
                'key29': 'm',
                'key30': '@',
                'key31': '.',
                'key32': '–',
                'key33': '_'
            ]
        },
        {
            'lang': 'sw',
            'keys': [
                'key1': 'q',
                'key2': 'w',
                'key3': 'e',
                'key4': 'r',
                'key5': 't',
                'key6': 'y',
                'key7': 'u',
                'key8': 'i',
                'key9': 'o',
                'key10': 'p',
                'key11': 'å',
                'key12': 'a',
                'key13': 's',
                'key14': 'd',
                'key15': 'f',
                'key16': 'g',
                'key17': 'h',
                'key18': 'j',
                'key19': 'k',
                'key20': 'l',
                'key21': 'ö',
                'key22': 'ä',
                'key23': 'z',
                'key24': 'x',
                'key25': 'c',
                'key26': 'v',
                'key27': 'b',
                'key28': 'n',
                'key29': 'm',
                'key30': '@',
                'key31': '.',
                'key32': '–',
                'key33': '_'
            ]
        }
    ];

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

