<template lang="html">
    <div class="row" slot="body">
      <div class="col-md-12">
    		<div class="panel panel-default border-panel card-view pa-0">
    			<div class="panel-wrapper collapse in">
    				<div class="panel-body pa-0">
    					<div class="chat-cmplt-wrap chat-for-widgets-1">
    						<div class="chat-box-wrap">
    							<div>
    								<form role="search" class="chat-search">
    									<div class="input-group">
    										<input id="example-input1-group21" name="example-input1-group2" class="form-control" placeholder="Search" type="text">
    										<span class="input-group-btn">
    										<button type="button" class="btn  btn-default"><i class="zmdi zmdi-search"></i></button>
    										</span>
    									</div>
    								</form>
    								<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: auto; height: 543px;"><div class="chatapp-nicescroll-bar" style="overflow: hidden; width: auto; height: 543px;">
    									<ul class="chat-list-wrap">
    										<slot name="list"/>
    									</ul>
    								</div><div class="slimScrollBar" style="background: rgb(135, 135, 135); width: 4px; position: absolute; top: 15px; opacity: 0.4; display: none; border-radius: 0px; z-index: 99; right: 1px; height: 528.403px;"></div><div class="slimScrollRail" style="width: 4px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
    							</div>
    						</div>
    						<div class="recent-chat-box-wrap">
    							<slot name="content" />
    						</div>
    					</div>
    				</div>
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
