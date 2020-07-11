var headerHTML = ` 
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
            <img src="img/MC_Logo_Negro.png" width="30" height="30" class="d-inline-block align-top" alt="a" loading="lazy">
            Mati Cardo            
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Bio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Gear</a>
             </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="*" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Servicios
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Grabo Guitarras para tus canciones</a>
                <a class="dropdown-item" href="#">Produzco tus canciones</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Clases de Guitarra</a>
            <li class="nav-item">
                <a class="nav-link" margin href="./signin.html">Inciar Sesion</a>
              </div>
            </li>
            <!--li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </!--li-->
          </ul>
          <!--form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </!--form-->
        </div>
    </nav>
`;
$("#header-js").append(headerHTML);