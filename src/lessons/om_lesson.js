const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "on-the-map-egu76-78",
  kicker: "the guitar · the rich · the Nile · Central Park · the White House",
  titleHTML: 'On the <em>map</em>',
  title: "On the map",
  subtitle: "Ukraine but the Netherlands. Mount Everest but the Alps. Central Park but the White House. Here’s the system.",
  stickers: ["map", "compass"],
  confetti: ["map", "compass", "star", "sparkles", "check"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "compass", title: "Warm-up", text: "Where in the world?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "compass",
      title: "Where in the world?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A camel in a dry stony desert with mountains behind" src="${IMG("camel.jpg")}"><figcaption><b>A</b><small>Photo: Bernard Gagnon · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="The bow of the Titanic on the sea floor" src="${IMG("titanic-bow.jpg")}"><figcaption><b>B</b><small>Photo: NOAA / IFE / URI · public domain</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: This camel lives in <b>the Gobi Desert</b>, in <b>Mongolia</b>. Why do we say <i>the</i> Gobi but <i>no the</i> before Mongolia?</li>
          <li>B: This is <b>the Titanic</b>, 3,800 meters down in <b>the Atlantic</b>. What do you know about it?</li>
          <li>Which continent would you like to visit first: <b>Asia</b>, <b>South America</b> or <b>Africa</b>?</li>
          <li>Have you ever swum in <b>the Black Sea</b>? Have you been to <b>the Carpathians</b>?</li>
        </ol>`
    },

    /* ================= 00 · REVIEW ================= */
    { type: "part", n: "00", icon: "repeat", title: "Last time…", text: "Quick review before we start: The same sky · Pack light · tenses." },

    {
      type: "mcq", label: "review · last lessons", sticker: "repeat",
      title: "Remember?",
      instructions: "Twelve quick questions from the last lessons. Don’t think too long — then we check together.",
      items: [
        { q: "I love looking at the stars in ___.", options: ["sky", "the sky", "a sky"], answer: 1 },
        { q: "What did you have for ___?", options: ["breakfast", "the breakfast", "a breakfast"], answer: 0 },
        { q: "It’s late. I’m going to ___.", options: ["the bed", "a bed", "bed"], answer: 2 },
        { q: "Grandpa broke his leg. He’s in ___ now.", options: ["the hospital", "hospital", "a hospitals"], answer: 0 },
        { q: "___ people use the internet every day.", options: ["The most", "Most", "A most"], answer: 1 },
        { q: "I’m afraid of ___.", options: ["the spiders", "a spiders", "spiders"], answer: 2 },
        { q: "Our train leaves from ___.", options: ["platform 3", "the platform 3", "a platform 3"], answer: 0 },
        { q: "How much ___ did you take?", options: ["luggages", "luggage", "a luggage"], answer: 1 },
        { q: "It was ___ best day of my vacation.", options: ["a", "—", "the"], answer: 2 },
        { q: "We stayed at ___ small hotel by the sea.", options: ["a", "the", "—"], answer: 0 },
        { q: "I ___ in Kyiv since 2015.", options: ["live", "have lived", "lived"], answer: 1 },
        { q: "When I got home, my sister ___ dinner.", options: ["already cooked", "has already cooked", "had already cooked"], answer: 2 }
      ]
    },

    /* ================= 2 · THE 4 ================= */
    { type: "part", n: "02", icon: "trophy", title: "Types and groups", text: "English Grammar in Use · Unit 76" },

    {
      type: "rule", label: "grammar · the 4", sticker: "trophy",
      title: "The giraffe, the guitar, the rich",
      html: `
        <div class="lines">
          <div class="ln g"><b class="dot">1</b><p><b>the + a type</b> of animal, machine, invention, money: <i><b>The giraffe</b> is the tallest animal.</i> · <i>When was <b>the bicycle</b> invented?</i> · <i><b>The dollar</b> is the currency of the US.</i> · instruments: <i>Can you play <b>the guitar</b>?</i> (but: <i>I’d like to have <b>a</b> guitar.</i>)</p></div>
          <div class="ln g"><b class="dot">2</b><p><b>the + adjective</b> = a group of people: <b>the rich, the poor, the old, the elderly, the young, the homeless, the sick, the injured, the unemployed</b> — plural, no -s: <s>the poors</s> · one person: <i>a homeless <b>person</b></i>.</p></div>
          <div class="ln g"><b class="dot">3</b><p>nationalities: <b>the French, the British, the Spanish, the Dutch, the Swiss, the Chinese</b> (= the people) · one person: <i>a French <b>woman</b></i> <s>a French</s> · others: <b>Italians, Mexicans, Ukrainians</b> (no the).</p></div>
        </div>`
    },

    {
      type: "mcq", label: "the 4 · choose", sticker: "trophy",
      title: "Type, group or nationality?",
      instructions: "Choose the correct option.",
      items: [
        { q: "Can you play ___?", options: ["the guitar", "guitar", "a guitars"], answer: 0 },
        { q: "___ is the fastest land animal.", options: ["Cheetah", "A cheetahs", "The cheetah"], answer: 2 },
        { q: "When was ___ invented?", options: ["telephone", "the telephone", "a telephones"], answer: 1 },
        { q: "We should do more to help ___.", options: ["the homeless", "homeless", "the homelesses"], answer: 0 },
        { q: "___ are famous for their cheese and wine.", options: ["French", "The Frenchs", "The French"], answer: 2 },
        { q: "At the hostel I met ___.", options: ["an English", "an English guy", "a English"], answer: 1 },
        { q: "___ usually talk with their hands a lot.", options: ["Italians", "The Italian", "Italian"], answer: 0 },
        { q: "Life can be really hard for ___ in winter.", options: ["olds", "the olds", "the old"], answer: 2 },
        { q: "There’s ___ old piano in our school hall.", options: ["the", "an", "—"], answer: 1 },
        { q: "___ has changed the way we live.", options: ["Smartphone", "The smartphone", "A smartphones"], answer: 1 }
      ]
    },

    /* ================= 3 · NAMES 1 ================= */
    { type: "part", n: "03", icon: "map", title: "Geography", text: "English Grammar in Use · Unit 77" },

    {
      type: "rule", label: "grammar · names 1", sticker: "map",
      title: "Mount Everest — but the Alps",
      html: `
        <div class="ff">
          <div><b class="t">no the</b>continents: <b>Africa, Europe, South America</b><br>countries, states: <b>Ukraine, France, Texas</b><br>cities, islands: <b>Kyiv, Cairo, Sicily</b><br>one mountain: <b>Hoverla, Everest, Mount Etna</b><br>lakes: <b>Lake Michigan, Lake Victoria</b><br>titles: <b>Doctor Brown, President Lincoln, Uncle Max</b></div>
          <div><b class="t">the</b>oceans, seas: <b>the Atlantic, the Pacific, the Black Sea</b><br>rivers, canals: <b>the Dnipro, the Nile, the Panama Canal</b><br>deserts: <b>the Sahara, the Gobi Desert</b><br>plural names: <b>the Alps, the Carpathians, the Bahamas, the Netherlands, the Taylors</b><br>Republic / Kingdom / States: <b>the Czech Republic, the UK, the USA</b></div>
        </div>
        <div class="note">⚠️ <b>the</b> north <b>of</b> Italy — but <b>northern</b> Italy (no the) · North America, South Africa, southeast Asia — no the.</div>`
    },

    {
      type: "sort", label: "the or no the?", sticker: "compass",
      title: "Pin it",
      instructions: "Does the name need <b>the</b>?",
      categories: [
        { name: "the …", words: ["Pacific", "Dnipro", "Sahara", "Alps", "Netherlands", "Black Sea", "United Kingdom", "Philippines"] },
        { name: "no the", words: ["Asia", "Ukraine", "Lviv", "Everest", "Lake Michigan", "Sicily", "Texas", "northern Italy"] }
      ]
    },

    {
      type: "gapfill", label: "geography quiz", sticker: "map",
      title: "Quick geography quiz",
      instructions: "Write the name in brackets. Add <b>the</b> only if it’s necessary.",
      items: [
        { text: "The longest river in Africa is [[the Nile]]." + H("Nile"), why: "rivers → the." },
        { text: "The highest mountain in the world is [[Mount Everest|everest]]." + H("Mount Everest"), why: "one mountain → no the." },
        { text: "Hoverla is the highest mountain in [[the Carpathians|the carpathian mountains]]." + H("Carpathians"), why: "a mountain range (plural) → the." },
        { text: "[[The Dnipro]] flows through Kyiv." + H("Dnipro"), why: "rivers → the." },
        { text: "Odesa is on [[the Black Sea]]." + H("Black Sea"), why: "seas → the." },
        { text: "The smallest continent is [[Australia]]." + H("Australia"), why: "continents → no the." },
        { text: "Between Africa and Australia there is [[the Indian Ocean]]." + H("Indian Ocean"), why: "oceans → the." },
        { text: "Amsterdam is the capital of [[the Netherlands]]." + H("Netherlands"), why: "plural name → the." },
        { text: "Chicago is on [[Lake Michigan]]." + H("Lake Michigan"), why: "Lake + name → no the." },
        { text: "Prague is the capital of [[the Czech Republic]]." + H("Czech Republic"), why: "Republic → the." }
      ]
    },

    /* ================= 4 · NAMES 2 ================= */
    { type: "part", n: "04", icon: "metro", title: "In the city", text: "English Grammar in Use · Unit 78" },

    {
      type: "rule", label: "grammar · names 2", sticker: "metro",
      title: "Central Park — but the White House",
      html: `
        <div class="ff">
          <div><b class="t">no the</b>streets, squares, parks: <b>Fifth Avenue, Broadway, Times Square, Central Park, Khreshchatyk</b><br>place / person + building: <b>JFK Airport, Columbia University, Buckingham Palace, Boryspil Airport</b><br>names with ’s: <b>McDonald’s, Macy’s, St. Patrick’s Cathedral</b><br>companies: <b>Apple, Sony, Ukraine International Airlines</b></div>
          <div><b class="t">the</b>hotels, theaters, museums: <b>the Hilton, the Met, the Guggenheim Museum</b><br>famous buildings: <b>the White House, the Eiffel Tower, the Empire State Building, the Kremlin</b><br>names with <b>of</b>: <b>the Statue of Liberty, the Museum of Modern Art, the Great Wall of China</b><br>newspapers, organizations: <b>the New York Times, the UN, the BBC, the Red Cross</b></div>
        </div>
        <div class="note">⚠️ <b>Columbia University</b> — but <b>the University of</b> Kyiv · <b>Buckingham Palace</b> — but <b>the Royal Palace</b> (royal is an adjective, not a name).</div>`
    },

    {
      type: "mcq", label: "names 2 · choose", sticker: "metro",
      title: "A weekend in New York",
      instructions: "Choose the correct option.",
      items: [
        { q: "On Saturday morning we walked in ___.", options: ["the Central Park", "Central Park", "a Central Park"], answer: 1 },
        { q: "We stayed at ___ near Times Square.", options: ["the Hilton", "Hilton", "a Hilton the"], answer: 0 },
        { q: "Our plane landed at ___.", options: ["the JFK Airport", "a JFK Airport", "JFK Airport"], answer: 2 },
        { q: "We took a boat to see ___.", options: ["Statue of Liberty", "the Statue of Liberty", "a Statue of Liberty"], answer: 1 },
        { q: "My cousin studies at ___.", options: ["Columbia University", "the Columbia University", "a Columbia University"], answer: 0 },
        { q: "In the afternoon we went to ___.", options: ["Museum of Modern Art", "a Museum of Modern Art", "the Museum of Modern Art"], answer: 2 },
        { q: "Then we went shopping at ___.", options: ["the Macy’s", "Macy’s", "a Macy’s the"], answer: 1 },
        { q: "In the evening we saw a show on ___.", options: ["Broadway", "the Broadway", "a Broadway"], answer: 0 },
        { q: "My dad bought a new phone. He always buys ___.", options: ["the Apple", "an Apple’s", "Apple"], answer: 2 },
        { q: "On Sunday we read about our trip in ___!", options: ["New York Times", "the New York Times", "a New York Times"], answer: 1 }
      ]
    },

    /* ================= 5 · NMT ================= */
    { type: "part", n: "05", icon: "megaphone", title: "Exam practice", text: "Articles in a text — like Task 6 of the NMT." },

    {
      type: "mcq", label: "NMT style · grammar in context", sticker: "compass",
      title: "Ten days in Italy",
      instructions: "Read the story and choose the correct option for each gap. Ask yourself: a country? a lake? a sea? a plural name?",
      items: [
        { q: "Last summer my family traveled around ___ for ten days.", options: ["the Italy", "Italy", "an Italy", "Italies"], answer: 1 },
        { q: "We flew from Warsaw and landed at ___ in Rome.", options: ["the Fiumicino Airport", "a Fiumicino Airport", "Fiumicino Airport", "airport Fiumicino the"], answer: 2 },
        { q: "On the first day we saw ___.", options: ["the Colosseum", "Colosseum", "a Colosseum", "Colosseums"], answer: 0 },
        { q: "Then we took a train to the ___ of Italy.", options: ["northern", "north", "northly", "norths"], answer: 1 },
        { q: "We spent three days near ___, a beautiful lake.", options: ["the Lake Como", "a Lake Como", "Lakes Como", "Lake Como"], answer: 3 },
        { q: "From our hotel we could see ___.", options: ["Alps", "the Alp", "the Alps", "an Alps"], answer: 2 },
        { q: "___ we met were very friendly and loved to talk.", options: ["The Italians", "Italian", "An Italians", "The Italian"], answer: 0 },
        { q: "In Venice we took a boat along ___.", options: ["Grand Canal", "the Grand Canal", "a Grand Canal", "Grand the Canal"], answer: 1 },
        { q: "On the last day we swam in ___.", options: ["the Adriatic Sea", "Adriatic Sea", "an Adriatic Sea", "Adriatic the Sea"], answer: 0 },
        { q: "Next summer we want to visit ___.", options: ["Netherlands", "a Netherlands", "Netherland", "the Netherlands"], answer: 3 }
      ]
    },

    {
      type: "correct", label: "names · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I'd love to visit the Japan.", answers: ["I'd love to visit Japan.", "I would love to visit Japan."] },
        { wrong: "We swam in Black Sea every day.", answers: ["We swam in the Black Sea every day."] },
        { wrong: "The Mount Everest is 8,849 meters high.", answers: ["Mount Everest is 8,849 meters high."] },
        { wrong: "My dream is to see Eiffel Tower.", answers: ["My dream is to see the Eiffel Tower."] },
        { wrong: "The rich should help the poors.", answers: ["The rich should help the poor."] },
        { wrong: "My brother plays a piano very well.", answers: ["My brother plays the piano very well."] },
        { wrong: "Have you ever been to United States?", answers: ["Have you ever been to the United States?", "Have you ever been to the US?", "Have you ever been to the USA?"] },
        { wrong: "We stayed at a hotel on the Fifth Avenue.", answers: ["We stayed at a hotel on Fifth Avenue."] }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Over to you", text: "Spin it — answer, then ask me the same question." },

    {
      type: "wheel", label: "speaking · places", sticker: "speech",
      title: "Spin the globe",
      start: "Spin the wheel. Answer in 3–4 sentences. Use real names — and the right the!",
      items: [
        { icon: "🌍", short: "dream trip", q: "Which country do you want to visit most? What would you see there?" },
        { icon: "🏔️", short: "mountains or sea", q: "<b>The Carpathians</b> or <b>the Black Sea</b>? Where do you prefer to spend the summer?" },
        { icon: "🗽", short: "big cities", q: "New York, Paris or Tokyo? Name two places you’d visit in that city." },
        { icon: "🏛️", short: "landmarks", q: "Which famous building would you like to see: <b>the Eiffel Tower</b>, <b>the Colosseum</b>, <b>the Great Wall of China</b>…?" },
        { icon: "🏙️", short: "your city", q: "Describe your city for a tourist: streets, parks, museums, the river." },
        { icon: "🎸", short: "instruments", q: "Can you play <b>the piano</b>, <b>the guitar</b> or any other instrument? Which one would you like to learn?" },
        { icon: "🤝", short: "helping", q: "How can young people help <b>the elderly</b> or <b>the homeless</b> in your city?" },
        { icon: "🐆", short: "animals", q: "What’s your favorite wild animal? What do you know about it? (<b>The</b> tiger is…)" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "the — or nothing? Fast!" },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the name with <b>the</b> or without it and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "ocean", prompt: "Pacific", answers: ["the pacific", "the pacific ocean"] },
        { cue: "country", prompt: "Poland", answers: ["poland"] },
        { cue: "country", prompt: "United States", answers: ["the united states"] },
        { cue: "mountains", prompt: "Carpathians", answers: ["the carpathians"] },
        { cue: "one mountain", prompt: "Mount Fuji", answers: ["mount fuji"] },
        { cue: "river", prompt: "Danube", answers: ["the danube"] },
        { cue: "lake", prompt: "Lake Baikal", answers: ["lake baikal"] },
        { cue: "street", prompt: "Khreshchatyk", answers: ["khreshchatyk"] },
        { cue: "building", prompt: "White House", answers: ["the white house"] },
        { cue: "with of", prompt: "Statue of Liberty", answers: ["the statue of liberty"] },
        { cue: "airport", prompt: "Boryspil Airport", answers: ["boryspil airport"] },
        { cue: "group", prompt: "rich (people)", answers: ["the rich"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Be a tour guide." },

    {
      type: "write", label: "writing · a city guide", sticker: "pencil",
      title: "Welcome to my city",
      instructions: "Write a mini guide (<b>7–8 sentences</b>) to your city or a city you love. Name at least <b>5 real places</b>: a street, a park, a river, a museum, a famous building, the airport. Watch the <b>the</b>!",
      words: ["street", "avenue", "square", "park", "river", "museum", "palace", "cathedral", "airport", "station", "bridge", "the north", "the center"],
      checks: [
        { label: "the — 3 times", pattern: "\\bthe\\b", min: 3 },
        { label: "names with capital letters — 5+", pattern: "\\b[A-Z][a-z]+\\b", min: 8 },
        { label: "4+ place words from the list (they light up)", words: 4 },
        { label: "at least 7 sentences", sentences: 7 }
      ],
      sample: "Welcome to Kyiv, the capital of Ukraine! Kyiv is on the Dnipro, and the views from the bridges are amazing. Start your day on Khreshchatyk, the main street, and walk to Independence Square. Then visit St. Sophia’s Cathedral — it’s more than 900 years old. If you like art, go to the National Art Museum. In the evening, take a walk in Mariinskyi Park. Most visitors fly into Boryspil Airport, and the train to the center is fast."
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
