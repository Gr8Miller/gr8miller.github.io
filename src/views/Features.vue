<template>
  <v-container fluid class="py-6 py-md-12 py-4 py-md-12 white--text"
               style="background: linear-gradient(to bottom, #1867c0, #5CBBF6); height: 100%">
    <v-app-bar absolute dark scroll-target="#playground-example" fixed flat color="primary">
      <v-app-bar-nav-icon class="ml-2">
        <router-link to="/">
          <v-img src="../assets/logo.png" alt="Anylink" height="48" width="48" />
        </router-link>
      </v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold display-1">
        Anylink
      </v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-container>
      <v-row class="d-flex align-center pt-8">
        <v-col class="col-12 col-md-7">
          <div class="mb-4 header display-4">
            <h1>
              <code>
                <router-link to="/">Anylink<sup>3.0</sup></router-link>
                Proxy
              </code>
            </h1>
          </div>
          <div class="font-weight-light title text--lighten-4 grey--text">
            <div class="mb-4 header">
              <h2>makes your shared highlights accessible to</h2>
              <h1 class="my-4"><span class="font-weight-black">ALL USERS</span></h1>
              <h2 class="font-weight-light">Even those who doesn't install Anylink Chrome extension</h2>
            </div>
          </div>
        </v-col>
        <v-col class="col-12 col-md-5">
          <v-card elevation="24">
            <v-img src="../assets/popup.jpg" style="width: 100%; height: 100%" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Features extends Vue {
  public test: string = 'abc';
}
</script>

<style scoped lang="less">
a:link, a:visited, a:hover, a:active {
  color: unset;
  text-decoration: underline;
}

.header {
  line-height: 1.2;
  display: inline-block;

  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
}
</style>
