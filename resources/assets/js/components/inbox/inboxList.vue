<template lang="html">
  <div class="col-xlg-2 col-lg-4 col-md-4">
      <div class="card-body inbox-panel"><a href="app-compose.html" class="btn btn-danger m-b-20 p-10 btn-block waves-effect waves-light">Nouveau Email</a>
          <ul class="list-group list-group-full">
              <!-- <li class="list-group-item active"> <a href="javascript:void(0)"><i class="mdi mdi-gmail"></i> Inbox </a><span class="badge badge-success ml-auto">6</span></li>
              <li class="list-group-item">
                  <a href="javascript:void(0)"> <i class="mdi mdi-star"></i> Ref Tickets </a>
              </li>
              <li class="list-group-item ">
                  <a href="javascript:void(0)"> <i class="mdi mdi-file-document-box"></i> Sent Mail </a>
              </li> -->
              <li v-show="folders.length == 0" class="list-group-item">
                <spinner-rect></spinner-rect>
              </li>
              <li v-show="folders.length > 0" :class="[ folder.name == $route.params.folder ? 'active' : '' ,'list-group-item']" v-for="folder in folders">
                  <a @click="$router.push({ path: `/inbox/get/${folder.name}`})"> <i class="mdi mdi-folder-google-drive"></i> {{ folder.name }} </a>
              </li>

          </ul>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    folders: function(){
      return this.$store.state.folders
    }
  },
  created(){
    console.log(this.folders.length);
  }
}
</script>
