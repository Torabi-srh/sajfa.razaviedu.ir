<template>
  <div id="shortcut" style="display: block;" v-if="show" v-click-outside="() => show = false">
    <ul>
      <li><a href="/user/users/switch_role/9" class="jarvismetro-tile big-cubes selected bg-color-blue"
          style="width: auto !important"><span class="iconbox"> <span style="padding: 6px 0 10px 0;">عنوان نقش :
            </span> <span style="font-size: 12px;">پرسنل</span> </span></a></li>
    </ul>
  </div>

  <aside id="left-panel" class="h-full min-h-screen">
    <!-- User info -->
    <div class="login-info">
      <span>
        <!-- User image size is adjusted inside CSS, it should stay as is -->
        <a @click="show = !show" id="show-shortcut">
          <img src="/theme/Panel/img/avatars/male.png" alt="me" class="online"> <span>
            سحر ترابی دشت بیاض </span>
          <font-awesome-icon :icon="['fa', 'angle-down']" />
        </a>

      </span>
    </div>
    <nav>
      <nav>
        <ul class="">
          <li class="active"><a href="/user/Users/dashboard" class="">
              <!-- <font-awesome-icon :icon="['fa', 'fa-caret-right']" class="activebef float-left" /> -->
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-dashboard']" />
              <span class="menu-item-parent font-bold text-sm">پيشخوان </span>
            </a></li>
          <li><a href="/personal/Personals/person_details" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-user']" />
              <span class="menu-item-parent font-bold text-sm">مشخصات پرسنلی</span>
            </a></li>
          <li><a href="/personal/Enteghalats/intro" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-exchange']" />
              <span class="menu-item-parent font-bold text-sm">درخواست انتقال</span>
            </a></li>
          <li><a href="/personal/Bazneshates/intro" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-flag-checkered']" />
              <span class="menu-item-parent font-bold text-sm">بازنشستگی یا
                استمرار</span>
            </a></li>
          <li><a href="/personal/Changesemats/intro" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-table']" /> <span class="menu-item-parent font-bold text-sm">درخواست
                تغییر
                سمت</span>
            </a></li>
          <li><a href="/user/Users/proccesses1" class="" target="_blank">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-tasks']" />
              <span class="menu-item-parent font-bold text-sm">ارزشیابی</span>
            </a></li>
          <li><a href="/taghdirname/Taghdirnames/list_for_persone" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-database']" /> <span class="menu-item-parent font-bold text-sm">تقدیرنامه ها</span>
            </a>
          </li>
          <li><a href="/user/Users/editpass" class="">
              <font-awesome-icon class="text-xl ml-3" :icon="['fa', 'fa-key']" /> <span class="menu-item-parent font-bold text-sm">تغییر رمز</span>
            </a></li>
        </ul>
      </nav>
    </nav>
    <span class="minifyme" data-action="minifyMenu">
      <font-awesome-icon :icon="['fa', 'fa-arrow-circle-left']" />
    </span>

  </aside>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
}
</script>