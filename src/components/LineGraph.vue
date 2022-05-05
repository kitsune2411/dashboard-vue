<template>
  <v-container fluid class="pa-10">
    <v-row class="justify-center">
      <v-col cols="12" sm="8" md="10">
        <v-card class="mx-auto text-center" color="">
          <v-sheet color="rgba(0, 0, 0, 0)">
            <v-sparkline
              :fill="false"
              :gradient="['#42b3f4']"
              :line-width="1"
              :padding="8"
              :smooth="1 || false"
              :value="value"
              auto-draw
              show-labels
            >
              <!-- <template v-slot:label="item"> ${{ item.value }} M </template> -->
            </v-sparkline>
          </v-sheet>
        </v-card>
      </v-col>

      <v-col cols="12" sm="4" md="2">
        <v-card
          class="mx-auto"
          max-width="344"
          style="margin-bottom: 20px; "
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="text-overline mb-4">Pemberi Rating</div>
              <v-list-item-title class="text-h1 mb-1"> 5 </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    value: [1, 2, 5, 9, 5, 10, 3, 5, 7, 0.9, 1, 8, 2, 9, 2],
  }),
};
</script>