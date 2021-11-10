<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>{{ email }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col v-for="card in cards" :key="card" cols="8">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in orders">
                  <v-list-item :key="n.id">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      3 pokes de salmão
                      <v-list-item-title></v-list-item-title>

                      <v-list-item-subtitle>
                        <!-- {{ email }} -->
                        Fernando Barbosa
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n.id}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);
export default {
  data: () => ({
    email: user.email,
    timer: "",
    cards: ["Pedidos"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    orders: [],
  }),
  methods: {
    async getOrders() {
      try {
        const { data } = await axios({
          method: "get",
          url: "https://jsonplaceholder.typicode.com/posts",
        });
        var vm = this;
        vm.orders = data;
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  async beforeMount() {
    this.getOrders();
    this.timer = setInterval(this.getOrders, 300000);
  },
  beforeDestroy() {
    this.cancelAutoUpdate();
  },
};
</script>
