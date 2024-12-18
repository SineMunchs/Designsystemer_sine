import ProductCard from './ProductCard.vue'

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    catListings: [
      {
        id: 1,
        title: 'Gryden klar Sphynx',
        price: '9000 kr',
        location: '8660 Vråde',
        image: 'src/assets/kat3.png'
      },
      {
        id: 2,
        title: 'Party Sphynx',
        price: '7000 kr',
        location: '8600 Baile',
        image: 'src/assets/kat2.png'
      }
    ]
  }
}

export const SingleCat = {
  args: {
    catListings: [
      {
        id: 1,
        title: 'Gryden klar Sphynx',
        price: '9000 kr',
        location: '8660 Vråde',
        image: 'src/assets/kat3.png'
      }
    ]
  }
}