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
            'key10': '0'
        }
    ];

    const keyboardLang = [
        {
            'lang': 'en',
            'keys': [
                {
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
                    'backspace': 'backspace',
                    'nextline1': 'nextline',
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
                    'nextline2': 'nextline',
                    'key21': 'z',
                    'key22': 'x',
                    'key23': 'c',
                    'key24': 'v',
                    'key25': 'b',
                    'key26': 'n',
                    'key27': 'm',
                    'key28': '@',
                    'key29': '.',
                    'key30': '–',
                    'nextline3': 'nextline',
                    'space': 'space'
                }
            ]
        },
        {
            'lang': 'no',
            'keys': [
                {
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
                    'backspace': 'backspace',
                    'nextline1': 'nextline',
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
                    'nextline2': 'nextline',
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
                    'key33': '_',
                    'nextline3': 'nextline',
                    'space': 'space'
                }
            ]
        },
        {
            'lang': 'de',
            'keys': [
                {
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
                    'backspace': 'backspace',
                    'nextline1': 'nextline',
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
                    'nextline2': 'nextline',
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
                    'key33': '_',
                    'nextline3': 'nextline',
                    'space': 'space'
                }
            ]
        },
        {
            'lang': 'sw',
            'keys': [
                {
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
                    'backspace': 'backspace',
                    'nextline1': 'nextline',
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
                    'nextline2': 'nextline',
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
                    'key33': '_',
                    'nextline3': 'nextline',
                    'space': 'space'
                }
            ]
        }
    ];

    let currentLang = 'sw';

    //create keyboard
    function createKeyboard() {
        const keyboard = $('.keyboard'),
              keyClearfix = '<div class="key-clearfix" />';

        if (currentLang == 'en') {
            keyboard.addClass('keyboard-en');
        } else {
            keyboard.removeClass('keyboard-en');
        }

        for( key in globalKeyboard ) {
            for( num in globalKeyboard[key] ) {
                let keyTemplate ='<div class="key-cell key-cell-num"><a href="#" class="key-link"><span class="key-text">'+globalKeyboard[key][num]+'</span></a></div>';
                keyboard.append(keyTemplate);
            }
            keyboard.append(keyClearfix);
        }
        for( key in keyboardLang ) {
            if (keyboardLang[key]['lang'] == currentLang) {
                for( num in keyboardLang[key]['keys'][0] ) {
                    let thisValue = keyboardLang[key]['keys'][0][num],
                        thisClass = '';
                    if ( thisValue == 'space' ) {
                        thisClass = thisValue;
                    } else if ( thisValue == 'backspace' ) {
                        thisClass = thisValue;
                    }
                    if ( thisValue != 'nextline' ) {
                        let keyTemplate ='<div class="key-cell key-cell-lang '+thisClass+'"><a href="#" class="key-link '+thisClass+'"><span class="key-text">'+thisValue+'</span></a></div>';
                        keyboard.append(keyTemplate);
                    } else {
                        keyboard.append('<div class="key-clearfix '+num+'" />');
                    }
                }
            }
        }
    }
    createKeyboard();

    function destroyKeyboard() {
        $('.keyboard').html('');
    }
    //destroyKeyboard();

    $(document).on('click', '.key-link', function(event) {
        event.preventDefault();
        let thisKey = $(this),
            thisKeyText = thisKey.find('.key-text').text(),
            thisKeyboard = thisKey.parents('.keyboard-block'),
            thisInput = thisKeyboard.find('.keyboard-input-text'),
            thisInputVal = thisInput.val();
        if ( thisKeyText != 'space' && thisKeyText != 'backspace' ) {
            thisInput.val( thisInputVal + thisKeyText );
        } else if ( thisKeyText == 'space' ) {
            thisInput.val( thisInputVal + ' ' );
        } else if ( thisKeyText == 'backspace' ) {
            thisInput.val( thisInputVal.slice(0, -1) );
        }
    });


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

