<template lang="html">
  <div>
    <div class="row mb-40">
      <div class="col-md-6"><br>
        <h6 class="text-success">#ID:</h6>
        <h5><span class="label label-default">{{ client.id }}</span></h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Nom:</h6>
        <h5>{{ client.name }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Type:</h6>
        <h5>{{ client.typeclient.value }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Telephone:</h6>
        <h5>{{ client.phone }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Fax:</h6>
        <h5>{{ client.fax }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Email:</h6>
        <h5>{{ client.email }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Adresse:</h6>
        <h5>{{ client.adress }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Secteur:</h6>
        <h5>{{ client.secteur }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["client"]
}
</script>

<style lang="css">
</style>
