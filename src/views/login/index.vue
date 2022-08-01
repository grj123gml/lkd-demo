<template>
  <div class="login-container">
    <div class="login-form">
      <img src="../../assets/404_images/logo.595745bd.png" class="login-logo" />
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="请输入用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon
              :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
            />
          </span>
        </el-form-item>

        <el-form-item prop="code">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="yanzhengma"
            v-model="loginForm.code"
            placeholder="请输入验证码"
            name="yanzhengma"
            tabindex="2"
            auto-complete="on"
          />
          <div class="el-col">
            <img :src="imageUrl" />
          </div>
        </el-form-item>

        <el-button
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          @click.native.prevent="handleLogin"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script>
import { getVerificationCode } from "@/api/user";
export default {
  name: "Login",
  data() {
    return {
      imageUrl: "",
      loginForm: {
        username: "admin",
        password: "admin",
        code: "",
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", message: "请输入用户名" },
        ],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
        code: [{ required: true, trigger: "blur", message: "请输入验证码" }],
      },
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  created() {
    this.getVerificationCode();
  },
  methods: {
    //显示密码
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    //获取验证码
    async getVerificationCode() {
      const clientToken = Math.floor(Math.random() * 10000);
      const res = await getVerificationCode(clientToken);
      this.imageUrl = URL.createObjectURL(res.data);
      this.$store.commit("user/setClientToken", clientToken);
    },
    //登录点击事件
    handleLogin() {
      try {
        this.$store.dispatch("user/getToken", this.loginForm);
        // if (!this.$store.state.user.token.success) {
        //   this.$message.error("登录失败");
        //   this.getVerificationCode()
        // } else {
        //   this.$message({
        //     message: "恭喜你，登录成功",
        //     type: "success",
        //   });
        //   this.$router.push("/home");
        // }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-image: url(../../assets/404_images/background.be4fae7d.png);
  background-repeat: no-repeat;
  background-size: cover;
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      height: 47px;
      background: transparent;
      border: 0;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: #999;
      caret-color: #999;
      -webkit-appearance: none;

      &:-webkit-autofill {
        // box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    width: 100%;
    height: 52px;
    margin-bottom: 24px;
    // background: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
  }
  .el-button--primary {
    height: 52px;
    border-radius: 8px;
    background: linear-gradient(262deg, #2e50e1, #6878f0);
  }
  .el-col {
    position: absolute;
    right: 0px;
    top: 0px;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
  }
  .login-logo {
    z-index: 999;
    position: absolute;
    width: 96px;
    height: 96px;
    top: -46px;
    left: 50%;
    margin-left: -48px;
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: #889aa4;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    .svg-icon {
      width: 16px;
      height: 16px;
      color: inherit;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
