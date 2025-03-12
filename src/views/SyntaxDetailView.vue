<template>
  <div class="syntax-detail">
    <div v-if="syntax">
      <h1>{{ syntax.title }}</h1>
      <div class="syntax-content">
        <div class="description">
          <h2>描述</h2>
          <p>{{ syntax.description }}</p>
        </div>
        
        <div class="code-example">
          <h2>示例代码</h2>
          <pre><code>{{ syntax.code }}</code></pre>
          <p class="explanation">{{ syntax.explanation }}</p>
        </div>
        
        <div class="usage">
          <h2>使用场景</h2>
          <ul>
            <li v-for="(use, index) in syntax.usage" :key="index">
              {{ use }}
            </li>
          </ul>
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
  name: 'SyntaxDetailView',
  data() {
    return {
      syntax: null
    }
  },
  created() {
    // 模拟API调用
    this.fetchSyntaxData();
  },
  methods: {
    fetchSyntaxData() {
      // 模拟API调用
      setTimeout(() => {
        this.syntax = {
          id: this.$route.params.id,
          title: 'SELECT 语句',
          description: 'SELECT 语句用于从数据库中检索数据。这是最常用的 SQL 命令之一。',
          code: 'SELECT column1, column2, ...\nFROM table_name\nWHERE condition;',
          explanation: '从指定的表中选择特定列的数据，可以使用 WHERE 子句添加条件筛选。',
          usage: [
            '查询特定表中的数据',
            '使用条件过滤结果',
            '连接多个表进行查询',
            '对结果进行排序和分组'
          ]
        };
      }, 500);
    }
  }
}
</script>

<style scoped>
.syntax-detail {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.syntax-content {
  margin-top: 20px;
}

.code-example {
  margin: 20px 0;
}

.code-example pre {
  background-color: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
}

.explanation {
  margin-top: 10px;
  color: #666;
}

.usage ul {
  padding-left: 20px;
}

.usage li {
  margin-bottom: 10px;
}

.loading {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #666;
}
</style> 