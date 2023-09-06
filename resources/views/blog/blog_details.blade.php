@extends('layouts.master')

@section('content')

<div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
        <div class="container text-center py-5">
            <h1 class="display-4 text-white  slideInDown mb-4"> {{__('messages.Post-Details')}}</h1>

        </div>
    </div>

    <section id="blog" class="blog">
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="row g-5">
            @foreach ($blogs as $blog)
                <div class="col-lg-8">
                    <article class="blog-details">
                        <div class="post-img">
                            <img src="{{ URL::asset('assets/img/blog1.jpg')}}" alt="" class="img-fluid">
                        </div>
                        <h2 class="title">{{ $blog->title }}</h2>
                        <div class="meta-top">
                            <ul>
                                 <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href="{{ route('blog.details',$blog->id)}}">
                                        <time datetime="2020-01-01"> {{ $blog->created_at}} </time></a></li>
                                
                            </ul>
                        </div><!-- End meta top -->

                        <div class="content">
                            <p>{{ $blog->content }}</p>
                        </div><!-- End post content -->
                    </article><!-- End blog post -->
                </div>

                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar-item recent-posts">
                            <h3 class="sidebar-title">{{__('messages.Recent-Posts')}}</h3>
                            <div class="mt-3">
                                  <div class="post-item mt-3">
                                        <img src="{{ URL::asset('assets/img/blog1.jpg')}}" alt="">
                                        <div>
                                            <h4><a href="{{ route('blog.details',$blog->id)}}">{{ $blog->title }}</a></h4>
                                            <time datetime="2020-01-01"> {{ $blog->created_at }}</time>
                                        </div>
                                    </div><!-- End recent post item-->  
                            </div>

                        </div><!-- End sidebar recent posts-->
                    </div><!-- End Blog Sidebar -->
                   
                </div>
                @endforeach
            </div>

        </div>
    </section>

@endsection