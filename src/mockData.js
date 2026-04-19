// mockData.js
const mockData = {
  categories: [
    // ==================== FASHION ====================
    {
      id: "fashion",
      title: "Fashion",
      description: "Explore the evolving world of fashion, trends, designers, and styling.",
      heroImage: "/images/fashion-hero.jpg",
      sections: {
        featured: [
          {
            title: "The Rise of Sustainable Fashion",
            author: "Aisha Kapoor",
            readTime: "6 min",
            image: "/images/fashion-sustainable.jpg",
            content: `
              Sustainable fashion is no longer a niche movement—it's a global revolution. From luxury houses like Stella McCartney to affordable brands like H&M's Conscious collection, the industry is shifting toward eco‑friendly materials, ethical production, and circular business models. In 2025, the global sustainable fashion market reached $8 billion, growing at 12% annually. Consumers, especially Gen Z, are demanding transparency: they want to know who made their clothes and under what conditions. Innovations like mushroom leather, recycled ocean plastics, and blockchain supply chains are making sustainability accessible. However, challenges remain: greenwashing, high costs, and scalability. This feature explores five brands leading the change and offers a practical guide to building a sustainable wardrobe without breaking the bank.
            `,
          },
        ],
        trends: [
          {
            title: "Top Streetwear Trends 2026",
            content: `
              Streetwear has moved from subculture to mainstream, with oversized silhouettes, bold graphic prints, and 90s nostalgia dominating. This year, expect patchwork denim, cropped hoodies, and chunky sneakers (think Balenciaga's Triple S) to rule the streets. Collaborations between luxury labels and skate brands—like Gucci x Palace—continue to blur the lines. On the runways, Tokyo and Seoul are setting the pace, with layering, neon accents, and utility vests. For men, baggy cargo pants and vintage band tees are must-haves; for women, maxi skirts paired with puffer jackets create a striking contrast.
            `,
          },
          {
            title: "Minimalism is Back: Quiet Luxury",
            content: `
              After years of logomania, a return to understated elegance is underway. "Quiet luxury" emphasizes impeccable tailoring, neutral palettes (beige, cream, charcoal), and high‑quality fabrics like cashmere and linen. Brands like The Row, Loro Piana, and Brunello Cucinelli are leading the charge. This trend appeals to those seeking timeless pieces rather than fast‑fashion fads. Styling tips: invest in a well‑fitted blazer, wool trousers, and leather loafers. Accessories should be minimal—a simple leather watch or a structured tote. The philosophy: buy less, choose better.
            `,
          },
          {
            title: "The Return of Corsets and Bustiers",
            content: `
              Victorian and Renaissance influences are back, with corsets and bustiers appearing both on red carpets and in street style. Modern versions use stretch fabrics and boning for comfort, often worn over t‑shirts or under blazers. Designers like Vivienne Westwood and Mugler have revived the silhouette, while TikTok influencers show how to style them for everyday wear. Pair a satin bustier with high‑waisted jeans and chunky boots for a edgy look, or layer it under a sheer blouse for a romantic vibe.
            `,
          },
          {
            title: "Sheer Fabrics and Layering",
            content: `
              Sheer tops, mesh dresses, and transparent layers are everywhere this season. The key is strategic layering: wear a sheer blouse over a bralette or a slip dress under a mesh overlay. Designers like Dior and Valentino have embraced transparency, using delicate tulle and organza. For daytime, opt for semi‑sheer fabrics with built‑in lining; for evening, go bold with fully transparent pieces over minimalist undergarments. The trend celebrates confidence and creativity.
            `,
          },
          {
            title: "Upcycled and Vintage Resurgence",
            content: `
              With sustainability in focus, upcycled and vintage fashion is booming. Thrift stores, Depop, and Vinted have become treasure troves for unique pieces. Upcycling—turning old garments into new designs—is gaining traction among indie designers. Look for patchwork jackets, repurposed denim, and reconstructed bridal gowns. This trend reduces waste and allows for personal expression. Celebrities like Emma Watson and Billie Eilish champion vintage on the red carpet, proving that old can be gold.
            `,
          },
        ],
        designerSpotlight: [
          {
            name: "Rahul Mishra",
            bio: "An Indian designer known for sustainable couture and intricate embroidery. He is the first Indian to present a collection at Paris Haute Couture Week. His work often features hand‑embroidered floral motifs, organic cotton, and collaborations with rural artisans.",
            highlight: "Paris Fashion Week 2025 collection: 'Butterfly People' – a celebration of biodiversity and craftsmanship.",
            image: "/images/designer-rahul.jpg",
          },
          {
            name: "Virgil Abloh (1980–2021)",
            bio: "The visionary behind Off‑White and Louis Vuitton's menswear, Abloh blurred the lines between streetwear and luxury. His legacy includes redefining diversity in fashion and championing young Black designers.",
            highlight: "Last collection: 'Louis Vuitton Air' – a fusion of sportswear and tailoring.",
          },
        ],
        streetStyle: [
          {
            title: "Mumbai Street Style",
            image: "/images/street-mumbai.jpg",
            caption: "Bold prints, mix‑and‑match saris, and sneakers rule the streets of Bandra.",
          },
          {
            title: "Tokyo Harajuku",
            image: "/images/street-tokyo.jpg",
            caption: "Lolita, punk, and kawaii influences collide in colorful layers.",
          },
          {
            title: "Parisian Chic",
            image: "/images/street-paris.jpg",
            caption: "Effortless elegance: trench coats, striped tops, and ballet flats.",
          },
        ],
        guides: [
          {
            title: "How to Style Oversized Clothes",
            content: `
              Oversized doesn't mean sloppy. Balance proportions by pairing a baggy top with fitted bottoms (leggings or skinny jeans) or a loose jacket with tailored trousers. Use belts to cinch the waist, creating shape. Layer a long cardigan over a mini dress, and finish with chunky sneakers. Accessories like a structured handbag or bold earrings add polish. Avoid drowning in fabric: choose one oversized piece per outfit.
            `,
          },
          {
            title: "The Ultimate Capsule Wardrobe Guide",
            content: `
              A capsule wardrobe consists of 30–40 versatile pieces that mix and match. Essentials: white t‑shirt, black blazer, denim jacket, tailored trousers, midi skirt, little black dress, cashmere sweater, trench coat, leather boots, white sneakers, and a neutral tote. Choose a color palette of 3–4 neutrals plus one accent color. Rotate seasonally. This approach saves money, reduces decision fatigue, and is eco‑friendly.
            `,
          },
        ],
        accessories: [
          {
            title: "Top Watches of 2026",
            content: `
              Luxury meets smart tech with hybrid watches that track fitness while looking elegant. Top picks: Apple Watch Hermès (customizable bands), Garmin Marq (aviator series), and TAG Heuer Connected. For traditionalists, automatic watches from Omega, Seiko, and Grand Seiko remain popular. Features to look for: solar charging, sapphire crystal, and interchangeable straps.
            `,
          },
          {
            title: "Bag Trends: Micro to Mega",
            content: `
              Two extremes dominate: micro bags (just big enough for a lipstick) and mega totes (laptop‑sized). Jacquemus' Le Chiquito remains iconic, while Bottega Veneta's oversized Pouch is a statement piece. For everyday, medium crossbody bags in woven leather or canvas are practical and stylish. Colors: pastels for spring, jewel tones for fall.
            `,
          },
        ],
      },
    },

    // ==================== FOOD ====================
    {
      id: "food",
      title: "Food",
      description: "Discover recipes, cuisines, and food culture.",
      heroImage: "/images/food-hero.jpg",
      sections: {
        featured: [
          {
            title: "Authentic Kerala Sadya",
            author: "Chef Anil",
            image: "/images/sadya.jpg",
            readTime: "8 min",
            content: `
              The Kerala Sadya is a traditional vegetarian feast served on a banana leaf during festivals like Onam and Vishu. It includes over 20 dishes: rice, sambar, rasam, avial (mixed vegetables in coconut), thoran (stir‑fried veggies), pachadi (yogurt‑based), pickles, papadam, and payasam (sweet dessert). Each dish is placed at a specific position on the leaf, eaten in order from left to right. The balance of flavors—sweet, sour, salty, bitter, and umami—is a testament to Ayurvedic principles. This feature includes a step‑by‑step recipe for classic avial and tips for sourcing fresh curry leaves, coconut, and tamarind.
            `,
          },
        ],
        recipes: [
          {
            title: "Quick 10‑min Breakfast",
            content: `
              Overnight oats: mix rolled oats, chia seeds, yogurt, milk, and honey. Refrigerate overnight. Top with berries and nuts. Smoothie: blend spinach, banana, mango, ginger, and coconut water. Toast: avocado mash on sourdough, sprinkle with chili flakes and lemon. Egg muffins: whisk eggs with chopped veggies, bake in muffin tin. These options are high in protein and fiber, keeping you full until lunch.
            `,
          },
          {
            title: "One‑Pot Pasta Primavera",
            content: `
              Sauté garlic and onions in olive oil. Add cherry tomatoes, zucchini, bell peppers, and vegetable broth. Bring to a boil, add uncooked pasta, and cook until al dente. Stir in fresh basil, parmesan, and a splash of cream. This dish uses only one pan and is ready in 20 minutes. Perfect for busy weeknights.
            `,
          },
          {
            title: "Vegan Butter Chicken (Tofu)",
            content: `
              Marinate tofu in yogurt, turmeric, chili, and garam masala. Pan‑fry until golden. For the sauce: blend cashews, tomatoes, ginger, garlic, and spices. Simmer with tofu. Finish with coconut cream and cilantro. Serve with naan or rice. This plant‑based version has 30% less fat but all the creamy, tangy flavor.
            `,
          },
          {
            title: "Classic French Onion Soup",
            content: `
              Caramelize 5 large onions in butter (low heat, 30 minutes). Add beef broth, thyme, and bay leaf. Simmer for 20 minutes. Ladle into oven‑safe bowls, top with toasted baguette slices and Gruyère cheese. Broil until bubbly. This rich, savory soup is a winter favorite.
            `,
          },
        ],
        reviews: [
          {
            title: "Top Restaurants in Kochi",
            content: `
              1. **Dhe Puttu** – Modern Kerala cuisine, famous for puttu and beef. 2. **Kashi Art Cafe** – Continental breakfast and art gallery. 3. **Fort House** – Seafood on the backwaters. 4. **Rasoi** – North Indian thalis. 5. **Tea Pot Cafe** – Kerala snacks and chai. Each offers unique ambiance and authentic flavors. Prices range from ₹200 to ₹1500 per person.
            `,
          },
          {
            title: "Street Food Safari: Delhi",
            content: `
              Must‑try: Chole bhature (spiced chickpeas with fried bread), Aloo tikki (potato patties), Golgappa (crispy hollow puri filled with tamarind water), Parantha (stuffed flatbread), and Kulfi (dense ice cream). Vendors to visit: Paranthe wali gali in Chandni Chowk, and Kake Da Hotel for butter chicken. Be adventurous but cautious: opt for busy stalls with high turnover.
            `,
          },
        ],
        health: [
          {
            title: "Balanced Diet Guide",
            content: `
              A balanced plate should have 50% vegetables/fruits, 25% lean protein (chicken, fish, tofu, legumes), and 25% whole grains (quinoa, brown rice, millet). Include healthy fats (avocado, nuts, olive oil). Drink 8 glasses of water daily. Limit processed sugars and saturated fats. Sample meal: grilled salmon, quinoa, steamed broccoli, and a side salad with vinaigrette. Adjust portions based on activity level.
            `,
          },
          {
            title: "Intermittent Fasting: Pros and Cons",
            content: `
              Intermittent fasting (16:8 method – 16 hours fasting, 8 hours eating) can improve insulin sensitivity, aid weight loss, and simplify meal planning. However, it may cause hunger, irritability, and overeating during eating windows. It's not suitable for pregnant women, diabetics, or those with eating disorders. Always consult a doctor. Alternatives: time‑restricted eating with 12:12 or 14:10 windows.
            `,
          },
        ],
      },
    },

    // ==================== TRAVEL ====================
    {
      id: "travel",
      title: "Travel",
      description: "Explore destinations, guides, and experiences.",
      heroImage: "/images/travel-hero.jpg",
      sections: {
        featured: [
          {
            title: "Hidden Gems of Kerala",
            image: "/images/kerala-gems.jpg",
            author: "Rohit Nair",
            readTime: "7 min",
            content: `
              Beyond the famous backwaters of Alleppey and hill stations of Munnar, Kerala hides lesser‑known treasures: Gavi (eco‑tourism spot with boating and wildlife), Meesapulimala (second highest peak, ideal for sunrise treks), Valparai (tea estates and bison sightings), and Bekal (fort with beach and sunset views). These destinations are less crowded, offer affordable homestays, and immerse you in local culture. For example, in Gavi you can stay in forest department cottages, wake up to bird calls, and go on guided jungle safaris. This guide includes itineraries, travel costs, and best seasons (October–March).
            `,
          },
        ],
        guides: [
          {
            title: "Budget Travel Tips for Students",
            content: `
              Travel off‑season (avoid December and May). Use overnight buses/trains to save accommodation. Eat at local markets instead of tourist restaurants. Use Couchsurfing or hostel dorms (₹300–₹800/night). Take free walking tours (tip based). In Europe, consider FlixBus or Ryanair flash sales. In India, IRCTC's Bharat Darshan packages are cheap. Always carry a reusable water bottle and snacks. Sample budget: ₹1500/day in India, €50/day in Southeast Asia, $70/day in Eastern Europe.
            `,
          },
          {
            title: "Solo Female Travel Safety",
            content: `
              Research destinations with high safety scores (Iceland, Japan, New Zealand, Canada). Share itinerary with family. Use trusted accommodation (hostels with female‑only dorms, hotels with 24/7 reception). Dress modestly to blend in. Avoid walking alone at night. Use ride‑sharing apps with tracking (Uber, Ola). Learn basic phrases of local language. Join group tours for remote areas. Carry a doorstop alarm and a whistle. Trust your instincts—leave any uncomfortable situation immediately.
            `,
          },
        ],
        itineraries: [
          {
            title: "3 Days in Munnar",
            content: `
              **Day 1:** Arrive, visit Tea Museum, stroll through Tata Tea Estate, sunset at Photo Point. **Day 2:** Early morning trek to Anamudi Peak (highest in South India), afternoon at Mattupetty Dam and Echo Point. **Day 3:** Eravikulam National Park (Nilgiri Tahr sighting), then drive to Lakkam Waterfalls. Budget: ₹5000 (including homestay, local taxis, entry fees). Best months: September to March.
            `,
          },
          {
            title: "Two Weeks in Europe (Budget)",
            content: `
              Route: London (3 days) → Paris (3 days) → Amsterdam (2 days) → Berlin (3 days) → Prague (3 days). Use Eurail Global Pass (youth discount). Stay in hostels (€20‑30/night). Eat supermarket sandwiches and street food. Free attractions: British Museum, Louvre (first Saturday free), Reichstag dome. Total cost approx €1200 excluding flights.
            `,
          },
        ],
        adventure: [
          {
            title: "Trekking in Western Ghats",
            content: `
              Top treks: Kumara Parvatha (Karnataka, 12 km, difficult), Kudremukh (10 km, moderate), Chembra Peak (Wayanad, 5 km, easy with heart‑shaped lake). Best season: October–February. Necessary gear: sturdy shoes, raincoat, 2L water, energy bars, first‑aid kit. Hire a local guide for safety. Permits required for certain forests (obtain online or at base camp).
            `,
          },
          {
            title: "Scuba Diving in Andamans",
            content: `
              Havelock Island (now Swaraj Dweep) offers sites like "The Wall" and "Aquarium" with visibility up to 30 meters. PADI certification costs ₹25,000 for Open Water (4 days). Beginner dives (discovery) start at ₹5000. Best months: November–April. Marine life: parrotfish, turtles, reef sharks, and coral gardens. Carry an underwater camera. Book through recognized operators like Dive India or Barefoot Scuba.
            `,
          },
        ],
      },
    },

    // ==================== CULTURE ====================
    {
      id: "culture",
      title: "Culture",
      description: "Art, traditions, and creative expressions.",
      heroImage: "/images/culture-hero.jpg",
      sections: {
        art: [
          {
            title: "Modern Indian Art: Beyond the Canvas",
            content: `
              Contemporary Indian artists like Bharti Kher (bindi sculptures), Subodh Gupta (stainless steel utensils), and Anish Kapoor (sculptures) are gaining global recognition. The Kochi‑Muziris Biennale (December–March) is the largest contemporary art festival in India, featuring works on migration, environment, and identity. Art galleries to visit: National Gallery of Modern Art (Delhi, Mumbai), Jehangir Art Gallery (Mumbai), and Kiran Nadar Museum (Delhi). Art prices range from ₹50,000 for emerging artists to crores for masters like M.F. Husain.
            `,
          },
          {
            title: "Warli Painting Revival",
            content: `
              Warli is a tribal art form from Maharashtra, using white geometric shapes on mud walls to depict daily life. Artists like Jivya Soma Mashe have brought it to galleries. Workshops in Dahanu and Palghar teach the art. Today, Warli motifs appear on textiles, home decor, and stationery. The style's simplicity and connection to nature resonate with modern minimalism.
            `,
          },
        ],
        movies: [
          {
            title: "Top Indian Movies of 2025",
            content: `
              1. **All We Imagine as Light** (Malayalam) – Won Grand Prix at Cannes, explores female friendship in Mumbai. 2. **Laapataa Ladies** (Hindi) – Kiran Rao's comedy about two brides swapped on a train. 3. **Maidan** (Hindi) – Football drama starring Ajay Devgn. 4. **Aavesham** (Malayalam) – Action comedy set in Bangalore. 5. **Kill** (Hindi) – Gory action on a train. These films are available on Netflix, Prime, or Hotstar. Critical themes: caste, gender, urbanization.
            `,
          },
          {
            title: "The New Wave of Malayalam Cinema",
            content: `
              Known for realistic storytelling, Malayalam films like "Kumbalangi Nights" and "Joji" have won international acclaim. Directors like Lijo Jose Pellissery and Mahesh Narayanan experiment with sound design and long takes. The industry produces over 150 films annually, many with small budgets but strong scripts. Streaming platforms have boosted their reach. Upcoming: "Bazooka" and "Thundu".
            `,
          },
        ],
        books: [
          {
            title: "Must Read Books 2026",
            content: `
              Fiction: "The Covenant of Water" (Abraham Verghese) – family saga in Kerala. "Victory City" (Salman Rushdie) – epic of a woman who builds an empire. Non‑fiction: "The Anxious Generation" (Jonathan Haidt) – social media's impact on teens. "Cobalt Red" (Siddharth Kara) – lithium mining horrors. Poetry: "The Carrying" (Ada Limón). These books are available on Amazon, Bookshop.org, or local libraries.
            `,
          },
          {
            title: "Rediscovering Regional Literature",
            content: `
              Translations of Marathi (Baburao Bagul), Tamil (Perumal Murugan), and Bengali (Mahasweta Devi) works are gaining readers. "Poonachi" (Perumal Murugan) – a novel told from a goat's perspective about rural poverty. "Cobalt Blue" (Sachin Kundalkar) – queer love story in Maharashtra. Publishing houses like Juggernaut and Speaking Tiger focus on regional voices.
            `,
          },
        ],
        festivals: [
          {
            title: "Onam Festival: The Heart of Kerala",
            content: `
              Onam is a 10‑day harvest festival celebrating King Mahabali's annual visit. Highlights: Pookalam (flower carpets), Onasadya (lunch on banana leaf), Vallamkali (snake boat races), and Pulikali (tiger dancers). The legend teaches that prosperity and equality existed under Mahabali. Onam is a secular festival, observed by all communities in Kerala. Best places to experience: Thrissur (grand processions), Alappuzha (boat races), and Kochi (cultural performances).
            `,
          },
          {
            title: "Durga Puja in Kolkata",
            content: `
              The grandest festival of Bengal, Durga Puja features pandals (temporary temples) with artistic themes—from replicas of the Louvre to environmental messages. Idols of Goddess Durga slaying the demon Mahishasur are worshipped for five days. The festival ends with immersion in the Ganges. UNESCO has listed it as Intangible Cultural Heritage. Best pandals: Kumartuli (where idols are made), College Square (lighting), and Santosh Mitra Square (themes).
            `,
          },
        ],
      },
    },

    // ==================== TECHNOLOGY ====================
    {
      id: "technology",
      title: "Technology",
      description: "Latest in tech, AI, and innovations.",
      heroImage: "/images/tech-hero.jpg",
      sections: {
        news: [
          {
            title: "AI Revolution 2026: What's New?",
            content: `
              Generative AI has moved beyond chatbots. New models like GPT‑5 can generate hour‑long videos from text, while Gemini Ultra integrates real‑time web browsing. In healthcare, AI diagnoses rare diseases from retinal scans with 98% accuracy. In coding, tools like Copilot X autocomplete entire functions. However, concerns about deepfakes and job displacement persist. The EU's AI Act (effective 2025) imposes transparency rules. India's AI mission aims to build foundational models for Indic languages.
            `,
          },
          {
            title: "India's Chandrayaan-4 Mission",
            content: `
              Following the success of Chandrayaan‑3 (landing on the lunar south pole), ISRO plans Chandrayaan‑4 in 2028 to return rock samples. The mission involves a five‑module stack, docking in lunar orbit, and a safe return to Earth. It will carry foreign payloads from NASA and ESA. The budget is ₹800 crores. This will make India the fourth country to retrieve samples from the Moon.
            `,
          },
        ],
        gadgets: [
          {
            title: "Best Smartphones 2026",
            content: `
              Top performers: iPhone 16 Pro (A18 chip, 48MP periscope), Samsung Galaxy S26 Ultra (200MP camera, Snapdragon 8 Gen 4), Google Pixel 10 (AI editing, 7 years updates), OnePlus 13 (fastest charging, 150W). Mid‑range: Nothing Phone (3), Moto Edge 50. Budget: Xiaomi 14i, Realme 12 Pro. Features to look for: LTPO display, 5000mAh+ battery, IP68 rating, and 5G mmWave.
            `,
          },
          {
            title: "Best Laptops for Creators",
            content: `
              Apple MacBook Pro M4 (14"/16") – excellent for video editing. Dell XPS 16 (OLED, RTX 4070) – for graphics. ASUS ROG Zephyrus G14 – portable gaming and 3D rendering. Microsoft Surface Laptop 6 – touchscreen, great for note‑taking. Prices from ₹1,00,000 to ₹3,00,000. Consider RAM (16GB min), SSD (512GB+), and color accuracy (100% DCI‑P3).
            `,
          },
        ],
        tutorials: [
          {
            title: "Learn Python Basics in 30 Minutes",
            content: `
              Step 1: Install Python and VS Code. Step 2: Write "print('Hello World')". Step 3: Variables – name = "John". Step 4: Lists – fruits = ["apple","banana"]. Step 5: Loops – for fruit in fruits: print(fruit). Step 6: Functions – def greet(name): return "Hi "+name. Practice on Replit. Next steps: build a calculator, then a to‑do list app. Free resources: W3Schools, Automate the Boring Stuff, YouTube (Corey Schafer).
            `,
          },
          {
            title: "How to Secure Your Social Media Accounts",
            content: `
              Enable 2FA (use authenticator app, not SMS). Use a password manager (Bitwarden). Avoid sharing personal info publicly. Review app permissions regularly. For Facebook, enable "Login Alerts" and "Get alerts about unrecognized logins". On Instagram, turn off "Allow Sharing to Stories". Delete old posts that reveal location or workplace. Be cautious of phishing links. Update privacy settings to "Friends only" or "Only me".
            `,
          },
        ],
      },
    },

    // ==================== FITNESS & HEALTH ====================
    {
      id: "fitness",
      title: "Fitness & Health",
      description: "Stay fit and healthy with expert advice.",
      heroImage: "/images/fitness-hero.jpg",
      sections: {
        workouts: [
          {
            title: "Full Body Home Workout (No Equipment)",
            content: `
              Perform each exercise for 45 seconds, rest 15 seconds, repeat 3 rounds: 1) Jumping jacks – warm up. 2) Bodyweight squats. 3) Push‑ups (knee if needed). 4) Reverse lunges. 5) Plank (hold 30 sec). 6) Glute bridges. 7) Mountain climbers. 8) Burpees (low impact: step back). Cool down with stretching. Do this 3‑4 times per week. Progress by increasing reps or reducing rest.
            `,
          },
          {
            title: "Yoga for Back Pain Relief",
            content: `
              Poses: Cat‑Cow (10 reps), Child's Pose (1 min), Downward Dog (30 sec), Sphinx Pose (30 sec), Thread the Needle (each side 30 sec), Supine Twist (30 sec each). Avoid forward folds if herniated disc. Practice daily. Benefits: strengthens core, improves flexibility, reduces muscle tension. Watch videos by Yoga with Adriene for modifications.
            `,
          },
        ],
        diet: [
          {
            title: "Weight Loss Diet: 7‑Day Meal Plan",
            content: `
              Day 1: Breakfast – oatmeal with berries. Lunch – grilled chicken salad. Dinner – vegetable stir‑fry with tofu. Day 2: Breakfast – Greek yogurt with nuts. Lunch – quinoa bowl with chickpeas. Dinner – baked fish with broccoli. Day 3: Breakfast – smoothie (spinach, banana, protein powder). Lunch – lentil soup. Dinner – turkey lettuce wraps. Snacks: apple, carrot sticks. Total calories approx 1500. Drink 2L water. Avoid sugar, fried foods, white bread.
            `,
          },
          {
            title: "Plant‑Based Protein Sources",
            content: `
              Top sources: lentils (18g per cup), chickpeas (15g), tofu (20g per 100g), tempeh (31g), seitan (25g), edamame (17g), quinoa (8g), hemp seeds (10g per 3 tbsp), spirulina (8g per 2 tbsp). Combine grains and legumes (rice + beans) for complete amino acids. Athletes may need 1.6‑2.2 g protein per kg body weight. Plant proteins are also high in fiber and low in saturated fat.
            `,
          },
        ],
        mentalHealth: [
          {
            title: "Stress Management Techniques",
            content: `
              Practice mindfulness: 5‑4‑3‑2‑1 grounding (notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste). Deep breathing: inhale 4 sec, hold 4, exhale 6. Progressive muscle relaxation: tense then release each muscle group. Limit news intake. Journal 3 gratitudes daily. Exercise 20 minutes. Seek therapy if stress persists. Apps: Headspace, Calm, and Indian app Amaha (eMinds).
            `,
          },
          {
            title: "Signs of Burnout and How to Recover",
            content: `
              Symptoms: exhaustion, cynicism, reduced performance, sleep disturbances, frequent illness. Recovery steps: take time off work (at least 3 days). Set boundaries: no emails after 7pm. Delegate tasks. Prioritize sleep (8 hours). Engage in hobbies (non‑screen). Talk to a counselor. Use the "Pomodoro technique" (25 min work, 5 min break). Employers should provide mental health days and employee assistance programs.
            `,
          },
        ],
      },
    },

    // ==================== BUSINESS & STARTUPS ====================
    {
      id: "business",
      title: "Business & Startups",
      description: "Entrepreneurship and market insights.",
      heroImage: "/images/business-hero.jpg",
      sections: {
        startups: [
          {
            title: "Startup Success Story: Zepto (10‑min Grocery Delivery)",
            content: `
              Founded in 2021 by Aadit Palicha and Kaivalya Vohra (both 19), Zepto raised $200 million at a $1.4 billion valuation within 18 months. Their secret: dark stores (small warehouses) optimized for speed, machine learning for inventory, and a lean team. By 2025, they expanded to 80 cities, turned profitable. Lessons: focus on unit economics, hire hungry young talent, iterate fast. Competitors: Blinkit, Instamart. Advice for founders: validate with a simple MVP, network with accelerators (YC, Antler).
            `,
          },
          {
            title: "The Rise of D2C Brands in India",
            content: `
              Direct‑to‑consumer (D2C) brands like Boat (audio), Mamaearth (skincare), and The Whole Truth (clean food) have disrupted traditional retail. They use Instagram, WhatsApp, and owned websites to build communities. The D2C market is expected to reach $100 billion by 2027. Success factors: clear branding, influencer partnerships, and data analytics. Challenges: high customer acquisition costs, logistics. Tips: start with a niche product, use Shopify, and focus on repeat purchases.
            `,
          },
        ],
        tips: [
          {
            title: "How to Start a Business with Low Capital",
            content: `
              Service‑based: freelance writing, social media management, virtual assistant. Product‑based: print‑on‑demand (T‑shirts, mugs), dropshipping, homemade candles or food items. Use free tools: Canva (design), Google Docs (proposals), Wave (invoicing). Start as a side hustle while working full‑time. Register as sole proprietorship (cheapest). Reach customers via Instagram, Facebook Marketplace, or local flea markets. Reinvest profits.
            `,
          },
          {
            title: "Legal Checklist for Indian Startups",
            content: `
              1. Choose business structure (LLP, Pvt Ltd, or proprietorship). 2. Get GST registration (if turnover exceeds ₹40 lakhs). 3. Open current bank account. 4. Register on Udyam portal (MSME). 5. Draft terms of service and privacy policy (if online). 6. Apply for trademark (₹5,000‑10,000). 7. Comply with Shops and Establishment Act (state‑specific). Consult a CA for taxes.
            `,
          },
        ],
        productivity: [
          {
            title: "Work Smart: Time Blocking Technique",
            content: `
              Divide your day into 60‑90 minute blocks dedicated to specific tasks. Use Google Calendar or Notion. Example: 9‑10:30 deep work (coding, writing), 10:30‑11 emails, 11‑12 meetings, 1‑2:30 creative work, 2:30‑3 admin, 3‑4 learning. Include 15 min breaks. Prioritize your most important task first (eat that frog). Avoid multitasking. Track your time for a week to identify leaks.
            `,
          },
          {
            title: "Remote Work Best Practices",
            content: `
              Set up a dedicated workspace with ergonomic chair, good lighting, noise‑cancelling headphones. Use tools: Slack (chat), Zoom (meetings), Trello/Asana (tasks), Google Drive (files). Establish a routine: start at same time, dress as if going to office, take lunch break away from screen. Overcommunicate: update status, ask for feedback. Combat loneliness with virtual coffee breaks and co‑working days. Protect work‑life balance: log off at fixed time.
            `,
          },
        ],
      },
    },

    // ==================== ENTERTAINMENT & GAMING ====================
    {
      id: "entertainment",
      title: "Entertainment & Gaming",
      description: "Movies, games, and pop culture.",
      heroImage: "/images/entertainment-hero.jpg",
      sections: {
        games: [
          {
            title: "Top Games of 2026",
            content: `
              **PC/Console:** "Elder Scrolls VI" (Bethesda) – open world fantasy. "GTA 6" (Rockstar) – Vice City return. "Hollow Knight: Silksong" – indie metroidvania. **Mobile:** "Honkai Star Rail" – turn‑based RPG. "Call of Duty: Warzone Mobile" – battle royale. **Indie:** "Hades 2" – mythological roguelite. Upcoming: "Black Myth: Wukong" (China mythology). Platforms: Steam, Epic, PlayStation, Xbox, Nintendo Switch.
            `,
          },
          {
            title: "Best Cloud Gaming Services",
            content: `
              Xbox Cloud Gaming (Ultimate ₹999/mo) – 100+ games stream on phone. NVIDIA GeForce Now (free tier 1 hour, priority ₹799/mo) – play your Steam library. PlayStation Plus Premium – stream PS3/PS4 games. In India, JioGamesCloud is budget (₹199/mo). Requirements: 5G or 25 Mbps broadband, low latency. Not ideal for competitive shooters, but great for RPGs.
            `,
          },
        ],
        movies: [
          {
            title: "Upcoming Bollywood Blockbusters 2026",
            content: `
              **"Jawan 2"** (Shah Rukh Khan, Atlee) – action thriller. **"Tiger 4"** (Salman Khan, Katrina) – spy universe. **"Brahmastra Part 2"** (Ranbir Kapoor, Alia Bhatt) – fantasy. **"Kalki 2898 AD Part 2"** (Prabhas, Deepika) – sci‑fi. **"Hera Pheri 3"** (Akshay Kumar, Paresh Rawal) – comedy. Most will release in cinemas and later on Netflix/Prime. Book tickets on BookMyShow or Paytm.
            `,
          },
          {
            title: "Best International Series to Binge",
            content: `
              **"The Last of Us Season 2"** (HBO) – post‑apocalyptic drama. **"Stranger Things 5"** (Netflix) – sci‑fi finale. **"House of the Dragon Season 2"** (HBO) – Targaryen civil war. **"Squid Game Season 2"** (Netflix) – deadly competitions. **"Three‑Body Problem"** (Netflix) – Chinese sci‑fi adaptation. Streaming availability in India: JioCinema (HBO), Netflix, Amazon Prime, Disney+ Hotstar.
            `,
          },
        ],
        esports: [
          {
            title: "Esports Growth in India",
            content: `
              India's esports market grew 300% since 2020, with titles like BGMI (Battlegrounds Mobile India), Valorant, and FIFA gaining popularity. The government recognized esports as a sport in 2022. Major events: ESL India Premiership, Skyesports Championship, and India Today Esports Awards. Prize pools now exceed ₹5 crores. College leagues and scholarships are emerging. Top players: Scout (BGMI), Mortal (BGMI), and SKROSS (Valorant). To start: practice daily, watch pros, join tournaments on platforms like Gamerji.
            `,
          },
          {
            title: "How to Build a Gaming PC on a Budget",
            content: `
              Budget build (₹50,000): CPU – Ryzen 5 5600G (integrated graphics), GPU – add later RTX 3050, RAM – 16GB DDR4, SSD – 512GB, PSU – 550W. Mid‑range (₹80,000): i5‑12400F + RTX 3060. Use PCPartPicker India for price comparisons. Buy used GPU from trusted sellers (Zoukart, TechEnclave). Prioritize GPU over CPU for gaming. Peripherals: 144Hz monitor, mechanical keyboard, gaming mouse. Assemble yourself or ask a local shop.
            `,
          },
        ],
      },
    },

    // ==================== ADDITIONAL NEW CATEGORIES ====================
    {
      id: "lifestyle",
      title: "Lifestyle & Home",
      description: "Interior design, gardening, and everyday living.",
      heroImage: "/images/lifestyle-hero.jpg",
      sections: {
        interiors: [
          {
            title: "Affordable Home Decor Ideas",
            content: `
              Use peel‑and‑stick wallpaper for an accent wall. Thrift vintage frames and paint them unified color. Add indoor plants (snake plant, pothos) in ceramic pots. Hang string lights or macrame. DIY: turn wine bottles into vases, pallets into coffee tables. Shop at IKEA, local flea markets, or online (Pepperfry, Amazon). Color trends: earthy terracotta, sage green, navy blue.
            `,
          },
          {
            title: "Small Space Organization Hacks",
            content: `
              Use vertical space: wall‑mounted shelves, pegboards for kitchen utensils. Under‑bed storage boxes. Magnetic strips for knives or spice jars. Foldable furniture (Murphy bed, drop‑leaf table). Over‑the‑door shoe organizers. Use drawer dividers. Declutter with "one in, one out" rule. Label containers. A tidy space reduces stress.
            `,
          },
        ],
        gardening: [
          {
            title: "Balcony Vegetable Garden",
            content: `
              Grow tomatoes, chilies, mint, and spinach in pots (12‑16 inches deep). Use potting mix with compost. Water daily (morning). Fertilize every 2 weeks with liquid seaweed. Ensure 6+ hours sunlight. For small balconies, use vertical planters or hanging baskets. Pest control: neem oil spray. Harvest within 60‑90 days. Seeds from NurseryLive, Ugaoo, or local nursery.
            `,
          },
        ],
      },
    },
    {
      id: "science",
      title: "Science & Nature",
      description: "Discoveries, climate, and the cosmos.",
      heroImage: "/images/science-hero.jpg",
      sections: {
        climate: [
          {
            title: "Climate Solutions That Work",
            content: `
              Renewable energy: solar and wind now cheaper than coal. Electric vehicles: India's FAME II scheme subsidies. Reforestation: the Great Green Wall in Africa. Carbon capture: direct air capture plants (Climeworks). Individual actions: reduce meat consumption, use public transit, vote for green policies. Global warming is at 1.2°C above pre‑industrial; to stay below 1.5°C, emissions must halve by 2030.
            `,
          },
        ],
        space: [
          {
            title: "NASA's Artemis Moon Missions",
            content: `
              Artemis II (2025) will carry astronauts around the Moon. Artemis III (2026) aims to land the first woman and person of color on the lunar south pole, where water ice exists. SpaceX's Starship is the lander. The goal: establish a permanent base (Lunar Gateway) and prepare for Mars in the 2030s. Follow live on NASA TV.
            `,
          },
        ],
      },
    },
    {
      id: "art",
      title: "Art & Creativity",
      description: "Painting, digital art, and creative process.",
      heroImage: "/images/art-hero.jpg",
      sections: {
        painting: [
          {
            title: "Watercolor for Beginners",
            content: `
              Materials: cold‑press paper, round brushes (size 6, 10), student‑grade paints (Winsor & Newton). Techniques: wet‑on‑wet for soft edges, dry‑brush for texture, layering for depth. Practice color mixing (primary colors make secondary). Start with simple subjects: sky, leaves, abstract washes. YouTube tutorials by "The Mind of Watercolor". Join local workshops or online community.
            `,
          },
        ],
        digitalArt: [
          {
            title: "Getting Started with Procreate",
            content: `
              Procreate is a powerful iPad app (₹1200 one‑time). Learn gestures: two‑finger tap undo, three‑finger tap redo. Use layers for non‑destructive editing. Brushes: default brushes like "Studio Pen" for lineart, "Airbrushing" for shading. Tutorials by "Art with Flo". Export as PSD or PNG. Build a portfolio on Instagram or Behance. Tablets: iPad + Apple Pencil recommended.
            `,
          },
        ],
      },
    },
    {
      id: "parenting",
      title: "Parenting & Family",
      description: "Advice for modern families.",
      heroImage: "/images/parenting-hero.jpg",
      sections: {
        newborn: [
          {
            title: "Newborn Sleep Tips",
            content: `
              Establish a bedtime routine: bath, massage, feeding, lullaby. Swaddle for security. Use white noise (fan or app). Keep room dark and cool (20‑22°C). Follow awake windows (45‑60 min for newborns). Avoid over‑stimulation before sleep. Safe sleep: back position, firm mattress, no pillows/toys. Consult pediatrician if excessive crying.
            `,
          },
        ],
        education: [
          {
            title: "Screen Time Guidelines for Kids",
            content: `
              Under 2 years: avoid except video calls. Ages 2‑5: limit to 1 hour of high‑quality content (e.g., Sesame Street). Ages 6+: consistent limits, prioritize educational apps (Khan Academy Kids, Duolingo). Use parental controls (Google Family Link, Apple Screen Time). Co‑view and discuss. Encourage offline play, reading, and outdoor activities. Be a role model: put away your own phone.
            `,
          },
        ],
      },
    },
  ],
};

export default mockData;