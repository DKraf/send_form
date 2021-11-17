@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-sm-between">
            <div class="col-md-12">
                <form id="feedback-form"  method="post" action="" enctype="multipart/form-data" class="row g-3">
                    <div class="col-md-6">
                        <label for="companyName" class="form-label">Наименование организации (пропишите полностью) *</label>
                        <input type="text" class="form-control" id="companyName">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="legalAddress" class="form-label">Юридический адрес организации, включая город/область*</label>
                        <input type="text" class="form-control" id="legalAddress">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="postCode" class="form-label">Почтовый индекс *</label>
                        <input id="postCode" type="text" class="form-control" >
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="companyPhone" class="form-label">Телефон организации*</label>
                        <input type="text" class="form-control" id="companyPhone">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="companyEmail" class="form-label">E-mail адрес организации*</label>
                        <input type="text" class="form-control" id="companyEmail">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="bin" class="form-label">БИН организации (12 цифр)*</label>
                        <input type="text" class="form-control" id="bin">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="iik" class="form-label">ИИК KZ   (20 значный счет) *</label>
                        <input type="text" class="form-control" id="iik">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="bankName" class="form-label">Наименование банка</label>
                        <input type="text" class="form-control" id="bankName">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="bik" class="form-label">БИК (8 букв)*</label>
                        <input type="text" class="form-control" id="bik">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="directorName" class="form-label">ФИО руководителя организации*</label>
                        <input type="text" class="form-control" id="directorName">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="responsPerson" class="form-label">Ответственное лицо*</label>
                        <input type="text" class="form-control" id="responsPerson">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="responsPhone" class="form-label">Телефон ответственного лица*
                        </label>
                        <input type="text" class="form-control" id="responsPhone">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="responsEmail" class="form-label">E-mail ответственного лица*</label>
                        <input type="text" class="form-control" id="responsEmail">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="domen" class="form-label">Желаемое название доменного имени в зоне edu.kz</label>
                        <input type="text" class="form-control" id="domen">
                        <div class="error-msg"></div>
                    </div>
                    <div class="col-md-6">
                        <label for="upload" class="form-label">
                            Загрузите копию свидетельства о государственной регистрации
                            организации или другой документ удостоверяющий организацию в pdf
                            (Размер не должен превышать 2.00 МиБ)*
                        </label>
                        <div class="input-group">
                            <label class="input-group-text" for="inputGroupFile01">Загрузить</label>
                            <input type="file" class="form-control" accept="application/pdf"  name="pdf" id="upload">
                            <div class="error-msg"></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="captcha" class="form-label">Введите код с картинки</label>
                        <div class="row justify-content-sm-between">
                            <div class="form-group row">
                                <div class="col-md-6 captcha" >
                                    <span id="capcha-image">{!! captcha_img() !!}</span>
                                    <button type="button" class="btn btn-danger" class="reload" id="reload">
                                        ↻
                                    </button>
                                </div>
                                <div class="col-md-6">
                                    <input id="captcha" type="text" class="form-control" name="captcha">
                                    <div class="error-msg"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="col-12-p-3">
{{--                            <button type="submit" class="btn btn-primary">Отправить</button>--}}
                            <div><input type="submit" id="send" class="btn btn-primary" value="Отправить" /></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
