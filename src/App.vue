<script>
export default {
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
  },
  mounted() {
    this.toggleBodyClass('addClass', 'smart-style-0');
    this.toggleBodyClass('addClass', 'desktop-detected');
    this.toggleBodyClass('addClass', 'smart-rtl');
  }
}
</script>

<script setup>
import SideBar from "@/components/admin/SideBar.vue";
import BreadCrumb from "@/components/admin/BreadCrumb.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import AdminFooter from "@/components/admin/AdminFooter.vue";
// import ArticleCards from "@/components/admin/ArticleCards.vue";
</script>

<template>
  <div classclass="smart-style-0 desktop-detected smart-rtl">
    <AdminHeader />
    <SideBar />
    <div id="main" role="main">
      <BreadCrumb />

      <!-- #MAIN CONTENT -->
      <div id="content" class="" style="opacity: 1;">
        <router-view />
      </div>
      <!-- END #MAIN CONTENT -->
      <div id="busy-indicator"><img src="/theme/Panel/img/ajax-loader.gif" alt="" width="100%" height="100%"> </div>
    </div>
    <AdminFooter />
  </div>
</template>
 
<style>

</style>
