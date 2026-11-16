const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "can-i-help-you-egiu7-44-evuel19-us",
  kicker: "shopping · do / does questions",
  titleHTML: 'Can I <em>help</em> you?',
  title: "Can I help you?",
  subtitle: "Stores, salespeople — and how to ask questions with do and does.",
  stickers: ["bags", "receipt"],
  confetti: ["bags", "coin", "gift", "check", "label"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "shop", title: "Warm-up", text: "Where are we?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "cart",
      title: "What store is it?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A bakery on a town square" src="${IMG("bakery.jpg")}"><figcaption><b>A</b><small>Photo: Johann Jaritz · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A small butcher shop with a bike outside" src="${IMG("butcher.jpg")}"><figcaption><b>B</b><small>Photo: Wilfredor · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A very big bookstore with several floors" src="${IMG("bookshop.jpg")}"><figcaption><b>C</b><small>Photo: Wilfredor · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Shelves of medicine boxes in a pharmacy" src="${IMG("chemist.jpg")}"><figcaption><b>D</b><small>Photo: Wilfredor · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>What store is it — A, B, C, D? What do people buy there?</li>
          <li>Do you often go to a store like this? When did you last go?</li>
          <li>Where does your family buy bread — at a bakery or at a grocery store?</li>
          <li>Photo C: how many floors does the store have? Do you prefer big stores or small stores?</li>
        </ol>`
    },

    /* ================= 2 · WORDS ================= */
    { type: "part", n: "02", icon: "store", title: "Stores & shopping", text: "Vocabulary in Use Elementary · Unit 19 — in American English" },

    {
      type: "rule", label: "vocabulary · stores", sticker: "bread",
      title: "What can you buy there?",
      html: `
        <div class="colloc">
          <div><b>a butcher shop</b> — meat, sausages, chicken</div>
          <div><b>a bakery</b> — bread, cakes, cookies</div>
          <div><b>a pharmacy / a drugstore</b> — medicine, aspirin, toothpaste, shampoo</div>
          <div><b>a newsstand</b> — newspapers, magazines, candy</div>
          <div><b>a post office</b> — stamps; you mail letters and packages</div>
          <div><b>a bookstore</b> — books, maps, dictionaries</div>
          <div><b>a gift shop</b> — presents and souvenirs</div>
          <div><b>a grocery store / a supermarket</b> — food, drinks and things for the house</div>
          <div><b>a department store</b> — a big store with many floors: clothes, furniture, cosmetics, toys…</div>
        </div>
        <div class="note">🇺🇸 Your book is British. We use American English: <b>store</b> (UK shop) · <b>pharmacy</b> (UK chemist’s) · <b>bakery</b> (UK baker’s) · <b>bookstore</b> (UK bookshop) · <b>mail</b> a <b>package</b> (UK post a parcel).</div>
        <h3>In a department store</h3>
        <div class="colloc">
          <div><b>the first floor</b> — the floor at street level 🇺🇸 (UK: ground floor)</div>
          <div><b>the second / third floor</b> — above it</div>
          <div><b>the lower level / the basement</b> — under the first floor</div>
          <div><b>the checkout / the register</b> — the place where you pay · the <b>cashier</b> takes your money</div>
          <div><b>the fitting room</b> — where you try clothes on</div>
        </div>
        <div class="signs"><span class="g">OPEN</span><span class="r">CLOSED</span><span>PUSH</span><span>PULL</span><span>CHECKOUT</span></div>
        <h3>Salesperson ↔ customer</h3>
        <div class="dlg">
          <p class="a"><small>salesperson</small>Can I help you?</p>
          <p class="c"><small>customer</small>Yes. Can I try this shirt on?</p>
          <p class="c"><small>customer</small>Do you have this in a bigger / smaller size? · in a different color?</p>
          <p class="c"><small>customer</small>How much is it? / How much does it cost?</p>
          <p class="a"><small>salesperson</small>It’s $24. How would you like to pay?</p>
          <p class="c"><small>customer</small>Can I pay with a credit card / debit card? · Can I pay in cash?</p>
          <p class="a"><small>salesperson</small>Here’s your change and your receipt. Do you need a bag?</p>
        </div>
        <div class="colloc">
          <div><b>cash</b> = bills and coins · a <b>bill</b> ($10) 🇺🇸 (UK note) · a <b>coin</b> (25¢)</div>
          <div><b>change</b> = the money you get back</div>
          <div><b>a receipt</b> = the paper that shows what you paid</div>
          <div><b>a (shopping) bag</b> = a plastic or paper bag for your things</div>
        </div>`
    },

    {
      type: "gapfill", label: "vocabulary · which store?", sticker: "store",
      title: "Where do you go?",
      instructions: "Write the store. Use American English.",
      items: [
        { text: "I need some bread and two cakes. Let’s go to the [[bakery]].", why: "bread and cakes → the bakery." },
        { text: "Mom wants some sausages and a chicken from the [[butcher shop|butcher|butcher’s|butchers]].", why: "meat → the butcher shop." },
        { text: "I have a headache. Can you get me some aspirin at the [[pharmacy|drugstore]]?", why: "medicine → the pharmacy / drugstore." },
        { text: "Dad buys a newspaper and a magazine at the [[newsstand]] every morning.", why: "newspapers, magazines → the newsstand." },
        { text: "I want to mail this package to my aunt. Where’s the [[post office]]?", why: "letters, packages, stamps → the post office." },
        { text: "We need a new English dictionary. Is there a [[bookstore]] near here?", why: "books, maps, dictionaries → a bookstore." },
        { text: "Tourists buy souvenirs and presents in a [[gift shop]].", why: "presents and souvenirs → a gift shop." },
        { text: "You can buy furniture, clothes and toys in one building — in a [[department store]].", why: "a big store with many floors → a department store." },
        { text: "I go to the [[grocery store|supermarket]] on Saturdays for milk, pasta and dish soap.", why: "food and things for the house → a grocery store / supermarket." },
        { text: "You pay for your things at the [[checkout|register]].", why: "the checkout / register = where you pay." }
      ]
    },

    {
      type: "dragwords", label: "vocabulary · in the store", sticker: "tshirt",
      title: "At the clothing store",
      instructions: "Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["check", "basement"],
      items: [
        "SALESPERSON: Good morning. Can I [[help]] you?",
        "MASHA: Yes, please. Can I [[try]] this jacket on?",
        "MASHA: Hmm, it’s too small. Do you have it in a bigger [[size]]?",
        "MASHA: Great. And do you have it in a different [[color]]? I don’t like gray.",
        "MASHA: I like the blue one. How much does it [[cost]]?",
        "SALESPERSON: It’s $35. You can pay at the [[register]] over there.",
        "MASHA: Can I pay with a credit [[card]]?",
        "CASHIER: Sorry, the card machine doesn’t work today. Can you pay in [[cash]]?",
        "CASHIER: OK, here’s your [[change]] — $5 — and your receipt.",
        "CASHIER: Do you need a [[bag]]? — No, thanks. I have one."
      ]
    },

    {
      type: "tf2", label: "reading · store directory", sticker: "label",
      title: "Brownsfield department store",
      instructions: "Read the store directory. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="guide">
          <div class="gh">BROWNSFIELD<small>store directory · open 9 a.m.–8 p.m., Sunday 10 a.m.–5 p.m.</small></div>
          <div class="fl"><b>5th floor</b><span>café · restrooms · customer service</span></div>
          <div class="fl"><b>4th floor</b><span>toys · books · gift shop</span></div>
          <div class="fl"><b>3rd floor</b><span>men’s clothing · sportswear and sneakers</span></div>
          <div class="fl"><b>2nd floor</b><span>women’s clothing · kids’ clothing · shoes</span></div>
          <div class="fl"><b>1st floor</b><span>cosmetics · pharmacy · newsstand · main checkouts</span></div>
          <div class="fl"><b>lower level</b><span>grocery store · kitchenware · post office</span></div>
          <div class="gf">You can pay in cash or with a credit or debit card. Keep your receipt: you can return things within 30 days. Paper bags cost 10¢.</div>
        </div>`,
      items: [
        { q: "The store opens later on Sundays.", answer: true, fix: [], fixAnswer: 0 },
        { q: "You can buy a magazine on the first floor.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The post office is on the fifth floor.", answer: false, fix: ["It’s on the first floor.", "It’s on the lower level.", "There isn’t a post office."], fixAnswer: 1 },
        { q: "Women’s clothing is on the third floor.", answer: false, fix: ["It’s on the second floor.", "It’s on the lower level.", "It’s on the fourth floor."], fixAnswer: 0 },
        { q: "If you want a present, you go to the fourth floor.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Sneakers are on the second floor.", answer: false, fix: ["They’re on the first floor.", "They’re on the third floor.", "The store doesn’t sell them."], fixAnswer: 1 },
        { q: "You can get aspirin in this store.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The store only takes cash.", answer: false, fix: ["It only takes credit cards.", "You can pay in cash or with a card.", "You pay by check."], fixAnswer: 1 },
        { q: "Bags are free.", answer: false, fix: ["Paper bags cost 10¢.", "They cost $2.", "There are no bags."], fixAnswer: 0 },
        { q: "You need your receipt if you want to return something.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 3 · GRAMMAR ================= */
    { type: "part", n: "03", icon: "question", title: "Questions", text: "Essential Grammar in Use · Units 7 and 44" },

    {
      type: "rule", label: "grammar · do / does questions", sticker: "question",
      title: "One extra card in front",
      html: `
        <p>A sentence has <b>no helper</b>. A question takes <b>one extra card</b> — the helper — and puts it <b>in front of the subject</b>.</p>
        <div class="legend">
          <div class="lg c-who"><b>Who?</b><span>She</span></div>
          <div class="lg c-does"><b>Does what?</b><span>works</span></div>
          <div class="lg c-where"><b>Where?</b><span>at a bookstore.</span></div>
        </div>
        <div class="arrow">↓ question: add the helper in front — the verb loses its -s</div>
        <div class="legend">
          <div class="lg c-aux"><b>Helper</b><span>Does</span></div>
          <div class="lg c-who"><b>Who?</b><span>she</span></div>
          <div class="lg c-does"><b>Does what?</b><span>work</span></div>
          <div class="lg c-where"><b>Where?</b><span>at a bookstore?</span></div>
        </div>
        <table class="qtable">
          <tr><th>helper</th><th>subject</th><th>verb (no -s!)</th><th></th></tr>
          <tr><td><b>Do</b></td><td>I / you / we / they</td><td>work?</td><td>Do you like shopping?</td></tr>
          <tr><td><b>Does</b></td><td>he / she / it</td><td>work?</td><td>Does she work here?</td></tr>
        </table>
        <div class="note">⚠️ The <b>-s</b> moves to the helper: <s>Does she works?</s> → <b>Does she work?</b> · <s>Do he like?</s> → <b>Does he like?</b></div>
        <h3>Question word + helper</h3>
        <div class="legend">
          <div class="lg c-qw"><b>Question word</b><span>Where</span></div>
          <div class="lg c-aux"><b>Helper</b><span>does</span></div>
          <div class="lg c-who"><b>Who?</b><span>your mom</span></div>
          <div class="lg c-does"><b>Does what?</b><span>buy</span></div>
          <div class="lg c-what"><b>What?</b><span>bread?</span></div>
        </div>
        <div class="colloc">
          <div><b>What do you do?</b> = What’s your job?</div>
          <div><b>How often do you</b> go shopping?</div>
          <div><b>How much does</b> it cost?</div>
          <div><b>What time does</b> the store open?</div>
        </div>
        <h3>Short answers</h3>
        <div class="colloc">
          <div>Do you like it? — Yes, I <b>do</b>. / No, I <b>don’t</b>.</div>
          <div>Does she work here? — Yes, she <b>does</b>. / No, she <b>doesn’t</b>.</div>
        </div>
        <h3>Which helper? The first verb decides (Unit 44)</h3>
        <div class="rcard">
          <div><b>be</b><span>She <u>is</u> tired. → <b>Is</b> she tired? · They <u>are</u> at home. → <b>Are</b> they at home?</span></div>
          <div><b>can</b><span>I <u>can</u> pay with a card. → <b>Can</b> I pay with a card?</span></div>
          <div><b>have</b><span>You have a bag. → <b>Do</b> you have a bag? 🇺🇸 <i>(UK: Have you got…?)</i></span></div>
          <div><b>present</b><span>He works here. → <b>Does</b> he work here?</span></div>
          <div><b>past</b><span>You bought it. → <b>Did</b> you buy it?</span></div>
        </div>
        <div class="note">⚠️ Never two helpers: <s>Do you are…?</s> <s>Does she can…?</s> <s>Is she work…?</s> · Negative questions: <b>Why don’t you</b> pay with a card? · <b>Why isn’t</b> the store open?</div>`
    },

    {
      type: "build", label: "grammar · build the question", sticker: "shop",
      title: "Put the helper in front",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { aux: "Do", who: "you", does: "like", wrong: "likes", what: "shopping", end: "?" },
        { aux: "Does", who: "your mom", does: "buy", wrong: "buys", what: "bread", where: "at the bakery", end: "?" },
        { aux: "Does", who: "the store", does: "open", wrong: "opens", when: "on Sundays", end: "?" },
        { qw: "Where", aux: "do", who: "you", does: "buy", what: "your clothes", wrong: "does", end: "?" },
        { qw: "What time", aux: "does", who: "the grocery store", does: "close", wrong: "closes", end: "?" },
        { qw: "How often", aux: "do", who: "your parents", does: "go", where: "to the supermarket", wrong: "does", end: "?" },
        { qw: "How much", aux: "does", who: "this jacket", does: "cost", wrong: "costs", end: "?" },
        { aux: "Does", who: "your brother", does: "work", where: "at a department store", wrong: "works", end: "?" },
        { qw: "What", aux: "does", who: "your sister", does: "read", wrong: "reads", when: "in the evening", end: "?" },
        { aux: "Do", who: "they", does: "sell", what: "stamps", where: "at the pharmacy", wrong: "Does", end: "?" }
      ]
    },

    {
      type: "gapfill", label: "grammar · do / does + short answers", sticker: "receipt",
      title: "Do or does?",
      instructions: "Write <b>do, does, don’t</b> or <b>doesn’t</b>.",
      items: [
        { text: "“[[Do]] you often go to the bookstore?” “Yes, I [[do]].”", why: "you → do; short answer: Yes, I do." },
        { text: "“[[Does]] your dad like shopping?” “No, he [[doesn’t|doesnt|does not]]. He hates it.”", why: "he → does; No, he doesn’t." },
        { text: "What time [[does]] the post office open?", why: "the post office = it → does." },
        { text: "“[[Do]] your friends buy clothes online?” “Yes, they [[do]].”", why: "your friends = they → do." },
        { text: "How much [[does]] a stamp cost?", why: "a stamp = it → does." },
        { text: "“[[Does]] this store sell newspapers?” “No, it [[doesn’t|doesnt|does not]]. Try the newsstand.”", why: "this store = it → does / doesn’t." },
        { text: "Where [[do]] you and your mom usually buy meat?", why: "you and your mom = plural → do." },
        { text: "Why [[don’t|dont|do not]] you pay with your phone? It’s faster.", why: "Why don’t you…? = a suggestion." },
        { text: "“[[Does]] Masha’s sister work at the pharmacy?” “Yes, she [[does]].”", why: "Masha’s sister = she → does." },
        { text: "How often [[do]] people in your family go to the grocery store?", why: "people → do." }
      ]
    },

    {
      type: "mcq", label: "grammar · which helper? (Unit 44)", sticker: "coin",
      title: "Look at the first verb",
      instructions: "Choose the right word to start the question. Look at the verb in the sentence first!",
      items: [
        { q: "___ the store open on Sundays? — Yes, from 10 to 5.", options: ["Does", "Is", "Do"], answer: 1 },
        { q: "___ the store open at 9 on Sundays? — No, at 10.", options: ["Does", "Is", "Are"], answer: 0 },
        { q: "___ I pay with a debit card, please?", options: ["Do", "Am", "Can"], answer: 2 },
        { q: "___ you have this T-shirt in a smaller size?", options: ["Do", "Have", "Are"], answer: 0 },
        { q: "___ you buy anything at the gift shop yesterday?", options: ["Do", "Did", "Were"], answer: 1 },
        { q: "___ these sneakers on sale? They look cheap.", options: ["Do", "Does", "Are"], answer: 2 },
        { q: "___ your parents shop at the market or at the grocery store?", options: ["Do", "Are", "Does"], answer: 0 },
        { q: "Why ___ the checkout open? There’s nobody here!", options: ["doesn’t", "isn’t", "don’t"], answer: 1 },
        { q: "How much ___ these apples cost?", options: ["is", "does", "do"], answer: 2 },
        { q: "___ she working at the bakery today?", options: ["Does", "Is", "Do"], answer: 1 }
      ]
    },

    {
      type: "correct", label: "fix it · questions", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each question has <b>one</b> mistake. Write the correct question.",
      items: [
        { wrong: "Does she works at a grocery store?", answers: ["Does she work at a grocery store?"] },
        { wrong: "Do your brother like shopping?", answers: ["Does your brother like shopping?"] },
        { wrong: "Where you buy your sneakers?", answers: ["Where do you buy your sneakers?"] },
        { wrong: "How much this bag costs?", answers: ["How much does this bag cost?", "How much is this bag?"] },
        { wrong: "What time the store closes?", answers: ["What time does the store close?"] },
        { wrong: "Do you are tired after shopping?", answers: ["Are you tired after shopping?"] },
        { wrong: "Does she can pay in cash?", answers: ["Can she pay in cash?"] }
      ]
    },

    {
      type: "rephrase", label: "grammar · ask about the dark box", sticker: "moneybag",
      title: "Ask the question",
      instructions: "Write a question with the word in the dark box. Use <b>do</b> or <b>does</b>.",
      items: [
        { prompt: "Masha’s mom works at the pharmacy.", key: "WHERE", answers: ["Where does Masha's mom work?"] },
        { prompt: "The bookstore closes at 8 o’clock.", key: "WHAT TIME", answers: ["What time does the bookstore close?", "When does the bookstore close?"] },
        { prompt: "I go to the grocery store twice a week.", key: "HOW OFTEN", answers: ["How often do you go to the grocery store?"] },
        { prompt: "This dress costs $40.", key: "HOW MUCH", answers: ["How much does this dress cost?", "How much is this dress?"] },
        { prompt: "My grandparents buy meat at the butcher shop.", key: "WHAT", answers: ["What do your grandparents buy at the butcher shop?"] },
        { prompt: "She pays with a credit card because it’s easy.", key: "WHY", answers: ["Why does she pay with a credit card?"] }
      ]
    },

    /* ================= 4 · AUTOMATICITY ================= */
    { type: "part", n: "04", icon: "cart", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve questions, twice each",
      instructions: "Write the full question and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "do / does?", prompt: "you / like / shopping", answers: ["Do you like shopping?"] },
        { cue: "do / does?", prompt: "she / work / here", answers: ["Does she work here?"] },
        { cue: "do / does?", prompt: "the store / open / on Sundays", answers: ["Does the store open on Sundays?"] },
        { cue: "where?", prompt: "where / you / buy / bread", answers: ["Where do you buy bread?"] },
        { cue: "how much?", prompt: "how much / it / cost", answers: ["How much does it cost?"] },
        { cue: "what time?", prompt: "what time / the bank / close", answers: ["What time does the bank close?"] },
        { cue: "how often?", prompt: "how often / your mom / go / shopping", answers: ["How often does your mom go shopping?"] },
        { cue: "can?", prompt: "I / pay / with a card", answers: ["Can I pay with a card?"] },
        { cue: "do / does?", prompt: "you / have / this / in a bigger size", answers: ["Do you have this in a bigger size?"] },
        { cue: "be?", prompt: "the pharmacy / open / now", answers: ["Is the pharmacy open now?"] },
        { cue: "can?", prompt: "I / try / this jacket / on", answers: ["Can I try this jacket on?"] },
        { cue: "short answer −", prompt: "Does he like it? No, …", answers: ["No, he doesn't.", "No, he doesn’t.", "He doesn't.", "He doesn’t."] }
      ]
    },

    /* ================= 5 · WRITING ================= */
    { type: "part", n: "05", icon: "pencil", title: "Writing", text: "Your own shopping survey." },

    {
      type: "write", label: "writing · shopping survey", sticker: "notepad",
      title: "Shopping survey",
      instructions: "Write <b>6 questions</b> to ask me about shopping. Use <b>do / does</b> and question words. Then I answer, and you ask one more question about my answer.",
      words: ["bakery", "butcher", "pharmacy", "drugstore", "newsstand", "post office", "bookstore", "gift shop", "grocery store", "supermarket", "department store", "floor", "checkout", "register", "cash", "card", "change", "receipt", "bag", "size", "color", "try on", "cost"],
      checks: [
        { label: "6 questions (each ends with ?)", pattern: "\\?", min: 6 },
        { label: "do / does after a question word — 3 times", pattern: "\\b(where|what|when|how often|how much|why|who|which)\\s+(time\\s+)?(do|does)\\b", min: 3 },
        { label: "one question with Can / Is / Are", pattern: "(^|[.?!]\\s*)(can|is|are)\\b", min: 1 },
        { label: "4+ shopping words (they light up above)", words: 4 }
      ],
      sample: "Where do you usually buy your clothes? How often do you go to the grocery store? Does your family buy bread at a bakery? How much do you usually spend on a present? Do you pay with a card or in cash? Is there a department store near your home?"
    },

    /* ================= 6 · SELF-CHECK ================= */
    { type: "part", n: "06", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
