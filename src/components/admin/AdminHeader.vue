<template>
  <header id="header">

    <div id="logo-group1" style="width:20px !important;">
      <span id="logo"> </span>
    </div>
    <div style="text-align: center; font-weight: 700; font-size: 14px; width:75%; " id="logo-group">
      <span style="font-size: 14px;width: 100%; color: #8f0e17" id="activity">همکار محترم، سحر ترابی دشت بیاض (30379924)
        <!--            <span style="font-size: 14px;color: blueviolet;">، به سامانه مدیریت و برنامه ریزی نیروی انسانی (مبنا)  خوش آمديد. </span>-->
        <span class="font-bold" style="font-size: 14px;color: blueviolet;">، به سامانه جامع فرآیندهای اداری آموزشی
          (سجفا) خوش آمدید.
        </span>

      </span>

    </div>


    <!-- pulled right: nav area -->
    <div class="pull-right">

      <!-- collapse menu button -->
      <div id="hide-menu" class="btn-header pull-right">
        <span> <a href="javascript:void(0);" data-action="toggleMenu" title="نمایش منوها">
            <font-awesome-icon :icon="['fa', 'reorder']" />
          </a> </span>
      </div>
      <!-- end collapse menu -->


      <!-- logout button -->
      <div id="logout" class="btn-header transparent pull-right">
        <span> <a href="/logout" title="خروج" style="color: red;">
            <font-awesome-icon :icon="['fa', 'sign-out']" /> خروج
          </a>
        </span>
      </div>
      <!-- end logout button -->

      <!-- fullscreen button -->
      <div id="fullscreen" class="btn-header transparent pull-right">
        <span> <a href="javascript:void(0);" data-action="launchFullscreen" title="تمام صفحه">
            <font-awesome-icon :icon="['fa', 'arrows-alt']"
              style="-ms-transform: rotate(45deg); transform: rotate(45deg);" />
          </a> </span>
      </div>
      <!-- end fullscreen button -->

    </div>
    <!-- end pulled right: nav area -->
  </header>
</template>

<style scoped>
</style>