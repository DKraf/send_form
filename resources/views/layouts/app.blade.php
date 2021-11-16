<!DOCTYPE html>
    <lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Токен CSRF -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Форма для регистрации домена в зоне EDU.KZ для юридических лиц</title>


    <!-- Шрифты -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,600" rel="stylesheet" type="text/css">
    <!-- Стили -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>
<body>
    <div id="app">
        <div class="row justify-content-center">
            <div class="p-5">
               <h3>
                   Форма для регистрации домена в зоне EDU.KZ для юридических лиц
               </h3>
            </div>
        </div>
    </div>
    <main class="py-4">
        <div class="container">
            @yield('content')
        </div>
    </main>
    <!-- Скрипты -->
    <!-- Подключение jQuery плагина Masked Input -->

    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/custom.js') }}" defer></script>
    <script src="{{ asset('jquery/jquery.js') }}"defer></script>
    <script src="{{ asset('jquery/jquery.maskedinput.min.js')}}"defer></script>
</body>
</html>
