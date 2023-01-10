<template>
  <v-container>
    <v-row>
      <v-col v-for="{ id, title, price, rating, images } in products" cols="3">
        <v-card @click="$router.push(`/product/${id}`)">
          <v-img
            :src="images[0]"
            contain
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
          </v-img>
          <v-card-title> ${{ price }} </v-card-title>
          <v-card-title v-text="title"></v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { products } = useProducts()
console.log(products)
</script>
