<template>
  <div class="search-view">
    <h1>搜索结果</h1>
    <p class="search-query">搜索: "{{ query }}"</p>
    
    <div class="search-results" v-if="results.length">
      <div v-for="result in results" :key="result.id" class="result-card">
        <h2>{{ result.title }}</h2>
        <p class="result-type">{{ result.type }}</p>
        <p class="result-description">{{ result.description }}</p>
        <router-link :to="result.path" class="btn">查看详情</router-link>
      </div>
    </div>
    <div v-else class="no-results">
      <p>没有找到相关结果</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
  data() {
    return {
      results: []
    }
  },
  computed: {
    query() {
      return this.$route.query.q || '';
    }
  },
  created() {
    this.searchContent();
  },
  methods: {
    searchContent() {
      // 模拟API调用
      setTimeout(() => {
        this.results = [
          {
            id: 1,
            title: 'MySQL 基础教程',
            type: '教程',
            description: '学习 MySQL 的基本概念和操作...',
            path: '/tutorials/mysql-basics'
          },
          {
            id: 2,
            title: 'SELECT 语句',
            type: '语法',
            description: '了解 SQL SELECT 语句的用法...',
            path: '/syntax/select'
          }
        ];
      }, 500);
    }
  },
  watch: {
    '$route.query.q': {
      handler() {
        this.searchContent();
      }
    }
  }
}
</script>

<style scoped>
.search-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-query {
  color: #666;
  margin-bottom: 30px;
}

.result-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

.result-type {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin: 10px 0;
}

.result-description {
  color: #666;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.no-results {
  text-align: center;
  padding: 50px;
  color: #666;
}
</style> 