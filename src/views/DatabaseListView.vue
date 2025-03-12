<template>
  <div class="database-list">
    <h1>数据库列表</h1>
    
    <div class="filter-section">
      <div class="search-box">
        <input type="text" v-model="searchQuery" placeholder="搜索数据库...">
      </div>
      
      <div class="filter-options">
        <select v-model="typeFilter">
          <option value="">所有类型</option>
          <option value="关系型">关系型</option>
          <option value="NoSQL">NoSQL</option>
          <option value="图数据库">图数据库</option>
        </select>
      </div>
    </div>
    
    <div class="database-grid">
      <div v-for="db in filteredDatabases" :key="db.id" class="database-card">
        <h2>{{ db.name }}</h2>
        <p class="db-type">{{ db.type }}</p>
        <p class="db-description">{{ db.description }}</p>
        <router-link :to="`/databases/${db.id}`" class="btn">查看详情</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatabaseListView',
  data() {
    return {
      searchQuery: '',
      typeFilter: '',
      databases: [
        {
          id: 'mysql',
          name: 'MySQL',
          type: '关系型',
          description: 'MySQL是世界上最受欢迎的开源关系型数据库管理系统之一，以其可靠性、易用性和性能而闻名。'
        },
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          type: '关系型',
          description: 'PostgreSQL是一个功能强大的开源对象关系数据库系统，具有超过30年的积极开发历史。'
        },
        {
          id: 'mongodb',
          name: 'MongoDB',
          type: 'NoSQL',
          description: 'MongoDB是一个基于文档的分布式数据库，为现代应用开发者和云时代而设计。'
        },
        {
          id: 'redis',
          name: 'Redis',
          type: 'NoSQL',
          description: 'Redis是一个开源的内存数据结构存储，用作数据库、缓存和消息代理。'
        },
        {
          id: 'neo4j',
          name: 'Neo4j',
          type: '图数据库',
          description: 'Neo4j是世界领先的图数据库，专为优化快速查询而设计，可以存储、处理和查询高度连接的数据。'
        }
      ]
    }
  },
  computed: {
    filteredDatabases() {
      return this.databases.filter(db => {
        // 应用搜索过滤
        const matchesSearch = db.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             db.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        
        // 应用类型过滤
        const matchesType = this.typeFilter === '' || db.type === this.typeFilter;
        
        return matchesSearch && matchesType;
      });
    }
  }
}
</script>

<style scoped>
.database-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.filter-section {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.search-box input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.filter-options select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.database-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.database-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.database-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.db-type {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

.db-description {
  margin-bottom: 15px;
  color: #555;
}

.btn {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}
</style> 