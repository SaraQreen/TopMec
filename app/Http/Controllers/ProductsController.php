<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class ProductsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $products=Product::select('id',
        'name_'.LaravelLocalization::getCurrentLocale().' as name',
        'description_'.LaravelLocalization::getCurrentLocale().' as description')->get();
        return view('product.products',compact('products'));
    }

    public function show($product_id){
        //$products=Product::findOrFail($product_id)->get();
        $products= Product::with('services')->find($product_id)->where('id', $product_id)->select('details_'.LaravelLocalization::getCurrentLocale().' as details')->get();
        $services=Service::select('id','name_'.LaravelLocalization::getCurrentLocale().' as name','created_at')->where('id', $product_id)->get();
        return view('product.product_details',compact('products','services'));
    }
}