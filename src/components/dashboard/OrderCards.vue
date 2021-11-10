<template>
  <div>
    <v-row width="200">
      <v-col v-for="n in orders" :key="n.id" class="d-flex child-flex" cols="3">
        <v-card class="mx-auto" max-width="344" style="margin-top: 20px">
          <v-card-text>
            <!-- <div>Pedido de Fernando</div> -->
            <p class="text-h4 text--primary">Pedido de Fernando</p>
            <p>Pedido feito as 23:12:32</p>
            <div class="text-h6 text--secondary">2 X Temakis de salmão</div>
          </v-card-text>
          <v-card-actions>
            <div class="text-h6 text--secondary">
              Rua carmine perrela, 428, Bairro Maua, São caetano do sul, SP
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    reveal: false,
  }),
  props: {
    orders: [],
  },
  methods: {},
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
