<template>
  <div>
    <AppBar />
    <OrderCards :orders="orders" />
    <v-container> </v-container>
  </div>
</template>

<script>
import axios from "axios";

import AppBar from "../components/common/AppBar.vue";
import OrderCards from "../components/dashboard/OrderCards.vue";
export default {
  name: "Dashboard",

  components: {
    AppBar,
    OrderCards,
  },
  data: () => ({
    orders: [],
  }),
  methods: {
    async getOrders() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(data);
        this.orders = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  beforeMount() {
    this.getOrders();
  },
};
</script>
