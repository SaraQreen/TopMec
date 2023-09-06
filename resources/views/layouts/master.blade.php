<!DOCTYPE html>
<html lang="en">

@include('includ.header')

<body>
    <div id="body">
       
        @include('includ.navbar')
          
       
        @yield('content')
       
        @include('includ.footer')

    </div>

    
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
     <script src="{{ URL::asset('assets/js/aos.js')}}"></script>
     <script>
     AOS.init({
      duration: 1200,
      })
     </script>

    <script src="{{ URL::asset('assets/js/wow.min.js')}}" integrity="sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ URL::asset('assets/js/wow.js')}}" integrity="sha512-Rd5Gf5A6chsunOJte+gKWyECMqkG8MgBYD1u80LOOJBfl6ka9CtatRrD4P0P5Q5V/z/ecvOCSYC8tLoWNrCpPg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ URL::asset('assets/lib/easing/easing.min.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/waypoints/waypoints.min.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/counterup/counterup.min.js') }}"></script>
    <script src="{{ URL::asset('assets/js/owl.carousel.min.js')}}"></script>


    <script src="{{ URL::asset('assets/js/glightbox.min.js')}}"></script>
    <script src="{{ URL::asset('assets/lib/isotope-layout/isotope.pkgd.min.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/swiper/swiper-bundle.min.js') }}"></script>


     <!-- Template Javascript -->
       <script src="{{ URL::asset('assets/js/main.js') }}"></script>



</body>

</html>