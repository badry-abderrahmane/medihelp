<template lang="html">
  <div class="card">
    <div class="card-body">
        <div class="row">
            <div class="col-12">
                <div class="d-flex flex-wrap">
                    <div>
                        <h3 class="card-title"><slot name="heading"></slot></h3>
                        <h6 class="card-subtitle"><slot name="subheading"></slot></h6> </div>
                </div>
            </div>
            <div class="col-12">
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
