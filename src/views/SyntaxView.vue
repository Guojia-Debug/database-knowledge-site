<template>
  <div class="syntax-view">
    <h1>数据库语法指南</h1>
    
    <div class="syntax-categories">
      <div class="category-card" v-for="category in categories" :key="category.id">
        <h2>{{ category.name }}</h2>
        <p>{{ category.description }}</p>
        <ul class="syntax-list">
          <li v-for="syntax in category.syntaxItems" :key="syntax.id">
            <router-link :to="`/syntax/${syntax.id}`">{{ syntax.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyntaxView',
  data() {
    return {
      categories: [
        {
          id: 'sql-basics',
          name: 'SQL 基础',
          description: '学习 SQL 的基本语法和操作',
          syntaxItems: [
            { id: 'select', title: 'SELECT 语句' },
            { id: 'insert', title: 'INSERT 语句' },
            { id: 'update', title: 'UPDATE 语句' },
            { id: 'delete', title: 'DELETE 语句' },
            { id: 'create-table', title: 'CREATE TABLE 语句' }
          ]
        },
        {
          id: 'sql-advanced',
          name: 'SQL 高级',
          description: '掌握高级 SQL 查询和操作',
          syntaxItems: [
            { id: 'joins', title: '表连接 (JOINS)' },
            { id: 'subqueries', title: '子查询' },
            { id: 'views', title: '视图' },
            { id: 'stored-procedures', title: '存储过程' },
            { id: 'triggers', title: '触发器' }
          ]
        },
        {
          id: 'nosql',
          name: 'NoSQL 语法',
          description: '学习 NoSQL 数据库的查询语法',
          syntaxItems: [
            { id: 'mongodb-queries', title: 'MongoDB 查询操作' },
            { id: 'mongodb-updates', title: 'MongoDB 更新操作' },
            { id: 'redis-commands', title: 'Redis 命令' },
            { id: 'cassandra-cql', title: 'Cassandra CQL' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.syntax-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.syntax-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.category-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
}

.syntax-list {
  margin-top: 15px;
  padding-left: 20px;
}

.syntax-list li {
  margin-bottom: 10px;
}

.syntax-list a {
  color: #2c3e50;
  text-decoration: none;
}

.syntax-list a:hover {
  color: #4CAF50;
  text-decoration: underline;
}
</style> 