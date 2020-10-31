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
          <div class="header mb-3 display-2">
            Safe and Reliable<br>
            Web Marker!
          </div>
          <div class="font-weight-light mb-3 title text--lighten-4 grey--text">
            <div class="v-markdown">
              <p>
                Anylink is a Chrome browser extension allowing you to
                linkify/<span style="background-color: #ffe168"
                              class="black--text">highlight any text in any web page</span>,
                and then share anywhere.<br>
                All tasks are done absolute locally! All your data are kept locally.
                None of them are sent to any other server!
              </p>
              <p>
                <router-link to="/features"><code>Anylink Proxy</code></router-link>
                makes your shared highlights accessible to All users.
              </p>
            </div>
          </div>
          <div>
            <v-btn outlined large class="ma-2 white--text" target="_blank"
                   href="https://chrome.google.com/webstore/detail/mpflpgaobfpjcpefkdnpalfdodifkkgc">
              <img src="../assets/webstore.png" class="mr-2" alt="Chrome Web Store" height="32" width="32">
              Chrome Web Store
            </v-btn>
            <v-btn outlined large class="ma-2 white--text" target="_blank"
                   href="http://www.anyl.ink/mpflpgaobfpjcpef/anylink-v3.0.0-production.zip">
              Download
              <v-icon right dark>mdi-cloud-download</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col class="col-12 col-md-5">
          <v-card elevation="24">
            <v-img src="../assets/home.gif" style="width: 100%; height: 100%" />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {
}
</script>
<style scoped lang="less">
.header {
  line-height: 1.2;
  display: inline-block;

  h1 {
    font-size: 3rem;
    font-weight: 300;
  }
}
</style>

