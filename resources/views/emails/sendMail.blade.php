<!DOCTYPE html>
<html>
<head>
    <title>Заявка на регистрацию домена в зоне EDU.KZ</title>
</head>

<body>
    <div>
        <h1>Компания:</h1>
        <p>{{ $temp_data['company_name']  }}</p>
    </div>
    <div>
        <h1>Юр. Адрес:</h1>
        <p>{{ $temp_data['legal_address']}}</p>
    </div>
    <div>
        <h1>Индекс:</h1>
        <p>{{ $temp_data['post_code'] }}</p>
    </div>
    <div>
        <h1>Тел. компании:</h1>
        <p>{{ $temp_data['company_phone'] }}</p>
    </div>
    <div>
        <h1>Почта компании</h1>
        <p>{{$temp_data['company_email'] }}</p>
    </div>
    <div>
        <h1>БИН:</h1>
        <p>{{ $temp_data['bin']}}</p>
    </div>
    <div>
        <h1>ИИК:</h1>
        <p>{{ $temp_data['iik'] }}</p>
    </div>
    <div>
        <h1>Банк:</h1>
        <p>{{ $temp_data['bank_name'] }}</p>
    </div>
    <div>
        <h1>БИК</h1>
        <p>{{ $temp_data['bik'] }}</p>
    </div>
    <div>
        <h1>Директор:</h1>
        <p>{{  $temp_data['director_name']  }}</p>
    </div>$temp_data['bik']
    <div>
        <h1>Ответственный:</h1>
        <p>{{ $temp_data['respons_person'] }}</p>
    </div>
    <div>
        <h1>Ответственный:</h1>
        <p>{{ $temp_data['bank_name'] }}</p>
    </div>
    <div>
        <h1>Тел . Ответственного:</h1>
        <p>{{ $temp_data['respons_phone'] }}</p>
    </div>
    <div>
        <h1> Почта. Ответственного:</h1>
        <p>{{ $temp_data['respons_email']}}</p>
    </div>
    <div>
        <h1>ДОМЕН:</h1>
        <p>{{ $temp_data['domen'] }}</p>
    </div>
    <div>
        <h1>Документ:</h1>
        <p>{{ $_SERVER['SERVER_NAME'] . $temp_data['pdf'] }}</p>
    </div>

<p>Thank you</p>

</body>

</html>
