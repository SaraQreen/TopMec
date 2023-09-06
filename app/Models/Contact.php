<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $table="contacts";
    protected $fillable=['name','email','phone','message','service_type','created_at','updated_at'];
    protected $hidden=['created_at','updated_at'];
    public $timestamps=true;
}
