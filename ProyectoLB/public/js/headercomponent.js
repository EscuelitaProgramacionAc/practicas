var headerHTML = `
      <div class="col-12 cabecera">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Sede">Sede</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pre-inscripción">Pre-Inscripción</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#expositores">Expositores</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Sponsors">Sponsors</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                ></a>
              </li>
            </ul>
            <div>
              <a href= "https://www.facebook.com/">
              <img src="./img/face.png" alt="30px" width="35px" />
              </a>
              <a href="https://www.whatsapp.com">
              <img src="./img/whatsapplogo.png" alt="30px" width="30px" />
              </a>
              <a href="https://www.instagram.com/">
              <img src="./img/instalogo.png" alt="30px" width="30px" />
              </a>
            </div>
          </div>
        </nav>
      </div>`;

      $("#header-js").append(headerHTML);
