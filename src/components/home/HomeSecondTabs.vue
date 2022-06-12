<template>
  <div class="border flex flex-row">
    <ul class="text-white basis-1/4">
      <li classs="">
        <button
          @click="currentTab(1)"
          :class="
            tab == 1
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مدیران و رؤسای ادارات
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(2)"
          :class="
            tab == 2
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          معاونین توسعه مدیریت و پشتیبانی
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(3)"
          :class="
            tab == 3
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          معاونین آموزش ابتدایی
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(4)"
          :class="
            tab == 4
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          معاونین آموزش متوسطه
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(5)"
          :class="
            tab == 5
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین امور اداری
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(6)"
          :class="
            tab == 6
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین آمار و فناوری
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(7)"
          :class="
            tab == 7
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین آموزش ابتدایی
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(8)"
          :class="
            tab == 8
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین آموزش متوسطه اول
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(9)"
          :class="
            tab == 9
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین آموزش متوسطه دوم نظری
        </button>
      </li>
      <li classs="">
        <button
          @click="currentTab(10)"
          :class="
            tab == 10
              ? 'active bg-white text-blue-500 border-t-4 border-blue-700'
              : 'text-white bg-blue-500 hover:bg-blue-400'
          "
          class="text-right w-full font-bold py-2 px-4 hover:border-blue-500"
        >
          مسئولین آموزش فنی و حرفه ای و کاردانش
        </button>
      </li>
    </ul>
    <div class="m-4 bg-white basis-3/4">
      <div v-if="tab === 1">
        <div
          class="mr-4 border border-gray-300 bg-gray-100 rounded-xl shadow-sm"
        >
          <div class="px-6 py-4">
            <h4
              class="text-xl font-semibold tracking-tight text-gray-800 border-b-2 pb-2"
            >
              قابل توجه همکاران مشمول بخشنامه بازنشستگی
            </h4>
            <p
              class="mt-1 leading-normal text-gray-700 bg-white border border-gray-400 rounded p-2"
            >
              باطلاع همکاران محترم مشمول بخشنامه بازنشستگی می رساند که سامانه
              سجفا جهت ثبت درخواست بازنشستگی از ساعت 14 روز شنبه مورخ 1401/1/6
              فعال خواهد شد.
            </p>
            <div class="flex flex-row-reverse mx-6 my-1">
              <button
                class="bg-gradient-to-b from-sky-500 to-blue-500 border-blue-600 border inline-block px-5 py-1.5 text-white font-bold text-xs leading-tight rounded shadow-md hover:from-blue-400 hover:shadow-lg focus:to-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:from-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                ادامه مطلب
              </button>
              <div class="mx-4 text-xs font-normal justify-items-center items-center grid">تاریخ ایجاد/بروزرسانی :  ۱۴۰۱/۰۱/۶ - ۱۳:۳۳</div>
            </div>
          </div>
        </div>
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
