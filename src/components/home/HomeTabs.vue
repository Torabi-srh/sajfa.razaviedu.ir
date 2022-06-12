<script setup>
import HomeSecondTabs from "./HomeSecondTabs.vue";
</script>

<template>
  <div class="grid justify-items-center items-center">
    <h2 class="text-cadet-blue text-1xl my-4">
      اطلاعیه های عمومی ( جهت مشاهده ، گروه مربوط به خود را انتخاب نمایید. )
    </h2>
  </div>
  <div class="container mx-auto border">
    <ul role="tablist" class="flex text-white">
      <li class="mx-1">
        <button
          @click="currentTab(1)"
          :class="
            tab == 1
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="font-bold py-2 px-4 hover:border-blue-500 rounded"
        >
          پرسنل اداری
        </button>
      </li>
      <li class="mx-1">
        <button
          @click="currentTab(2)"
          :class="
            tab == 2
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="font-bold py-2 px-4 hover:border-blue-500 rounded"
        >
          مدیران واحدهای سازمانی
        </button>
      </li>
      <li class="mx-1">
        <button
          @click="currentTab(3)"
          :class="
            tab == 3
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="font-bold py-2 px-4 hover:border-blue-500 rounded"
        >
          سایر شاغلین
        </button>
      </li>
    </ul>
    <div class="p-3 mt-1 bg-white border">
      <div v-if="tab === 1">
        <HomeSecondTabs />
      </div>
      <div v-if="tab === 2">
        <HomeSecondTabs />
      </div>
      <div v-if="tab === 3">
        <HomeSecondTabs />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    currentTab: function (tabNumber) {
      this.tab = tabNumber;
    },
  },
};
</script>
