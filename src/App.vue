<template>
  <div>
    <Header/>
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '~@/components/header';
import Footer from '~@/components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>