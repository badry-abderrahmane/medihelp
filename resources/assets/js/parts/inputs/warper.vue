<template lang="html">
  <div :class="vclass">
    <div v-bind:class="[ form.errors.get(name) ? 'has-danger' : '', 'form-group']">
      <label for="Clients" class="control-label mb-10">{{ label }}</label>
      <slot name="input"></slot>
      <div class="form-control-feedback" v-if="form.errors.has(name)" v-text="form.errors.get(name)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props:["name","label","form","vclass"],
}
</script>

<style lang="css">
</style>
