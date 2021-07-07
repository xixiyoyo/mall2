<template>
    <div>
<!--      <router-view></router-view>-->
      <Tabber>
        <tabbar-item path="/home" active-color="deepPink">
          <template #item-icon>
            <img src="../../../assets/img/tabbar/home.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="../../../assets/img/tabbar/home_active.svg" alt="">
          </template>
          <template #item-text>
            <div>首页</div>
          </template>
        </tabbar-item>
        <tabbar-item path="/cate" active-color="gold">
          <template #item-icon>
            <img src="../../../assets/img/tabbar/category.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="../../../assets/img/tabbar/category_active.svg" alt="">
          </template>
          <template #item-text>
            <div>分类</div>
          </template>
        </tabbar-item>
        <tabbar-item path="/cart" active-color="green">
          <template #item-icon>
            <img src="../../../assets/img/tabbar/shopcart.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="../../../assets/img/tabbar/shopcart_active.svg" alt="">
          </template>
          <template #item-text>
            <div>购物车</div>
          </template>
        </tabbar-item>
        <tabbar-item path="/profile" active-color="yellow">
          <template #item-icon>
            <img src="../../../assets/img/tabbar/profile.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="../../../assets/img/tabbar/profile_active.svg" alt="">
          </template>
          <template #item-text>
            <div>我的</div>
          </template>

        </tabbar-item>
      </Tabber>
    </div>
</template>

<script>
  import Tabber from '../../common/tabbar/Tabbar'
  import TabbarItem from '../../common/tabbar/TabbarItem'
    export default {
        name: "MainTabBar",
      components:{
        Tabber,
        TabbarItem
      }
    }
</script>

<style scoped>

</style>
