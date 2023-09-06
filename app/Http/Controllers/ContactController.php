<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
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
        return view('contact');
    }

    public function insert(ContactRequest $request){
        $contact= Contact::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'phone'=>$request->phone,
            'message'=>$request->message,
            'service_type'=>$request->service_type,
        ]);

        
        if($contact)
        return response() ->json([
            'status'=>true,
            'msg'=>'The Request Send Successfully',
        ]);

        else
        return response() ->json([
            'status'=>false,
            'msg'=>'Fail',
        ]);
        

    }

}