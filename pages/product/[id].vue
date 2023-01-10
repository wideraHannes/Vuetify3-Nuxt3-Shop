<template>
  <v-container>
    <v-btn @click="$router.push('/')" class="mb-4" icon="mdi-arrow-left" />
    <v-card>
      <v-img :src="product.images[0]" height="200px" />
      <v-card-title class="text-center">
        {{ product.title }}
      </v-card-title>
      <v-card-text class="text-center">
        {{ product.description }}
      </v-card-text>
      <v-card-actions>
        <v-btn block color="primary" @click="add">Add to Cart</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
definePageMeta({
  layout: "clean",
})
const route = useRoute()
const { id } = route.params
const { findOne } = useProducts()
const product = findOne(parseInt(id))

const { cart, addToCart } = useCart()

function add() {
  addToCart(product)
}
</script>
