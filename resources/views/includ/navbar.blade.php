
<nav class="navbar navbar-expand-lg  navbar-light sticky-top px-3 px-lg-5">
        <a href="{{ route('site.index') }}" class="navbar-brand d-flex align-items-center">
            <h5 class="m-0 text-white "><img class="img-fluid me-3" src="" alt="">TopMec</h5>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav mx-auto   py-3 py-lg-0">
                <a href="{{ route('site.index') }}" class="nav-item nav-link  active ">{{__('messages.Home')}}</a>
                <a href="{{ route('site.aboutus')}}"  class="nav-item nav-link " >{{__('messages.About-us')}}</a>
                <a href="{{ route('service.index')}}" class="nav-item nav-link ">{{__('messages.Services')}}</a>
                <a href="{{ route('product.index')}}" class="nav-item nav-link "> {{__('messages.Products')}}</a>
                <a href="{{ route('site.blog')}}" class="nav-item nav-link ">  {{__('messages.Consultaion')}}</a>
                <a href="{{ route('site.contact')}}" class="nav-item nav-link">{{__('messages.Contact-us')}}</a>
            </div>
            <div class="h-100 d-lg-inline-flex align-items-center d-none">
                <a class="btn btn-square rounded-circle  me-2" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
               
                <a class="btn btn-square rounded-circle  me-2" href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                <a class="btn btn-square rounded-circle  me-2" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>

                <div class="lang me-2">
                @foreach(LaravelLocalization::getSupportedLocales() as $localeCode => $properties)
                <a class=" mx-1" href="{{ LaravelLocalization::getLocalizedURL($localeCode, null, [], true) }}"> {{ $properties['native'] }}</a>
                <a class=" mx-1" href="">|</a>
                @endforeach
                </div>
            </div>
        </div>
    </nav>