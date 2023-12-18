const menuData = {
  starters: [
    {
      id: 1,
      name: "Samosas",
      description: "Crispy triangular pastries filled with spiced potatoes and peas, served with tamarind chutney",
      pictureUrl: require("../../assets/starters/samosas.jpeg"),
      price: "$7.95",
    },    {
      id: 2,
      name: "Tandoori Chicken Tikka",
      description: "Marinated chicken cubes cooked in a tandoor oven until tender and juicy, served with mint chutney.",
      pictureUrl: require("../../assets/starters/Chicken Tikka.jpeg"),
      price: "$9.95",
    },
    {
      id: 3,
      name: "Papdi Chaat",
      description: "A savory snack made with crispy fried dough wafers, chickpeas, potatoes, yogurt, chutneys, and spices.",
      pictureUrl: require("../../assets/starters/Papdi Chat.jpeg"),
      price: "$6.95",
    },
  ],

  breakfast: [
    {
      id: 1,
      name: "Aloo Paratha",
      description: "Stuffed flatbread with a savory potato filling, served with yogurt and pickle.",
      pictureUrl: require("../../assets/breakfast/Aloo paratha.jpeg"),
      price: "$4.95",
    },
    {
      id: 2,
      name: "Idli",
      description: "Steamed rice cakes served with sambar and chutney",
      pictureUrl: require("../../assets/breakfast/Idli.jpeg"),
      price: "$4.95",
    },
    {
      id: 3,
      name: "Vada",
      description: "Savory fritters made from lentils and spices, served with sambar and chutney.",
      pictureUrl: require("../../assets/breakfast/Vada.jpeg"),
      price: "$4.95",
    },
    {
      id: 4,
      name: "Onion dosa",
      description: "A thin and crispy crepe made from fermented rice and lentil batter, filled with onions and served with sambar and chutney",
      pictureUrl: require("../../assets/breakfast/Onion Dosa.jpeg"),
      price: "$7.95",
    },
  ],

  dinner: [
    {
      id: 1,
      name: "Butter Chicken",
      description: "A creamy tomato-based curry with tender chicken pieces marinated in yogurt and spices.",
      pictureUrl: require("../../assets/dinner/Butter Chicken.jpeg"),
      price: "$14.95",
    },
    {
      id: 2,
      name: "Dal Fry",
      description: "Spicy lentils cooked with onions, tomatoes, and a blend of spices.",
      pictureUrl: require("../../assets/dinner/Dal Fry.jpeg"),
      price: "$12.95",
    },
    {
      id: 3,
      name: "Saag Paneer",
      description: "Spinach cooked with paneer (Indian cottage cheese) and Indian spices.",
      pictureUrl: require("../../assets/dinner/Saag Paneer.jpeg"),
      price: "$13.95",
    },
    {
      id: 4,
      name: "Vegetable Biryani",
      description: "Fragrant rice layered with mixed vegetables, spices, and saffron.",
      pictureUrl: require("../../assets/dinner/Vegetable Biryani.jpeg"),
      price: "$14.95",
    },
  ],

  drinks: [
    {
      id: 1,
      name: "Mango Lassi",
      description: "A refreshing yogurt-based drink with mango pulp and a touch of sweetness.",
      pictureUrl: require("../../assets/drinks/Mango Lassi.jpeg"),
      price: "$3.95",
    },
    {
      id: 2,
      name: "Masala Chai",
      description: "Spiced Indian black tea with milk, sugar, and ginger.",
      pictureUrl: require("../../assets/drinks/Masala Chai.jpeg"),
      price: "$2.95",
    },
    {
      id: 3,
      name: "Nimbu Pani",
      description: "Refreshing lemonade made with lemon juice, water, sugar, and black salt.",
      pictureUrl: require("../../assets/drinks/Nimbu Pani.jpeg"),
      price: "$2.95",
    },
  ],
};

export default menuData;
