const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "deep-dive-u4-01",
  kicker: "unit 4 · underwater mysteries",
  titleHTML: 'Deep <em>Dive</em>',
  title: "Deep Dive",
  subtitle: "Journeys, suggestions and the way things used to be.",
  stickers: ["diving-mask", "fish-tropical"],
  confetti: ["bubbles", "fish", "shell", "star", "octopus"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "diving-mask", title: "Warm-up", text: "Then and now under the sea." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "anchor",
      title: "Two photos, 100 years apart",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="An old brass diving helmet" src="${IMG("diving-helmet.jpg")}"><figcaption><b>A</b> · an old diving helmet<small>Photo: MelnikovI · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="The bow of the Titanic on the sea floor" src="${IMG("titanic-bow.jpg")}"><figcaption><b>B</b> · the bow of the Titanic, 3,800 m deep<small>Photo: NOAA / IFE / URI · public domain</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Look at photo A. How do you think divers <b>used to</b> breathe underwater? Why was it dangerous?</li>
          <li>Photo B was taken by a robot, not a person. Why do people still want to explore wrecks like this?</li>
          <li>Would you rather go on a real <b>journey</b> to the bottom of the sea or take a <b>virtual</b> tour? Why?</li>
          <li>What sea mysteries do you know? Do you believe any of them?</li>
        </ol>`
    },

    /* ================= 2 · WORDS ================= */
    { type: "part", n: "02", icon: "compass", title: "Words", text: "Ten words from the unit and the words they go with." },

    {
      type: "rule", label: "vocabulary · collocations", sticker: "scroll",
      title: "Words travel in pairs",
      html: `
        <p>Learn these words <b>with their partners</b> — that is how you will hear them.</p>
        <div class="colloc">
          <div><b>make</b> an attempt (to do sth)</div>
          <div><b>take</b> / <b>miss</b> an opportunity</div>
          <div><b>set off</b> on a journey</div>
          <div><b>reach</b> a destination <i>(no “to”!)</i></div>
          <div>an expert <b>on</b> / <b>in</b> sth</div>
          <div><b>go</b> online · a virtual tour</div>
          <div><b>transmit</b> a signal / a message / live video</div>
          <div>months <b>of</b> preparation</div>
          <div><b>make sure</b> (that) + sentence</div>
          <div><b>find out</b> about sth / why / how</div>
        </div>
        <div class="note">⚠️ <b>journey</b> = travelling from A to B. <b>trip</b> = you go and come back. You <b>reach</b> a place, but you <b>arrive at / in</b> a place.</div>`
    },

    {
      type: "match", label: "vocabulary · match", sticker: "puzzle",
      title: "Match the words",
      instructions: "Drag each meaning to its word — or tap a meaning, then tap a word.",
      pairs: [
        ["attempt", "an effort to do something difficult"],
        ["destination", "the place you are travelling to"],
        ["expert", "a person who knows a lot about a subject"],
        ["journey", "travelling from one place to another"],
        ["opportunity", "a chance to do something"],
        ["virtual", "made to look real by a computer"],
        ["transmit", "to send a signal by radio or the internet"],
        ["preparation", "work you do to get ready for something"],
        ["find out", "to discover a fact or information"],
        ["make sure", "to check that something is true or will happen"]
      ]
    },

    {
      type: "dragwords", label: "vocabulary · in a text", sticker: "ship",
      title: "Live from the deep",
      instructions: "Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["blog", "message"],
      items: [
        "Last summer, a team of scientists made a third [[attempt]] to film a rare shark near the Galápagos Islands.",
        "The [[journey]] from the port to the dive site took eleven hours by boat.",
        "Their final [[destination]] was a cold, dark canyon 400 metres below the surface.",
        "Months of [[preparation]] went into the dive: tests, maps and safety checks.",
        "Before every dive, the captain had to [[make sure]] that the submarine’s batteries were full.",
        "A shark [[expert]] from Ecuador joined the crew to identify the animals.",
        "Cameras on the submarine could [[transmit]] live video to a ship on the surface.",
        "Thousands of students went online and took a [[virtual]] tour of the canyon from their classrooms.",
        "“It’s a fantastic [[opportunity]] to see a place that almost nobody has visited,” said one teacher.",
        "The scientists now hope to [[find out]] why the sharks return to the canyon every year."
      ]
    },

    {
      type: "mcq", label: "vocabulary · collocations", sticker: "shell",
      title: "Which word goes with it?",
      instructions: "Choose the word that sounds natural.",
      items: [
        { q: "They ___ an attempt to swim across the lake, but the water was too cold.", options: ["did", "made", "took", "had"], answer: 1 },
        { q: "Don’t miss this chance — ___ the opportunity to learn to dive!", options: ["make", "do", "take", "get"], answer: 2 },
        { q: "We ___ off on our journey at five in the morning.", options: ["set", "went", "put", "got"], answer: 0 },
        { q: "After three days at sea, the ship finally ___ its destination.", options: ["arrived", "reached", "got", "came"], answer: 1 },
        { q: "Could you ___ sure the camera is fully charged?", options: ["do", "take", "get", "make"], answer: 3 },
        { q: "I’d like to find ___ more about the people who survived the Titanic.", options: ["up", "out", "on", "off"], answer: 1 },
        { q: "My cousin ___ a blog about her diving trips around Greece.", options: ["writes", "does", "makes", "says"], answer: 0 },
        { q: "The ship’s radio ___ a message for help, but nobody heard it.", options: ["told", "said", "spoke", "transmitted"], answer: 3 },
        { q: "Good ___ is the key to a safe dive.", options: ["prepare", "preparation", "prepared", "preparing"], answer: 1 },
        { q: "The team finally succeeded ___ reaching the bottom of the trench.", options: ["to", "at", "in", "on"], answer: 2 }
      ]
    },

    /* ================= 3 · SUGGESTIONS ================= */
    { type: "part", n: "03", icon: "speech", title: "Suggestions", text: "Make a plan with a friend — and say no politely." },

    {
      type: "rule", label: "speaking · suggestions", sticker: "speech",
      title: "How about…? We could…",
      html: `
        <div class="grid2">
          <div class="box"><h4>+ verb-ing</h4><p><b>How about</b> going diving?<br><b>What about</b> visiting the aquarium?</p></div>
          <div class="box sand"><h4>+ verb (no “to”)</h4><p><b>We could</b> take a boat.<br><b>Why don’t we</b> stay here?<br><b>Shall we</b> go?<br><b>Let’s</b> find out.</p></div>
        </div>
        <div class="grid2">
          <div class="box pink"><h4>+ to + verb</h4><p><b>It would be great to</b> see a real wreck.</p></div>
          <div class="box"><h4>answering</h4><p>✓ Yes, good idea! / That sounds great.<br>~ I love that idea, <b>but</b>…<br>✗ I’m not sure about that. / <b>Unfortunately</b>, …</p></div>
        </div>
        <div class="note">⚠️ The three families never mix: <s>How about to go</s>, <s>We could to go</s>, <s>It would be great go</s>.</div>`
    },

    {
      type: "gapfill", label: "speaking · form", sticker: "bubbles",
      title: "Plan a weekend by the sea",
      instructions: "Put the verb in the correct form. Then read the explanation.",
      items: [
        { text: "How about [[visiting]] <span class=hint>(visit)</span> the new aquarium on Saturday?", why: "How about + -ing." },
        { text: "We could [[take]] <span class=hint>(take)</span> a boat trip to the island.", why: "We could + verb without “to”." },
        { text: "It would be great [[to see]] <span class=hint>(see)</span> a real shipwreck with our own eyes.", why: "It would be great + to + verb." },
        { text: "Why don’t we [[watch]] <span class=hint>(watch)</span> a documentary about the Titanic tonight?", why: "Why don’t we + verb without “to”." },
        { text: "What about [[going]] <span class=hint>(go)</span> snorkelling instead?", why: "What about = How about → + -ing." },
        { text: "Shall we [[book]] <span class=hint>(book)</span> the tickets online?", why: "Shall we + verb without “to”." },
        { text: "Let’s [[find out]] <span class=hint>(find out)</span> how much the trip costs.", why: "Let’s + verb without “to”." },
        { text: "Why don’t we [[set off]] <span class=hint>(set off)</span> early to avoid the traffic?", why: "Why don’t we + verb. Set off = start a journey." },
        { text: "A: Let’s go diving tomorrow! B: I love that idea, [[but]] I can’t swim very well.", why: "“I love that idea, but…” = a polite “no”." },
        { text: "A: How about going to the beach on Monday? B: [[Unfortunately]], I’ve got an exam that day.", why: "Unfortunately, … = a polite way to say you can’t." }
      ]
    },

    /* ================= 4 · GRAMMAR ================= */
    { type: "part", n: "04", icon: "hourglass", title: "Grammar", text: "used to and would: things that were true, but aren’t now." },

    {
      type: "rule", label: "theory · used to / would", sticker: "rewind",
      title: "The way things used to be",
      html: `
        <div class="tl" aria-hidden="true">
          <div class="sp" style="--x:4%;--w:58%"><b>used to / would</b><i>again and again</i></div>
          <div class="stop" style="--x:66%"><b>stopped</b></div>
          <div class="now"></div>
        </div>
        <h3>used to + verb</h3>
        <p>A past <b>habit</b> or a past <b>state</b> that is not true now.</p>
        <div class="grid2">
          <div class="box"><h4>habit</h4><p>I <b>used to swim</b> in the lake every summer.</p></div>
          <div class="box"><h4>state (be, have, live, like, know…)</h4><p>There <b>used to be</b> a lighthouse here.</p></div>
        </div>
        <table class="form">
          <tr><th>+</th><td>She <b>used to</b> live by the sea.</td></tr>
          <tr><th>−</th><td>She <b>didn’t use to</b> like fish. &nbsp;/&nbsp; She <b>never used to</b> like fish.</td></tr>
          <tr><th>?</th><td><b>Did</b> you <b>use to</b> go fishing? — Yes, I did. / No, I didn’t.</td></tr>
        </table>
        <h3>would + verb</h3>
        <p>Only for repeated past <b>actions</b> — a little story-like. <b>Never</b> for states.</p>
        <div class="grid2">
          <div class="box"><h4>✓ action</h4><p>Every evening my grandad <b>would tell</b> us stories.</p></div>
          <div class="box pink"><h4>✗ state</h4><p><s>My grandad would have a boat.</s><br>→ My grandad <b>used to have</b> a boat.</p></div>
        </div>
        <h3>Watch out</h3>
        <div class="grid2">
          <div class="box sand"><h4>one time / how many times</h4><p>We <b>went</b> to Crete in 2023. We <b>went</b> there three times.<br><s>used to go / would go</s> → past simple!</p></div>
          <div class="box sand"><h4>be used to + -ing ≠ used to</h4><p>I’<b>m used to swimming</b> in cold water. = it’s normal for me <b>now</b>.</p></div>
        </div>
        <div class="note">⚠️ <b>did</b> takes away the <b>-d</b>: didn’t <b>use</b> to, Did you <b>use</b> to…? (not <s>used</s>) But <b>never used to</b> keeps it.</div>`
    },

    {
      type: "mcq", label: "grammar · used to / would", sticker: "anchor",
      title: "used to, would or both?",
      instructions: "Choose the correct answer. Sometimes <b>both</b> are possible, sometimes <b>neither</b> is.",
      items: [
        { q: "When I was a child, I ___ really long hair.", options: ["used to have", "would have", "both are correct"], answer: 0 },
        { q: "Every summer my grandad ___ us fishing on the lake.", options: ["used to take", "would take", "both are correct"], answer: 2 },
        { q: "Sailors ___ that the sea was full of monsters.", options: ["used to believe", "would believe", "both are correct"], answer: 0 },
        { q: "Scientists ___ the wreck of the Titanic in 1985.", options: ["used to find", "would find", "found"], answer: 2 },
        { q: "On Saturday mornings we ___ up early and walk to the harbour.", options: ["used to get", "would get", "both are correct"], answer: 2 },
        { q: "My mum ___ a little boat, but she sold it last year.", options: ["used to own", "would own", "both are correct"], answer: 0 },
        { q: "I ___ to the aquarium three times last year.", options: ["used to go", "would go", "went"], answer: 2 },
        { q: "In the evenings, my grandma ___ us stories about shipwrecks.", options: ["used to tell", "would tell", "both are correct"], answer: 2 },
        { q: "I ___ the names of all the fish in the aquarium.", options: ["used to know", "would know", "both are correct"], answer: 0 },
        { q: "Before smartphones, my parents ___ real letters to each other.", options: ["used to write", "would write", "both are correct"], answer: 2 }
      ]
    },

    {
      type: "gapfill", label: "grammar · − and ?", sticker: "octopus",
      title: "Negatives, questions and a trap",
      instructions: "Complete with the correct form of <b>used to</b> and the verb. Contractions are fine.",
      items: [
        { text: "I [[didn't use to like|did not use to like]] <span class=hint>(not / like)</span> seafood, but now I love it.", why: "− : didn’t + use to (no -d!) + verb." },
        { text: "[[Did you use to go]] <span class=hint>(you / go)</span> to the seaside when you were little?", why: "? : Did + subject + use to + verb." },
        { text: "My brother [[never used to read]] <span class=hint>(never / read)</span>, but now he reads every day.", why: "never + used to: no “did”, so we keep the -d." },
        { text: "Where [[did you use to live]] <span class=hint>(you / live)</span> before you moved here?", why: "Wh- question: Where + did + you + use to + verb." },
        { text: "We [[didn't use to have|did not use to have]] <span class=hint>(not / have)</span> the internet at our summer house.", why: "“have” is a state → used to, not would." },
        { text: "[[Did people use to think]] <span class=hint>(people / think)</span> that the Earth was flat?", why: "? : Did + people + use to + verb." },
        { text: "My dad [[used to work]] <span class=hint>(work)</span> on a fishing boat, but now he’s a teacher.", why: "A past job = a state that isn’t true now → used to." },
        { text: "I [[used to be]] <span class=hint>(be)</span> scared of deep water, but I’m not any more.", why: "“be” is a state → used to, never would." },
        { text: "She [[is used to swimming|'s used to swimming]] <span class=hint>(be used to / swim)</span> in cold water — she does it every morning.", why: "Trap! be used to + -ing = it’s normal for her now." },
        { text: "There [[didn't use to be|did not use to be]] <span class=hint>(not / be)</span> so many tourists on this beach.", why: "There + didn’t use to be = there wasn’t … in the past." }
      ]
    },

    {
      type: "rephrase", label: "grammar · rewrite", sticker: "repeat",
      title: "Say it another way",
      instructions: "Rewrite the sentence so it means the same. Use the word in the dark box.",
      items: [
        { prompt: "I went to the beach every summer when I was young, but I don’t now.", key: "USED", answers: ["I used to go to the beach every summer when I was young."] },
        { prompt: "Every night my grandad told me stories about pirates.", key: "WOULD", answers: ["Every night my grandad would tell me stories about pirates.", "My grandad would tell me stories about pirates every night."] },
        { prompt: "This café was a fish shop in the past.", key: "USED", answers: ["This café used to be a fish shop.", "This cafe used to be a fish shop.", "This café used to be a fish shop in the past.", "This cafe used to be a fish shop in the past."] },
        { prompt: "Was there a cinema in your town in the past?", key: "USE", answers: ["Did there use to be a cinema in your town?", "Did there use to be a cinema in your town in the past?"] },
        { prompt: "Let’s take a boat to the island.", key: "HOW", answers: ["How about taking a boat to the island?"] },
        { prompt: "We could watch the documentary tonight.", key: "WHY", answers: ["Why don't we watch the documentary tonight?"] }
      ]
    },

    {
      type: "correct", label: "grammar · fix it", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Correct it in the box.",
      items: [
        { wrong: "I use to live near the sea when I was little.", answers: ["I used to live near the sea when I was little."] },
        { wrong: "Did you used to play in the waves?", answers: ["Did you use to play in the waves?"] },
        { wrong: "My grandma would have a big garden by the beach.", answers: ["My grandma used to have a big garden by the beach."] },
        { wrong: "How about to go diving this weekend?", answers: ["How about going diving this weekend?"] },
        { wrong: "We could to set off at six.", answers: ["We could set off at six."] },
        { wrong: "They used to visiting the island every year.", answers: ["They used to visit the island every year."] },
        { wrong: "It would be great visit the Titanic exhibition.", answers: ["It would be great to visit the Titanic exhibition."] }
      ]
    },

    /* ================= 5 · LONG JOURNEYS ================= */
    { type: "part", n: "05", icon: "ship", title: "Long journeys", text: "Five more words for travelling far — and their families." },

    {
      type: "rule", label: "vocabulary · set 2", sticker: "compass",
      title: "Words for a long way",
      html: `
        <div class="colloc">
          <div><b>distance</b> (n) — travel a long distance · at a distance of 2 km</div>
          <div><b>reach</b> (v) — reach the bottom / the island <i>(no “to”!)</i></div>
          <div><b>set off</b> — set off on a journey · set off for Kyiv · set off early</div>
          <div><b>succeed in</b> + -ing → <b>success</b> (n) → <b>successful</b> (adj)</div>
          <div><b>travel</b> (v) — travel by sea / travel long distances</div>
          <div><b>attempt</b> (n) — make several attempts to do sth</div>
        </div>
        <div class="note">⚠️ <b>travel</b> as a noun has no “a”: <s>a travel</s> → <b>a journey</b> / <b>a trip</b>. In British English: travel → travel<b>l</b>ed, travel<b>l</b>ing.</div>`
    },

    {
      type: "gapfill", label: "vocabulary · word families", sticker: "ship",
      title: "The ship that carried gold",
      instructions: "Put the word in brackets in the correct form. Watch out: some need a different part of speech.",
      items: [
        { text: "In October 1865, the steamship SS <i>Republic</i> [[set off]] <span class=hint>(set off)</span> from New York for New Orleans with about $400,000 in coins.", why: "Past simple of set off: set off (irregular — it doesn’t change)." },
        { text: "In those days, people often chose to [[travel]] <span class=hint>(travel)</span> by sea because the roads were slow and dangerous.", why: "chose to + verb." },
        { text: "But the ship never [[reached]] <span class=hint>(reach)</span> its destination.", why: "Past simple: reach → reached. No “to” after reach." },
        { text: "A hurricane hit the ship when it was a long [[distance]] <span class=hint>(distance)</span> from the coast, and it sank.", why: "a long distance from = far from." },
        { text: "Luckily, many people on board [[succeeded]] <span class=hint>(succeed)</span> in escaping in lifeboats and on a raft.", why: "succeed in + -ing; past simple → succeeded." },
        { text: "Over the years, treasure hunters made several [[attempts]] <span class=hint>(attempt)</span> to find the wreck.", why: "several + plural noun → attempts." },
        { text: "None of them was [[successful]] <span class=hint>(success)</span>.", why: "after “was” we need an adjective → successful." },
        { text: "In 2003, a team of explorers finally [[found]] <span class=hint>(find)</span> the wreck about 500 metres below the surface.", why: "find → found (irregular)." },
        { text: "Their robot [[travelled|traveled]] <span class=hint>(travel)</span> slowly along the sea floor and filmed thousands of coins.", why: "travel → travelled (British: double l)." },
        { text: "The team brought up more than 50,000 coins — a real [[success]] <span class=hint>(succeed)</span> story!", why: "a … story → we need a noun → success." }
      ]
    },

    /* ================= 6 · READING ================= */
    { type: "part", n: "06", icon: "search", title: "Reading", text: "A city under the sea — or just rocks?" },

    {
      type: "rule", label: "reading · the text", sticker: "diving-mask",
      title: "The steps under the sea",
      html: `
        <div class="photos">
          <figure class="photo wide"><img loading="lazy" alt="Huge rock terraces under the sea near Yonaguni, Japan" src="${IMG("yonaguni.jpg")}"><figcaption>The rock “terraces” near Yonaguni Island, Japan<small>Photo: Melkov · CC0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <div class="story">
          <p>In 1986, a diving instructor called Kihachiro Aratake was looking for hammerhead sharks near Yonaguni, a small island at the far western end of Japan. Instead, he found something much stranger: huge stone “steps”, flat “terraces” and walls with sharp, straight edges, lying between 5 and 25 metres under the sea.</p>
          <p>Masaaki Kimura, a marine geologist, has dived at the site more than a hundred times. He believes the rocks are the <b>remains</b> of an ancient city that sank thousands of years ago. He says he can <b>identify</b> a road, a stadium and even a <b>carving</b> of a face on one of the rocks. “Nature doesn’t make perfect right <b>angles</b>,” he explains.</p>
          <p>Not everyone agrees. Robert Schoch, an American geologist, came to <b>examine</b> the rocks in 1997. He says the type of stone at Yonaguni naturally breaks along flat lines, so it often forms steps and corners. Similar shapes can be seen on the island’s coast, above the water. Even though he admits the site looks amazing, he thinks the sea, not people, made it.</p>
          <p>So who is right? Nobody has found tools, pots or anything else that people usually leave behind. However, the mystery hasn’t stopped the tourists. Every year, thousands of divers travel to Yonaguni to see the “underwater pyramid” for themselves — and to make up their own minds.</p>
        </div>`
    },

    {
      type: "tf2", label: "reading · true / false", sticker: "detective",
      title: "True or false?",
      instructions: "If it’s <b>false</b>, choose the sentence that corrects it.",
      items: [
        { q: "Aratake was looking for the stones when he found them.", answer: false, fix: ["He was looking for an ancient city.", "He was looking for sharks.", "He was looking for a lost boat."], fixAnswer: 1 },
        { q: "The structures lie deeper than 30 metres.", answer: false, fix: ["They lie between 5 and 25 metres deep.", "They lie on the beach.", "They lie about 100 metres deep."], fixAnswer: 0 },
        { q: "Kimura has examined the site many times.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Kimura believes that people made the structures.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Kimura says he can see a carving of an animal.", answer: false, fix: ["He says he can see a carving of a ship.", "He says he can see a carving of a hand.", "He says he can see a carving of a face."], fixAnswer: 2 },
        { q: "Schoch thinks the right angles prove that people built the site.", answer: false, fix: ["He thinks this kind of stone breaks into steps and corners naturally.", "He thinks the right angles were carved by divers.", "He thinks there are no right angles at all."], fixAnswer: 0 },
        { q: "You can see similar rock shapes on land on the island.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Schoch agrees that the site looks impressive.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Scientists have found old tools at the site.", answer: false, fix: ["They have found pots, but no tools.", "Nobody has found tools or pots there.", "They have found tools from 1986."], fixAnswer: 1 },
        { q: "Because of the mystery, fewer tourists visit the island now.", answer: false, fix: ["Thousands of divers still come every year.", "Tourists are not allowed to dive there.", "Only scientists visit the island."], fixAnswer: 0 }
      ]
    },

    {
      type: "match", label: "reading · vocabulary", sticker: "scroll",
      title: "Words from the text and the journey",
      instructions: "Match the words with their meanings.",
      pairs: [
        ["angle", "the space between two lines that meet, e.g. 90°"],
        ["carving", "a shape or picture cut into stone or wood"],
        ["examine", "to look at something very carefully"],
        ["identify", "to recognise something and say what it is"],
        ["remains", "the parts that are left after something is destroyed"],
        ["distance", "how far it is from one place to another"],
        ["reach", "to arrive somewhere, often after a long time"],
        ["set off", "to start a journey"],
        ["succeed", "to manage to do what you tried to do"],
        ["travel", "to go from one place to another, often far"]
      ]
    },

    /* ================= 7 · PAST SIMPLE ================= */
    { type: "part", n: "07", icon: "hourglass", title: "Past simple", text: "150 years of discoveries under the sea." },

    {
      type: "gapfill", label: "grammar · past simple", sticker: "anchor",
      title: "A timeline of the deep",
      instructions: "Put the verb in the <b>past simple</b>. Some are irregular, one is negative, one is a question.",
      items: [
        { text: "<b>1872</b> · The British ship HMS <i>Challenger</i> [[set off]] <span class=hint>(set off)</span> on the first scientific journey around the world’s oceans.", why: "set off → set off (irregular, no change)." },
        { text: "<b>1934</b> · William Beebe and Otis Barton [[dived|dove]] <span class=hint>(dive)</span> 923 metres down inside a steel ball.", why: "dive → dived (British) / dove (American)." },
        { text: "<b>1943</b> · Jacques Cousteau and Émile Gagnan [[invented]] <span class=hint>(invent)</span> the Aqua-Lung, a small air tank for divers.", why: "Regular verb → -ed." },
        { text: "<b>1960</b> · Jacques Piccard and Don Walsh [[reached]] <span class=hint>(reach)</span> the deepest point on Earth, the Challenger Deep.", why: "reach → reached; no “to” after reach." },
        { text: "<b>1960</b> · They [[didn't stay|did not stay]] <span class=hint>(not / stay)</span> long at the bottom — only about twenty minutes.", why: "Negative: didn’t + verb (no -ed)." },
        { text: "<b>1961</b> · Swedish engineers [[brought]] <span class=hint>(bring)</span> the warship <i>Vasa</i> up to the surface after 333 years under water.", why: "bring → brought (irregular)." },
        { text: "<b>1985</b> · Robert Ballard’s team [[found]] <span class=hint>(find)</span> the Titanic 3,800 metres below the surface.", why: "find → found (irregular)." },
        { text: "<b>1986</b> · A diver [[saw]] <span class=hint>(see)</span> the strange stone steps near Yonaguni for the first time.", why: "see → saw (irregular)." },
        { text: "<b>2003</b> · Where [[did the team find]] <span class=hint>(the team / find)</span> the SS <i>Republic</i>? — About 160 km off the coast of Georgia, USA.", why: "Question: Where + did + subject + verb (no -ed)." },
        { text: "<b>2012</b> · Film director James Cameron [[went]] <span class=hint>(go)</span> down to the Challenger Deep alone.", why: "go → went (irregular)." }
      ]
    },

    /* ================= 8 · LINKING ================= */
    { type: "part", n: "08", icon: "puzzle", title: "Linking ideas", text: "although, even though, but, however, instead." },

    {
      type: "rule", label: "writing · contrast", sticker: "pencil",
      title: "Two ideas that don’t agree",
      html: `
        <table class="form">
          <tr><th>word</th><th>where it goes</th><th>example</th></tr>
          <tr><td><b>but</b></td><td>in the middle, after a comma</td><td>I love the sea, <b>but</b> I’m scared of sharks.</td></tr>
          <tr><td><b>although</b><br><b>even though</b> <i>(stronger)</i></td><td>+ a full sentence, at the start or in the middle</td><td><b>Although</b> it was cold, we swam.<br>We swam <b>even though</b> it was cold.</td></tr>
          <tr><td><b>However,</b></td><td>starts a <b>new sentence</b>, comma after it</td><td>The rocks look man-made. <b>However,</b> they may be natural.</td></tr>
          <tr><td><b>instead</b></td><td>= in place of that: at the end, or <b>Instead,</b> at the start</td><td>We didn’t fly. We went by boat <b>instead</b>.</td></tr>
          <tr><td><b>instead of</b></td><td>+ noun or <b>-ing</b></td><td><b>Instead of</b> flying, we went by boat.</td></tr>
        </table>
        <div class="note">⚠️ <s>Although it was cold, but we swam.</s> — one linker is enough!</div>`
    },

    {
      type: "mcq", label: "writing · linkers", sticker: "puzzle",
      title: "Choose the linker",
      instructions: "Look at the punctuation — it often tells you the answer.",
      items: [
        { q: "___ the water was cold, we stayed in the sea for an hour.", options: ["Although", "However", "But", "Instead"], answer: 0 },
        { q: "The divers searched for the treasure for weeks. ___, they didn’t find anything.", options: ["Although", "Even though", "However", "Instead"], answer: 2 },
        { q: "We wanted to go diving, ___ the sea was too rough.", options: ["however", "but", "although", "instead"], answer: 1 },
        { q: "We didn’t go diving. We went to the aquarium ___.", options: ["however", "although", "but", "instead"], answer: 3 },
        { q: "___ he had never dived before, he swam down to ten metres.", options: ["Even though", "However", "Instead", "But"], answer: 0 },
        { q: "I didn’t take the bus. ___, I walked along the beach.", options: ["Although", "Instead", "Even though", "But"], answer: 1 },
        { q: "The ship was huge. ___, it sank in less than an hour.", options: ["Although", "Even though", "However", "Instead of"], answer: 2 },
        { q: "She went snorkelling ___ she can’t swim very well.", options: ["even though", "however", "instead", "instead of"], answer: 0 },
        { q: "___ going by boat, they flew to the island.", options: ["Instead", "Instead of", "Although", "However"], answer: 1 },
        { q: "The museum is small, ___ it has some amazing things from shipwrecks.", options: ["however", "instead", "but", "instead of"], answer: 2 }
      ]
    },

    {
      type: "rephrase", label: "writing · join the ideas", sticker: "repeat",
      title: "Join the sentences",
      instructions: "Make <b>one</b> idea from two. Use the linker in the dark box.",
      items: [
        { prompt: "It was raining. We went to the beach.", key: "ALTHOUGH", answers: ["Although it was raining, we went to the beach.", "We went to the beach although it was raining."] },
        { prompt: "The rocks look man-made. Many scientists think they are natural.", key: "HOWEVER", answers: ["The rocks look man-made. However, many scientists think they are natural.", "The rocks look man-made; however, many scientists think they are natural."] },
        { prompt: "He was tired. He finished the dive.", key: "EVEN THOUGH", answers: ["Even though he was tired, he finished the dive.", "He finished the dive even though he was tired."] },
        { prompt: "I love the sea. I’m scared of sharks.", key: "BUT", answers: ["I love the sea, but I'm scared of sharks.", "I love the sea but I am scared of sharks."] },
        { prompt: "We didn’t watch TV. We read a book about pirates.", key: "INSTEAD", answers: ["We didn't watch TV. Instead, we read a book about pirates.", "We didn't watch TV. We read a book about pirates instead."] },
        { prompt: "They didn’t take the boat. They swam to the island.", key: "INSTEAD OF", answers: ["Instead of taking the boat, they swam to the island.", "They swam to the island instead of taking the boat."] }
      ]
    },

    /* ================= 9 · WORD BUILDING ================= */
    { type: "part", n: "09", icon: "build", title: "Word building", text: "pre- = before." },

    {
      type: "rule", label: "word building · pre-", sticker: "build",
      title: "pre- means “before”",
      html: `
        <div class="chips"><span>pre + pare → prepare / preparation</span><span>pre + view → preview</span><span>pre + historic → prehistoric</span><span>pre + order → pre-order</span><span>pre + paid → prepaid</span><span>pre + heat → preheat</span></div>
        <p>Some words take a <b>hyphen</b>: <b>pre-order</b>, <b>pre-dive</b>, <b>pre-school</b>. Most don’t: <b>preview</b>, <b>prehistoric</b>, <b>preheat</b>.</p>`
    },

    {
      type: "dragwords", label: "word building · pre-", sticker: "bubbles",
      title: "Before, before, before",
      instructions: "Put the words in the gaps. <b>Two words are extra.</b>",
      extra: ["prefix", "precook"],
      items: [
        "Before every dive, the instructor does a [[pre-dive]] safety check.",
        "Dinosaurs and other [[prehistoric]] animals lived millions of years ago.",
        "You can watch a short [[preview]] of the documentary online.",
        "You can already [[pre-order]] the new book about the Titanic — it comes out in May.",
        "First, [[preheat]] the oven to 180°C, then put the fish in.",
        "I’ve got a [[prepaid]] phone card, so I can’t spend too much.",
        "Scientists can’t [[predict]] exactly when a big storm will come.",
        "Wearing a life jacket on a boat is a sensible [[precaution]].",
        "My little brother goes to [[pre-school]] — he’s only four.",
        "Good [[preparation]] is half of success."
      ]
    },

    /* ================= 10 · DRILL ================= */
    { type: "part", n: "10", icon: "stopwatch", title: "Speed drill", text: "Until the phrases come out on their own." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "zap",
      title: "Twelve phrases, twice each",
      instructions: "Type the full sentence and press <b>Enter</b>. Each phrase must be right <b>twice</b>. A mistake sends it back. Try to beat your best time.",
      items: [
        { cue: "suggest · How about", prompt: "go snorkelling", answers: ["How about going snorkelling?", "How about going snorkeling?"] },
        { cue: "suggest · Why don’t we", prompt: "book a boat trip", answers: ["Why don't we book a boat trip?"] },
        { cue: "suggest · We could", prompt: "visit the aquarium", answers: ["We could visit the aquarium."] },
        { cue: "suggest · It would be great", prompt: "see a real shipwreck", answers: ["It would be great to see a real shipwreck."] },
        { cue: "suggest · Shall we", prompt: "set off early", answers: ["Shall we set off early?"] },
        { cue: "suggest · What about", prompt: "watch a documentary", answers: ["What about watching a documentary?"] },
        { cue: "question · used to", prompt: "you / live / by the sea", answers: ["Did you use to live by the sea?"] },
        { cue: "negative · used to", prompt: "I / not / like / fish", answers: ["I didn't use to like fish."] },
        { cue: "habit · would", prompt: "my dad / take me fishing", answers: ["My dad would take me fishing."] },
        { cue: "never · used to", prompt: "she / never / swim / in the sea", answers: ["She never used to swim in the sea."] },
        { cue: "state · used to", prompt: "there / be / a lighthouse here", answers: ["There used to be a lighthouse here."] },
        { cue: "question · used to", prompt: "people / believe / in sea monsters", answers: ["Did people use to believe in sea monsters?"] }
      ]
    },

    /* ================= 6 · WRITING ================= */
    { type: "part", n: "11", icon: "pencil", title: "Writing", text: "Your own then and now." },

    {
      type: "write", label: "writing · then and now", sticker: "notebook",
      title: "A place I used to love",
      instructions: "Write <b>6–8 sentences</b> about a place you used to visit as a child — a beach, a lake, a river, a village. What did you use to do there? What would happen every day? What didn’t you use to like? End with a suggestion to a friend: a trip there together now.",
      words: ["journey", "destination", "opportunity", "set off", "reach", "find out", "make sure", "expert", "attempt", "preparation", "distance", "travel", "succeed", "remains", "examine"],
      checks: [
        { label: "used to — at least twice", pattern: "\\bused to\\b", min: 2 },
        { label: "would for a past habit", pattern: "\\bwould\\s+(?!be great)\\w+" },
        { label: "didn't use to / never used to", pattern: "(didn't|did not) use to|never used to" },
        { label: "one suggestion (How about…? / We could… / Why don't we…?)", pattern: "how about|what about|we could|why don't we|shall we|let's|it would be great to" },
        { label: "3+ words from the unit (they light up above)", words: 3 },
        { label: "although / even though / however / instead — at least once", pattern: "\\balthough\\b|even though|\\bhowever\\b|\\binstead\\b" },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "When I was little, my family used to spend every August by a lake near Shatsk. The journey took all day, so we would set off at five in the morning. My dad would make sure we had sandwiches for the road. When we reached our destination, I would run straight into the water. I used to be scared of fish, and I never used to swim far from the shore. Although I didn’t use to like the long journey, I loved the lake. How about going there together next summer? It would be a great opportunity to find out if it’s still the same."
    },

    /* ================= 7 · SELF-CHECK ================= */
    { type: "part", n: "12", icon: "sparkles", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
