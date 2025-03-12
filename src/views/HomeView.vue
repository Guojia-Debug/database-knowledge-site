<template>
  <div class="home">
    <h1>数据库知识中心</h1>
    <div class="intro">
      <p>欢迎来到数据库知识中心，这里提供各种数据库的语法和用法指南。</p>
    </div>
    
    <div class="database-categories">
      <h2>数据库分类</h2>
      <div class="category-grid">
        <div v-for="category in categories" :key="category.id" class="category-card">
          <h3>{{ category.name }}</h3>
          <p>{{ category.description }}</p>
          <router-link :to="category.path" class="btn">查看详情</router-link>
        </div>
      </div>
    </div>
    
    <div class="popular-topics">
      <h2>热门主题</h2>
      <ul>
        <li v-for="topic in popularTopics" :key="topic.id">
          <router-link :to="topic.path">{{ topic.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      categories: [
        {
          id: 1,
          name: '关系型数据库',
          description: '包括 MySQL, PostgreSQL, Oracle, SQL Server 等',
          path: '/databases/relational'
        },
        {
          id: 2,
          name: 'NoSQL 数据库',
          description: '包括 MongoDB, Redis, Cassandra 等',
          path: '/databases/nosql'
        },
        {
          id: 3,
          name: '图数据库',
          description: '包括 Neo4j, ArangoDB 等',
          path: '/databases/graph'
        }
      ],
      popularTopics: [
        { id: 1, title: 'SQL 基础语法', path: '/syntax/sql-basics' },
        { id: 2, title: 'MongoDB 查询操作', path: '/syntax/mongodb-queries' },
        { id: 3, title: '数据库索引优化', path: '/tutorials/index-optimization' },
        { id: 4, title: '事务管理', path: '/tutorials/transactions' },
        { id: 5, title: '数据库设计原则', path: '/tutorials/database-design' }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.intro {
  margin-bottom: 40px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.category-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 10px;
}

.popular-topics ul {
  padding-left: 20px;
}

.popular-topics li {
  margin-bottom: 10px;
}

.popular-topics a {
  color: #2c3e50;
  text-decoration: none;
}

.popular-topics a:hover {
  text-decoration: underline;
}
</style> 