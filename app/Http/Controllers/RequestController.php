<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Illuminate\Http\Request;
use App\Http\Services\TempData;
use Illuminate\Support\Facades\Validator;


class RequestController extends Controller
{
    /**
     * Прием запроса от AJAX и
     * Создание новой заявки в таблице БД
     * @param Request $request
     */
    public function create(Request $request)
    {
        $in_data = $request->all();
        $validator = Validator::make($in_data, [
            'company_name'   => 'required|min:2',
            'legal_address'  => 'required|min:2',
            'post_code'      => 'required|min:6',
            'company_phone'  => 'required|min:16',
            'company_email'  => 'required|email',
            'bin'            => 'required|min:12',
            'iik'            => 'required|min:20',
            'bank_name'      => 'required|min:2',
            'bik'            => 'required|min:8',
            'director_name'  => 'required|min:2',
            'respons_person' => 'required|min:2',
            'respons_phone'  => 'required|min:16',
            'respons_email'  => 'required|email',
            'domen'          => 'required|min:1',
        ]);
        if($validator->fails()){
            return response()->json(array('status'=> false), 200);
            exit();
        } else {
            $temp_data_service = new TempData();
            $temp_data = $temp_data_service->get($request);
            Requests::create($temp_data);
            \Mail::to('malina_fruttis@mail.ru')->send(new \App\Mail\MyTestMail($temp_data));
            return response()->json(['status' => true]);
        }
    }
}
