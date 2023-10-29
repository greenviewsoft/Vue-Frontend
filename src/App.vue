<script setup>
// import Header from "@/components/Header.vue";
import { Header, NavBar , Footer, CartSidebar, MobileMenu, NewsLetter} from "@/components";
</script>
<template>
  <div>
    <div class="backdrop"></div>
    <a class="backtop fas fa-arrow-up" href="#"></a>

    <!-- Header Section  -->
    <Header />

    <NavBar />

    <CartSidebar />

    <MobileMenu />

    <!-- main content -->

    <router-view></router-view>

    <NewsLetter />

    <Footer />
  </div>
</template>
