const IMG = f => "assets/img/" + f;
const AH = ["A", "B", "C", "D", "E", "F", "G", "H"];
const LESSON = {
  id: "room-with-a-view-evu17-nmt3",
  kicker: "the place where you live · tenses check · NMT Task 3",
  titleHTML: 'Room with a <em>view</em>',
  title: "Room with a view",
  subtitle: "Apartment or house? Upstairs or downstairs? Talk about your home — and read notices like on the NMT.",
  stickers: ["house", "pin"],
  confetti: ["house", "star", "sparkles", "check", "oldkey"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "house", title: "Warm-up", text: "City or country?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "house",
      title: "Two homes",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A city street with apartments and balconies above stores" src="${IMG("castro.jpg")}"><figcaption><b>A</b><small>Photo: Dllu · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A grandmother cooking on a fire in an old country kitchen" src="${IMG("grandmakitchen.jpg")}"><figcaption><b>B</b><small>Photo: Mithun Kunwar (edit: Radomianin) · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: These are apartments above stores, with small <b>balconies</b>. Would you like to live <b>downtown</b>?</li>
          <li>B: This is an old house in the country. Is it easy or difficult to <b>heat</b> a house like this in winter?</li>
          <li>Do you live in a house or an <b>apartment</b>? What <b>floor</b> is it on?</li>
          <li>What can you see from your window? Do you have a nice <b>view</b>?</li>
        </ol>`
    },

    /* ================= 2 · VOCABULARY ================= */
    { type: "part", n: "02", icon: "oldkey", title: "The place where you live", text: "English Vocabulary in Use · Unit 17" },

    {
      type: "rule", label: "vocabulary · home", sticker: "oldkey",
      title: "Location, building, house",
      html: `
        <div class="ff">
          <div><b class="t">📍 location</b><b>location</b> = the place and position · <b>downtown</b> / in the city <b>center</b> ↔ <b>on the outskirts</b> (on the edge of town) · <b>move</b> (change the place where you live) · <b>space</b> (an empty area to use) · a nice <b>view</b> (what you can see)</div>
          <div><b class="t">🏢 our apartment</b>We <b>rent</b> (pay every month) ↔ we <b>own</b> (we bought it) · an <b>apartment building</b> · <b>upstairs</b> ↔ <b>downstairs</b> · the <b>top floor</b> · the <b>elevator</b> · the <b>stairs</b> · a <b>balcony</b> · <b>air conditioning</b> (keeps the air cool)</div>
          <div><b class="t">🏡 a house in the country</b>a <b>cottage</b> (small, old, pretty) · <b>charming</b> (pleasant) · it <b>has character</b> (interesting, unusual) · <b>dark</b> ↔ <b>light</b> · difficult to <b>heat</b> (make warm) · <b>central heating</b> · the <b>front door</b> · the <b>steps</b></div>
        </div>
        <div class="note">🇺🇸 In the US, the <b>first floor</b> is at street level (British: ground floor). So a British “second floor” is an American <b>third floor</b>. · British flat = <b>apartment</b>, lift = <b>elevator</b>, block of flats = <b>apartment building</b>.</div>`
    },

    {
      type: "match", label: "vocabulary · match", sticker: "puzzle",
      title: "Match the words",
      instructions: "Match each word with its meaning — drag, or tap one and then the other.",
      pairs: [
        ["rent", "pay money every month to live there"],
        ["own", "it’s yours — you bought it"],
        ["on the outskirts", "on the edge of town"],
        ["move", "change the place where you live"],
        ["view", "what you can see from a place"],
        ["downstairs", "on a lower level of a building"],
        ["elevator", "takes people up and down"],
        ["cottage", "a small, old, pretty house in the country"],
        ["central heating", "a system that heats the whole house"],
        ["charming", "pleasant and attractive"]
      ]
    },

    {
      type: "sort", label: "plus or minus?", sticker: "house",
      title: "Would you rent it?",
      instructions: "Is it usually a <b>good</b> or a <b>bad</b> thing about a home?",
      categories: [
        { name: "👍 good", words: ["great views", "lots of space", "charming", "has character", "light", "a balcony", "central heating"] },
        { name: "👎 bad", words: ["dark", "noisy", "difficult to heat", "no elevator", "tiny kitchen", "far from everything", "no air conditioning"] }
      ]
    },

    {
      type: "gapfill", label: "vocabulary · one word", sticker: "oldkey",
      title: "Our new place",
      instructions: "Write <b>one</b> word in each gap.",
      items: [
        { text: "We don’t own our apartment. We [[rent]] it — it’s $900 a month.", why: "rent = pay every month." },
        { text: "We live on the outskirts of [[town]], but the bus is fast.", why: "on the outskirts of town." },
        { text: "Our apartment is on the tenth floor, so we usually take the [[elevator]].", why: "elevator (British: lift)." },
        { text: "A nice old man lives [[downstairs]], on the ninth floor.", why: "downstairs = lower." },
        { text: "Two noisy students live [[upstairs]], on the eleventh floor.", why: "upstairs = higher." },
        { text: "In summer we sit outside on the [[balcony]] and have dinner.", why: "a balcony." },
        { text: "It’s so hot in July! We really need air [[conditioning]].", why: "air conditioning keeps the air cool." },
        { text: "My old room was tiny. This one has much more [[space]].", why: "space = an empty area to use." },
        { text: "Our grandparents’ cottage is old, so it’s difficult to [[heat]] in winter.", why: "heat = make warm." },
        { text: "We [[moved]] here three years ago, when my brother was born.", why: "move = change where you live." }
      ]
    },

    /* ================= 3 · READING ================= */
    { type: "part", n: "03", icon: "openbook", title: "Reading", text: "A blog post." },

    {
      type: "tf2", label: "reading · a blog post", sticker: "openbook",
      title: "From a cottage to the 14th floor",
      instructions: "Read the post. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="art"><h4>From a cottage to the 14th floor</h4>
          <p>For twelve years my family lived in a cottage in a small village. It was charming and had lots of character, but it was quite dark inside, and it didn’t have central heating, so winters were hard.</p>
          <p>Last spring my mom got a job downtown, so we moved to the city. Now we rent an apartment on the fourteenth floor of a new apartment building. It isn’t very big, but it’s light and has amazing views of the river.</p>
          <p>The elevator is fast, but it often breaks, and then we have to use the stairs! A family with three little kids lives upstairs, so it’s noisy in the mornings. I miss the garden, but I love our balcony. In the evenings I sit there and watch the lights of the city.</p></div>`,
      items: [
        { q: "The family lived in the cottage for twelve years.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The cottage was very light inside.", answer: false, fix: ["It was quite dark inside.", "It had big windows.", "It was on the fourteenth floor."], fixAnswer: 0 },
        { q: "The cottage had central heating.", answer: false, fix: ["It had air conditioning.", "It didn’t have central heating.", "It was easy to heat."], fixAnswer: 1 },
        { q: "They moved because of her mom’s new job.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The family owns the new apartment.", answer: false, fix: ["They bought it last spring.", "Her grandparents own it.", "They rent the apartment."], fixAnswer: 2 },
        { q: "The new apartment is big and dark.", answer: false, fix: ["It isn’t very big, but it’s light.", "It’s big and light.", "It’s small and dark."], fixAnswer: 0 },
        { q: "Sometimes they have to use the stairs.", answer: true, fix: [], fixAnswer: 0 },
        { q: "A quiet old couple lives upstairs.", answer: false, fix: ["Nobody lives upstairs.", "A family with three little kids lives upstairs.", "Students live downstairs."], fixAnswer: 1 }
      ]
    },

    /* ================= 4 · GRAMMAR CHECK ================= */
    { type: "part", n: "04", icon: "package", title: "Tenses check", text: "Present perfect, past simple, used to, continuous, going to." },

    {
      type: "mcq", label: "grammar review · choose", sticker: "package",
      title: "Moving day",
      instructions: "Choose the correct form. Look for the time words first.",
      items: [
        { q: "We ___ in this apartment since 2022.", options: ["live", "have lived", "lived"], answer: 1 },
        { q: "Before that, we ___ in a small house on the outskirts.", options: ["used to live", "have lived", "are living"], answer: 0 },
        { q: "We ___ here because my mom got a new job downtown.", options: ["have moved", "move", "moved"], answer: 2 },
        { q: "___ you ever ___ in an apartment building?", options: ["Did … live", "Have … lived", "Do … live"], answer: 1 },
        { q: "Right now my dad ___ the balcony green.", options: ["is painting", "paints", "painted"], answer: 0 },
        { q: "Our neighbors upstairs ___ loud music every Friday night.", options: ["are playing", "played", "play"], answer: 2 },
        { q: "I ___ my room yet. It’s still a mess!", options: ["haven’t cleaned", "didn’t clean", "don’t clean"], answer: 0 },
        { q: "While we ___ the boxes upstairs, it started to rain.", options: ["carried", "have carried", "were carrying"], answer: 2 },
        { q: "Look at that box! It ___ fall off the table.", options: ["is going to", "goes to", "will to"], answer: 0 },
        { q: "My grandparents ___ their cottage in 1985.", options: ["have bought", "bought", "were buying"], answer: 1 }
      ]
    },

    /* ================= 5 · NMT TASK 3 ================= */
    { type: "part", n: "05", icon: "stopwatch", title: "NMT · Task 3 against the clock", text: "Press ⏱ Timer → 8 min. Then start." },

    {
      type: "rule", label: "NMT · Task 3 · sentences A–H", sticker: "pin",
      title: "Read A–H first",
      html: `
        <div class="note">⏱ Real test speed: about <b>8 minutes</b> for six short texts. Find the key words in A–H first. Two sentences are extra — don’t match a text just because it has the same word!</div>
        <div class="nmt3">
          <div><b>A</b>You can get something for free.</div>
          <div><b>B</b>Something isn’t working at the moment.</div>
          <div><b>C</b>You must be quiet at certain times.</div>
          <div><b>D</b>Somebody wants to share a home.</div>
          <div><b>E</b>Somebody has found something.</div>
          <div><b>F</b>You can buy things cheaply this weekend.</div>
          <div><b>G</b>You need to move your car.</div>
          <div><b>H</b>You can see a home before you rent it.</div>
        </div>`
    },

    {
      type: "mcq", label: "NMT · Task 3 · timed", sticker: "stopwatch",
      title: "Notices in the building",
      instructions: "Which sentence (A–H) matches each text? Two letters are extra.",
      items: [
        { q: `<div class="notice"><b>11 · ROOMMATE WANTED</b><br>Student looking for a friendly girl to live with me in a two-bedroom apartment downtown. $400 a month, bills included. Text Mia.</div>`, options: AH, answer: 3 },
        { q: `<div class="notice"><b>12 · QUIET HOURS</b><br>Please remember: no loud music or parties between 10 p.m. and 7 a.m. Your neighbors need their sleep! — Building Manager</div>`, options: AH, answer: 2 },
        { q: `<div class="notice"><b>13 · ON THE STAIRS</b><br>Keys with a small blue teddy bear on them were on the third floor this morning. Ask at apartment 4B.</div>`, options: AH, answer: 4 },
        { q: `<div class="notice"><b>14 · MOVING SALE</b><br>We’re moving to Canada! Furniture, lamps, books and kitchen things at low prices. Saturday and Sunday, 9–3, 15 Oak Street.</div>`, options: AH, answer: 5 },
        { q: `<div class="notice"><b>15 · PARKING LOT</b><br>Workers are cleaning the parking lot on Tuesday morning. All cars must be gone by 8 a.m.</div>`, options: AH, answer: 6 },
        { q: `<div class="notice"><b>16 · SORRY!</b><br>Because of repairs, there is no hot water in the building today. It will be back tomorrow at 9 a.m.</div>`, options: AH, answer: 1 }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Over to you", text: "Spin it — answer, then ask me the same question." },

    {
      type: "wheel", label: "speaking · my home", sticker: "speech",
      title: "Spin the house",
      start: "Spin the wheel. Answer in 3–4 sentences. Use the words from today.",
      items: [
        { icon: "🏢", short: "house or apartment", q: "Do you live in a house or an apartment? What floor is it on?" },
        { icon: "📍", short: "location", q: "Is your home downtown or on the outskirts? Do you like the location?" },
        { icon: "🪟", short: "view", q: "What’s the view from your window? What would be your dream view?" },
        { icon: "👂", short: "neighbors", q: "Who lives upstairs and downstairs? Are your neighbors noisy?" },
        { icon: "📦", short: "moving", q: "Have you ever moved? How long have you lived in your home?" },
        { icon: "🔥", short: "winter", q: "Is your home easy to heat? Do you have central heating or air conditioning?" },
        { icon: "🏡", short: "cottage", q: "Would you like to live in a cottage in the country? Why or why not?" },
        { icon: "🔑", short: "rent or own", q: "In the future, do you want to rent an apartment or own a house?" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "zap", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the word and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "🇺🇸", prompt: "flat →", answers: ["apartment", "an apartment"] },
        { cue: "🇺🇸", prompt: "lift →", answers: ["elevator", "an elevator"] },
        { cue: "🇺🇸", prompt: "block of flats →", answers: ["apartment building", "an apartment building"] },
        { cue: "opposite", prompt: "upstairs ↔", answers: ["downstairs"] },
        { cue: "opposite", prompt: "rent ↔", answers: ["own"] },
        { cue: "opposite", prompt: "dark ↔", answers: ["light", "bright"] },
        { cue: "opposite", prompt: "downtown ↔ on the ___", answers: ["outskirts", "on the outskirts"] },
        { cue: "make warm", prompt: "h___", answers: ["heat"] },
        { cue: "what you see", prompt: "a nice v___", answers: ["view"] },
        { cue: "change home", prompt: "we m___ last year", answers: ["moved", "we moved last year"] },
        { cue: "small old house", prompt: "a c___", answers: ["cottage", "a cottage"] },
        { cue: "keeps air cool", prompt: "air c___", answers: ["conditioning", "air conditioning"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Describe your home." },

    {
      type: "write", label: "writing · my home", sticker: "pencil",
      title: "Welcome to my home",
      instructions: "Write <b>7–8 sentences</b> about your home: location, the building, floor, view, neighbors, good and bad things. Add one sentence with <b>have lived … for / since</b> and one about your <b>dream home</b>.",
      words: ["apartment", "house", "location", "downtown", "outskirts", "floor", "elevator", "balcony", "view", "upstairs", "downstairs", "space", "light", "heat", "rent", "own", "moved"],
      checks: [
        { label: "have lived … for / since", pattern: "\\b(have|has|'ve|’ve)\\s+lived\\b[\\s\\S]*?\\b(for|since)\\b" },
        { label: "5+ home words from the list (they light up)", words: 5 },
        { label: "at least 7 sentences", sentences: 7 }
      ],
      sample: "I live in an apartment building on the outskirts of Kyiv. We own our apartment, and it’s on the seventh floor. There’s an elevator, but I usually take the stairs. Our apartment isn’t very big, but it’s light and has a nice view of a park. A family with a big dog lives upstairs, so it’s sometimes noisy. I’ve lived here since I was five. My dream home is a cottage near the sea with a big balcony."
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
