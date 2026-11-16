const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "sweet-16-katie-confusables",
  kicker: "birthday plans · party words",
  titleHTML: 'Sweet <em>16</em> is coming!',
  title: "Sweet 16 is coming!",
  subtitle: "Your birthday is almost here. Balloons, plans, presents — and all the tricky words you already know.",
  stickers: ["balloon", "bdcake"],
  confetti: ["balloon", "party", "gift", "sparkles", "confettiball", "star"],

  sections: [

    /* ================= 1 · BALLOONS ================= */
    { type: "part", n: "01", icon: "balloon", title: "Pop the balloons", text: "Sixteen balloons — sixteen quick questions about your birthday plans." },

    {
      type: "balloons", label: "speaking · quick questions", sticker: "balloon",
      title: "Sixteen balloons for sixteen years",
      instructions: "Pop a balloon and answer fast — one or two sentences. Then pop the next one!",
      banner: "🎈 KATIE’S BIRTHDAY IS COMING! 🎈",
      items: [
        "What are you going to do on your birthday?", "Who are you going to invite?", "Where is the party going to be?", "What kind of cake do you want?",
        "What are you going to wear?", "What present do you really want?", "Big party or small party?", "What are you going to eat?",
        "Who is going to make the cake?", "Do you like surprises?", "What will your parents say, do you think?", "What are you going to do in the evening?",
        "What song will be the song of the night?", "Who will call you first, do you think?", "What are you going to wish for? (Don’t tell me!)", "Your birthday in one word — what do you hope?"
      ]
    },

    /* ================= 2 · TALK ================= */
    { type: "part", n: "02", icon: "mic", title: "Birthday talk", text: "Longer answers now. I ask, you answer — then you ask me." },

    {
      type: "wheel", label: "speaking · birthday interview", sticker: "mic",
      title: "Spin the birthday wheel",
      start: "Spin the wheel. Answer in 3–4 sentences — then ask me the same question!",
      items: [
        { icon: "🌅", short: "the story", q: "Describe your perfect birthday — from the morning to the night. What are you going to <b>do</b> first?" },
        { icon: "👯", short: "big or small", q: "Are you going to have a <b>big</b> party or a <b>small</b> one? What do you prefer — and why?", tip: "a small party · a big / huge party · just a few friends" },
        { icon: "🎁", short: "presents", q: "What’s the best present someone could <b>make</b> for you — not buy?" },
        { icon: "🏠", short: "traditions", q: "What birthday traditions do you have at <b>home</b>? Are you going to keep them this year?" },
        { icon: "⭐", short: "best ever", q: "What’s the best birthday you’ve ever had? What happened that day?" },
        { icon: "🔑", short: "16", q: "How do you think 16 will feel? What will you be able to <b>do</b> that you can’t <b>do</b> now?" },
        { icon: "💬", short: "words", q: "What do you want your friends to <b>say</b> in their birthday messages? Who always <b>tells</b> the funniest stories?" },
        { icon: "🗺️", short: "this year", q: "What’s one <b>big</b> plan for this year? What do you want to <b>make</b> happen?" }
      ]
    },

    {
      type: "rule", label: "speaking · party pics", sticker: "sparkles",
      title: "Describe the party",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Half a cake with tiny sugar flowers" src="${IMG("halfcake.jpg")}"><figcaption><b>A</b><small>Photo: Anna.Massini · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A sparkler burning in the dark" src="${IMG("sparkler.jpg")}"><figcaption><b>B</b><small>Photo: High Contrast · CC BY 3.0 DE · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo wide"><img loading="lazy" alt="A green birthday balloon and a gift bag" src="${IMG("balloon.jpg")}"><figcaption><b>C</b><small>Photo: Friedrich Haag · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Photo A: what happened to the cake? Who do you think ate the other half? Describe the <b>tiny</b> flowers. Do you want a cake like this?</li>
          <li>Photo B: are you going to have sparklers or candles on your cake? How many? What else <b>made</b> your party special?</li>
          <li>Photo C: is it a <b>big</b> or a <b>little</b> balloon? How old is the birthday kid? What’s in the bag, do you think?</li>
        </ol>`
    },

    /* ================= 3 · PRESENTS ================= */
    { type: "part", n: "03", icon: "gift", title: "Presents", text: "Ten presents. Every present is a tricky word." },

    {
      type: "gifts", label: "words · unwrap the presents", sticker: "ribbon",
      title: "Unwrap ten presents",
      instructions: "Tap a present to open it. Choose the right word. Then press <b>Check</b>.",
      items: [
        { q: "Everybody ___ “Happy birthday!” when I came into the kitchen.", options: ["said", "told", "spoke"], answer: 0 },
        { q: "My grandma ___ me a funny story about the day I was born.", options: ["said", "told", "talked"], answer: 1 },
        { q: "My cousin from Canada can ___ three languages.", options: ["talk", "tell", "speak"], answer: 2 },
        { q: "Mom ___ a huge chocolate cake for me.", options: ["made", "did", "took"], answer: 0 },
        { q: "After the party, Dad and I ___ the dishes.", options: ["made", "did", "took"], answer: 1 },
        { q: "Close your eyes and ___ a wish!", options: ["do", "say", "make"], answer: 2 },
        { q: "It was a ___ party — everybody loved it!", options: ["great", "large", "tall"], answer: 0 },
        { q: "My best friend gave me a ___ gold heart on a chain — it’s so small and cute!", options: ["large", "tiny", "great"], answer: 1 },
        { q: "We had the party at ___, not at a café.", options: ["house", "the home", "home"], answer: 2 },
        { q: "My little brother dropped his ice cream on the ___ in the park.", options: ["ground", "earth", "land"], answer: 0 }
      ]
    },

    {
      type: "dragwords", label: "words · group chat", sticker: "phone2",
      title: "The birthday group chat",
      instructions: "Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["say", "large"],
      items: [
        "LENA: Katie, your birthday is SO soon!!! 🎉 What do you want to [[do]]?",
        "KATIE: Mom wants me to stay [[home]] for a family dinner, but I want to go out too 😅",
        "LENA: Let’s [[make]] a plan! Pizza and a movie?",
        "MAX: Don’t forget to [[tell]] us the address!",
        "KATIE: OK! It’s going to be a [[small]] party — just five people.",
        "MAX: Can my [[little]] brother come too? He’s 10 😂",
        "LENA: Haha, no brothers! We need to [[talk]] about girl stuff 🤫",
        "KATIE: It’s going to be [[great]]! See you at 7 🥳"
      ]
    },

    {
      type: "sort", label: "words · make or do?", sticker: "cupcake",
      title: "Party jobs: make or do?",
      instructions: "Who does what at the party? Put each job in the right box.",
      categories: [
        { name: "make", words: ["a cake", "a wish", "a mess", "a playlist", "new friends"] },
        { name: "do", words: ["the dishes", "the shopping", "your hair", "your best", "a quiz"] }
      ]
    },

    /* ================= 4 · WISHES ================= */
    { type: "part", n: "04", icon: "crown", title: "16 wishes", text: "Your plans for the year." },

    {
      type: "write", label: "writing · my year of 16", sticker: "crown",
      title: "My year of 16",
      instructions: "Write <b>5 wishes or plans</b> for your year of 16. Start with <i>This year I want to…</i> / <i>I hope…</i> / <i>I’m going to…</i> Then read them to me.",
      words: ["make", "do", "speak", "talk", "tell", "say", "big", "large", "great", "small", "little", "tiny", "home", "house", "ground", "earth", "land"],
      checks: [
        { label: "5 wishes (5 sentences)", sentences: 5 },
        { label: "make or do — twice", pattern: "\\b(make|makes|made|do|does|did|doing|making)\\b", min: 2 },
        { label: "speak / talk / tell / say — once", pattern: "\\b(speak|talk|tell|say|spoke|talked|told|said)\\b" },
        { label: "4+ words from the box (they light up)", words: 4 }
      ],
      sample: "This year I want to speak English without stopping and thinking. I’m going to make new friends at my new club. I hope my family can travel to a big city by the sea. I want to do my best on all my tests. I’m going to tell my parents more about my plans and talk to them more."
    },

    { type: "part", n: "05", icon: "loveletter", title: "A letter for you", text: "From me. Open it." },

    {
      type: "letter", label: "for you, Katie", sticker: "loveletter",
      title: "You’ve got mail 💌",
      to: "for Katie",
      hint: "Tap the envelope to open your letter.",
      html: `
        <p class="hi">Dear Katie,</p>
        <p>Happy 16th birthday! 🎂 Sixteen is a special number — you’re not a little girl anymore, but the best part of the story is only beginning.</p>
        <p>I wish you <b>friends</b> who make you laugh until your stomach hurts, who listen when you need to <b>talk</b>, and who stay with you on the good days and on the bad ones. Real friends are a <b>great</b> treasure — keep them close.</p>
        <p>I wish you to <b>love yourself</b>. Not only when everything goes well, but also on the days when you make mistakes. You are so much more than your grades, your tests or your tenses 😉 — you are kind, funny and brave, and you deserve your own kindness too.</p>
        <p>I wish you to feel all your <b>emotions</b> — joy, excitement, even sadness and anger. They are all okay. They all make you who you are. Don’t hide them: <b>say</b> what you feel and <b>tell</b> the people you trust.</p>
        <p>Big <b>exams</b> are coming — sooner than it seems. I really believe you can pass them, and pass them well. You already have everything you need inside you.</p>
        <p>So I wish you <b>hard work</b> on the days when you don’t feel like it, <b>persistence</b> when something doesn’t work the first time, and the patience to keep going one small step at a time. Big results are <b>made</b> of <b>tiny</b> everyday efforts — and you’re already <b>doing</b> them.</p>
        <p>I’m so proud of how far you’ve come, and I’m really happy to be a part of your journey. Have the most wonderful birthday — you deserve it!</p>
        <p class="sig">With love,<br>your English teacher 💜</p>`
    },

    /* ================= 5 · SELF-CHECK ================= */
    { type: "part", n: "06", icon: "star", title: "Self-check", text: "Which words still need practice?" },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
