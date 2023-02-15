const categories = [
  { 
    id: 1,
    name: "Calzado"
  }, 
  {
    id: 2,
    name: "Remeras"
  }, 
  { 
    id: 3,
    name: "Otros"
  }
];

const products = [
  {
    id: 1,
    name: "Zapatillas de Correr",
    description: "Zapatillas de correr ligeras y cómodas para todo tipo de corredores.",
    price: 75.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFusqeCGcYYyQyH25GjvVHvyi05bV7rYsGjA&usqp=CAU",
    category_id: 1,
    stock: 5
  },
  {
    id: 2,
    name: "Camiseta de Rendimiento",
    description: "Camiseta transpirable y que dispersa la humedad para entrenamientos intensos.",
    price: 25.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQqarsjhJ8YM8xViiWrb3bNGsQBfBCFqz4w&usqp=CAU",
    category_id: 2,
    stock: 10
  },
  {
    id: 3,
    name: "Esterilla de Yoga",
    description: "Esterilla de yoga antideslizante para una práctica cómoda y estable.",
    price: 50.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEZcKbWg1ZXjcOheM7e4m8scH0fDXnN-yD88yloFdG4Je19jdgdeDHr3thks5O1kPOw-w&usqp=CAU",
    category_id: 3,
    stock: 3
  },
  {
    id: 4,
    name: "Guantes de Levantamiento de Pesas",
    description: "Guantes de levantamiento de pesas resistentes con soporte para muñeca para sesiones intensas de levantamiento.",
    price: 35.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgkYdeeII3nPO-b8hlKh979vHd6FKAsVLrg&usqp=CAU",
    category_id: 3,
    stock: 0
  },
  {
      id: 5,
      name: "Maillot de Ciclismo",
      description: "Maillot de ciclismo ligero y transpirable con cierre frontal completo.",
      price: 65.00,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MikjQ5lEhaT3a4jrceGn3bpuA8gqnUsxJKigYaNP1IvqNlVYjY-XXkswEqnCvIMmctY&usqp=CAU",
      category_id: 3,
      stock: 40
  },
  {
      id: 6,
      name: "Gafas de Natación",
      description: "Gafas de natación cómodas con lentes anti-vaho para una visibilidad clara en el agua.",
      price: 25.00,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtT3ix1NSHsmW0gCgCBlRdIyudssHCikWjw&usqp=CAU",
      category_id: 3,
      stock: 60
  },
  {
    id: 7,
    name: "Bolsa de Gimnasio",
    description: "Bolsa de gimnasio resistente y espaciosa para llevar el equipo de entrenamiento.",
    price: 40.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_upQcainipFU71PJTtA0Xfd4iQ0X1XHEAlaH5XwxOYUwi31ccBJ6R2PxOTLTQJO_KXDo&usqp=CAU",
    category_id: 3,
    stock: 70
  },
  {
    id: 8,
    name: "Guantes de Levantamiento de Pesas",
    description: "Guantes protectores para levantamiento de peso",
    price: 40.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgkYdeeII3nPO-b8hlKh979vHd6FKAsVLrg&usqp=CAU",
    category_id: 3,
    stock: 70
  },
  {
    id: 9,
    name: "Zapatillas de Relax",
    description: "Zapatillas cómodas.",
    price: 70.00,
    image_url: "https://www.tradeinn.com/f/13896/138960712/zapatillas-running-duramo-protect.jpg",
    category_id: 1,
    stock: 20
  },
  {
    id: 10,
    name: "Botines Adidas",
    description: "Botines de fútbol",
    price: 175.00,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOPsCgeGyXOCVKXeEwFtOvrg34YUdssOmKPg&usqp=CAU",
    category_id: 1,
    stock: 20
  },
]


/**
 * 
 * @param {string} id 
 * @param {string} type
 * @returns Promise
 */
export const gFetch = (id = -1, type = '') => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      if (!products) {
        return reject(new Error('The products object is not defined'));
      }
      let result;
      if (id !== -1 && type === 'item') {
        result = products.find(item => item.id === id);
        if (!result) {
          throw new Error(`No product found for id: ${id}`);
        }
      } else if (id !== -1 && type === 'category') {
        result = products.filter(item => item.category_id === id);
        if (!result.length) {
          throw new Error(`No products found for category: ${id}`);
        }
      } else {
        result = products;
      }
      resolve(result);
    } catch (error) {
      reject(error);
    }
  }, 1500);
});