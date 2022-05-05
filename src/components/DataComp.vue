<template>
  <div>
    <v-container fluid>
      <v-card>
        <v-card-title>
          <h1 class="display-3">Data</h1>
 <v-spacer></v-spacer>

<v-btn color="red" class="white--text">Delete all data</v-btn>

          <v-container fluid style="margin-top:2%">
            <v-row>


          <v-select
            v-model="e7"
            :items="SearchCounter"
            label="Counter"
            multiple
            chips
            dense
            prepend-icon="mdi-counter"
          ></v-select>

          <v-spacer></v-spacer>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"

          ></v-text-field>

            </v-row>
          </v-container>

       

        </v-card-title>
        <v-data-table :headers="headers" :items="desserts" :search="search">
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
const ListCounter = [
  ["Teller"],
  ["Customer Service"],
  ["Penarikan"],
  ["Pengaduan"],
];

export default {
  name: "DataComp",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "No Antrian",
          align: "start",
          value: "no",
        },
        { text: "Nama", value: "customer" },
        { text: "Counter", value: "counter" },
        { text: "Tanggal", value: "tgl"},
        { text: "Rating", value: "rating" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      desserts: [
        {
          no: "A001",
          customer: "Claudya",
          counter: ListCounter[0],
          tgl: "2022-01-01",
          rating: 4.0,
        },
        {
          no: "A002",
          customer: "Agung Kristiawan",
          counter: ListCounter[0],
          tgl: "2022-01-01",
          rating: 4.3,
        },
        {
          no: "A003",
          customer: "Tya brooke",
          counter: ListCounter[0],
          tgl: "2022-01-01",
          rating: 4.3,
        },
        {
          no: "B001",
          customer: "Sri Dwi Wijayanti",
          counter: ListCounter[1],
          tgl: "2022-01-01",
          rating: 3.9,
        },
        {
          no: "C001",
          customer: "Wahyu Eka Sedana",
          counter: ListCounter[2],
          tgl: "2022-01-01",
          rating: 0.0,
        },
        {
          no: "B002",
          customer: "Gusti Wintara",
          counter: ListCounter[1],
          tgl: "2022-01-01",
          rating: 0,
        },
        {
          no: "B003",
          customer: "Raja",
          counter: ListCounter[1],
          tgl: "2022-01-01",
          rating: 6.5,
        },
        {
          no: "C002",
          customer: "Rilly",
          counter: ListCounter[2],
          tgl: "2022-01-01",
          rating: 4.9,
        },
        {
          no: "D001",
          customer: "Indah",
          counter: ListCounter[3],
          tgl: "2022-01-01",
          rating: 7,
        },
      ],
      SearchCounter: ListCounter,
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
    };
  },
};
</script>