<template lang="html">
  <div class="card card-outline-danger">
      <div class="card-header">
          <h4 class="m-b-0 text-white"><slot name="heading"></slot></h4></div>
      <div class="card-body">
          <slot name="body"></slot>
      </div>
  </div>
  <!-- <div class="panel panel-danger card-view">
		<div class="panel-heading">
			<div class="pull-left">
        <slot name="heading"></slot>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="panel-wrapper collapse in">
			<div class="panel-body">
				<slot name="body"></slot>
			</div>
		</div>
	</div> -->
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
