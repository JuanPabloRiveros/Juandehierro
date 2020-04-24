<template>
    <v-container fluid class="indigo accent-1" grid-list-lg>
        <v-layout row wrap class="meal-plans">

        
            <v-flex class="indigo accent-1" xs12 sm12 md6>
            <br>
                <v-card>
                
                  <v-responsive class="text-xs-center indigo accent-1">
                  <br>
                      <img src="../assets/op5.png" width="180px">
                  </v-responsive>

                    <v-card-text >
                        <div class="text-xs-center">
                            <h3 class="headline mb-0">¿QUIENES SOMOS?</h3>
                            <div>Nos dedicamos cambiar tu forma de leer.</div>
                            <br>
                            <div class="text-xs-center " >
                                 <v-btn outline color="indigo" to="/somos">Leer más</v-btn>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')" data-cy="plansPaleoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>


            <v-flex class="indigo accent-1" xs12 sm12 md6>
            <br>
                <v-card>
           
                  <v-responsive class="text-xs-center indigo accent-1">
                  <br>
                      <img src="../assets/op3.png" width="180px">
                  </v-responsive>

                    <v-card-text>
                        <div class="text-xs-center">
                          
                            <h3 class="headline mb-0">A LEER</h3>
                            <div>Llego la hora ¡Vamos a Leer!</div>
                            <br>
                            <div class="text-xs-center">
                                 <v-btn outline color="indigo" to="/consejos">Leer más</v-btn>
                            </div>
                        </div>
                    </v-card-text>

                    <v-card-actions v-if="['menu'].includes($route.name)">
                        <v-btn outline block color="green" @click="showRecipes('paleo')" data-cy="plansPaleoBtn">
                            Select This Plan</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>




            
            

        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans',
    data() {
        return {
            drawer: false,
            items: [
                { title: 'Somos', route: '/somos' },
                { title: 'Consejos', route: '/consejos' },
               
            ]
        };
    }
};
</script>

<style scoped>
</style>
