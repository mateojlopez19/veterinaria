<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'clientId',
        'name',
        'lastName',
        'identification',
        'email',
        'address',
        'password',
    ];

    protected $table = "tus_clients";
    protected $primaryKey = "clientId";
}
