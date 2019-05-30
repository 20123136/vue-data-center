<template>
  <div class="login">
    <div class="login-panel">
      <div class="login-info">
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
          <el-form-item  prop="username">
            <el-input placeholder="用户名" v-model="ruleForm2.username">
              <template slot="prepend"><span class="iconfont">&#xe64d;</span></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="密码" v-model="ruleForm2.password">
              <template slot="prepend"><span class="iconfont">&#xe644;</span></template>
            </el-input>
          </el-form-item>
          <el-form-item class="login-btn">
            <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          </el-form-item>
        </el-form>
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
    position: relative;
    width: 100%;
    height: 100vh;
    background: #c6e0d6 url("../assets/bg5.jpg") no-repeat 50% 50%;
    background-size: 100% 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-panel{
    position: relative;
    width: 580px;
    height: 420px;
    opacity: 0.9;
    background: #90c1bb  url("../assets/login_box3.png");
    border: 1px #CCC solid;
    border-radius: 10px;
    box-shadow: 0 0 40px #888888;
    -moz-box-shadow: 0 0 40px #888888; /* 老的 Firefox */
  }
  .login-info{
    width: 70%;
    height: 100%;
    padding: 35% 10% 0 10%;
  }

  h1{
    font-size: 24px;
    color: #006bbe;
    font-weight: normal;
  }
  h2{
    font-weight: normal;
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
