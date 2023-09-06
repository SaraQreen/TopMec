<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class BlogController extends Controller
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
         $blogs= Blog::select('id','created_at',
         'title_'.LaravelLocalization::getCurrentLocale().' as title',
         'content_'.LaravelLocalization::getCurrentLocale().' as content')->get();
        return view('blog.blog',compact('blogs'));
    }

    public function show($blog_id){
        //$blogs=Blog::findOrFail($blog_id)->get();  //Blog::where('id','$blog_id')->first();
        $blogs=Blog::find($blog_id)->where('id',$blog_id)->select('id','created_at','title_'.LaravelLocalization::getCurrentLocale().' as title',
        'content_'.LaravelLocalization::getCurrentLocale().' as content')->get();
        return view('blog.blog_details' ,compact('blogs'));
    }

    
}
