const swal = require('sweetalert2')

const swalPlugin = {}

swalPlugin.install = function(Vue){
	Vue.prototype.$swal = swal
}

Vue.use(swalPlugin)
