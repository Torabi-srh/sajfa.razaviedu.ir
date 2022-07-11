<script setup>
import ArticleCards from "@/components/admin/ArticleCards.vue";
</script> 

<template>
    <section class="" id="widget-grid">
        <div class="grid grid-cols-2 flex flex-row flex-wrap flex-grow mt-2">
            <div class="sm:w-full pr-4 pl-4 ">
                <ul id="sparks" style="text-align: right; margin-right: 15px; margin-top: 0px">
                    <li class="sparks-info">
                        <div class="text-xs font-light">
                            تعداد دفعات ورود شما :
                            <strong class="txt-color-greenDark font-bold"> 112 </strong>
                        </div>
                    </li>
                    <li class="sparks-info" style="border-right: 1px solid cadetblue">
                        <div class="text-xs font-light">
                            آخرین ورود شما :
                            <strong class="txt-color-purple font-bold"> ۱۴۰۱/۰۳/۳۰ - ۱۹:۳۸ </strong>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sm:w-full pr-4 pl-4"></div>
            <ArticleCards TitleText=" نقش های شما " HeaderColor="jarviswidget-color-redLight " Archive="false">

                <table class="w-full max-w-full mb-4 table-striped table-bordered table-hover" style="font-size: 13px;">
                    <thead>
                        <tr>
                            <th class="font-bold text-xs">ردیف</th>
                            <th class="font-bold text-xs">عنوان نقش</th>
                            <th class="font-bold text-xs">انتخاب</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1</td>
                            <td style="text-align:right;">
                                پرسنل </td>
                            <td>
                                <strong style="color: darkcyan;">نقش فعال</strong>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </ArticleCards>
            <ArticleCards TitleText=" اطلاعیه های مرتبط با نقش پرسنل" Link="/archive"
                HeaderColor="jarviswidget-color-pink " Archive="true">
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    1- <a href="/nodes/nodes/show/83" target="_blank">اطلاعیه مهم : قابل توجه متقاضیان نقل و انتقالات
                        داخل استان</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۳/۲۷</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    2- <a href="/nodes/nodes/show/79" target="_blank">اطلاعیه در خصوص دریافت تقدیرنامه</a> <span
                        class="max-date">۱۴۰۱/۰۳/۰۹</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    3- <a href="/nodes/nodes/show/78" target="_blank"> دستورالعمل نقل و انتقالات داخل استان سال تحصیلی
                        1402- 1401</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۳/۰۱</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    4- <a href="/nodes/nodes/show/76" target="_blank">اطلاعیه شماره (3) ویژه همکاران مشمول بخشنامه
                        بازنشستگی / استمرار</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۲/۱۰</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    5- <a href="/nodes/nodes/show/72" target="_blank">اطلاعیه شماره (2) ویژه همکاران مشمول بخشنامه
                        بازنشستگی / استمرار</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۲/۰۵</span>
                </div>
            </ArticleCards>

            <ArticleCards TitleText=" بخشنامه ها و دستورالعمل ها" Link="/archive1"
                HeaderColor="jarviswidget-color-orange " Archive="true">

            </ArticleCards>

            <ArticleCards TitleText="اطلاعیه های عمومی" Link="/archive2" HeaderColor="jarviswidget-color-magenta "
                Archive="true">
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    1- <a href="/nodes/nodes/show/71" target="_blank">قابل توجه همکاران مشمول بخشنامه بازنشستگی</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۱/۰۱/۰۶</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    2- <a href="/nodes/nodes/show/70" target="_blank">قابل توجه همکاران مشمول بخشنامه تبدیل وضعیت</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۱۲/۲۳</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    3- <a href="/nodes/nodes/show/65" target="_blank">قابل توجه معلمین خرید خدمات آموزشی</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۱۱/۱۲</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    4- <a href="/nodes/nodes/show/56" target="_blank">اطلاعیه درخصوص نتایج انتقال اضطرار و تجدیدنظر
                        داخل استان</a> <span class="max-date">۱۴۰۰/۰۶/۱۵</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    5- <a href="/nodes/nodes/show/54" target="_blank">اطلاعیه اعلام نتایج و دستورالعمل انتقال اضطرار
                        نقل و انتقالات داخل استان سال تحصیلی 1401-1400</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۲۱</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    6- <a href="/nodes/nodes/show/53" target="_blank">اطلاعیه مهم : زمان اعلام نتایج فرآیند نقل و
                        انتقالات داخل استان</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۱۸</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    7- <a href="/nodes/nodes/show/52" target="_blank">عدم دسترسی مدارس</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۵/۱۱</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    8- <a href="/nodes/nodes/show/51" target="_blank">اطلاعیه شماره (2) درخصوص فرآیند بازنشستگی یا
                        استمرار خدمت سال 1400</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۴/۰۸</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    9- <a href="/nodes/nodes/show/50" target="_blank">اطلاعیه شماره 2 (درخصوص فرآیند نقل و
                        انتقالات)</a> <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۳/۳۰</span>
                </div>
                <div class="sm:w-full pr-4 pl-4 no-padding" style="font-size: 14px;">
                    10- <a href="/nodes/nodes/show/49" target="_blank">اعلام نتایج اولیه فرآیند تغییرسمت سال 1400</a>
                    <!-- <span class="edited-item">ویرایش شده</span> -->
                    <span class="max-date">۱۴۰۰/۰۳/۱۲</span>
                </div>

            </ArticleCards>

            <div class="sm:w-full pr-4 pl-4 col-span-2">
                <div class="sm:w-full pr-4 pl-4" style="
            border: 1px solid;
            padding: 10px;
            margin: 10px;
            width: 99%;
            border-radius: 10px;
            text-align: center;
            font-size: 18px;
            background-color: chartreuse;
            margin-bottom: 70px;
          ">
                    <div>
                        کانال اطلاع رسانی سامانه سجفا (ویژه کارکنان) در پیام رسان سروش :
                        <span>
                            <a style="color: black" target="_blank"
                                href="https://splus.ir/sajfa_general">https://splus.ir/sajfa_general
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>