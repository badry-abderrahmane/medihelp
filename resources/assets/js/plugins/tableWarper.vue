<template lang="html">
  <div class="card">
    <div class="card-body">
        <h4 class="card-title"><slot name="heading"></slot></h4>
        <!-- <h6 class="card-subtitle">Affichage, Modification et Suppression.</h6> -->
        <div class="table-responsive m-t-30">
            <slot name="content"></slot>
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
