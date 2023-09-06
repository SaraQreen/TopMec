@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.Contact-us')}}</h1>

        </div>
    </div>

    <div class="container-xxl py-5 contact">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
                    <h1 class="display-6 mb-5">{{__('messages.Contact')}}</h1>
                    <p class="mb-4">{{__('messages.answer')}}</p>
                    <form id="contact_form" method="post" action="{{ route('site.contact.insert')}}">
                        @csrf 
                      {{-- <input type="hidden" name="_token" value="OZA3e8BZ0DYQbzEnBAUIpZmID3TXN9ItuBseHyYi"> --}}                       
                           <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Name" required="">
                                    <label for="name">{{__('messages.Name')}}</label>
                                    @error('name') 
                                    <small class="form-text text-danger">{{$message}}</small>
                                    @enderror
                                </div>
                                 </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required="">
                                    <label for="email">{{__('messages.Email')}}</label>
                                    @error('email') 
                                    <small class="form-text text-danger">{{$message}}</small>
                                    @enderror
                                </div>
                               </div>
                            <div class="col-sm-6">
                                <div class="form-floating">

                                    <input type="number" name="phone" class="form-control" id="cname" placeholder="Phone" required="">
                                    <label for="cname">{{__('messages.Phone')}}</label>
                                    @error('photo') 
                                    <small class="form-text text-danger">{{$message}}</small>
                                    @enderror
                                </div>
                                </div>
                            <div class="col-sm-6">
                                <div class="form-floating">

                                    <input type="text" name="service_type" class="form-control" id="cage" placeholder="Service Type" required="">
                                    <label for="cage">{{__('messages.Service-Type')}}</label>
                                    @error('service_type') 
                                    <small class="form-text text-danger">{{$message}}</small>
                                    @enderror
                                </div>
                               </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <textarea name="message" class="form-control" placeholder="Message" id="message" style="height: 80px" required=""></textarea>
                                    <label for="message">{{__('messages.Message')}}</label>
                                    @error('message') 
                                    <small class="form-text text-danger">{{$message}}</small>
                                    @enderror
                                </div>
                                  </div>
                            <div class="col-12">
                                <button class="btn btn-main bg-primary py-3 px-5" type="submit">{{__('messages.Free-Quote')}}</button>
                            </div>
                        </div>
                    </form>
                </div>   

                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="min-height: 450px; visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">
                    <div class="position-relative overflow-hidden h-100">
                        <iframe class="position-relative w-100 h-100" src="https://maps.google.com/maps/embed/v1/place?q=34.731404,36.707948&amp;key=AIzaSyDCSt4ABayMg8O3n9Hvxb_vrs_1oUfWXuA" frameborder="0" style="min-height: 450px; border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection