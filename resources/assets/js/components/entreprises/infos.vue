<template lang="html">
  <div>
    <div class="row mb-40">
      <div class="col-md-6"><br>
        <h6 class="text-success">#ID:</h6>
        <h5><span class="label label-default">{{ entreprise.id }}</span></h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Nom:</h6>
        <h5>{{ entreprise.name }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Type:</h6>
        <h5>{{ entreprise.type }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Telephone:</h6>
        <h5>{{ entreprise.phone }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Fax:</h6>
        <h5>{{ entreprise.fax }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Email:</h6>
        <h5>{{ entreprise.email }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Adresse:</h6>
        <h5>{{ entreprise.adress }}</h5>
      </div>
      <div class="col-md-6"><br>
        <h6 class="text-success">Secteur:</h6>
        <h5>{{ entreprise.secteur }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["entreprise"]
}
</script>

<style lang="css">
</style>
