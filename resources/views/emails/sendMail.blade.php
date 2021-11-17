<!DOCTYPE html>
<html>
<head>
    <title>Заявка на регистрацию домена в зоне EDU.KZ</title>
</head>

<body>
    <div>
        <h1>Компания:</h1>
        <p>{{ $details['company_name']  }}</p>
    </div>
    <div>
        <h1>Юр. Адрес:</h1>
        <p>{{ $details['legal_address']}}</p>
    </div>
    <div>
        <h1>Индекс:</h1>
        <p>{{ $details['post_code'] }}</p>
    </div>
    <div>
        <h1>Тел. компании:</h1>
        <p>{{ $details['company_phone'] }}</p>
    </div>
    <div>
        <h1>Почта компании</h1>
        <p>{{$details['company_email'] }}</p>
    </div>
    <div>
        <h1>БИН:</h1>
        <p>{{ $details['bin']}}</p>
    </div>
    <div>
        <h1>ИИК:</h1>
        <p>{{ $details['iik'] }}</p>
    </div>
    <div>
        <h1>Банк:</h1>
        <p>{{ $details['bank_name'] }}</p>
    </div>
    <div>
        <h1>БИК</h1>
        <p>{{ $details['bik'] }}</p>
    </div>
    <div>
        <h1>Директор:</h1>
        <p>{{  $details['director_name']  }}</p>
    </div>$temp_data['bik']
    <div>
        <h1>Ответственный:</h1>
        <p>{{ $details['respons_person'] }}</p>
    </div>
    <div>
        <h1>Ответственный:</h1>
        <p>{{ $details['bank_name'] }}</p>
    </div>
    <div>
        <h1>Тел . Ответственного:</h1>
        <p>{{ $details['respons_phone'] }}</p>
    </div>
    <div>
        <h1> Почта. Ответственного:</h1>
        <p>{{ $details['respons_email']}}</p>
    </div>
    <div>
        <h1>ДОМЕН:</h1>
        <p>{{ $details['domen'] }}</p>
    </div>
    <div>
        <h1>Документ:</h1>
        <p>{{ $_SERVER['SERVER_NAME'] . $details['pdf'] }}</p>
    </div>

<p>Thank you</p>

</body>

</html>
