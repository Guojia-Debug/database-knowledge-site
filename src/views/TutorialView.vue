<template>
  <div class="tutorial-view">
    <h1>数据库教程</h1>
    
    <div class="tutorial-filter">
      <input type="text" v-model="searchQuery" placeholder="搜索教程...">
      <select v-model="difficultyFilter">
        <option value="">所有难度</option>
        <option value="初级">初级</option>
        <option value="中级">中级</option>
        <option value="高级">高级</option>
      </select>
    </div>
    
    <div class="tutorial-list">
      <div v-for="tutorial in filteredTutorials" :key="tutorial.id" class="tutorial-card">
        <div class="tutorial-header">
          <h2>{{ tutorial.title }}</h2>
          <span class="difficulty-badge" :class="tutorial.difficulty">{{ tutorial.difficulty }}</span>
        </div>
        <p class="tutorial-description">{{ tutorial.description }}</p>
        <div class="tutorial-meta">
          <span><i class="icon-clock"></i> {{ tutorial.duration }}</span>
          <span><i class="icon-database"></i> {{ tutorial.database }}</span>
        </div>
        <router-link :to="`/tutorials/${tutorial.id}`" class="btn">开始学习</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialView',
  data() {
    return {
      searchQuery: '',
      difficultyFilter: '',
      tutorials: [
        {
          id: 'mysql-basics',
          title: 'MySQL 基础入门',
          description: '学习 MySQL 的基本概念、安装和基础操作',
          difficulty: '初级',
          duration: '2小时',
          database: 'MySQL'
        },
        {
          id: 'postgresql-advanced',
          title: 'PostgreSQL 高级查询',
          description: '掌握 PostgreSQL 的高级查询技巧和性能优化',
          difficulty: '高级',
          duration: '4小时',
          database: 'PostgreSQL'
        },
        {
          id: 'mongodb-crud',
          title: 'MongoDB CRUD 操作',
          description: '学习 MongoDB 的创建、读取、更新和删除操作',
          difficulty: '初级',
          duration: '3小时',
          database: 'MongoDB'
        },
        {
          id: 'database-design',
          title: '数据库设计原则',
          description: '学习关系型数据库设计的基本原则和最佳实践',
          difficulty: '中级',
          duration: '5小时',
          database: '通用'
        },
        {
          id: 'index-optimization',
          title: '数据库索引优化',
          description: '了解如何优化数据库索引以提高查询性能',
          difficulty: '高级',
          duration: '3小时',
          database: '通用'
        }
      ]
    }
  },
  computed: {
    filteredTutorials() {
      return this.tutorials.filter(tutorial => {
        // 应用搜索过滤
        const matchesSearch = tutorial.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             tutorial.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        
        // 应用难度过滤
        const matchesDifficulty = this.difficultyFilter === '' || tutorial.difficulty === this.difficultyFilter;
        
        return matchesSearch && matchesDifficulty;
      });
    }
  }
}
</script>

<style scoped>
.tutorial-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.tutorial-filter {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.tutorial-filter input {
  padding: 10px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tutorial-filter select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.tutorial-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
}

.tutorial-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease;
}

.tutorial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tutorial-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.tutorial-header h2 {
  margin-bottom: 0;
  font-size: 1.3rem;
}

.difficulty-badge {
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: white;
}

.difficulty-badge.初级 {
  background-color: #4CAF50;
}

.difficulty-badge.中级 {
  background-color: #2196F3;
}

.difficulty-badge.高级 {
  background-color: #F44336;
}

.tutorial-description {
  margin-bottom: 15px;
  color: #555;
}

.tutorial-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  color: #666;
  font-size: 0.9rem;
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