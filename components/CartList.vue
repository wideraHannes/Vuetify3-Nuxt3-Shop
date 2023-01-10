<template>
  <v-list class="pa-5">
    <v-list-item height="100px" v-for="(item, i) in cart.products" :key="i">
      <template v-slot:prepend>
        <v-avatar>
          <v-img cover :src="item.product.images[0]"></v-img>
        </v-avatar>
      </template>
      <v-list-item-title> {{ item.product.title }}</v-list-item-title>
      <template v-slot:append>
        <v-responsive class="mx-auto" max-width="100">
          <v-text-field
            class="ml-10"
            :value="item.count"
            hide-details
            single-line
            type="number"
          />
        </v-responsive>
        <v-btn
          @click="deleteItem(item)"
          variant="text"
          class="ml-5"
          icon="mdi-delete"
          color="red"
        />
      </template>
    </v-list-item>
    <slot></slot>
  </v-list>
</template>

<script setup>
const { cart, deleteFromCart } = useCart()
function deleteItem(product) {
  const id = product.product.id
  deleteFromCart(id)
}
</script>
