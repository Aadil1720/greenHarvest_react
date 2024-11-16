const products = [
    {
        id: 1,
        imgSrc: 'images/product-1.png',
        name: 'Fresh Orange',
        price: '$12.99 - $15.99',
        numericPrice: [12.99, 15.99],
        rating: 4.5,
        description: 'Juicy, fresh oranges packed with Vitamin C and antioxidants. Perfect for a healthy snack.',
        seller: 'Sunny Farms',
        origin: 'Nagpur, India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 47, protein: '0.9g', fat: '0.1g', carbs: '11.8g', fiber: '2.4g', sugars: '9.4g' },
    },
    {
        id: 2,
        imgSrc: 'images/product-2.png',
        name: 'Fresh Onion',
        price: '$25.99 - $33.99',
        numericPrice: [25.99, 33.99],
        rating: 4.5,
        description: 'Organic onions with a mild, sweet taste. Perfect for salads and cooking.',
        seller: 'Green Valley Farms',
        origin: 'UP, India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 40, protein: '1.1g', fat: '0.1g', carbs: '9.3g', fiber: '1.7g', sugars: '4.2g' },
    },
    {
        id: 3,
        imgSrc: 'images/product-4.png',
        name: 'Fresh Cabbage',
        price: '$15.99 - $22.99',
        numericPrice: [15.99, 22.99],
        rating: 4.5,
        description: 'Crunchy, fresh cabbage with a slightly sweet taste. Perfect for coleslaw and stir-fries.',
        seller: 'Nature’s Best',
        origin: 'Florida, USA',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 25, protein: '1.3g', fat: '0.1g', carbs: '5.8g', fiber: '2.5g', sugars: '3.2g' },
    },
    {
        id: 4,
        imgSrc: 'images/product-8.png',
        name: 'Fresh Lemon',
        price: '$14.99 - $19.99',
        numericPrice: [14.99, 19.99],
        rating: 4.5,
        description: 'Fresh, zesty lemons rich in Vitamin C. Ideal for beverages and flavoring.',
        seller: 'Citrus Grove',
        origin: 'Mexico',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 29, protein: '1.1g', fat: '0.3g', carbs: '9.3g', fiber: '2.8g', sugars: '2.5g' },
    },
    {
        id: 5,
        imgSrc: 'images/product-9.png',
        name: 'Fresh Apple',
        price: '$10.99 - $14.99',
        numericPrice: [10.99, 14.99],
        rating: 4.5,
        description: 'Crisp and sweet apples, packed with fiber and antioxidants. Great for snacking.',
        seller: 'Mountain Orchard',
        origin: 'kashmir India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 52, protein: '0.3g', fat: '0.2g', carbs: '14g', fiber: '2.4g', sugars: '10g' },
    },
    {
        id: 6,
        imgSrc: 'images/product-5.png',
        name: 'Fresh Potato',
        price: '$22.99 - $30.99',
        numericPrice: [22.99, 30.99],
        rating: 4.5,
        description: 'Starchy potatoes, perfect for baking or frying.',
        seller: 'Rooted Farms',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 77, protein: '2g', fat: '0.1g', carbs: '17g', fiber: '2.2g', sugars: '0.8g' },
    },
    {
        id: 7,
        imgSrc: 'images/product-7.png',
        name: 'Fresh Carrot',
        price: '$20.99 - $25.99',
        numericPrice: [20.99, 25.99],
        rating: 4.5,
        description: 'Crisp, sweet carrots rich in beta-carotene.',
        seller: 'Harvest Green',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 41, protein: '0.9g', fat: '0.2g', carbs: '9.6g', fiber: '2.8g', sugars: '4.7g' },
    },
    {
        id: 8,
        imgSrc: 'images/product-6.png',
        name: 'Fresh Pear',
        price: '$13.99 - $20.99',
        numericPrice: [13.99, 20.99],
        rating: 4.5,
        description: 'Juicy pears with a soft texture and sweet flavor.',
        seller: 'Orchard Hill',
        origin: 'India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 57, protein: '0.4g', fat: '0.1g', carbs: '15g', fiber: '3.1g', sugars: '9.8g' },
    },
    {
        id: 9,
        imgSrc: 'images/cart-img-1.png',
        name: 'Water Melon',
        price: '$23.99 - $27.99',
        numericPrice: [23.99, 27.99],
        rating: 4.5,
        description: 'Refreshing watermelons with high water content, perfect for hydration.',
        seller: 'Sunny Farms',
        origin: 'Florida, USA',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 30, protein: '0.6g', fat: '0.2g', carbs: '8g', fiber: '0.4g', sugars: '6.2g' },
    },
    {
        id: 10,
        imgSrc: 'images/product-anar.jpeg',
        name: 'Fresh Anar',
        price: '$5.99 - $8.99',
        numericPrice: [5.99, 8.99],
        rating: 4.3,
        description: 'Sweet and tangy pomegranates, rich in antioxidants.',
        seller: 'Tropical Delights',
        origin: 'India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 83, protein: '1.7g', fat: '1.2g', carbs: '18.7g', fiber: '4g', sugars: '13.7g' },
    },
    {
        id: 11,
        imgSrc: 'images/product-banana.jpeg',
        name: 'Fresh Banana',
        price: '$1.99 - $2.99',
        numericPrice: [1.99, 2.99],
        rating: 4.6,
        description: 'Soft and sweet bananas, a good source of potassium.',
        seller: 'Tropical Farms',
        origin: 'India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 89, protein: '1.1g', fat: '0.3g', carbs: '22.8g', fiber: '2.6g', sugars: '12.2g' },
    },
    {
        id: 12,
        imgSrc: 'images/product-brinjal.jpeg',
        name: 'Fresh Brinjal',
        price: '$3.49 - $4.49',
        numericPrice: [3.49, 4.49],
        rating: 4.2,
        description: 'Fresh brinjals with a mild, slightly bitter taste.',
        seller: 'Green Valley',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 25, protein: '1g', fat: '0.2g', carbs: '5.9g', fiber: '3g', sugars: '3.5g' },
    },
    {
        id: 13,
        imgSrc: 'images/product-broccoli.jpeg',
        name: 'Fresh Broccoli',
        price: '$6.99 - $8.99',
        numericPrice: [6.99, 8.99],
        rating: 4.5,
        description: 'Crunchy and nutritious broccoli, high in fiber and vitamins.',
        seller: 'Nature’s Bounty',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '300 g',
        nutrition: { calories: 55, protein: '3.7g', fat: '0.6g', carbs: '11.2g', fiber: '2.6g', sugars: '2.5g' },
    },
    {
        id: 14,
        imgSrc: 'images/product-ginger.jpeg',
        name: 'Fresh Ginger',
        price: '$4.99 - $5.99',
        numericPrice: [4.99, 5.99],
        rating: 4.7,
        description: 'Aromatic ginger, known for its zesty flavor and medicinal properties.',
        seller: 'Herbal Farms',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '100 g',
        nutrition: { calories: 80, protein: '1.8g', fat: '0.7g', carbs: '17.8g', fiber: '2g', sugars: '1.7g' },
    },
    {
        id: 15,
        imgSrc: 'images/product-lettuce.jpeg',
        name: 'Fresh Lettuce',
        price: '$2.99 - $3.99',
        numericPrice: [2.99, 3.99],
        rating: 4.3,
        description: 'Crispy and fresh lettuce, perfect for salads.',
        seller: 'Leafy Greens',
        origin: 'china',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '300 g',
        nutrition: { calories: 15, protein: '1.4g', fat: '0.2g', carbs: '2.9g', fiber: '1.3g', sugars: '1.2g' },
    },
    {
        id: 16,
        imgSrc: 'images/product-mushroom.jpeg',
        name: 'Fresh Mushroom',
        price: '$4.99 - $6.99',
        numericPrice: [4.99, 6.99],
        rating: 4.6,
        description: 'White mushrooms, perfect for adding earthy flavor to dishes.',
        seller: 'Fungi Farm',
        origin: 'Poland',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '200 g',
        nutrition: { calories: 22, protein: '3.1g', fat: '0.3g', carbs: '3.3g', fiber: '1g', sugars: '1.7g' },
    },
    {
        id: 17,
        imgSrc: 'images/product-peas.jpeg',
        name: 'Fresh Green Peas',
        price: '$3.99 - $5.99',
        numericPrice: [3.99, 5.99],
        rating: 4.8,
        description: 'Sweet green peas, great for soups and side dishes.',
        seller: 'Garden Harvest',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '250 g',
        nutrition: { calories: 81, protein: '5.4g', fat: '0.4g', carbs: '14.5g', fiber: '5.7g', sugars: '5.7g' },
    },
    {
        id: 18,
        imgSrc: 'images/product-pineapple.jpeg',
        name: 'Fresh Pineapple',
        price: '$7.99 - $10.99',
        numericPrice: [7.99, 10.99],
        rating: 4.4,
        description: 'Tropical pineapples, sweet and juicy. Perfect for smoothies and desserts.',
        seller: 'Tropical Harvest',
        origin: 'Costa Rica',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 50, protein: '0.5g', fat: '0.1g', carbs: '13.1g', fiber: '1.4g', sugars: '9.9g' },
    },
    {
        id: 19,
        imgSrc: 'images/product-strawberry.jpeg',
        name: 'Fresh Strawberry',
        price: '$6.99 - $8.99',
        numericPrice: [6.99, 8.99],
        rating: 4.7,
        description: 'Fresh strawberries with a sweet, tangy flavor. Ideal for desserts and snacking.',
        seller: 'Berry Bliss',
        origin: 'Spain',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 32, protein: '0.7g', fat: '0.3g', carbs: '7.7g', fiber: '2g', sugars: '4.9g' },
    },
    {
        id: 20,
        imgSrc: 'images/product-cucumber.jpeg',
        name: 'Fresh Cucumber',
        price: '$1.99 - $2.99',
        numericPrice: [1.99, 2.99],
        rating: 4.5,
        description: 'Cool and crisp cucumbers, ideal for salads and refreshing snacks.',
        seller: 'Green House',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '1 kg',
        nutrition: { calories: 15, protein: '0.7g', fat: '0.1g', carbs: '3.6g', fiber: '0.5g', sugars: '1.7g' },
    },
    {
        id: 21,
        imgSrc: 'images/product-grapes.jpeg',
        name: 'Fresh Grapes',
        price: '$5.99 - $7.99',
        numericPrice: [5.99, 7.99],
        rating: 4.6,
        description: 'Juicy grapes, sweet and perfect for snacking.',
        seller: 'Vineyard Select',
        origin: 'India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 69, protein: '0.7g', fat: '0.2g', carbs: '18g', fiber: '0.9g', sugars: '15.5g' },
    },
    {
        id: 22,
        imgSrc: 'images/product-spinach.jpeg',
        name: 'Fresh Spinach',
        price: '$2.49 - $3.49',
        numericPrice: [2.49, 3.49],
        rating: 4.8,
        description: 'Tender spinach leaves, rich in iron and vitamins.',
        seller: 'Green Farm',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '200 g',
        nutrition: { calories: 23, protein: '2.9g', fat: '0.4g', carbs: '3.6g', fiber: '2.2g', sugars: '0.4g' },
    },
    {
        id: 23,
        imgSrc: 'images/product-radis.jpeg',
        name: 'Fresh Radis',
        price: '$3.49 - $4.49',
        numericPrice: [3.49, 4.49],
        rating: 4.2,
        description: 'Best fresh radis, perfect for salads and dips.',
        seller: 'Crunchy Greens',
        origin: 'India',
        category: 'Vegetables',
        availability: 'In Stock',
        weight: '250 g',
        nutrition: { calories: 16, protein: '0.7g', fat: '0.2g', carbs: '3g', fiber: '1.6g', sugars: '1.2g' },
    },
    {
        id: 24,
        imgSrc: 'images/product-lichi.jpeg',
        name: 'Fresh Lichi',
        price: '$3.49 - $4.49',
        numericPrice: [3.49, 4.49],
        rating: 4.2,
        description: 'Fresh juicy, with best nutrients.',
        seller: 'Yasin Farms',
        origin: 'India',
        category: 'Fruits',
        availability: 'In Stock',
        weight: '250 g',
        nutrition: { calories: 16, protein: '0.7g', fat: '0.2g', carbs: '3g', fiber: '1.6g', sugars: '1.2g' },
    },
    {
        id: 31 ,
        imgSrc: 'images/spice-greenCardomom.jpeg',
        name: 'Green Cardamom',
        price: '$5.99 - $6.99',
        numericPrice: [5.99, 6.99],
        rating: 4.7,
        description: 'Aromatic green cardamom pods, perfect for enhancing flavors in desserts and curries.',
        seller: 'Spice Harvest',
        origin: 'India',
        category: 'Spices',
        availability: 'In Stock',
        weight: '50 g',
        nutrition: { calories: 311, protein: '10.8g', fat: '6.7g', carbs: '68.5g', fiber: '28g', sugars: '0g' }
      },
      {
        id: 25,
        imgSrc: 'images/spice-jira.jpeg',
        name: 'Cumin Seeds',
        price: '$2.49 - $3.49',
        numericPrice: [2.49, 3.49],
        rating: 4.5,
        description: 'Premium cumin seeds, essential for Indian and Middle Eastern cuisines.',
        seller: 'Flavor Roots',
        origin: 'India',
        category: 'Spices',
        availability: 'In Stock',
        weight: '100 g',
        nutrition: { calories: 375, protein: '17.8g', fat: '22.3g', carbs: '44.2g', fiber: '10.5g', sugars: '2.3g' }
      },
      {
        id: 26,
        imgSrc: 'images/spice-kaliMirch.jpeg',
        name: 'Black Pepper',
        price: '$3.99 - $4.99',
        numericPrice: [3.99, 4.99],
        rating: 4.6,
        description: 'Fresh and aromatic black pepper, a must-have spice for seasoning.',
        seller: 'Spice Harvest',
        origin: 'India',
        category: 'Spices',
        availability: 'In Stock',
        weight: '100 g',
        nutrition: { calories: 251, protein: '10g', fat: '3.3g', carbs: '64g', fiber: '25g', sugars: '0g' }
      },
      {
        id: 27,
        imgSrc: 'images/spice-laung.jpeg',
        name: 'Cloves',
        price: '$4.49 - $5.49',
        numericPrice: [4.49, 5.49],
        rating: 4.8,
        description: 'Whole cloves, perfect for adding depth to savory dishes and desserts.',
        seller: 'Spice Empire',
        origin: 'Sri Lanka',
        category: 'Spices',
        availability: 'In Stock',
        weight: '50 g',
        nutrition: { calories: 274, protein: '6g', fat: '13g', carbs: '65g', fiber: '34g', sugars: '0g' }
      },
      {
        id: 28,
        imgSrc: 'images/spice-saunf.jpeg',
        name: 'Fennel Seeds',
        price: '$2.99 - $3.99',
        numericPrice: [2.99, 3.99],
        rating: 4.4,
        description: 'Sweet and fragrant fennel seeds, ideal for digestive aid and spice blends.',
        seller: 'Nature’s Essence',
        origin: 'India',
        category: 'Spices',
        availability: 'In Stock',
        weight: '100 g',
        nutrition: { calories: 345, protein: '15.8g', fat: '14.9g', carbs: '52.3g', fiber: '39.8g', sugars: '0g' }
      },
      {
        id: 29,
        imgSrc: 'images/spice-turmeric.jpeg',
        name: 'Turmeric Powder',
        price: '$1.99 - $2.49',
        numericPrice: [1.99, 2.49],
        rating: 4.9,
        description: 'High-quality turmeric powder, rich in color and packed with health benefits.',
        seller: 'Golden Harvest',
        origin: 'India',
        category: 'Spices',
        availability: 'In Stock',
        weight: '250 g',
        nutrition: { calories: 312, protein: '9.7g', fat: '3.3g', carbs: '67.1g', fiber: '22.7g', sugars: '0.2g' }
      },
      {
        id: 30,
        imgSrc: 'images/spice-chakli.jpeg',
        name: 'Star Anise',
        price: '$4.99 - $5.99',
        numericPrice: [4.99, 5.99],
        rating: 4.7,
        description: 'Beautiful and aromatic star anise, ideal for stews, soups, and baking.',
        seller: 'Spice Valley',
        origin: 'Vietnam',
        category: 'Spices',
        availability: 'In Stock',
        weight: '50 g',
        nutrition: { calories: 337, protein: '18g', fat: '16g', carbs: '50g', fiber: '14g', sugars: '0g' }
      },
      {
        id: 37,
        imgSrc: 'images/pulses-chana.jpeg',
        name: 'Chana Dal',
        price: '$1.99 - $2.49',
        numericPrice: [1.99, 2.49],
        rating: 4.6,
        description: 'Split chickpeas, rich in protein and perfect for Indian curries and soups.',
        seller: 'Healthy Harvest',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 364, protein: '19g', fat: '6g', carbs: '60g', fiber: '12g', sugars: '2.2g' }
      },
      {
        id: 32,
        imgSrc: 'images/pulses-Kalimasoor.jpeg',
        name: 'Black Masoor Dal',
        price: '$2.49 - $3.49',
        numericPrice: [2.49, 3.49],
        rating: 4.5,
        description: 'Black lentils, a hearty and nutritious addition to any meal.',
        seller: 'Nature’s Choice',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 352, protein: '24g', fat: '1g', carbs: '60g', fiber: '15g', sugars: '1.8g' }
      },
      {
        id: 33,
        imgSrc: 'images/pulses-soyabean.jpeg',
        name: 'Soybean',
        price: '$3.49 - $4.49',
        numericPrice: [3.49, 4.49],
        rating: 4.7,
        description: 'High-protein soybeans, perfect for plant-based diets.',
        seller: 'Protein Pantry',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 446, protein: '36g', fat: '20g', carbs: '30g', fiber: '9g', sugars: '7g' }
      },
      {
        id: 34,
        imgSrc: 'images/pulses-urad.jpeg',
        name: 'Urad Dal',
        price: '$2.99 - $3.99',
        numericPrice: [2.99, 3.99],
        rating: 4.4,
        description: 'Split urad dal, essential for dals and South Indian dishes.',
        seller: 'Harvest Pantry',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 340, protein: '25g', fat: '1.2g', carbs: '59g', fiber: '18g', sugars: '0.8g' }
      },
      {
        id: 35,
        imgSrc: 'images/pulses-Rajma.jpeg',
        name: 'Rajma (Kidney Beans)',
        price: '$3.49 - $4.49',
        numericPrice: [3.49, 4.49],
        rating: 4.8,
        description: 'Rich and creamy red kidney beans, perfect for making Rajma curry.',
        seller: 'Flavor Fields',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 333, protein: '24g', fat: '1g', carbs: '60g', fiber: '25g', sugars: '2g' }
      },
      {
        id: 36,
        imgSrc: 'images/pulses-arhar.jpeg',
        name: 'Arhar Dal (Toor Dal)',
        price: '$2.79 - $3.79',
        numericPrice: [2.79, 3.79],
        rating: 4.9,
        description: 'Toor dal, a staple lentil for Indian homes with a mild and nutty flavor.',
        seller: 'Fresh Pulses Co.',
        origin: 'India',
        category: 'Pulses',
        availability: 'In Stock',
        weight: '500 g',
        nutrition: { calories: 343, protein: '22g', fat: '2g', carbs: '62g', fiber: '15g', sugars: '2.4g' }
      }
];

  export default products;