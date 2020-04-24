<template>
  <span>
    
    <v-container fluid class="secondary my-5 ">
      <v-layout row>
        <v-flex xs6 >
          <v-card dark tile flat class="transparent">
            <v-flex  class="headline font-weight-black primary--text text-xs-center my-5"></v-flex>
            <v-card-text class="text-xs-center black--tex my-5 px-3"></v-card-text>
            <v-form class="px-5">
               <v-text-field class="" label="Nombre" v-model="title" prepend-icon="folder"></v-text-field>
               <v-text-field class="" label="Correo Electrónico" v-model="title" prepend-icon="folder"></v-text-field>
               <v-textarea label="Mensaje" v-model="content" prepend-icon="edit"></v-textarea>
                  <v-btn flat class="primary  mx-0 mt-5 " @click="submit" >Enviar</v-btn>
            </v-form>
          </v-card>
        </v-flex>
        <v-flex xs6 order-lg2>
          <v-card dark tile flat class="transparent text-xs-center my-5">
            <img src="../assets/contacto1.png" width="300">
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
   
 
       <v-footer  dark height="auto"    >
           <v-card class="flex" flat tile>
             <v-card-title class="secondary black--text">
               <v-card-text>
               <p class="text-md-center">Copyright &copy; 2020 Leéte Algo Todos los derechos reservados <br>
               Términos y condiciones | Políticas de tratamiento de datos personales  </p>
               </v-card-text>
               <v-spacer></v-spacer>
               <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
                 <v-icon size="24px">{{ icon }}</v-icon>
               </v-btn>
             </v-card-title>

             <v-card-actions class="blue-grey lighten-1 black--text justify-center">
               &copy;2020  — <strong>Leéte Algo</strong>
             </v-card-actions>
           </v-card>
         </v-footer>
   
</span>
  </template>

<script>
export default {
    name: 'Contacto'
};
</script>
<style scoped>

</style>
