<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table="products";
    protected $fillable=['name_ar','name_en','title','description_ar','description_en','details_ar','details_en','created_at','updated_at'];
    protected $hidden=['created_at','updated_at'];
    public $timestamps=true;

    public function services(){
        return $this->belongsToMany('App\Models\Service','product_service','product_id','service_id','id','id');
    }

}
