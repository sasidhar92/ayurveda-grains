const GRAINS_DATA = {
  grains: [
    {
      id: "basmati_rice",
      english_name: "Basmati Rice",
      hindi_name: "बासमती चावल",
      sanskrit_name: "Tandula",
      type: "rice",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "May increase"
      },
      ayurvedic_properties: {
        rasa: "Sweet (Madhura)",
        virya: "Cooling (Sheeta)",
        vipaka: "Sweet",
        guna: "Light, Soft, Smooth"
      },
      health_benefits: [
        "Tridoshic — balances all three doshas",
        "Easiest rice to digest",
        "Sattvic — promotes mental clarity",
        "Calming and grounding",
        "Nourishes body tissues"
      ],
      best_season: "Year-round, especially autumn and winter",
      seasons: ["winter", "autumn", "spring", "summer", "monsoon"],
      best_time: "Lunch",
      preparation_tips: [
        "Aged 1-2 years is lighter and better quality",
        "Dry-roast before cooking for Kapha types",
        "Cook with ghee and cumin"
      ],
      contraindications: "Excess may increase Kapha and create mucus"
    },
    {
      id: "red_rice",
      english_name: "Red Rice",
      hindi_name: "लाल चावल",
      sanskrit_name: "Rakta Shali",
      type: "rice",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Neutral"
      },
      ayurvedic_properties: {
        rasa: "Sweet, Nutty",
        virya: "Slightly cooling",
        vipaka: "Sweet",
        guna: "Creamy, Chewy"
      },
      health_benefits: [
        "Rich in antioxidants",
        "Supports heart health",
        "Good source of fiber",
        "Enhances complexion and strength",
        "Better nutrition than white rice"
      ],
      best_season: "Autumn and winter",
      seasons: ["winter", "autumn"],
      best_time: "Lunch",
      preparation_tips: [
        "Soak 30 minutes before cooking",
        "Cook with ghee and warming spices",
        "Pairs well with dal and vegetables"
      ],
      contraindications: "Generally safe for all doshas"
    },
    {
      id: "black_rice",
      english_name: "Black Rice",
      hindi_name: "काला चावल",
      sanskrit_name: "Krishnashali",
      type: "rice",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet",
        virya: "Cooling",
        vipaka: "Sweet",
        guna: "Sticky, Heavy"
      },
      health_benefits: [
        "Tridoshic — balances all three doshas",
        "Rich in anthocyanins (antioxidants)",
        "Anti-inflammatory",
        "Enhances complexion",
        "Supports eye health"
      ],
      best_season: "Year-round, especially autumn and winter",
      seasons: ["winter", "autumn", "spring", "summer", "monsoon"],
      best_time: "Lunch",
      preparation_tips: [
        "Soak at least 1 hour before cooking",
        "Cook with coconut milk or ghee",
        "Naturally sticky — good for puddings"
      ],
      contraindications: "Generally safe for all doshas"
    },
    {
      id: "brown_rice",
      english_name: "Brown Rice",
      hindi_name: "ब्राउन चावल",
      sanskrit_name: "Shali",
      type: "rice",
      dosha_balance: {
        vata: "May increase",
        pitta: "May increase",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet",
        virya: "Heating (Ushna)",
        vipaka: "Sweet",
        guna: "Dry, Heavy"
      },
      health_benefits: [
        "High in fiber",
        "Good for weight management",
        "Supports digestive health",
        "Rich in minerals and vitamins",
        "Best rice for Kapha types"
      ],
      best_season: "Winter and early spring",
      seasons: ["winter", "spring"],
      best_time: "Lunch",
      preparation_tips: [
        "Soak 2-4 hours before cooking",
        "Add ghee to balance dryness",
        "Add cooling spices for Pitta types"
      ],
      contraindications: "Less suitable for Vata and Pitta due to heating and dry qualities"
    },
    {
      id: "wheat",
      english_name: "Wheat",
      hindi_name: "गेहूं",
      sanskrit_name: "Godhuma",
      type: "other",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "May increase"
      },
      ayurvedic_properties: {
        rasa: "Sweet (Madhura)",
        virya: "Cooling (Sheeta)",
        vipaka: "Sweet",
        guna: "Heavy, Oily"
      },
      health_benefits: [
        "Lubricates joints",
        "Boosts energy and strength",
        "Nourishing and grounding",
        "Enhances stamina",
        "Builds body tissues"
      ],
      best_season: "Autumn, winter, early spring",
      seasons: ["winter", "autumn", "spring"],
      best_time: "Breakfast or lunch",
      preparation_tips: [
        "Freshly ground whole wheat flour is best",
        "Make rotis with ghee",
        "Kapha types should reduce wheat"
      ],
      contraindications: "Excess increases Kapha, causes weight gain and mucus"
    },
    {
      id: "barley",
      english_name: "Barley",
      hindi_name: "जौ",
      sanskrit_name: "Yava",
      type: "other",
      dosha_balance: {
        vata: "May increase",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Cooling (Sheeta)",
        vipaka: "Sweet",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Best grain for Kapha dosha",
        "Does not produce excess mucus",
        "Easier to digest than wheat",
        "Good for weight management",
        "Supports urinary health"
      ],
      best_season: "Year-round, especially spring and summer",
      seasons: ["spring", "summer", "monsoon", "winter", "autumn"],
      best_time: "Lunch or dinner",
      preparation_tips: [
        "Soak overnight for digestibility",
        "Cook as porridge or soup",
        "Barley water is traditional Ayurvedic remedy",
        "Add ghee for Vata types"
      ],
      contraindications: "May aggravate Vata due to dry and light qualities"
    },
    {
      id: "bajra",
      english_name: "Pearl Millet",
      hindi_name: "बाजरा",
      sanskrit_name: "Bajra",
      type: "millet",
      dosha_balance: {
        vata: "Balances",
        pitta: "May increase",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Heating (Ushna)",
        vipaka: "Pungent",
        guna: "Heavy, Dry"
      },
      health_benefits: [
        "Warming and stabilizing for Vata",
        "Supports diabetes management",
        "Rich in iron and zinc",
        "Boosts immune system",
        "Strengthens bones"
      ],
      best_season: "Winter",
      seasons: ["winter"],
      best_time: "Breakfast or lunch",
      preparation_tips: [
        "Best consumed in winter",
        "Make rotis with ghee",
        "Cook as porridge with milk and jaggery",
        "Roast before grinding"
      ],
      contraindications: "May increase Pitta in excess or hot seasons"
    },
    {
      id: "jowar",
      english_name: "Sorghum",
      hindi_name: "ज्वार",
      sanskrit_name: "Janara",
      type: "millet",
      dosha_balance: {
        vata: "Balances",
        pitta: "May increase",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Heating (Ushna)",
        vipaka: "Pungent",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Agni Deepak — ignites digestive fire",
        "Aids weight management",
        "Lowers cholesterol",
        "Rich in iron and zinc",
        "Gluten-free",
        "Reduces bloating"
      ],
      best_season: "Winter and early spring",
      seasons: ["winter", "spring"],
      best_time: "Lunch",
      preparation_tips: [
        "Make rotis/bhakris with ghee",
        "Can be popped like popcorn",
        "Cook as porridge",
        "Soak before grinding"
      ],
      contraindications: "May aggravate Pitta in excess or hot weather"
    },
    {
      id: "ragi",
      english_name: "Finger Millet",
      hindi_name: "रागी",
      sanskrit_name: "Rajika",
      type: "millet",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Cooling (Sheeta)",
        vipaka: "Pungent",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Tridosha Shamak — balances all three doshas",
        "Extremely rich in calcium",
        "Excellent for bone health",
        "Slow sugar release — diabetic-friendly",
        "Natural relaxant — helps anxiety and insomnia"
      ],
      best_season: "Summer and year-round",
      seasons: ["summer", "winter", "spring", "autumn", "monsoon"],
      best_time: "Breakfast or dinner",
      preparation_tips: [
        "Excellent for summer due to cooling effect",
        "Make porridge (ragi kanji)",
        "Sprouted ragi is more nutritious",
        "Ferment for better digestibility"
      ],
      contraindications: "Generally safe for all doshas and seasons"
    },
    {
      id: "foxtail_millet",
      english_name: "Foxtail Millet",
      hindi_name: "कंगनी",
      sanskrit_name: "Priyangu",
      type: "millet",
      dosha_balance: {
        vata: "May increase",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Cooling (Sheeta)",
        vipaka: "Pungent",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Heals fractures",
        "Relieves burning sensation",
        "Cooling — calms Pitta",
        "Helps reduce Ama (toxins)",
        "Light and energizing"
      ],
      best_season: "Summer and monsoon",
      seasons: ["summer", "monsoon"],
      best_time: "Breakfast or lunch",
      preparation_tips: [
        "Soak 4 hours before cooking",
        "Cook as upma, khichdi, or idli",
        "Add ghee and warming spices for Vata",
        "Fermentation improves digestibility"
      ],
      contraindications: "May increase Vata — balance with ghee and warming spices"
    },
    {
      id: "kodo_millet",
      english_name: "Kodo Millet",
      hindi_name: "कोदो",
      sanskrit_name: "Kodrava",
      type: "millet",
      dosha_balance: {
        vata: "May increase",
        pitta: "Neutral",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Heating (Ushna)",
        vipaka: "Sweet",
        guna: "Dry, Light"
      },
      health_benefits: [
        "Detoxifying properties",
        "Reduces sluggishness",
        "Aids digestion",
        "Supports diabetes management",
        "Reduces inflammation"
      ],
      best_season: "Winter and spring",
      seasons: ["winter", "spring"],
      best_time: "Lunch",
      preparation_tips: [
        "Cook as rice substitute",
        "Make dosas or idlis",
        "Soak before cooking",
        "Add ghee for Vata balance"
      ],
      contraindications: "May increase Vata — not ideal for Vata imbalances"
    },
    {
      id: "little_millet",
      english_name: "Little Millet",
      hindi_name: "कुटकी / सामा",
      sanskrit_name: "Shyamaka",
      type: "millet",
      dosha_balance: {
        vata: "May increase",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Cooling (Sheeta)",
        vipaka: "Pungent",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Supports blood sugar regulation",
        "Aids weight management",
        "Best diet for rheumatoid arthritis",
        "Hepatoprotective — shields liver",
        "Anti-inflammatory"
      ],
      best_season: "Summer and monsoon",
      seasons: ["summer", "monsoon"],
      best_time: "Lunch",
      preparation_tips: [
        "Soak at least 4 hours",
        "Make upma, idli, or dosa",
        "Cook as khichdi with moong dal",
        "Add ghee for Vata types"
      ],
      contraindications: "Not ideal for Vata imbalances — can cause dryness"
    },
    {
      id: "barnyard_millet",
      english_name: "Barnyard Millet",
      hindi_name: "सांवा / झंगोरा",
      sanskrit_name: "Shyama",
      type: "millet",
      dosha_balance: {
        vata: "May increase",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet and Astringent",
        virya: "Slightly heating",
        vipaka: "Pungent",
        guna: "Dry, Light"
      },
      health_benefits: [
        "Highest iron content of all millets",
        "Lowest carbohydrate among millets",
        "Excellent for bone health",
        "Supports anemia treatment",
        "Gluten-free, more fiber than wheat"
      ],
      best_season: "Summer and monsoon",
      seasons: ["summer", "monsoon"],
      best_time: "Breakfast or lunch",
      preparation_tips: [
        "Soak 4 hours before cooking",
        "Cook with turmeric, ginger, cinnamon",
        "Popular for vrat (fasting) preparations",
        "Consume in moderation"
      ],
      contraindications: "Excess can create dosha imbalances, especially Vata"
    },
    {
      id: "proso_millet",
      english_name: "Proso Millet",
      hindi_name: "चेना",
      sanskrit_name: "Cheenak",
      type: "millet",
      dosha_balance: {
        vata: "May increase",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet",
        virya: "Cooling (Sheeta)",
        vipaka: "Sweet",
        guna: "Light, Dry"
      },
      health_benefits: [
        "Cooling — balances excess heat",
        "Light and easy to digest",
        "High in Vitamin B3",
        "Non-acidic, doesn't spike blood sugar",
        "Gentle on stomach"
      ],
      best_season: "Summer",
      seasons: ["summer"],
      best_time: "Lunch",
      preparation_tips: [
        "Suitable for all ages",
        "Cook as rice substitute",
        "Make porridge or upma",
        "Add ghee for Vata balance"
      ],
      contraindications: "May increase Vata due to light and dry qualities"
    },
    {
      id: "amaranth",
      english_name: "Amaranth",
      hindi_name: "राजगीरा / रामदाना",
      sanskrit_name: "Rajgira",
      type: "other",
      dosha_balance: {
        vata: "Neutral",
        pitta: "May increase",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet (Madhura)",
        virya: "Cooling (Sheeta)",
        vipaka: "Pungent",
        guna: "Light"
      },
      health_benefits: [
        "Dries up excess mucus and Kapha",
        "Benefits lungs and respiratory system",
        "30% more protein than rice",
        "4x more calcium than wheat",
        "Boosts vitality and fertility"
      ],
      best_season: "Winter and fasting periods",
      seasons: ["winter"],
      best_time: "Breakfast",
      preparation_tips: [
        "Pop seeds for puffed grain",
        "Make laddoos with jaggery and ghee",
        "Use flour for rotis during fasting",
        "Combine with nuts and seeds"
      ],
      contraindications: "May increase Kapha and Pitta — consume in moderation"
    },
    {
      id: "corn",
      english_name: "Corn / Maize",
      hindi_name: "मक्का",
      sanskrit_name: "Makai",
      type: "other",
      dosha_balance: {
        vata: "May increase",
        pitta: "May increase",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet",
        virya: "Heating (Ushna)",
        vipaka: "Sweet",
        guna: "Dry, Heavy"
      },
      health_benefits: [
        "Good for Kapha types",
        "Provides energy",
        "Rich in antioxidants",
        "Source of fiber",
        "Supports eye health"
      ],
      best_season: "Winter",
      seasons: ["winter"],
      best_time: "Lunch",
      preparation_tips: [
        "Roast or grill fresh corn",
        "Cook with ghee to balance dryness",
        "Add cooling herbs for Pitta types",
        "Consume in moderation"
      ],
      contraindications: "May aggravate Vata and Pitta due to dry and heating qualities"
    },
    {
      id: "quinoa",
      english_name: "Quinoa",
      hindi_name: "क्विनोआ",
      sanskrit_name: "No Sanskrit name",
      type: "other",
      dosha_balance: {
        vata: "Balances",
        pitta: "Balances",
        kapha: "Balances"
      },
      ayurvedic_properties: {
        rasa: "Sweet",
        virya: "Warm",
        vipaka: "Sweet",
        guna: "Light"
      },
      health_benefits: [
        "Tridoshic — balances all doshas",
        "Complete protein source",
        "More calcium than milk",
        "Rich in iron and magnesium",
        "Gluten-free, easy to digest"
      ],
      best_season: "Year-round",
      seasons: ["winter", "spring", "summer", "autumn", "monsoon"],
      best_time: "Breakfast or lunch",
      preparation_tips: [
        "Rinse thoroughly before cooking",
        "Cook with ghee for Vata types",
        "Use as rice substitute",
        "Add cumin and coriander"
      ],
      contraindications: "Generally safe — not a traditional Ayurvedic grain"
    }
  ],
  principles: [
    {
      title: "Grain Guidelines",
      items: [
        "Vata and Pitta types can eat more grains than Kapha",
        "Autumn and winter are best for grains (sweet and heavy)",
        "Old rice (1-2 years) is lighter than fresh harvest",
        "Soaking grains before cooking improves digestibility",
        "Adding ghee balances dryness and aids digestion",
        "Minimize grains in spring (the gooey season)"
      ]
    },
    {
      title: "Cooking by Dosha",
      items: [
        "Vata: warm, nourishing, oily — soups, stews, ghee",
        "Pitta: cooling, calming — steamed, mild spices",
        "Kapha: light, dry, warming — roasted, grilled, ginger"
      ]
    },
    {
      title: "Beneficial Spices",
      items: [
        "Turmeric — aids digestion, balances all doshas",
        "Cumin — strengthens digestive fire",
        "Ginger — warming, good for Vata and Kapha",
        "Fennel — cooling, good for Pitta",
        "Coriander — cooling, tridoshic"
      ]
    },
    {
      title: "About Millets",
      items: [
        "Called Kshudra Dhanya in Ayurveda",
        "Generally sweet and astringent in taste",
        "Cooling in potency, light and dry",
        "Tend to increase Vata, balance Pitta and Kapha",
        "Light, energizing, help reduce Ama (toxins)"
      ]
    }
  ],
  seasonal_guide: {
    winter: {
      grains: ["Wheat", "Bajra", "Jowar", "Rice", "Amaranth", "Corn"],
      reason: "Heavy, warming grains balance Vata in cold weather"
    },
    spring: {
      grains: ["Barley", "Light millets", "Quinoa"],
      reason: "Light, astringent grains balance Kapha accumulation"
    },
    summer: {
      grains: ["Ragi", "Foxtail Millet", "Little Millet", "Proso Millet", "Basmati Rice"],
      reason: "Cooling grains balance Pitta in hot weather"
    },
    monsoon: {
      grains: ["Barnyard Millet", "Foxtail Millet", "Old Rice", "Barley"],
      reason: "Light, easy-to-digest grains support weakened Agni"
    },
    autumn: {
      grains: ["Basmati Rice", "Wheat", "All grains in moderation"],
      reason: "Transition season — best time to increase grain intake"
    }
  },
  dosha_faq: {
    intro: "In Ayurveda, everything in the universe — including your body — is made of five elements: Space, Air, Fire, Water, and Earth. These combine into three fundamental energies called Doshas that govern all physical and mental processes.",
    why_important: "Understanding your dosha helps you choose the right foods, lifestyle, and daily routines. When doshas are balanced, you experience health. When imbalanced, disease follows. Food is the primary medicine in Ayurveda — eating according to your constitution is the foundation of well-being.",
    doshas: [
      {
        name: "Vata",
        sanskrit: "वात",
        elements: "Space + Air",
        qualities: "Light, dry, cold, mobile, subtle, rough",
        governs: "Movement, breathing, circulation, nerve impulses, elimination",
        body_type: "Thin, light frame. Dry skin and hair. Cold hands and feet. Irregular appetite.",
        mind: "Creative, quick-thinking, enthusiastic. Learns fast but forgets fast.",
        when_balanced: "Energetic, creative, flexible, joyful",
        when_imbalanced: "Anxiety, insomnia, dry skin, constipation, bloating, weight loss, restlessness",
        best_grains: "Rice (especially basmati), wheat, bajra, jowar, quinoa — warm, heavy, nourishing grains",
        avoid: "Too many millets (light and dry), raw or cold foods, irregular meals",
        season: "Vata increases in autumn and early winter. Eat warm, grounding foods.",
        tips: [
          "Eat warm, cooked foods with ghee",
          "Favor sweet, sour, and salty tastes",
          "Keep regular meal times",
          "Avoid fasting or skipping meals",
          "Add warming spices: ginger, cumin, cinnamon"
        ]
      },
      {
        name: "Pitta",
        sanskrit: "पित्त",
        elements: "Fire + Water",
        qualities: "Hot, sharp, light, oily, liquid, spreading",
        governs: "Digestion, metabolism, body temperature, intelligence, courage",
        body_type: "Medium, muscular frame. Warm skin. Strong appetite. Can't skip meals.",
        mind: "Focused, ambitious, sharp intellect. Natural leaders. Competitive.",
        when_balanced: "Strong digestion, sharp mind, courage, contentment, warm personality",
        when_imbalanced: "Acid reflux, inflammation, skin rashes, anger, irritability, excessive heat, ulcers",
        best_grains: "Basmati rice, barley, ragi, foxtail millet, little millet — cooling, light grains",
        avoid: "Bajra, jowar, brown rice, corn — heating grains that aggravate Pitta",
        season: "Pitta increases in summer. Eat cooling, calming foods.",
        tips: [
          "Eat cooling foods — avoid hot spices",
          "Favor sweet, bitter, and astringent tastes",
          "Don't skip meals — Pitta gets irritable when hungry",
          "Cooling spices: fennel, coriander, cardamom",
          "Avoid fermented and fried foods"
        ]
      },
      {
        name: "Kapha",
        sanskrit: "कफ",
        elements: "Water + Earth",
        qualities: "Heavy, slow, cool, oily, smooth, dense, stable",
        governs: "Structure, lubrication, stability, immunity, strength, memory",
        body_type: "Larger, sturdy frame. Smooth skin. Gains weight easily. Slow digestion.",
        mind: "Calm, steady, loyal, patient. Learns slowly but remembers forever.",
        when_balanced: "Strong immunity, calm, loving, steady energy, good stamina, excellent memory",
        when_imbalanced: "Weight gain, lethargy, congestion, mucus, depression, attachment, water retention",
        best_grains: "Barley, ragi, millets (all types), brown rice, amaranth — light, dry, warming grains",
        avoid: "Wheat, white rice (excess), heavy and oily preparations",
        season: "Kapha increases in late winter and spring. Eat light, warming foods.",
        tips: [
          "Eat light, dry, warm foods",
          "Favor pungent, bitter, and astringent tastes",
          "Avoid heavy meals, especially at dinner",
          "Warming spices: ginger, black pepper, turmeric",
          "Dry-roast grains before cooking"
        ]
      }
    ],
    faqs: [
      {
        q: "What is my dosha?",
        a: "Most people are a combination of two doshas (like Vata-Pitta or Pitta-Kapha). Your birth constitution (Prakriti) is set at conception. Your current state (Vikriti) can differ due to diet, lifestyle, and season. A qualified Ayurvedic practitioner can assess both through pulse diagnosis, observation, and detailed questioning."
      },
      {
        q: "Can my dosha change?",
        a: "Your birth constitution (Prakriti) doesn't change. But your current state (Vikriti) shifts constantly based on diet, season, age, stress, and lifestyle. Ayurveda aims to bring Vikriti back in line with Prakriti through food, herbs, and routine."
      },
      {
        q: "What is Agni?",
        a: "Agni is your digestive fire — the force that transforms food into nourishment and waste. Strong Agni means good digestion, clear mind, and vitality. Weak Agni leads to Ama (toxins), bloating, fatigue, and disease. Grains should always be prepared to support Agni — properly cooked, with spices, never raw."
      },
      {
        q: "What is Ama?",
        a: "Ama is undigested food matter that accumulates as toxins when Agni is weak. It manifests as a white coating on the tongue, brain fog, bloating, joint stiffness, and fatigue. Light millets and barley help reduce Ama. Heavy grains like wheat can increase it if Agni is already weak."
      },
      {
        q: "Why does season matter?",
        a: "Each season increases a specific dosha. Summer increases Pitta (heat), monsoon and autumn increase Vata (dryness and movement), and late winter/spring increases Kapha (heaviness and mucus). Eating grains that counter the seasonal dosha keeps you in balance year-round."
      },
      {
        q: "Why is ghee recommended with grains?",
        a: "Ghee (clarified butter) is considered the best fat in Ayurveda. It strengthens Agni without increasing Pitta, lubricates joints, nourishes tissues, and makes dry grains (especially millets) easier to digest. It also helps carry nutrients deeper into tissues."
      },
      {
        q: "Are millets better than rice?",
        a: "Neither is universally better — it depends on your dosha. Millets are lighter, drier, and better for Kapha types. Rice (especially basmati) is softer, more nourishing, and better for Vata. Pitta types do well with both cooling grains. The best choice depends on your constitution, season, and current health."
      }
    ]
  }
};
