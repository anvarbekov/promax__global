import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('admin01'),
      isAdmin: true,
    },
    {
      name: 'User',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('user01'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'White Stroller',
      slug: 'stroller-1',
      category: 'Stroller',
      image: '/images/stroller.png',
      price: 60,
      brand: 'Toy bola',
      rating: 3.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Eng sifatli bolalar (kolyaskasi) aravachasi',
    },
    {
      name: 'Bolalar velosipedi',
      slug: 'velokap-1',
      category: 'Bolalar velosipedi',
      image: '/images/velokap-3.jpg',
      price: 60,
      brand: 'Toy bola',
      rating: 3.5,
      numReviews: 3,
      countInStock: 20,
      description: 'Eng sifatli bolalar velosipedi',
    },
  ],
}

export default data
