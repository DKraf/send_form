<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CaptchaController extends Controller
{

    /**
     * Метод проверки Капчи
     * @param Request $request
     */
    public function checkCaptcha(Request $request)
    {
        $out_data = true;
        $in_data = $request->all();
        $validator = Validator::make($in_data, [
            'captcha' => 'required|captcha'
        ]);

        if($validator->fails()){
            $out_data = false;
        }
        return response()->json(array('msg'=> $out_data), 200);
    }

    public function reloadCaptcha()
    {
        return response()->json(['captcha'=> captcha_img()]);
    }

}
