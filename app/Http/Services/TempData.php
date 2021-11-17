<?php


namespace App\Http\Services;


use Illuminate\Http\Request;

class TempData
{
    /**
     * Возвращает массив для записи в таблицу
     * @param $request
     * @return array
     */
    public function get($request): array
    {

        $name = $request->file('pdf')->getClientOriginalName();
        $path = $request->file('pdf')->store('public/images');

        $temp_data['company_name'] = $request['company_name'];
        $temp_data['pdf'] = $path . $name;
        $temp_data['legal_address'] = $request['legal_address'];
        $temp_data['post_code'] = $request['post_code'];
        $temp_data['company_phone'] = $request['company_phone'];
        $temp_data['company_email'] = $request['company_email'];
        $temp_data['bin'] = $request['bin'];
        $temp_data['iik'] = $request['iik'];
        $temp_data['bank_name'] = $request['bank_name'];
        $temp_data['bik'] = $request['bik'];
        $temp_data['director_name'] = $request['director_name'];
        $temp_data['respons_person'] = $request['respons_person'];
        $temp_data['respons_phone'] = $request['respons_phone'];
        $temp_data['respons_email'] = $request['respons_email'];
        $temp_data['domen'] = $request['domen'];
        return $temp_data;
    }
}
