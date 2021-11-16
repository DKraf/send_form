$(document).ready(function(){
    /**
     * регулярки для проверки инпутов
     * @type {RegExp}
     * @author Kravchenko Dmitriy
     */
    let reg_text = /^[0-9a-zA-Zа-яА-Я«»,.\-#№@&()әғқңөұүһі]+$/;
    let reg_fio = /^[0-9a-zA-Zа-яА-Яәғқңөұүһі]+$/;
    let reg_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    let reg_number = /^([0-9])+/;
    let reg_phone = /^[0-9+\-()]+$/;
    let reg_lat_number = /^[a-zA-Z0-9]+/;
    let reg_lit = /^[A-z]+$/;
    let all_true = 15;


    /**
     * Обновить Капчу
     * @author Kravchenko Dmitriy
     */
    $('#reload').click(function () {
        $.ajax({
            type: 'GET',
            url: 'reload-captcha',
            success: function (data) {
                $(".captcha span").html(data.captcha);
            }
        });
    });


    /**
     * Маски для полей:
     * - Почтовый индекс
     * - Телефон организации
     * - БИН
     * - ИИК
     * - БИК
     * - Телефон ответственного лица
     * @author Kravchenko Dmitriy
     */
    $(function(){
        $("#postCode").mask("999999", {placeholder: "" });
        $("#companyPhone").mask("+7(999)999-99-99", {placeholder: "" });
        $("#bin").mask("999999999999", {placeholder: "" });
        $("#iik").mask("KZ999999999999999999", {placeholder: "" });
        $("#bik").mask("aaaaaaaa", {placeholder: "" });
        $("#responsPhone").mask("+7(999)999-99-99", {placeholder: "" });
    });


    /**
     * Подсветка Инпутов
     * @author Kravchenko Dmitriy
     */

    // Название организации
    $('#companyName').blur(function(){
        let value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Название организации *».').css('color','#fd9a9a');
        } else if (!reg_text.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение поля неверно. Поле может содержать только цифровые символы символы латиницы, кирилицы, казахские символы и символы «» , . \\ - # № @ & (). Пример: ТОО RS Solutions')
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Юридический адрес
    $('#legalAddress').blur(function(){
        let value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Юридический адрес *».').css('color','#fd9a9a');
        } else if (!reg_text.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение поля неверно. Поле может содержать только цифровые символы символы' +
                ' латиницы, кирилицы, казахские символы и символы «» , . \\ - # № @ & (). Пример: ТОО RS Solutions').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // почтовый индекс
    $('#postCode').blur(function(){
        let value = $(this).val();
        if (value.length < 6) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «почтовый индекс*».').css('color','#fd9a9a');
        } else if (!reg_number.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение « индекс *» должно быть числом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Телефон организации
    $('#companyPhone').blur(function(){
        var value = $(this).val();
        if (value.length < 16) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Телефон организации *».').css('color','#fd9a9a');
        } else if (!reg_phone.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение « телефона *» должно быть числом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Е –mail адрес организации
    $('#companyEmail').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Е –mail адрес организации *».').css('color','#fd9a9a');
        } else if (!reg_email.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение «Эл. почта *» не является правильным email адресом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // БИН 12 цифр
    $('#bin').blur(function(){
        var value = $(this).val();
        if (value.length < 12) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить « БИН 12 цифр *».').css('color','#fd9a9a');
        } else if (!reg_number.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение « БИН 12 цифр *» должно быть числом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // ИИК
    $('#iik').blur(function(){
        var value = $(this).val();
        if (value.length < 12) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «ИИК KZ (20 значный счет)*».').css('color','#fd9a9a');
        } else if (!reg_lat_number.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение «ИИК KZ (20 значный счет)*» должно содержать минимум 20 символов').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Название банка
    $('#bankName').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Название банка *».').css('color','#fd9a9a');
        } else if (!reg_fio.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение поля неверно. Поле может содержать только символы латиницы, кирилицы, казахские символы').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // БИК
    $('#bik').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить « БИК 8 символов *».').css('color','#fd9a9a');
        } else if (!reg_lit.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение «БИК 8 латинских букв и цифры *» должно содержать минимум 8 символа.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });


    // ФИО (Руководителя)
    $('#directorName').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «ФИО (Руководителя) *».').css('color','#fd9a9a');
        } else if (!reg_fio.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение поля неверно. Поле может содержать только символы латиницы, ' +
                'кирилицы, казахские символы. Пример: Иванов Иван Иванович').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    //ФИО (ответственного лица)
    $('#responsPerson').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «ФИО (ответственного лица) *».').css('color','#fd9a9a');
        } else if (!reg_fio.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение поля неверно. Поле может содержать только символы латиницы, ' +
                'кирилицы, казахские символы. Пример: Иванов Иван Иванович').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Телефон ответственного
    $('#responsPhone').blur(function(){
        var value = $(this).val();
        if (value.length < 16) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Телефон ответственного *».').css('color','#fd9a9a');
        } else if (!reg_phone.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение « телефона *» должно быть числом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Е –mail адрес ответственного
    $('#responsEmail').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «Е –mail ответственного лица *».').css('color','#fd9a9a');
        } else if (!reg_email.test(value)) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Значение «Эл. почта *» не является правильным email адресом.').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Е –mail адрес ответственного
    $('#domen').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо заполнить «желаемое название домена в зоне edu.kz , ' +
                'например: название организации.edu.kz  *».').css('color','#fd9a9a');
        } else {
            $(this).css('background-color', '#9afda6');
            $(this).next('.error-msg').text('');
            all_true--
        }
    });

    // Капча
    $('#captcha').blur(function(){
        var value = $(this).val();
        if (value.length == 0) {
            $(this).css('background-color','#fd9a9a');
            $(this).next('.error-msg').text('Необходимо ввести символы с картинки').css('color','#fd9a9a');
        } else {
            $.ajax({
                type: 'POST',
                url: 'captcha-validation',
                headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                data: {'captcha': value},
                success: function (data) {
                    if (data['msg'] == true) {
                        $('#captcha').css('background-color', '#9afda6');
                        $('#captcha').next('.error-msg').text('');
                    } else {
                        $('#captcha').css('background-color', '#fd9a9a');
                        $('#captcha').next('.error-msg').text('Неправильный проверочный код.').css('color', '#fd9a9a');
                        all_true--
                    }
                }
            });
        }
    });

    // Теперь отправим наше письмо с помощью AJAX
    $('form#feedback-form').submit(function(e){

        // Запрещаем стандартное поведение для кнопки submit
        e.preventDefault();

        // После того, как мы нажали кнопку "Отправить", делаем проверку,
        // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
        // выполняем наш Ajax сценарий и отправляем письмо адресату

        if(all_true == 0)
        {
            // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
            // и вызываем метод .serialize().
            // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.

            $.ajax({
                url: 'send.php',
                type: 'post',
                data: $(this).serialize(),

                beforeSend: function(xhr, textStatus){
                    $('form#feedback-form :input').attr('disabled','disabled');
                },

                success: function(response){
                    $('form#feedback-form :input').removeAttr('disabled');
                    $('form#feedback-form :text, textarea').val('').removeClass().next('.error-box').text('');
                    alert(response);
                }
            }); // end ajax({...})
        }

            // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
        // останавливая отправку сообщения в невалидной форме
        else
        {
            console.log(all_true)
           alert("Заполните все поля")
        }

    }); // end submit()

});
