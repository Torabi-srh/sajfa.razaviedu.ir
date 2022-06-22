<template>
  <div class="tab-content wizard-content">
    <div id="stopclick" class="sm:w-full pr-4 pl-4 md:w-full pr-4 pl-4 lg:w-full pr-4 pl-4"
      style="background: rgba(0, 0, 0, 0.5) none repeat scroll 0px 0px; height: 1100px; top: 0px; position: absolute;z-index: 1000;display: none;">
    </div>
    <article class="sm:w-full pr-4 pl-4 md:w-full pr-4 pl-4 lg:w-full pr-4 pl-4 sortable-grid ui-sortable ">
      <div data-widget-deletebutton="false" data-widget-editbutton="false" id="wid-id-25918821"
        class="jarviswidget  jarviswidget-sortable jarviswidget-color-greenLight" role="widget">
        <header role="heading">
          <div class="jarviswidget-ctrls" role="menu">
          </div>
          <h2>آرشیو بخشنامه ها و دستورالعمل ها </h2>
          <span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>
        </header>
        <div role="content" style="padding-top: 0">
          <div class="widget-body">
            <div class="flex flex-wrap " id="content-wizard">
              <div class="sm:w-full pr-4 pl-4" id="bootstrap-wizard-2">
                <div class="form-bootstrapWizard">
                  <div class="clearfix"></div>
                </div>



                <div class="nodes">
                  No items found.

                  <!-- <div class="paging"></div> -->
                </div>
                <div class="sm:w-full pr-4 pl-4">
                  &nbsp;&nbsp;&nbsp;<br><br><br><br>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>


  <style>
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
        background-color: darkkhaki;
        padding: 2px 5px 0 5px;
        border-radius: 4px;
        font-size: 11px;
      }
    
  </style>