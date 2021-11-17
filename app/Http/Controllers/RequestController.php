<?php

namespace App\Http\Controllers;

use App\Models\Requests;
use Illuminate\Http\Request;
use App\Http\Services\TempData;

class RequestController extends Controller
{
    /**
     * Прием запроса от AJAX и
     * Создание новой заявки в таблице БД
     * @param Request $request
     */
    public function create(Request $request)
    {
        $temp_data_service = new TempData();
        $temp_data = $temp_data_service->get($request);
        Requests::create($temp_data);

        return response()->json(['status'=>true]);
    }
}
