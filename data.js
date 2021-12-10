import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'ayyappan',
      email: 'ayyappan@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'john',
      email: 'john@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],

  products:[
    {
        name: 'Acer Laptop',
        category: 'Laptop',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHvcwUAQKDTwqSmSVAct1EQ4qoFGx4Lcf_ag&usqp=CAU',
        price: 67999,
        countInStock: 7,
        brand: 'Acer',
        rating: 4.3,
        numReviews: 120,
        description: 'acer Swift 5 Core i7 11th Gen Intel EVO - (16 GB/1 TB SSD/Windows 10 Home) SF514-55TA-72VG Thin and Light Laptop  (14 inch, Mist Green, 1.05 kg)'
      }
  ]
  
}