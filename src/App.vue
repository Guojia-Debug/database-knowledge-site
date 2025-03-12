<template>
  <div class="app">
    <Navbar />
    <main class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

h1, h2, h3, h4, h5, h6 {
  margin-bottom: 15px;
}

p {
  margin-bottom: 10px;
}

a {
  color: #4CAF50;
}
</style> 