<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Admin</title>

  <!-- Fonts -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style type="text/css">
  .sidebar {
    background-color: #0f6d7b;
  }
  .navbar-inverse {
    border-radius: 0px;
  }
  .navbar {
    margin-bottom: 0px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
    transition: all 0.3s;
  }

  .navbar {
   /* padding: 15px 10px; */
   /* background: #fff; */
   border: none;
   border-radius: 0;
   /*margin-bottom: 40px;*/
   box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
   background-color: #222;
   border-color: #080808;
 }

 .navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}


/* ---------------------------------------------------
    SIDEBAR STYLE
    ----------------------------------------------------- */

    .wrapper {
      display: flex;
      align-items: stretch;
    }

    #sidebar {
      min-width: 250px;
      max-width: 250px;
      background-color: #222;
      border-color: #080808;
      color: #fff;
      transition: all 0.3s;
    }

    #sidebar a,
    #sidebar a:hover,
    #sidebar a:focus {
      color: inherit;
    }

    #sidebar.active {
      margin-left: -250px;
    }

    #sidebar .sidebar-header {
      padding: 20px;
      background: #222;
    }

    #sidebar ul.components {
      padding: 20px 0;
      border-bottom: 1px solid #47748b;
    }

    #sidebar ul p {
      color: #fff;
      padding: 10px;
    }

    #sidebar ul li a {
      padding: 10px;
      font-size: 1.1em;
      display: block;
    }

    #sidebar ul li a:hover {
      color: #222;
      background: #fff;
    }

    #sidebar ul li.active > a,
    a[aria-expanded="true"] {
      color: #fff;
      background: #555;
    }

    a[data-toggle="collapse"] {
      position: relative;
    }

    a[aria-expanded="false"]::before,
    a[aria-expanded="true"]::before {
      content: '\e259';
      display: block;
      position: absolute;
      right: 20px;
      font-family: 'Glyphicons Halflings';
      font-size: 0.6em;
    }

    a[aria-expanded="true"]::before {
      content: '\e260';
    }

    ul ul a {
      font-size: 0.9em !important;
      padding-left: 30px !important;
      background: #222;
    }

    ul.CTAs {
      padding: 20px;
    }

    ul.CTAs a {
      text-align: center;
      font-size: 0.9em !important;
      display: block;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    a.download {
      background: #fff;
      color: #7386D5;
    }

    a.article,
    a.article:hover {
      background: #5bc0de !important;
      color: #fff !important;
    }


/* ---------------------------------------------------
    CONTENT STYLE
    ----------------------------------------------------- */

    #content {
     padding: 20px;
     min-height: 100vh;
     transition: all 0.3s;
   }

   #content p a {
    color:
  }


/* ---------------------------------------------------
    MEDIAQUERIES
    ----------------------------------------------------- */

    @media (max-width: 768px) {
      #sidebar {
        margin-left: -250px;
      }
      #sidebar.active {
        margin-left: 0;
      }
      #sidebarCollapse span {
        display: none;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-default">
    <div class="container-fluid">

      <div class="navbar-header">
        <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
          <i class="glyphicon glyphicon-align-left"></i>
          <span></span>
        </button>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Page</a></li>
          <li><a href="#">Page</a></li>
          <li><a href="#">Page</a></li>
          <li><a href="#">Page</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <div style="text-align: center;">
           <img src="/img/man.PNG"  style="width:50%;">
        <h3>Admin Name</h3>
        </div>

      </div>

      <ul class="list-unstyled components">
        <p>Dummy Heading</p>
        <li class="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">จัดการเมนูอาหารแนะนำ</a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li><a href="#">จัดการเมนูอาหารแนะนำ</a></li>
            <li><a href="#">Home 2</a></li>
            <li><a href="#">Home 3</a></li>
          </ul>
        </li>
       <li>
          <a href="#">จัดการสมาชิก</a>
        </li>
        <li>
          <a href="#">จัดการรูปภาพ</a>
        </li>
        <li>
          <a href="#">จัดการโปรโมชั่น</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li><a href="/" class="article">ออกจากระบบ</a></li>
      </ul>
    </nav>

    <!-- Page Content Holder -->
    <div id="content">
      <div class="container-fluid" style="
      background: #fff;
      box-shadow: 0 3px 10px rgba(0, 0, 50, 0.1);">
     @include('admin.recommended-menu')

    </div>


  </div>

</div>


</body>

<script type="text/javascript">
  $(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

</script>
</html>
