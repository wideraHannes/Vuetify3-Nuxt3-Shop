<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ props }">
        <div class="mr-10 pa-5">
          <v-badge
            v-bind="props"
            bordered
            color="primary"
            overlap
            :content="cart.count"
          >
            <v-btn color="primary" variant="outlined" icon="mdi-cart" />
          </v-badge>
        </div>
      </template>
      <v-card height="200px" class="d-flex align-center" v-if="!cart.count">
        <v-card-title class="align-center text-primary"
          >No Products in Cart</v-card-title
        >
      </v-card>
      <cart-list v-else :cart="cart">
        <v-btn block color="primary" @click="$router.push('/checkout')">
          Checkout
        </v-btn>
      </cart-list>
    </v-menu>
  </div>
</template>

<script setup>
const { cart } = useCart()
</script>
