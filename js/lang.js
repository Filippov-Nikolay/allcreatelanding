var en = {
    'lang-home': 'Home',
    'lang-portfolio': 'Portfolio',
    'lang-skills': 'Skills',
    'lang-contacts': 'Contact Us',
    'lang-reviews': 'Reviews',
    'lang-ru': 'russia',
    'lang-ua': 'ukraine',
    'lang-en': 'english',
    'lang-text': 'We will create a site of any complexity, on a turnkey basis. AllCreate is ready to provide and fulfill any of your ideas!',
    'lang-button': 'Order',
    'lang-portfolio1': 'Portfolio',
    'lang-skills1': 'Skills',
    'lang-contacts1': 'Contact Us',
    'lang-reviews1': 'Reviews',
    'lang-comment': 'Anyone who is interested in a high-quality and modern website is recommended to contact AllCreate web studio',
    'lang-comment1': 'Anyone who is interested in a high-quality and modern website is recommended to contact AllCreate web studio',
    'lang-comment2': 'Anyone who is interested in a high-quality and modern website is recommended to contact AllCreate web studio',
    'lang-comment3': 'Anyone who is interested in a high-quality and modern website is recommended to contact AllCreate web studio',
    'lang-home2': 'Home',
    'lang-portfolio2': 'Portfolio',
    'lang-skills2': 'Skills',
    'lang-contacts2': 'Contact Us',
    'lang-reviews2': 'Reviews',
    'lang-copyright': 'All rights reserved. The site was created by Filippov Nikolay'
}

var ua = {
    'lang-home': 'Головна',
    'lang-portfolio': 'Портфолiо',
    'lang-skills': 'Навики',
    'lang-contacts': 'Контакти',
    'lang-reviews': 'Вiдгуки',
    'lang-ru': 'росiйська',
    'lang-ua': 'українська',
    'lang-en': 'англiйська',
    'lang-text': 'Створимо сайт будь-якої складності, під ключ. AllCreate готовий надати та втілити будь-яку вашу ідею!',
    'lang-button': 'Замовити',
    'lang-portfolio1': 'Портфолiо',
    'lang-skills1': 'Навики',
    'lang-contacts1': 'Контакти',
    'lang-reviews1': 'Вiдгуки',
    'lang-comment': 'Всім, кого цікавить якісний i сучасний сайт, рекомендується звертатися до веб-студії AllCreate',
    'lang-comment1': 'Всім, кого цікавить якісний i сучасний сайт, рекомендується звертатися до веб-студії AllCreate',
    'lang-comment2': 'Всім, кого цікавить якісний i сучасний сайт, рекомендується звертатися до веб-студії AllCreate',
    'lang-comment3': 'Всім, кого цікавить якісний i сучасний сайт, рекомендується звертатися до веб-студії AllCreate',
    'lang-home2': 'Головна',
    'lang-portfolio2': 'Портфолiо',
    'lang-skills2': 'Навики',
    'lang-contacts2': 'Контакти',
    'lang-reviews2': 'Вiдгуки',
    'lang-copyright': 'Всі права захищені. Сайт створив Філіппов Микола'
}

var ru = {
    'lang-home': 'Главная',
    'lang-portfolio': 'Портфолио',
    'lang-skills': 'Навыки',
    'lang-contacts': 'Контакты',
    'lang-reviews': 'Отзывы',
    'lang-ru': 'русский',
    'lang-ua': 'украинский',
    'lang-en': 'английский',
    'lang-text': 'Создадим  сайт любой сложности, под ключ. Компания AllCreate готова предоставить и выполнить любые ваши идеи!',
    'lang-button': 'Заказать',
    'lang-portfolio1': 'Портфолио',
    'lang-skills1': 'Навыки',
    'lang-contacts1': 'Контакты',
    'lang-reviews1': 'Отзывы',
    'lang-comment': 'Всем, кто заинтересован в высококачественном и современном веб-сайте, рекомендуем обращаться в веб-студии AllCreate',
    'lang-comment1': 'Всем, кто заинтересован в высококачественном и современном веб-сайте, рекомендуем обращаться в веб-студии AllCreate',
    'lang-comment2': 'Всем, кто заинтересован в высококачественном и современном веб-сайте, рекомендуем обращаться в веб-студии AllCreate',
    'lang-comment3': 'Всем, кто заинтересован в высококачественном и современном веб-сайте, рекомендуем обращаться в веб-студии AllCreate',
    'lang-home2': 'Главная',
    'lang-portfolio2': 'Портфолио',
    'lang-skills2': 'Навыки',
    'lang-contacts2': 'Контакты',
    'lang-reviews2': 'Отзывы',
    'lang-copyright': 'Все права защищенны. Сайт создал Филиппов Николай'
}

function getValue() {
    var select = document.getElementById("select");
    var value = select.value;
    if (value == 'en') {
        console.log('en');
        changeLang(en)
    } else if (value == 'ua') {
        console.log('ua')
        changeLang(ua)
    } else {
        console.log('ru')
        changeLang(ru)
    }
}

function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
        objKey = Object.getOwnPropertyNames(lan)[i];
        document.getElementById(objKey).innerText = func(objKey);
    }
    function func(a) {
        for (key in lan) {
            if (key == a) {
                return (lan[key]);
            }
        }
    }
}