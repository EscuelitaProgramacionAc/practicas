var headerHTML = `
<div class="container-fluid">
      <div id="cabecera" class="row align-items-center">
        <div class="col-10">
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
            <div class="collapse navbar-collapse" id="navbarNav">
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
                  <a class="nav-link" href="#Pre-Inscripción">Pre-Inscripción</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#Expositores">Expositores</a>
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
            </div>
          </nav>
        </div>
        <div class="col-2 justify-content-end">
          <img src="./img/face.png" alt="30px" width="35px" />
          <img src="./img/whatsapplogo.png" alt="30px" width="30px" />
          <img src="./img/instalogo.png" alt="30px" width="30px" />
        </div>
      </div>`;

      $("#header-js").append(headerHTML);