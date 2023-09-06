<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table="blogs";
    protected $fillable=['name','title_ar','title_en','content_ar','content_en','created_at','updated_at'];
    protected $hidden=['created_at','updated_at'];
    public $timestamps=true;
}
