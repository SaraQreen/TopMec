@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.Services')}}</h1>

        </div>
    </div>
    <br>
    <br>
    <br>

    <!-- services start-->

    <section id="" class="services section-bg ">
    <div class="container ">   
    <div class="row ">
        @foreach( $services as $service) 
     <div class="col-md-4 col-lg-4 d-flex align-items-center text-center justify-content-center mb-5 px-3 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <a href="{{route('service.details',$service->id)}}">
                            <div class="icon-box">
                                <div class="icon">
                                    <img src="{{ URL::asset('assets/img/ser1.jpg')}}" alt="">
                                </div>
                                <h4 class="title mt-3">{{ $service->name }}</h4>
                                <p class="description">{{ $service->description }}</p>
                            </div>
                        </a>
                    </div>

                    @endforeach
             </div> 
            </div> 
    </div>
    </section>


    <!--services End-->

@endsection