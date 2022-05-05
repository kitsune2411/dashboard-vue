<template>
  <div>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Total</div>
                <v-list-item-title class="text-h1 mb-1"> 15 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Datang</div>
                <v-list-item-title class="text-h1 mb-1"> 9 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Terlayani</div>
                <v-list-item-title class="text-h1 mb-1"> 5 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Batal</div>
                <v-list-item-title class="text-h1 mb-1"> 5 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Manual</div>
                <v-list-item-title class="text-h1 mb-1"> 2 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">SpeedID</div>
                <v-list-item-title class="text-h1 mb-1">
                  5<sub class="text-h5">(25%)</sub>
                </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px;">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Pemberi Rating</div>
                <v-list-item-title class="text-h1 mb-1"> 5 </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-flex>

        <v-flex>
          <v-card class="mx-auto" max-width="344" style="margin-bottom: 20px; width:300px; height:191px">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">Rating</div>
                <v-list-item-title class="text-h1 mb-1"> </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
                 <v-card-text>
              <div class="text-center h1 mt-n2">
                <v-rating
                  color="yellow darken-3"
                  background-color="grey darken-1"
                  empty-icon="$ratingFull"
                  half-increments
                  hover
                  large
                  readonly
                  value=3.5
                ></v-rating>
              </div>
                
            </v-card-text>
              </v-list-item-content>
            </v-list-item>
           
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>

<style>
v-card {
  margin-bottom: 20px;
}
</style>

<script>
export default {
  name: "ReportCard",
};
</script>