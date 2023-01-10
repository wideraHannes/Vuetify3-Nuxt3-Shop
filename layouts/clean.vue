<template>
  <v-app id="inspire">
    <v-app-bar dense>
      <v-toolbar-title @click="$router.push('/')">Shopping</v-toolbar-title>
      <v-spacer />
      <cart-preview></cart-preview>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>
  </v-app>
</template>
