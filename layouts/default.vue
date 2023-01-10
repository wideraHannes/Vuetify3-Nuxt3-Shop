<template>
  <v-app id="inspire">
    <v-app-bar
      dense
      v-if="intersecting"
      class="animate__animated animate__fadeIn animate__faster"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push('/')">Shopping</v-toolbar-title>
      <v-spacer />
      <cart-preview></cart-preview>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <!--  -->
    </v-navigation-drawer>

    <v-img width="100vw" src="/header.jpg">
      <v-row
        class="animate__animated animate__bounce"
        v-if="!intersecting"
        style="height: 100vh"
        justify="center"
        align="center"
      >
        <v-col cols="8" md="5">
          <div
            class="pa-10 text-white"
            style="
              background-color: rgba(158, 61, 246, 0.4);
              border-radius: 20px;
            "
          >
            <v-card-title>
              <h1>Shopping Nuxt3 Vuetify3</h1>
            </v-card-title>
            <v-card-text>
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                ad quos voluptas, velit.
              </h4>
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-img>
    <v-main v-intersect="onIntersect">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<script setup>
const drawer = ref(false)
const intersecting = ref(false)

function onIntersect(isIntersecting, entries, observer) {
  intersecting.value = isIntersecting
}
</script>
