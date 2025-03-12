<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="logo">数据库知识中心</router-link>
      
      <div class="nav-links">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/databases" class="nav-link">数据库列表</router-link>
        <router-link to="/syntax" class="nav-link">语法指南</router-link>
        <router-link to="/tutorials" class="nav-link">教程</router-link>
      </div>
      
      <div class="search-container">
        <input type="text" placeholder="搜索..." v-model="searchQuery" @keyup.enter="search">
        <button @click="search">搜索</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      searchQuery: ''
    }
  },
  methods: {
    search() {
      if (this.searchQuery.trim()) {
        this.$router.push({ 
          path: '/search', 
          query: { q: this.searchQuery } 
        });
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 15px 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.search-container {
  display: flex;
}

.search-container input {
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  width: 200px;
}

.search-container button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
</style> 