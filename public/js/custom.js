$(document).ready(function(){
    /**
     * регулярки для проверки инпутов
     * @type {RegExp}
     * @author Kravchenko Dmitriy
     */
    let reg_text = /^[0-9a-zA-Zа-яА-Я«»,.\-#№@&()әғқңөұүһі\s+]+$/;
    let reg_fio = /^[0-9a-zA-Zа-яА-Яәғқңөұүһі\s+]+$/;
    let reg_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    let reg_number = /^([0-9])+/;
    let reg_phone = /^[0-9+\-()]+$/;
    let reg_lat_number = /^[a-zA-Z0-9]+/;
    let reg_lit = /^[A-z]+$/;
    let all_true = 10;


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
        if (value.length < 18) {
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

                    }
                }
            });
        }
    });

    /**
     * Проверка PDF
     */
    $('#upload').bind('change', function() {
        var size = this.files[0].size;
        var name = this.files[0].name;
        var fileExtension = ['pdf'];
        console.log(size)
        if(2000000 < size) {
            $('#upload').next('.error-msg').text('Не удалось загрузить следующие файлы: ' + name + ' ( Файл слишком большой. Размер не должен превышать 2.00 МиБ.').css('color', '#fd9a9a');
        } else if($.inArray(name.split('.').pop().toLowerCase(), fileExtension) == -1) {
            $('#upload').next('.error-msg').text('Не удалось загрузить следующие файлы:' + name + ' ( Файл имеет недопустимыый формат').css('color', '#fd9a9a');
        } else {
            $('#upload').next('.error-msg').text('')
        }
    });

    /**
     * Отправка формы
     */
    $('form#feedback-form').submit(function(e){
        e.preventDefault();
        if(all_true < 1) {
            let company_name = $('#companyName').val();
            let legal_address = $('#legalAddress').val();
            let post_code = $('#postCode').val();
            let company_phone = $('#companyPhone').val();
            let company_email = $('#companyEmail').val();
            let bin = $('#bin').val();
            let iik = $('#iik').val();
            let bank_name = $('#bankName').val();
            let bik = $('#bik').val();
            let director_name = $('#directorName').val();
            let respons_person = $('#responsPerson').val();
            let respons_phone = $('#responsPhone').val();
            let respons_email = $('#responsEmail').val();
            let domen = $('#domen').val();
            let pdf  = $('#upload').prop('files')[0];
            let form_data = new FormData();

            form_data.append('company_name', company_name);
            form_data.append('legal_address', legal_address);
            form_data.append('post_code', post_code);
            form_data.append('company_phone', company_phone);
            form_data.append('company_email', company_email);
            form_data.append('bin', bin);
            form_data.append('iik', iik);
            form_data.append('bank_name', bank_name);
            form_data.append('bik', bik);
            form_data.append('director_name', director_name);
            form_data.append('respons_person', respons_person);
            form_data.append('respons_phone', respons_phone);
            form_data.append('respons_email', respons_email);
            form_data.append('domen', domen);
            form_data.append('pdf', pdf);
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            $.ajax({
                url: 'request/add',
                type: "POST",
                data: form_data,
                contentType: false,
                processData: false,
                success: function(response){
                    if (response['status'] == true ) {
                        alert('Заявка успешно подана');
                        location.reload();
                    } else {
                        alert('Ошибка подачи!');
                    }
                }
            });
        } else {
           alert("Заполните все поля")
        }
    });

});
