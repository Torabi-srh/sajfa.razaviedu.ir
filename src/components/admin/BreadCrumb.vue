<template>
  <div id="ribbon">
    <ol class="flex flex-wrap list-reset pt-3 pb-3 py-4 px-4 mb-4 rounded breadcrumb">
      <li>خانه</li>
      <li>پيشخوان</li>
    </ol>
  </div>
</template>

<style scoped>
.breadcrumb>li+li::before {
  content: "/\00a0";
  padding: 0 5px;
  color: #9ca3af;
  box-sizing: border-box;
}
.breadcrumb>li {
  display: inline-block;
}
</style>