@extends('layouts.master')

@section('content')
<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.About-us')}}</h1>

        </div>
    </div>
   <!-- About start -->
    <div class="container-xxl py-5 " id="about">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;">
                    <div class="h-100">
                        <h1 class="display-6 mb-5">{{__('messages.About-TopMec')}}</h1>
                        <div class="row g-4 mb-4">
                              <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 btn-square bg-primary rounded-circle mx-2" style="padding: 5px;width: 45px; height: 45px;">
                                            <img class="img-fluid " src="{{ URL::asset('assets/img/icons/icon-08-light.png')}}" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('messages.Expert-Technician')}}</h5>
                                    </div>
                                </div>
                                  <div class="col-sm-6">
                                    <div class="d-flex align-items-center">
                                        <div class="flex-shrink-0 btn-square bg-primary rounded-circle mx-2" style="padding: 5px;width: 45px; height: 45px;">
                                            <img class="img-fluid " src="{{ URL::asset('assets/img/icons/icon-06-light.png')}}" alt="">
                                        </div>
                                        <h5 class="mb-0">{{__('messages.Best-Quality-Services')}}</h5>
                                    </div>
                                </div>
                        </div>
                       
                        <div class="row g-4 mb-4 ">

                        </div>

                    </div>
                </div>
                <div class="col-lg-6 about">
                    <div class="row g-3">
                        <div class="col-6 " style="display: flex;justify-content: flex-end; align-items: flex-end;">
                            <img class="img-fluid w-75 shadow wow zoomIn" data-wow-delay="0.1s" src="{{ URL::asset('assets/img/about1.jpg')}}" style="margin-top: 25%; visibility: visible; animation-delay: 0.1s; animation-name: zoomIn;">
                        </div>
                        <div class="col-6 text-end">
                            <img class="img-fluid w-100 shadow wow zoomIn" data-wow-delay="0.3s" src="{{ URL::asset('assets/img/about2.jpg')}}" style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;">
                        </div>
                        <div class="col-6 ">
                            <img class="img-fluid w-100 shadow wow zoomIn" data-wow-delay="0.5s" src="{{ URL::asset('assets/img/about3.jpg')}}" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;">
                        </div>
                        <div class="col-6 text-start">
                            <img class="img-fluid w-75 shadow wow zoomIn" data-wow-delay="0.7s" src="{{ URL::asset('assets/img/about4.jpg')}}" style="visibility: visible; animation-delay: 0.7s; animation-name: zoomIn;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--About End-->

    <!-- Facts start-->
    <div class="container-fluid facts my-5 py-5" data-parallax="scroll" data-image-src="{{URL::asset('assets/img/breadcrumbs-bg.jpg')}}">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
                    <h1 class="display-4 text-white" data-toggle="counter-up">2000</h1>
                    <span class="text-primary">{{__('messages.Happy-Clients')}}</span>
                </div>
                <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">
                    <h1 class="display-4 text-white" data-toggle="counter-up">1234</h1>
                    <span class="text-primary">{{__('messages.Projects-Succeed')}}</span>
                </div>
                <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">
                    <h1 class="display-4 text-white" data-toggle="counter-up">60</h1>
                    <span class="text-primary">{{__('messages.Awards-Achieved')}}</span>
                </div>
                <div class="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeIn;">
                    <h1 class="display-4 text-white" data-toggle="counter-up">302</h1>
                    <span class="text-primary">{{__('messages.Team-Members')}}</span>
                </div>
            </div>
        </div>
    </div>
    <!--Facts End-->

    <!-- Team start-->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px; visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                <h1 class="display-6 mb-5">{{__('messages.Meet-Our')}}  <span style="color:rgb(0 108 75)">{{__('messages.Expert-Team')}} </span> </h1>
            </div>


            <div class="row g-4 justify-content-around">
                             
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <div class="team-item">
                            <div class="team-img position-relative overflow-hidden">
                                <img class="img-fluid" src="{{ URL::asset('assets/img/team-3.jpg')}}" alt="">
                                <div class="team-social">
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="bg-second  text-center p-4">
                              
                                <h5>{{__('messages.Malaz-Safi')}} </h5>
                               
                                <span class="text-primary">{{__('messages.Engineer')}}</span>
                            </div>
                        </div>
                    </div>
    
                             
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <div class="team-item">
                            <div class="team-img position-relative overflow-hidden">
                                <img class="img-fluid" src="{{ URL::asset('assets/img/team-1.jpg')}}" alt="">
                                <div class="team-social">
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary rounded-circle m-1" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="bg-second  text-center p-4">
                              
                                <h5>{{__('messages.Abdulrahman-Sibai')}}</h5>
                               
                                <span class="text-primary">{{__('messages.Engineer')}}</span>
                            </div>
                        </div>
                    </div>
    
                
            </div>
        </div>
    </div>
    <!--Team End-->

@endsection