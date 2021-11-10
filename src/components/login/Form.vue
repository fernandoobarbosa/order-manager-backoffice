<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="10"
      :rules="nameRules"
      label="Senha"
      required
    ></v-text-field>
    <br />
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submit">
      Logar
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">Limpar </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    password: "",
    nameRules: [(v) => !!v || "Senha é obrigatória."],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail é obrigatório. ",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido.",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    submit() {
      if (this.$refs.form.validate())
        this.$emit("login", this.email, this.password);
    },
  },
};
</script>
