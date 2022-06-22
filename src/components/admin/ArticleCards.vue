<template>
  <div class="tab-content wizard-content">
    <div id="stopclick" class="sm:w-full pr-4 pl-4 md:w-1/2 pr-4 pl-4 lg:w-1/2 pr-4 pl-4"
      style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0px 0px; height: 1100px; top: 0px; position: absolute;z-index: 1000;display: none;">
    </div>
    <article class="sm:w-full pr-4 pl-4 md:w-1/2 pr-4 pl-4 lg:w-full pr-4 pl-4 sortable-grid ui-sortable ">
      <div data-widget-deletebutton="false" data-widget-editbutton="false" id="wid-id-7938821"
        class="jarviswidget  jarviswidget-sortable" :class="HeaderColor" role="widget">
        <header role="heading">
          <div class="jarviswidget-ctrls" role="menu" v-if="showArchive">
            <router-link :to="Link" style="font-size: 15px;font-family: IRANSans !important;padding: 0 2px;"
              class="button-icon">
              آرشیو
            </router-link>
          </div>
          <h2>{{ TitleText }}</h2>
          <span class="jarviswidget-loader">
            <font-awesome-icon :icon="['fa', 'fa-refresh']" />
          </span>
        </header>
        <div role="content" style="padding-top: 0">
          <div class="widget-body">
            <div class="flex flex-wrap " id="content-wizard">
              <div class="sm:w-full pr-4 pl-4" id="bootstrap-wizard-2">
                <div class="form-bootstrapWizard">
                  <div class="clearfix"></div>
                </div>

                <div class="sm:w-full pr-4 pl-4 no-padding"
                  style="font-size: 14px;max-height: 240px;overflow: auto;height: 240px;padding-top: 5px !important">
                  <slot></slot>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    TitleText: String,
    HeaderColor: String,
    Archive: String,
    Link: {
      type: String,
      default: '',
    }
  },
  data: function () {
    return {
      showArchive: true
    }
  },
  methods: {
    toggleArchive() {
      if (this.Archive === 'true') {
        this.showArchive = true;
      } else {
        this.showArchive = false;
      }
    },
  },
  mounted() {
    this.toggleArchive();
  }
};
</script>

<style scoped>

.new-item {
  background-color: red;
  padding: 0px 5px;
  color: wheat;
  font-size: 9px;
  font-weight: bold;
  margin-right: 10px;
}

.edited-item {
  background-color: indianred;
  padding: 0px 5px;
  color: wheat;
  font-size: 9px;
  font-weight: bold;
  margin-right: 10px;
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
