<template>
  <div class="navbar">
    <!-- <hamburger
      :is-active="sidebar"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    /> -->

    <div class="box">
      <img
        src="../../assets/404_images/logo.3673fab5.png"
        alt=""
        class="logo"
      />
      <!-- 用户信息区域 -->
      <div class="user-info">
        <!-- 头像区域 -->
        <img src="../../assets/404_images/tou.png" alt="" />
        <!-- 信息 -->
        <p>欢迎您~~ admin</p>
        <!-- 退出 -->
        <div class="logout">
          <p>退出</p>
          <i class="el-icon-caret-bottom"></i>
        </div>
      </div>
    </div>

    <div class="right-menu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    // Hamburger,
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1999;
  bottom: 50px;
  width: 100%;
  height: 60px;
  overflow: hidden;
  // position: relative;
  background: url("../../assets/404_images/navabar.png") no-repeat;
  background-size: cover;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          position: absolute;
          top: 15px;
          right: -15px;
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
  }
}
.box {
  width: 100%;
  height: 100%;
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 14px;
}
.logo {
  width: 90px;
}
.user-info {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;
  .logout {
    display: flex;
    cursor: pointer;
    position: relative;
  }
}
</style>
