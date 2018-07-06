@extends('layouts.master')
@section('css')
<style type="text/css">


</style>
@endsection
@section('content')
<div class="row">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner">

      <div class="item active">
        <img src="/img/1.jpg" alt="Los Angeles" style="width:100%; height:auto;"  class="img-responsive">
      </div>

      <div class="item">
        <img src="/img/2.jpg" alt="Chicago" style="width:100%; height:auto;"  class="img-responsive">
      </div>

      <div class="item">
        <img src="/img/3.jpg" alt="New York" style="width:100%; height:auto;"  class="img-responsive">
      </div>

    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</div>

<div class="row">
  <div style="padding: 10px;">
    <h2 class="section-title">
      <img src="/img/diet.PNG" style="width: 3%;"> เมนูอาหารแนะนำ
      <a href="/foodmenu" style="float: right;padding: 3px 12px;">Show All</a>
    </h2>
  </div>

  <div class="col-xs-6 col-md-3">
    <div class="thumbnail">
      <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
      <div class="caption">
        <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
      </div>
    </div>
  </div>
  <div class="col-xs-6 col-md-3">
    <div class="thumbnail">
      <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
      <div class="caption">
        <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
      </div>
    </div>
  </div>
  <div class="col-xs-6 col-md-3">
    <div class="thumbnail">
      <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
      <div class="caption">
        <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
      </div>
    </div>
  </div>
  <div class="col-xs-6 col-md-3">
    <div class="thumbnail">
      <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
      <div class="caption">
        <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>


<div class="row">
  <div style="padding: 10px;">
   <h2 class="section-title">
    <img src="/img/megaphone.PNG" style="width: 3%;"> โปรโมชั่น
    <a href="/deal/search?cate=26&amp;event=" style="float: right;padding: 3px 12px;">Show All</a>
  </h2>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
    <div class="caption">
      <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
      <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
    </div>
  </div>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
    <div class="caption">
      <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
      <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
    </div>
  </div>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
    <div class="caption">
      <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
      <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
    </div>
  </div>
</div>
<div class="col-xs-6 col-md-3">
  <div class="thumbnail">
    <img src="/img/2.jpg" alt="Boats at Phi Phi, Thailand">
    <div class="caption">
      <p>Etizzle shiznit fo shizzle sizzle augue hendrerizzle accumsizzle. Gizzle izzle est. Vivamizzle hizzle dolor, sure vitae, yippiyo id, ultrices izzle, sheezy.</p>
      <p><a href="#" class="btn btn-primary" role="button">Button</a></p>
    </div>
  </div>
</div>
</div>

<div class="row">
  <div style="padding: 10px;">
    <h2 class="section-title">
      <img src="/img/route.PNG" style="width: 3%;"> สถานที่ตัง
    </h2>
  </div>
  <div class="col-md-12">
    <div id="map" style="width:100%;height:500px"></div>
    <script>
      function myMap(){
        var lat = 16.9086023;
        var long = 99.1219971;
                // var lat = lat;
                // var long = long;
                var namesnace = "เป็นต่อ ก่อสร้างคาเฟ่";
                var mapCanvas = document.getElementById("map");
                var myCenter = new google.maps.LatLng(lat,long);
                var mapOptions = {center: myCenter, zoom: 15};
                var map = new google.maps.Map(mapCanvas,mapOptions);
                var marker = new google.maps.Marker({
                  position: myCenter,
                  animation: google.maps.Animation.BOUNCE
                });
                marker.setMap(map);

                var infowindow = new google.maps.InfoWindow({
                  content:namesnace
                });
                infowindow.open(map,marker);
              }
            </script>
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9x7E5toahKKgMmeDNLVy3YUbkA5cNxM0&callback=myMap"></script>
          </div>

        </div>

        @endsection
        @section('javascript')

        @endsection
