<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <cart-list />
          <hr />
          <v-card-title>Total Price: {{ cart.total_price }}$</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card height="50vh">
          <v-card-title>Payment</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "clean",
})
const { cart } = useCart()
</script>
