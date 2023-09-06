@extends('layouts.master')

@section('content')

     
       
<div class="header-section">

<div class="container-fluid p-0 mb-5" style="margin-top: -35px;">
<div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
                    <div class="carousel-item active">

            <div class="carousel-caption">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 pt-5">
                            <h1 class="display-2 text-white mb-4 animated slideInLeft">{{__('messages.Smart-Home-Technology')}}</h1>
                            <p class="fs-5 mb-4 pb-2 mx-sm-5 animated slideInRight">{{__('messages.Depending')}}  

                            </p>
                            <a href="{{route('site.aboutus')}}" class="btn btn-main py-3 px-5 animated zoomIn">{{__('messages.Read-more')}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    <div class="carousel-item ">

            <div class="carousel-caption">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7 pt-5">
                            <h1 class="display-2 text-white mb-4 animated slideInLeft">{{__('messages.BRINGING-AUTOMATION-TO-LIFE')}}</h1>
                            <p class="fs-5 mb-4 pb-2 mx-sm-5 animated slideInRight">{{__('messages.Depending')}}  
                                
                            </p>
                            <a href="{{route('site.aboutus')}}" class="btn btn-main py-3 px-5 animated zoomIn">{{__('messages.Read-more')}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
</button>
</div>
</div>


@end section 