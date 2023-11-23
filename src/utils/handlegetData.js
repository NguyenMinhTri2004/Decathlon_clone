// const getAllProducts = () => ProductArray

const getProductByType = (type , ProductArray) => ProductArray?.filter(e => e?.category?.name === type)

const getProductBySlug = (slug , ProductArray) => ProductArray.find(e => e.slug === slug)

const getProductSimilar = (name, ProductArray) => ProductArray?.filter(e => e.slug.includes(name))

const getProductsHandle = (count, ProductArray) => {
    const max = ProductArray.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return ProductArray.slice(start, start + count)
}

const getCartItemsDetail = (cartItems) => {
     let res  = []
     if(cartItems.length > 0) {
         cartItems.forEach((e) =>{
            res.push({
                ...e,
                product : getProductBySlug(e.slug)
            })
         })
     }

     return res
}

export {
    getProductByType,
    getProductBySlug,
    getProductsHandle,
    getCartItemsDetail,
    getProductSimilar
}