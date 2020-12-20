<template>
  <v-container>
    <v-row id="nav">
      <router-link to="/">Home</router-link>
      <v-divider vertical class="mx-4" />
      <router-link to="/about">About</router-link>
      <v-divider vertical class="mx-4" />
      <router-link to="/features">Features</router-link>
    </v-row>
    <v-main>
      <router-view />
    </v-main>
  </v-container>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
