<template lang="html">
  <div class="col-md-4">
    <div v-bind:class="[ value.errors.get(name) ? 'has-danger' : '', 'form-group']">
      <label :for="name" class="control-label mb-10">{{ label }}</label>
      <input type="text" :id="name" :name="name"
                          class="form-control"
                          v-model="value[name]" />
      <div class="form-control-feedback" v-if="value.errors.has(name)" v-text="value.errors.get(name)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:["value","name","label"],
}
</script>

<style lang="css">
</style>
