<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ServicesController;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
 Route::group(['prefix' => LaravelLocalization::setlocale(),'middleware' => [ 'localize' ,'localeSessionRedirect', 'localizationRedirect', 'localeViewPath' ]], function(){

Route::get('/', [HomeController::class, 'index'])->name('site.index');
Route::get('/about',[HomeController::class,'about_us'])->name('site.aboutus');


Route::get('/contact',[ContactController::class,'index'])->name('site.contact');
Route::post('/contact_insert',[ContactController::class,'insert'])->name('site.contact.insert');


Route::get('/blog',[BlogController::class,'index'])->name('site.blog');
Route::get('/show_blog/{id}',[BlogController::class,'show'])->name('blog.details');

Route::get('/service',[ServicesController::class,'index'])->name('service.index');
Route::get('/show_service/{id}',[ServicesController::class,'show'])->name('service.details');

Route::get('/product',[ProductsController::class,'index'])->name('product.index');
Route::get('/show_product/{id}',[ProductsController::class,'show'])->name('product.details');

 });


