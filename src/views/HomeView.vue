<script setup>
import Banner from "@/components/images/ImageHeader.vue";
import Footer from "@/components/Footer.vue";
import HomeTabs from "@/components/home/HomeTabs.vue";
import IconUser from "@/components/icons/IconUser.vue";
import IconKey from "@/components/icons/IconKey.vue";
</script>

<template>
  <header>
    <Banner class="max-h-36" />
  </header>
  <div
    class="bg-cadet-blue container rounded-lg h-14 flex flex-row mx-auto my-2"
  >
    <div class="basis-1/6 grid justify-items-center items-center">
      <a class="text-white">ورود به سیستم :</a>
    </div>
    <div class="basis-1/6 grid justify-items-center items-center">
      <div class="flex border rounded bg-slate-50 items-center p-1 mx-4">
        <IconUser class="text-slate-600 pl-1" />
        <input
          type="text"
          placeholder="نام کاربری"
          class="bg-slate-50 max-w-full focus:outline-none text-slate-700"
        />
      </div>
    </div>
    <div class="basis-1/6 grid justify-items-center items-center">
      <div class="flex border rounded bg-slate-50 items-center p-1 mx-4">
        <IconKey class="text-white pl-1" />
        <input
          type="text"
          placeholder="رمز ورود"
          class="bg-slate-50 max-w-full focus:outline-none text-slate-700"
        />
      </div>
    </div>
    <div class="basis-1/6 grid justify-items-center items-center">
      <div class="form-check">
        <input
          class="form-check-input h-4 w-4 border border-slate-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-right ml-2 cursor-pointer"
          type="checkbox"
          value=""
          checked
          id="flexCheckDefault"
        />
        <label
          class="form-check-label inline-block text-white cursor-pointer"
          for="flexCheckDefault"
        >
          مرا بخاطر بسپار
        </label>
      </div>
    </div>
    <div class="basis-1/6 grid justify-items-center items-center">
      <router-link
        to="/dashboard"
        class="bg-gradient-to-b from-white to-slate-300 border-slate-400 border inline-block px-10 py-1.5 text-black font-medium text-xs leading-tight rounded shadow-md hover:from-slate-400 hover:shadow-lg focus:to-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:from-slate-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        ورود
      </router-link>
    </div>
    <div class="basis-1/6 grid justify-items-center items-end">
      <router-link class="text-white my-2" to="/"
        >رمز عبور را فراموش کرده ام.</router-link
      >
    </div>
  </div>
  <div class="bg-white container mx-auto my-2">
    <HomeTabs />
  </div>
  <Footer />
</template>

<style>
html {
  direction: rtl;
}
#app {
  background-color: #e2e2e2;
}
</style>
