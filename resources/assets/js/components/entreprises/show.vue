<template lang="html">
  <div>
    <div class="col-md-3">
      <part-panel-profile title="Entreprise" :name="entreprise.name">
        <div slot="count1">
          <span class="counts block head-font"><span class="counter-anim">11</span></span>
          <span class="counts-text block">Contacts</span>
        </div>
        <div slot="count2">
          <span class="counts block head-font"><span class="counter-anim">22</span></span>
          <span class="counts-text block">Appels</span>
        </div>
        <div slot="links">
          <br><br>
            <div class="col-md-8 col-md-offset-2">
              <button class="btn btn-warning btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/entreprises/edit/`+entreprise.id })">
                 <span class="btn-label"><i class="fa fa-edit"></i> </span>
                 <span class="btn-text">Modifier entreprise</span>
              </button>
              <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/contacts/add` })">
                 <span class="btn-label"><i class="fa fa-plus"></i> </span>
                 <span class="btn-text">Nouveau contact</span>
              </button>
              <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/adresses/add` })">
                 <span class="btn-label"><i class="fa fa-plus"></i> </span>
                 <span class="btn-text">Nouvelle adresse</span>
              </button>
              <button class="btn btn-success btn-block btn-lable-wrap left-label" @click="$router.push({ path: `/incidents/add/` })">
                 <span class="btn-label"><i class="fa fa-plus"></i> </span>
                 <span class="btn-text">Nouvelle incident</span>
              </button>
            </div>
        </div>
      </part-panel-profile>
    </div>
    <div class="col-md-9">
      <part-panel-tabs :tabs="tabs">
        <div slot="1" class="text-center"><br>
          <infos-entreprise :entreprise="entreprise"></infos-entreprise>
        </div>
        <div slot="2">
          <infos-entreprise-contacts :contacts="entreprise.contacts"></infos-entreprise-contacts>
        </div>
        <div slot="3">
          <infos-entreprise-adresses :adresses="entreprise.adresses"></infos-entreprise-adresses>
        </div>
        <div slot="4">
          <infos-entreprise-incidents :incidents="entreprise.incidents"></infos-entreprise-incidents>
        </div>
      </part-panel-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tabs: [{id: '1', name: 'Informations'},{id: '2', name: 'Contacts'},{id: '3', name: 'Adresses'},{id: '4', name: 'Incidents'}],
      entreprise:
        {
          id:1, name:'Mega Trans',
          type:'Client', phone:'0622321456',
          fax:'0522332211', email:'test@email.com',
          adress:'45 Bd Chammal Tanger,Maroc.',
          secteur:'Transport',
          adresses:[{ id:1, libele:'Service Achat', value:'44 Malcom X', phone:'0522639874' },{ id:2, libele:'Direction',value:'22 Malcom S', phone:'0522639874' }],
          contacts:[{ id:1, name:'Malcom', phone:'05558884441', civilite:'H', adress:'32 BD Malakoun Casablanca', email:'test@email.com', fonction:'Responsable achat' },{ id:2, name:'Rafik', phone:'0555654541', civilite:'F', adress:'32 BD Rafikoun Agadir', email:'test@email.com', fonction:'Responsable achat' }],
          incidents:[
            { id:1, date:'01-01-2018', sujet:'Perte carburant', message:'Vérifier etat générale de flotte', action:'Contacter service technique', etat:'En cours', communication:[ { type: 'Appel téléphonique', date:'22-12-2011', duree:'2min50s', synthese:'Prise d\'informations'}]},
            { id:2, date:'10-11-2018', sujet:'Perte carburant', message:'Vérifier etat générale de flotte', action:'Contacter service technique', etat:'En cours', communication:[ { type: 'Appel téléphonique', date:'22-12-2011', duree:'2min50s', synthese:'Prise d\'informations'}]}
          ]
        },

    }
  },

  computed:{
    // entrepriseId: function(){
    //   return this.$route.params.id
    // },
    // countProduits: function(){
    //   if (this.entreprise.produits) {
    //     return this.entreprise.produits.length
    //   }else{
    //     return 0
    //   }
    // },
    // countBondecommandes: function(){
    //   if (this.entreprise.bondecommandes) {
    //     return this.entreprise.bondecommandes.length
    //   }else{
    //     return 0
    //   }
    // },
  },
  created(){
    Vue.nextTick(function () {
          Event.$emit('init-datatable', 'tableAdd');
        })
    // axios.get('/entreprises/'+this.entrepriseId)
    //   .then(response => {
    //     this.entreprise = response.data;
    //     Vue.nextTick(function () {
    //       Event.$emit('init-datatable', 'tableAdd');
    //     })
    // });
  }
}
</script>

<style lang="css">
</style>
