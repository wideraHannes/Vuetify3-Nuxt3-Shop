import PRODUCT_DATA from "~~/products"
export default () => {
  const products = PRODUCT_DATA.products
  const findOne = (id) => products.find((product) => product.id === id)
  return { products, findOne }
}
