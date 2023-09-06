<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $table="services";
    protected $fillable=['name_ar','name_en','title','description_ar','description_ar','created_at','updated_at'];
    protected $hidden=['created_at','updated_at'];
    public $timestamps=true;

    public function products(){
        return $this->belongsToMany('App\Models\Product','product_service','service_id','product_id','id','id');
    }

}
