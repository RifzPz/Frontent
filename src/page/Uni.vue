<template>
    <v-container>
      <v-card>
        <v-card-title class="headline">University Data</v-card-title>
        <v-card-text>
          <v-data-table
            :headers="keyData"
            :items="universitydata"
            class="elevation-1"
            :items-per-page="10"
            :search="search"
            height="400"
            :fixed-header="true"
          >
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search"
                class="mx-4"
              ></v-text-field>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const universitydata = ref([]);
      const keyData = ref([]);
      const search = ref('');
  
      onMounted(async () => {
        try {
          const UniversityRes = await axios.get('http://localhost:3000/university/api');
          universitydata.value = UniversityRes.data;
          if (universitydata.value.length > 0) {
            keyData.value = Object.keys(universitydata.value[0]).map(key => ({
              title: key.charAt(0).toUpperCase() + key.slice(1), 
              value: key,
            }));
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
  
      return {
        universitydata,
        keyData,
        search,
      };
    },
  };
  </script>
  
  <style>
  .headline {
    font-size: 24px;
    font-weight: bold;
  }
  .mx-4 {
    margin-left: 16px;
    margin-right: 16px;
  }
  .v-data-table {
    overflow-x: auto;
  }
  </style>
  