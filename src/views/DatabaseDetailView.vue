<template>
  <div class="database-detail">
    <div v-if="database">
      <h1>{{ database.name }}</h1>
      <div class="database-info">
        <div class="info-card">
          <h3>基本信息</h3>
          <p><strong>类型:</strong> {{ database.type }}</p>
          <p><strong>开发者:</strong> {{ database.developer }}</p>
          <p><strong>首次发布:</strong> {{ database.firstRelease }}</p>
          <p><strong>当前版本:</strong> {{ database.currentVersion }}</p>
          <p><strong>官方网站:</strong> <a :href="database.website" target="_blank">{{ database.website }}</a></p>
        </div>
        
        <div class="description">
          <h3>简介</h3>
          <p>{{ database.description }}</p>
        </div>
      </div>
      
      <div class="syntax-section">
        <h2>常用语法</h2>
        <div v-for="(syntax, index) in database.syntax" :key="index" class="syntax-card">
          <h3>{{ syntax.title }}</h3>
          <pre><code>{{ syntax.code }}</code></pre>
          <p>{{ syntax.explanation }}</p>
        </div>
      </div>
      
      <div class="features">
        <h2>主要特性</h2>
        <ul>
          <li v-for="(feature, index) in database.features" :key="index">
            {{ feature }}
          </li>
        </ul>
      </div>
      
      <div class="tutorials">
        <h2>相关教程</h2>
        <div class="tutorial-grid">
          <div v-for="tutorial in database.tutorials" :key="tutorial.id" class="tutorial-card">
            <h3>{{ tutorial.title }}</h3>
            <p>{{ tutorial.description }}</p>
            <router-link :to="tutorial.path" class="btn">查看教程</router-link>
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
  name: 'DatabaseDetailView',
  data() {
    return {
      database: null
    }
  },
  created() {
    // 这里应该从API或本地数据获取数据库信息
    // 这里使用模拟数据
    this.fetchDatabaseData();
  },
  methods: {
    fetchDatabaseData() {
      // 模拟API调用
      setTimeout(() => {
        this.database = {
          id: 'mysql',
          name: 'MySQL',
          type: '关系型数据库',
          developer: 'Oracle Corporation',
          firstRelease: '1995年',
          currentVersion: '8.0',
          website: 'https://www.mysql.com/',
          description: 'MySQL是世界上最受欢迎的开源关系型数据库管理系统之一，以其可靠性、易用性和性能而闻名。它被广泛应用于Web应用程序和在线发布等场景。',
          syntax: [
            {
              title: '创建数据库',
              code: 'CREATE DATABASE database_name;',
              explanation: '创建一个新的数据库。'
            },
            {
              title: '创建表',
              code: 'CREATE TABLE table_name (\n  column1 datatype,\n  column2 datatype,\n  column3 datatype,\n  ...\n);',
              explanation: '创建一个新的表，定义列名和数据类型。'
            },
            {
              title: '插入数据',
              code: 'INSERT INTO table_name (column1, column2, column3, ...)\nVALUES (value1, value2, value3, ...);',
              explanation: '向表中插入新的数据行。'
            }
          ],
          features: [
            '支持多种存储引擎，包括InnoDB、MyISAM等',
            '完全支持ACID事务',
            '支持复制和高可用性',
            '强大的SQL查询功能',
            '跨平台支持',
            '广泛的编程语言接口'
          ],
          tutorials: [
            {
              id: 1,
              title: 'MySQL基础入门',
              description: '学习MySQL的基本概念和操作',
              path: '/tutorials/mysql-basics'
            },
            {
              id: 2,
              title: 'MySQL高级查询',
              description: '掌握复杂的SQL查询技巧',
              path: '/tutorials/mysql-advanced-queries'
            },
            {
              id: 3,
              title: 'MySQL性能优化',
              description: '学习如何优化MySQL数据库性能',
              path: '/tutorials/mysql-optimization'
            }
          ]
        };
      }, 500);
    }
  }
}
</script>

<style scoped>
.database-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.database-info {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

.info-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.syntax-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.syntax-card pre {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.tutorial-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
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

.loading {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #666;
}
</style> 