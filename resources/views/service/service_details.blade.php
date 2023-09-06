@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="margin-top: -35px; visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
    <div class="container text-center py-5">
        <h1 class="display-4 text-white animated slideInDown mb-4"> {{__('messages.Service-Details')}}</h1>
       
    </div>
</div>

<!-- ======= Service Details Section ======= -->

<section id="service-details" class="service-details my-5">
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
  
          <div class="row gy-4">
          @if(isset($services) && $services->count()>0)
          @foreach( $services as $service)
            <div class="col-lg-4">
              <div class="services-list">                    
                <a href="{{route('service.details',$service->id)}}" class=" active ">{{__('messages.chemical-factories-equipments')}}</a>              
                <a href="{{route('service.details',$service->id)}}" class=""> {{__('messages.Pump')}}</a>            
                <a href="{{route('service.details',$service->id)}}" class="">{{__('messages.PLC-and-instruments')}}</a>            
                <a href="{{route('service.details',$service->id)}}" class=""> {{__('messages.Medium-and-Low-Voltage')}}</a>             
                <a href="{{route('service.details',$service->id)}}" class="">{{__('messages.Manual,On-Off,Rational-Valves')}}</a>           
                <a href="{{route('service.details',$service->id)}}" class=""> {{__('messages.piping-and-process-equipments')}}</a>            
                <a href="{{route('service.details',$service->id)}}" class="">{{__('messages.welding-equipments')}}</a>             
                <a href="{{route('service.details',$service->id)}}" class="">{{__('messages.Firefighting-Alarm-System')}}</a>
                                 
              </div>

            </div>
            
            <div class="col-lg-8">
              <img src="{{ URL::asset('assets/img/ser1.jpg')}}" alt="" class="img-fluid services-img">              
              <h3>  {{ $service->name }}</h3>
              <p>{{ $service->description}}</p>
            </div>
            @endforeach
            @endif
               <div class="col-lg-12">
                        <div class="position-relative ">
                            <h2 style=" font-size: 26px;font-weight: 700;" class="portfolio-description">{{__('messages.Service-products')}}</h2>

                        <div class="row">
                        @if(isset($products) && $products->count()>0)
                        @foreach( $products as $product)
                        <div class="col-4">
                            <a href="{{ route('product.details',$product->id)}}">
                         <div class="item ">
    
                    <div class="overflow-hidden rounded team-item ">
                     <div class="overflow-hidden rounded team-item ">
                     <div class="overflow-hidden team-img position-relative">
               
                    <img class="img-fluid w-100" src="{{ URL::asset('assets/img/pro1.jpg')}}" alt="">
                
                <div class="product-social">
                    <div class="py-1 text-center">
                        <h6>{{$product->name}}</h6>
                        <p>{{$product->description}}</p>

                    </div>
                </div>
            </div>
           
           </div>
       
          </div>
                         </div>
                            </a>
                        </div> 
                        @endforeach  
                        @endif 
                        </div>  
      
                        </div>
               </div>
          </div>
        </div>
      </section>


<!-- End Service Details Section -->



@endsection