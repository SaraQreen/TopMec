@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white  slideInDown mb-4"> {{__('messages.Consultaion')}}</h1>

        </div>
    </div>

    <!-- Blog start-->

    <section id="blog" class="blog mb-5">
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
         <div class="row gy-4 posts-list">

         @foreach ($blogs as $blog)
            <div class="col-xl-4 col-md-6">
             <div class="post-item position-relative h-100">
                 <div class="post-img position-relative overflow-hidden">
                    <img src="{{ URL::asset('assets/img/blog1.jpg')}}" class="img-fluid" alt="">
                         <span class="post-date">{{ $blog->created_at}}</span>
                            </div>
                            <div class="post-content d-flex flex-column">

                                <h3 class="post-title">{{ $blog->title }}</h3>

                                <div class="meta d-flex align-items-center">  
                                </div>

                                <p style="height: 65px;overflow: hidden;"> {{ $blog->content }}</p>

                                <hr>

                                <a href="{{ route('blog.details',$blog->id)}}" class="readmore stretched-link"><span>{{__('messages.Read-more')}}</span><i class="bi bi-arrow-right"></i></a>

                            </div>

                        </div>
                    </div><!-- End post list item -->

                    @endforeach

            </div><!-- End blog posts list -->

        </div>

    </section>


    <!--Bloge End-->

@endsection 