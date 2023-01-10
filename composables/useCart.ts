import { reactive, ref } from "vue"

const cart = reactive({
  count: 0,
  total_price: 0,
  products: {},
})

export default () => {
  function addToCart(product) {
    const { id } = product
    cart.count++
    cart.total_price += product.price
    if (!cart.products[id]) {
      cart.products[id] = {
        product: product,
        count: 1,
      }
    } else {
      cart.products[id].count++
    }
  }

  function deleteFromCart(id) {
    const productCount = cart.products[id].count
    cart.count -= productCount
    cart.total_price -= productCount * cart.products[id].product.price
    delete cart.products[id]
  }

  return { cart, addToCart, deleteFromCart }
}
