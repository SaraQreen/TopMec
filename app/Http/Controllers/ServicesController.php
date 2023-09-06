<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Service;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class ServicesController extends Controller
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
        $services=Service::select('id',
        'name_'.LaravelLocalization::getCurrentLocale().' as name',
        'description_'.LaravelLocalization::getCurrentLocale().' as description')->get();
        return view('service.services',compact('services'));
    }

    public function show($service_id){
       // $services=Service::findOrFail($service_id)->get();
        $services= Service::with('products')->find($service_id)->where('id', $service_id)->select('id',
        'name_'.LaravelLocalization::getCurrentLocale().' as name',
        'description_'.LaravelLocalization::getCurrentLocale().' as description')->get();
        $products=Product::select('id',
        'name_'.LaravelLocalization::getCurrentLocale().' as name',
        'description_'.LaravelLocalization::getCurrentLocale().' as description')->get();
        return view('service.service_details',compact('services','products'));
    }
}

