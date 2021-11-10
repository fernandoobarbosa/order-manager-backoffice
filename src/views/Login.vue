<template>
  <v-container fluid style="width: 50%; margin-top: 100px">
    <Form @login="login" />
  </v-container>
</template>

<script>
import Form from "../components/login/Form.vue";
import api from "../services/api";

export default {
  name: "Login",

  components: {
    Form,
  },
  methods: {
    async login(email, password) {
      const newLogin = {
        email: email,
        password: password,
      };

      try {
        const { data } = await api.post("/login", newLogin);
        localStorage.setItem("jwt", data.token);

        if (data.user.isAdmin) {
          this.$router.push("/dashboard");
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.user));
        }
      } catch (err) {
        this.$store.commit("logout");
        this.loginError = true;
        console.log(err);
      }
    },
  },
};
</script>
