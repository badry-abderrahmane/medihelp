<template lang="html">
  <div class="col-md-4">
    <div v-bind:class="[ form.errors.get(name) ? 'has-danger' : '', 'form-group']">
      <label for="Clients" class="control-label mb-10">{{ label }}</label>
      <basic-select :options="options"
                    :selected-option="selectedOption"
                    placeholder="Choisir .."
                    v-model="selectedOption"
                    @select="">
      </basic-select>
      <div class="form-control-feedback" v-if="form.errors.has(name)" v-text="form.errors.get(name)"></div>
    </div>
  </div>
</template>

<script>
import { BasicSelect } from 'vue-search-select'

export default {
  components: {
    BasicSelect,
  },
  props:["name","label","form","options","selectedOption"],
  methods:{
    onSelectItem(item){
      this.parent.selectedOption = item
    }
  }
}
</script>

<style lang="css">
</style>
