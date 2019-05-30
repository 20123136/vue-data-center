<template>
  <div class="login">
    <div class="login-panel">
      <div class="logo-pic">
        <img src="../assets/logo-blue.png" alt="logo">
      </div>
      <div class="project">
        <div class="project-desc">
          <h1>数据中心</h1>
          <img src="../assets/border.jpg" alt="">
          <h2>aigentsoft 数据中心</h2>
        </div>
        <div class="login-info">
          <!--<form action="">
            <div class="input-row">
              <label>租户ID</label>
              <input type="text" placeholder="租户ID">
            </div>
            <div class="input-row">
              <label>用户名</label>
              <input type="text" placeholder="用户名">
            </div>
            <div class="input-row">
              <label>密&nbsp;&nbsp;&nbsp;码</label>
              <input type="text" placeholder="密码">
            </div>
            <div class="remeber">
              <label>记住用户信息</label>
              <input type="checkbox">
            </div>
            <div class="login-btn">
              <input type="submit" value="登录">
            </div>
          </form>-->
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
            <el-form-item label="租户ID" prop="tenantId">
              <el-input v-model="ruleForm2.tenantId" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm2.password" auto-complete="off" @keyup.enter.native="submitForm('ruleForm2')"></el-input>
            </el-form-item>

            <el-form-item class="login-btn">
              <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    var tenantId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入租户ID'));
      } else {
        callback();
      }
    };
    var username = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var password = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        tenantId: '',
        username: '',
        password: ''
      },
      rules2: {
        tenantId: [
          { validator: tenantId, trigger: 'blur' }
        ],
        username: [
          { validator: username, trigger: 'blur' }
        ],
        password: [
          { validator: password, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功，马上登录');
          let params = {
            username: this.ruleForm2.username,
            password: this.ruleForm2.password,
            domain: this.ruleForm2.tenantId,
          }

          this.$store.dispatch('toLogin', params).then(resp => {
            console.log(resp);
            this.$router.push({
              path: '/data-center/dashboard',
            });
          }, failure => {
            console.log(failure);
            //const h = this.$createElement;
            this.$notify.error({
              title: failure.code,
              //message: h('i', { style: 'color: teal'}, failure.codeinfo)
              message: failure.codeinfo,
              duration: 0
            });
          }).catch(err => {
            console.log(err);
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .login{
    width: 100%;
    height: 100vh;
    background: #c6e0d6 url("../assets/bj.jpg") no-repeat 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .logo-pic{
    width: 100%;
    height: 130px;
    display: table-cell;
    vertical-align: middle;
    padding-left: 50px;
  }
  .logo-pic img{
    width: 105px;
    height: 52px;
  }
  .login-panel{
    width: 580px;
    height: 420px;
    background: #b0deff url("../assets/login_box.png");
    border: 1px #CCC solid;
    border-radius: 10px;
    box-shadow: 0 0 10px #888888;
    -moz-box-shadow: 0 0 10px #888888; /* 老的 Firefox */
  }
  .project-desc{
    float: left;
    width: 40%;
    height: 100%;
    padding: 60px 0;
  }
  .project-desc img{
    margin: 8px auto;
  }
  .login-info{
    float: left;
    width: 50%;
    height: 100%;
  }

  h1{
    font-size: 24px;
    color: #006bbe;
    font-weight: normal;
  }
  h2{
    font-weight: normal;
  }

  .login-btn .el-form-item__content{
    width: 228px;
    height: 40px;
    padding-left: 30px;
    padding-top: 15px;
  }
  .submit-btn{
    width: 100%;
    height: 100%;
    color: white;
    background-color: #3896df;
    border: 1px solid #3896df;
    border-radius: 3px;
    letter-spacing: 5px;
  }
  .submit-btn:active{
    border: 1px solid #177cca;
    box-shadow: 0 0 12px #64badf;
  }


</style>
