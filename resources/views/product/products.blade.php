@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.Products')}}</h1>

        </div>
    </div>

    <div class="blog-product py-5 container-fluid wow fadeInUp section" data-wow-delay="0.1s" data-bg="" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
        <div class="container py-5">
            <div wire:id="80fH03SQRFo1wsnff3nS" class="row g-5">
    <!-- Blog list Start -->
    <div class="fe-text col-lg-8">
    <div class="row g-5">
        @foreach( $products as $product)
        <div class="fe-text col-md-6 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
    <a href="{{route('product.details',$product->id)}}">
    <div class="allproduct overflow-hidden blog-item gradiant position-relative">
        <div class="overflow-hidden blog-img position-relative">   
        <img class="img-fluid" src="{{ URL::asset('assets/img/pro2.jpg')}}" alt="">
           
        </div>
        <div class="p-4 ptext">
            <h4 class="mb-3 ">{{ $product->name }}</h4>
            <p>{{ $product->description}}</p>

        </div>
    </div>
</a>
</div>
    
@endforeach
   <div>
         <button class="btn btn-outline-danger w-25" wire:loading.attr="disabled" wire:click="loadMore()"> {{__('messages.More')}}
            <div wire:loading="" wire:target="loadMore">
                <span class="spinner-border spinner-border-sm text-danger"></span>
                 </div>
                    </button>
                </div>
    </div>
   
</div>
        <!-- Blog list End -->

        <!-- Sidebar Start -->
        <div class="col-lg-4">
            <!-- Search Form Start -->
            <div class="mb-5 wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                <div class="input-group border" style="border-radius:12px !important">
                    <input type="text" class="p-3 form-control" wire:model.lazy="search" placeholder="Keyword" style="border-radius: 10px 0 0 10px;">
                    <button class="px-4 btn btn-red">
                        <i wire:loading.remove="" wire:target="search" class="fa fa-search"></i>
                        <div wire:loading="" wire:target="search">
                            <span class="spinner-border spinner-border-sm text-dark"></span>
                        </div>
                    </button>
                </div>
            </div>
            <!-- Search Form End -->

            <!-- Service Start -->
            <div class="mb-5 fe-text wow slideInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: slideInUp;">
                <div class="pb-3 mb-4 section-title section-title-sm position-relative">
                    <h3 class="mb-0 ">{{__('messages.Categories')}}</h3>
                    <span wire:loading="" wire:target="setSelectedService">
                        <span class="spinner-border spinner-border-sm text-danger"></span>
                    </span>
                    <span wire:loading="" wire:target="removeSelectedService">
                        <span class="spinner-border spinner-border-sm text-danger"></span>
                    </span>
                </div>
                <div class="link-animated d-flex flex-column justify-content-start">
                    <a class="px-3 py-2 mb-2 rounded h5 fw-semi-bold gradiant" style="cursor:pointer;" wire:click="removeSelectedService()"><i class="true fa fa-arrow-right me-2  text-danger "></i>{{__('messages.All')}}</a>
                    <a class="px-3 py-2 mb-2  rounded h5 fw-semi-bold gradiant" style="cursor:pointer;" wire:click="setSelectedService(13)"><i class="true fa fa-arrow-right me-2 "></i>{{__('messages.Medium-and-Low-Voltage')}}</a>
                    <a class="px-3 py-2 mb-2  rounded h5 fw-semi-bold gradiant" style="cursor:pointer;" wire:click="setSelectedService(12)"><i class="true fa fa-arrow-right me-2 "></i>{{__('messages.PLC-and-instruments')}}</a>
                    <a class="px-3 py-2 mb-2  rounded h5 fw-semi-bold gradiant" style="cursor:pointer;" wire:click="setSelectedService(11)"><i class="true fa fa-arrow-right me-2 "></i>{{__('messages.chemical-factories-equipments')}}</a>
                    <a class="px-3 py-2 mb-2  rounded h5 fw-semi-bold gradiant" style="cursor:pointer;" wire:click="setSelectedService(10)"><i class="true fa fa-arrow-right me-2 "></i>{{__('messages.piping-and-process-equipments')}}</a>
                    
                </div>
            </div>
            <!-- Service End -->
         


        </div>
        <!-- Sidebar End -->
</div>

<!-- Livewire Component wire-end:80fH03SQRFo1wsnff3nS -->        </div>
    </div>


@endsection