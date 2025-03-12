<template>
  <div class="tutorial-detail">
    <div v-if="tutorial">
      <h1>{{ tutorial.title }}</h1>
      <div class="tutorial-meta">
        <span class="difficulty-badge" :class="tutorial.difficulty">
          {{ tutorial.difficulty }}
        </span>
        <span class="duration">
          <i class="icon-clock"></i> {{ tutorial.duration }}
        </span>
      </div>
      
      <div class="tutorial-content">
        <div class="overview">
          <h2>概述</h2>
          <p>{{ tutorial.overview }}</p>
        </div>
        
        <div class="prerequisites">
          <h2>预备知识</h2>
          <ul>
            <li v-for="(prereq, index) in tutorial.prerequisites" :key="index">
              {{ prereq }}
            </li>
          </ul>
        </div>
        
        <div class="content-sections">
          <div v-for="(section, index) in tutorial.sections" :key="index" class="section">
            <h2>{{ section.title }}</h2>
            <p>{{ section.content }}</p>
            <pre v-if="section.code"><code>{{ section.code }}</code></pre>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading">
      加载中...
    </div>
  </div>
</template>

<script>
export default {
  name: 'TutorialDetailView',
  data() {
    return {
      tutorial: null
    }
  },
  created() {
    this.fetchTutorialData();
  },
  methods: {
    fetchTutorialData() {
      // 模拟API调用
      setTimeout(() => {
        this.tutorial = {
          id: this.$route.params.id,
          title: 'MySQL 基础入门',
          difficulty: '初级',
          duration: '2小时',
          overview: '本教程将帮助您了解 MySQL 数据库的基本概念和操作。',
          prerequisites: [
            '基本的命令行操作知识',
            '简单的 SQL 概念理解'
          ],
          sections: [
            {
              title: '什么是 MySQL？',
              content: 'MySQL 是世界上最受欢迎的开源关系型数据库管理系统之一...'
            },
            {
              title: '安装 MySQL',
              content: '我们将学习如何在不同的操作系统上安装 MySQL...',
              code: '# Windows\n> mysql-installer-community.exe\n\n# Linux\n$ sudo apt-get install mysql-server'
            }
          ]
        };
      }, 500);
    }
  }
}
</script>

<style scoped>
.tutorial-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.tutorial-meta {
  margin: 20px 0;
  display: flex;
  gap: 20px;
  align-items: center;
}

.difficulty-badge {
  padding: 5px 10px;
  border-radius: 4px;
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

.duration {
  color: #666;
}

.tutorial-content {
  margin-top: 30px;
}

.section {
  margin: 30px 0;
}

.section pre {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.prerequisites ul {
  padding-left: 20px;
}

.loading {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #666;
}
</style> 