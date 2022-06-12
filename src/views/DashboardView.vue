<script setup>
import SideBar from "@/components/admin/SideBar.vue";
import BreadCrumb from "@/components/admin/BreadCrumb.vue";
import AdminHeader from "@/components/admin/AdminHeader.vue";
import ArticleCards from "@/components/admin/ArticleCards.vue";
</script>

<template>
  <div class="px-6 w-full my-4 h-12">
    <AdminHeader />
  </div>
  <aside class="shadow-md px-1 absolute pb-3 h-full border-r bg-cadet-black">
    <SideBar />
  </aside>
  <div class="mr-auto mb-6 lg:w-[71.5%] xl:w-[76.5%] 2xl:w-[81.5%]">
    <div>
      <BreadCrumb />
    </div>
    <div class="grid grid-cols-2 gap-4 flex flex-row flex-wrap flex-grow mt-2">
      <div class="col-span-2">
        <span class="p-2"> تعداد دفعات ورود شما : 96 </span>
        <span class="border-2 border-transparent border-r-cadet-border px-2">
          آخرین ورود شما : ۱۴۰۱/۰۳/۲۱ - ۱۹:۴۲
        </span>
      </div>

      <ArticleCards TitleText=" نقش های شما " HeaderColor="bg-red-400">
        <table class="w-full text-sm text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">ردیف</th>
              <th scope="col" class="px-6 py-3">عنوان نقش</th>
              <th scope="col" class="px-6 py-3">انتخاب</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-gray-50">
              <td class="px-6 py-4">1</td>
              <td class="px-6 py-4">پرسنل</td>
              <td class="px-6 py-4">
                <strong style="color: darkcyan;">نقش فعال</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </ArticleCards>

      <ArticleCards TitleText="اطلاعیه های مرتبط با نقش پرسنل " HeaderColor="bg-pink-400">
        <div role="content" style="padding-top: 0">
          <div class="widget-body">
            <div class="flex flex-wrap" id="content-wizard">
              <div class="sm:w-full pr-4 pl-4" id="bootstrap-wizard-2">
                <div class="form-bootstrapWizard">
                  <div class="clearfix"></div>
                </div>

                <div class="sm:w-full pr-4 pl-4 no-padding" style="
                    font-size: 14px;
                    max-height: 240px;
                    overflow: auto;
                    height: 240px;
                    padding-top: 5px !important;
                  ">
                  <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px">
                    1-
                    <a href="#/nodes/nodes/show/79" target="_blank">اطلاعیه در خصوص دریافت تقدیرنامه</a>
                    <span class="max-date">۱۴۰۱/۰۳/۰۹</span>
                  </div>
                  <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px">
                    2-
                    <a href="#/nodes/nodes/show/78" target="_blank">
                      دستورالعمل نقل و انتقالات داخل استان سال تحصیلی 1402-
                      1401</a>
                    <span class="max-date">۱۴۰۱/۰۳/۰۱</span>
                  </div>
                  <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px">
                    3-
                    <a href="#/nodes/nodes/show/76" target="_blank">اطلاعیه شماره (3) ویژه همکاران مشمول بخشنامه
                      بازنشستگی /
                      استمرار</a>
                    <span class="max-date">۱۴۰۱/۰۲/۱۰</span>
                  </div>
                  <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px">
                    4-
                    <a href="#/nodes/nodes/show/72" target="_blank">اطلاعیه شماره (2) ویژه همکاران مشمول بخشنامه
                      بازنشستگی /
                      استمرار</a>
                    <span class="max-date">۱۴۰۱/۰۲/۰۵</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ArticleCards>

      <ArticleCards TitleText=" بخشنامه ها و دستورالعمل ها " HeaderColor="bg-yellow-700"></ArticleCards>

      <ArticleCards TitleText="اطلاعیه های عمومی " HeaderColor="bg-purple-400">
        <div role="content" style="padding-top: 0">
          <div class="widget-body">
            <div class="row" id="content-wizard">
              <div class="col-sm-12" id="bootstrap-wizard-2">
                <div class="form-bootstrapWizard">
                  <div class="clearfix"></div>
                </div>

                <div class="col-xs-12 no-padding"
                  style="font-size: 14px;max-height: 240px;overflow: auto;height: 240px;padding-top: 5px !important">
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    1- <a href="#/nodes/nodes/show/80" target="_blank">اطلاعیه شماره (1) متقاضیان انتقالات داخل استان
                      سال تحصیلی 1402-1401</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۳/۲۱</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    2- <a href="#/nodes/nodes/show/71" target="_blank">قابل توجه همکاران مشمول بخشنامه بازنشستگی</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۱/۰۶</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    3- <a href="#/nodes/nodes/show/70" target="_blank">قابل توجه همکاران مشمول بخشنامه تبدیل وضعیت</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۱۲/۲۳</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    4- <a href="#/nodes/nodes/show/65" target="_blank">قابل توجه معلمین خرید خدمات آموزشی</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۱۱/۱۲</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    5- <a href="#/nodes/nodes/show/56" target="_blank">اطلاعیه درخصوص نتایج انتقال اضطرار و تجدیدنظر
                      داخل استان</a> <span class="max-date">۱۴۰۰/۰۶/۱۵</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    6- <a href="#/nodes/nodes/show/54" target="_blank">اطلاعیه اعلام نتایج و دستورالعمل انتقال اضطرار
                      نقل و انتقالات داخل استان سال تحصیلی 1401-1400</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۲۱</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    7- <a href="#/nodes/nodes/show/53" target="_blank">اطلاعیه مهم : زمان اعلام نتایج فرآیند نقل و
                      انتقالات داخل استان</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۱۸</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    8- <a href="#/nodes/nodes/show/52" target="_blank">عدم دسترسی مدارس</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۱۱</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    9- <a href="#/nodes/nodes/show/51" target="_blank">اطلاعیه شماره (2) درخصوص فرآیند بازنشستگی یا
                      استمرار خدمت سال 1400</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۴/۰۸</span>
                  </div>
                  <div class="col-xs-12 no-padding" style="font-size: 14px;">
                    10- <a href="#/nodes/nodes/show/50" target="_blank">اطلاعیه شماره 2 (درخصوص فرآیند نقل و
                      انتقالات)</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۳/۳۰</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </ArticleCards>
    </div>
  </div>
</template>
<style>
html {
  direction: rtl;
}
body {
  background-color: #e2e2e2;
}
a {
  color: #3276b1;
  text-decoration: none;
}
.max-date {
  background-color: cadetblue;
  padding: 1px 5px 0 5px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  color: white;
}
</style>
