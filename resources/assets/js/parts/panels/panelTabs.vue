<template lang="html">
  <div class="card">
      <div class="card-body p-b-0">
          <h4 class="card-title"><slot name="heading1"></slot></h4>
          <h6 class="card-subtitle"><slot name="heading2"></slot></h6>
      </div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs customtab" role="tablist">
          <li class="nav-item" v-for="tab,key in tabs" >
            <a :class="key == 0 ? 'nav-link active':'nav-link'" data-toggle="tab" role="tab" :id="tab.id+'_tab_8'" :href="'#__'+tab.id">
              <span class="hidden-sm-up"><i class="ti-home"></i></span>
              <span class="hidden-xs-down">{{ tab.name }}</span>
            </a>
          </li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content m-b-30" style="min-height:300px !important;">
          <div v-for="tab,key in tabs" :id="'__'+tab.id" :class="key == 0 ? 'tab-pane active':'tab-pane p-20'" role="tabpanel">
            <slot :name="tab.id"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:["tabs"]
}
</script>

<style lang="css">
</style>
