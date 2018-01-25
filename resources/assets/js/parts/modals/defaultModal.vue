<template lang="html">
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h4 class="modal-title" id="exampleModalLabel1"><slot name="heading"></slot></h4>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                  <slot name="body"></slot>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
