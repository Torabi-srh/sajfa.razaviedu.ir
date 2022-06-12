<template>
  <header class="flex flex-row w-full">
    <div class="w-4/5">
      <div
        class="grid justify-items-center items-center px-4 py-1 rounded-sm border border-slate-900 bg-slate-100 hover:bg-slate-200 text-rose-900 font-black">
        <span>همکار
          محترم، سحر
          ترابی دشت
          بیاض
          (30379924)
          <span class="text-indigo-800">، به سامانه جامع فرآیندهای اداری آموزشی (سجفا) خوش آمدید.
          </span>
        </span>
      </div>
    </div>

    <div class="w-1/5 flex flex-row-reverse gap-4">
      <div class="p-1 rounded-sm border border-slate-900 bg-slate-100 hover:bg-slate-200">
        <a title="نمایش منوها" class="">
          <font-awesome-icon :icon="['fa', 'reorder']" />
        </a>
      </div>
      <div class="p-1 rounded-sm border border-slate-900 bg-slate-100 hover:bg-slate-200">
        <a href="/logout" title="خروج" class="text-red-600 font-black">
          <font-awesome-icon :icon="['fa', 'sign-out']" /> خروج
        </a>
      </div>
      <div class="p-1 rounded-sm border border-slate-900 bg-slate-100 hover:bg-slate-200">
        <a title="تمام صفحه">
          <font-awesome-icon :icon="['fa', 'arrows-alt']" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
</style>