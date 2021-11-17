<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Requests extends Model
{
    use HasFactory;

    protected $table = 'request';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_name',
        'pdf',
        'legal_address',
        'post_code',
        'code',
        'company_phone',
        'company_email',
        'bin',
        'iik',
        'bank_name',
        'bik',
        'director_name',
        'respons_person',
        'respons_phone',
        'respons_email',
        'domen'

    ];
}
