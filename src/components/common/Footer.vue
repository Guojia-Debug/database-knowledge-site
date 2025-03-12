<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>数据库知识中心</h3>
        <p>提供全面的数据库知识、语法和最佳实践</p>
      </div>
      
      <div class="footer-section">
        <h3>快速链接</h3>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/databases">数据库列表</router-link></li>
          <li><router-link to="/syntax">语法指南</router-link></li>
          <li><router-link to="/tutorials">教程</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>邮箱：contact@dbknowledge.com</p>
        <p>微信：DBKnowledge</p>
      </div>
    </div>
    
    <div class="copyright">
      <p>&copy; 2023 数据库知识中心. 保留所有权利.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 40px 0 20px;
  margin-top: 40px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.footer-section h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 8px;
}

.footer-section a {
  color: #ddd;
  text-decoration: none;
}

.footer-section a:hover {
  color: white;
  text-decoration: underline;
}

.copyright {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
}
</style> 