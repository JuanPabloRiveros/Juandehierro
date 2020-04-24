    <template>
      <span>
      <v-container>
       <br><br>
         <v-layout justify-center>
             <v-flex  class="success headline black--text text-xs-center xs12 lg8">QUIENES SOMOS</v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs6 order-lg2>
             <v-card dark tile flat class="transparent">
               <v-card-text class="text-xs-center black--text xs12 lg2 ">Somos una empresa conformada por cinco personas profesionales en ingeniera multimedia, destacando y haciendo valer la importancia que ha creado el desarrollo social de las tecnologias en la vida cotidiana del ser humano; coincidimos en la importancia de cumplir roles que dejen huella dentro de la comunidad, y por eso empleamos nuestros conocimientos en pro del bienestar común</v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs6>
             <v-card dark tile flat class="transparent text-xs-center my-5">
               <img src="../assets/mision.png" width="300">
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>


<v-container>
         <v-layout justify-center>
             <v-flex  class="success headline black--text text-xs-center xs12 lg8">NUESTRA MISION</v-flex>
         </v-layout>
         <v-layout row>
           <v-flex xs6 order-lg2>
             <v-card dark tile flat class="transparent">
               <v-card-text class="text-xs-center black--text xs12 lg2 ">Nuestra principal mision es cambiar la forma de pensar que el habito de la lectura es algo aburrido, para ello contamos con una nueva estretagia de lectura, logrando asi que el lector pueda tomar decisiones que lo involucren en el paso a paso del cuento.</v-card-text>
             </v-card>
           </v-flex>
           <v-flex xs6>
             <v-card dark tile flat class="transparent text-xs-center my-5">
               <img src="../assets/mision.png" width="300">
             </v-card>
           </v-flex>
         </v-layout>
       </v-container>



     



       <v-container >
         <v-layout justify-center>
             <v-flex  class="success headline black--text text-xs-center xs12 lg8">NUESTRO EQUIPO DE TRABAJO</v-flex>
         </v-layout>
       </v-container>
       <v-container grid-list-xl >
           <v-layout row wrap justify-center >
               <v-flex xs12 sm12 md3 class="">

                       <v-responsive>
                         <div class="text-xs-center ">
                           <img id="img" src="../assets/juanpa.png" height="200px" width="200">
                         </div>
                       </v-responsive>


                       <v-card-text>
                           <div class="body-2 text-xs-center">
                            <div>Juan Pablo Riveros</div>
                           </div>
                       </v-card-text>

               </v-flex>

               <v-flex xs12 sm12 md3>
                   <v-responsive>
                       <div class="text-xs-center">
                          <img id="img" src="../assets/juan.png" height="200px" width="200">
                       </div>
                   </v-responsive>

                       <v-card-text>
                           <div class="body-2 text-xs-center">
                               <div>Juan Ramirez</div>
                           </div>
                       </v-card-text>
               </v-flex>

               <v-flex xs12 sm12 md3>
                  <v-responsive>
                       <div class="text-xs-center">
                          <img id="img" src="../assets/santi.png" height="200px" width="200">
                         </div>
                  </v-responsive>

                       <v-card-text>
                           <div class="body-2 text-xs-center">
                               <div>Santiago Toro</div>
                           </div>
                       </v-card-text>
               </v-flex>


           </v-layout>
       </v-container>

       <v-container grid-list-xl >
           <v-layout row wrap justify-center >
               <v-flex xs12 sm12 md3 class="">

                       <v-responsive>
                         <div class="text-xs-center ">
                           <img id="img" src="../assets/camila.png" height="200px" width="200">
                         </div>
                       </v-responsive>


                       <v-card-text>
                           <div class="body-2 text-xs-center">
                            <div>Camila Rodriguez </div>
                           </div>
                       </v-card-text>

               </v-flex>

               <v-flex xs12 sm12 md3>
                   <v-responsive>
                       <div class="text-xs-center">
                          <img id="img" src="../assets/aleja.png" height="200px" width="200">
                       </div>
                   </v-responsive>

                       <v-card-text>
                           <div class="body-2 text-xs-center">
                               <div>Alejandra Murillo</div>
                           </div>
                       </v-card-text>
               </v-flex>

              


           </v-layout>
       </v-container>

      
       
     
       <v-footer  dark height="auto"    >
           <v-card class="flex" flat tile>
             <v-card-title class="green lighten-3 black--text">
               <v-card-text>
               <p class="text-md-center">Copyright &copy; 2020 Leéte Algo Todos los derechos reservados <br>
               Términos y condiciones | Políticas de tratamiento de datos personales  </p>
               </v-card-text>
               <v-spacer></v-spacer>
               <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon >
                 <v-icon size="24px">{{ icon }}</v-icon>
               </v-btn>
             </v-card-title>

             <v-card-actions class="success black--text justify-center">
               &copy;2020  — <strong>Leéte Algo</strong>
             </v-card-actions>
           </v-card>
         </v-footer>
      </span>
    </template>
<script>
export default {
    name: 'Somos'
};
</script>
<style scoped>


#img{
  -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 300px;
    border: none;
}
</style>
