<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark navbar-light"
  >
    <div class="container">
      <!-- LOGO -->
      <nuxt-link class="navbar-brand logo text-uppercase" to="/">
        <img
          src="images/logo-light.png"
          class="logo-light"
          alt=""
          height="22"
        />
        <img src="images/logo-dark.png" class="logo-dark" alt="" height="22" />
      </nuxt-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <Navmenu />
        <ul class="navbar-nav navbar-center">
          <!-- <li class="nav-item">
            <a href="" class="nav-link">Log In</a>
          </li> -->
          <li class="nav-item d-inline-block d-lg-none">
            <a href="" class="nav-link">Get started</a>
          </li>
        </ul>
        <div class="navbar-button d-none d-lg-inline-block">
          <a href="" class="btn btn-sm btn-soft-light btn-round">Get started</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
</style>