@extends('layouts.master')

@section('content')
<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
            <div class="container text-center py-5">
                <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.Product-Details')}}</h1>

            </div>
        </div>

<!-- ======= Product Details Section ======= -->

<section id="project-details" class="project-details mb-5">
            <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                <div class="position-relative h-100">
                    <div class="slides-1 portfolio-details-slider swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper h-100 align-items-center" id="swiper-wrapper-6d3315ed1e4943ca" aria-live="off" style="transition-duration: 0ms; transform: translate3d(-2784px, 0px, 0px);"><div class="swiper-slide h-100 swiper-slide-duplicate" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div><div class="swiper-slide h-100 swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div>
                                    <div class="swiper-slide h-100 swiper-slide-duplicate-active" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div>
                                     <div class="swiper-slide h-100 swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div>

                        <div class="swiper-slide h-100 swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" role="group" aria-label="1 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div><div class="swiper-slide h-100 swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index="1" role="group" aria-label="2 / 2">
                                    <img src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
                                </div></div>
                        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span></div>
                    <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                    <div class="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-6d3315ed1e4943ca"></div>
                    <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-6d3315ed1e4943ca"></div>

                </div>

                <div class="row justify-content-between gy-4 mt-4  p-detail">
                    
                     @foreach($products as $product)
                    <div class="col-lg-8">
                        <div class="portfolio-description">
                            <h2>{{__('messages.Product-Details')}}</h2>
                            <p>
                                {{ $product->name}}
                            </p>
                            <p>{{ $product->details}}
                            </p>

                        </div>
                        @endforeach
                    </div>
                    @foreach($services as $service)
                    <div class="col-lg-3">
                        <div class="portfolio-info">
                            <h3>{{__('messages.Product-information')}}</h3>
                            <ul>
                                <li><strong>{{__('messages.Service-Type')}}</strong>
                                <p> <a href="#">{{ $service->name}}</a></p>
                                </li>
                                <li><strong>{{__('messages.Product-date')}}</strong> <span>{{$service->created_at}}</span></li>
                                
                            </ul>
                        </div>
                    </div>
                   @endforeach
                </div>

            </div>
        </section>

<!-- End Product Details Section -->


@endsection