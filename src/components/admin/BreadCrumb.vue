<template>
  <div class="z-10 border-b bg-neutral-700 lg:py-2.5">
    <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
      <ol class="inline-flex items-center space-x-1 md:space-x-3 breadcrumb">
        <li>
            <span class="mr-1 text-sm font-medium md:ml-2 text-gray-300 dark:text-gray-400">خانه</span>
        </li>
        <li>
            <span class="mr-1 text-sm font-medium md:ml-2 text-gray-300 dark:text-gray-400">پيشخوان</span>
        </li>
      </ol>
    </div>
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