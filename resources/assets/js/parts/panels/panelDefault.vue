<template lang="html">
  <div class="panel panel-default border-panel card-view">
		<div class="panel-heading">
			<div class="pull-left">
				<h6 class="panel-title"><slot name="heading"></slot></h6>
			</div>
			<div class="clearfix"></div>
		</div>
		<div class="panel-wrapper collapse in">
			<div class="panel-body">
				<slot name="body"></slot>
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
