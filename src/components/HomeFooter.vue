<template>
<span>
 
       <v-footer  dark height="auto"    >
           <v-card class="flex" flat tile>
             <v-card-title class="indigo accent-1 black--text">
               <v-card-text>
               <p class="text-md-center">Copyright &copy; 2020 Leéte Algo Todos los derechos reservados <br>
               Términos y condiciones | Políticas de tratamiento de datos personales  </p>
               </v-card-text>
               <v-spacer></v-spacer>
               <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
                 <v-icon size="24px">{{ icon }}</v-icon>
               </v-btn>
             </v-card-title>

             <v-card-actions class="secondary black--text justify-center">
               &copy;2020  — <strong>Leéte Algo</strong>
             </v-card-actions>
           </v-card>
         </v-footer>
</span>
</template>

<script>
    export default {
        name: 'HomeFooter'
};
</script>

<style scoped>

</style>
