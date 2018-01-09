<template lang="html">
  <div class="input-group">
    <input type="text" id="input_msg_send_chatapp" name="send-msg" class="input-msg-send form-control" placeholder="Type something">
    <div class="input-group-btn emojis">
      <div class="dropup">
        <button type="button" class="btn  btn-default  dropdown-toggle" data-toggle="dropdown"><i class="zmdi zmdi-mood"></i></button>
        <ul class="dropdown-menu dropdown-menu-right">
          <li><a href="">Action</a></li>
          <li><a href="">Another action</a></li>
          <li class="divider"></li>
          <li><a href="">Separated link</a></li>
        </ul>
      </div>
    </div>
    <div class="input-group-btn attachment">
      <div class="fileupload btn  btn-default"><i class="zmdi zmdi-attachment-alt"></i>
        <input type="file" class="upload">
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
