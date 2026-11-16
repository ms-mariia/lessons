const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "pick-a-card-evu81",
  kicker: "make · do · take",
  titleHTML: 'Pick a <em>Card</em>',
  title: "Pick a Card",
  subtitle: "Three verbs, one deck. Every phrase comes back again and again — until it stays.",
  stickers: ["crystal", "cards"],
  confetti: ["sparkles", "star", "shooting-star", "moon", "dizzy"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "moon", title: "Warm-up", text: "Last lesson’s cards: say, tell, speak, talk." },

    {
      type: "rule", label: "warm-up · English only", sticker: "speaking",
      title: "Before we start",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Three tarot cards on a blue cloth with candles" src="${IMG("tarot-spread.jpg")}"><figcaption>A three-card spread<small>Photo: Nosferattus · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A nail technician working on a client’s nails in a salon" src="${IMG("nails.jpg")}"><figcaption>At the nail salon<small>Photo: PattayaPatrol · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Look at the photos. What are the people <b>doing</b>? What do you think they <b>did</b> just before?</li>
          <li>Have you ever had a tarot reading? Did you <b>take</b> it seriously?</li>
          <li>How often do you <b>do</b> your nails? Who <b>does</b> them — you or a nail artist?</li>
        </ol>
        <p><b>Stuck? Don’t switch languages — use a rescue phrase:</b></p>
        <div class="rescue"><span>How do you say…?</span><span>What’s the English for…?</span><span>Can you explain…?</span><span>I mean…</span><span>It’s like a…</span></div>`
    },

    {
      type: "mcq", label: "recap · say / tell / speak / talk", sticker: "speaking",
      title: "Last time’s cards",
      instructions: "Quick recap from the last lesson. Choose the correct verb.",
      items: [
        { q: "Can you ___ me the time, please?", options: ["say", "tell", "speak", "talk"], answer: 1 },
        { q: "She ___ that she was tired and went home.", options: ["told", "spoke", "said", "talked"], answer: 2 },
        { q: "Do you ___ French?", options: ["speak", "say", "tell", "talk"], answer: 0 },
        { q: "We ___ on the phone for two hours last night.", options: ["said", "told", "talked", "explained"], answer: 2 },
        { q: "My grandma ___ me a scary story about a haunted house.", options: ["said", "told", "spoke", "talked"], answer: 1 },
        { q: "Please don’t ___ lies — I know the truth.", options: ["say", "speak", "talk", "tell"], answer: 3 },
        { q: "“I love your nails!” she ___.", options: ["told", "said", "spoke", "talked"], answer: 1 },
        { q: "Could I ___ to the manager, please?", options: ["speak", "say", "tell", "explain"], answer: 0 },
        { q: "What did she ___ to you? You look upset.", options: ["tell", "talk", "say", "speak"], answer: 2 },
        { q: "I can’t ___ the difference between the twins.", options: ["say", "tell", "speak", "talk"], answer: 1 }
      ]
    },

    /* ================= 2 · THE THREE CARDS ================= */
    { type: "part", n: "02", icon: "cards", title: "The three cards", text: "make · do · take — and what they go with." },

    {
      type: "rule", label: "vocabulary · make, do, take", sticker: "crystal",
      title: "Your three cards",
      html: `
        <p>In English these verbs go with <b>particular nouns</b>. Your own language won’t help — learn the whole phrase.</p>
        <div class="tarot">
          <div class="tcard"><div class="rn">I</div><h4>Make</h4><img class="sym" src="assets/emoji/sparkles.png" alt="">
            <ul><li><b>make</b> a mistake</li><li><b>make</b> an effort</li><li><b>make</b> (a) noise</li><li><b>make</b> a decision</li><li><b>make</b> friends with sb</li><li><b>make up</b> your mind</li><li><b>make</b> sb laugh / angry</li><li><b>make</b> sb do sth</li></ul>
            <small>creates or causes something</small></div>
          <div class="tcard"><div class="rn">II</div><h4>Do</h4><img class="sym" src="assets/emoji/broom.png" alt="">
            <ul><li><b>do</b> your homework</li><li><b>do</b> the housework</li><li><b>do</b> a course</li><li><b>do</b> exercise</li><li><b>do</b> your hair / make-up / nails</li><li><b>do</b> your best</li><li><b>do</b> something / nothing</li></ul>
            <small>work, tasks, actions without a name</small></div>
          <div class="tcard"><div class="rn">III</div><h4>Take</h4><img class="sym" src="assets/emoji/camera.png" alt="">
            <ul><li><b>take</b> a photo</li><li><b>take</b> a shower</li><li><b>take</b> a look</li><li><b>take</b> a break</li><li><b>take</b> it / things easy</li><li><b>take</b> notes</li><li><b>take</b> size 38</li><li><b>take</b> the job <i>(accept)</i></li><li>sb has <b>taken</b> my pen <i>(without asking)</i></li></ul>
            <small>remove, accept, write down, wear a size</small></div>
        </div>
        <h3>Two verbs, same meaning</h3>
        <div class="colloc">
          <div><b>take / have</b> a shower</div><div><b>take / have</b> a look</div><div><b>make / take</b> a decision</div><div><b>do / take</b> a course</div><div><b>do / take</b> exercise</div>
        </div>
        <div class="figrow">
          <figure class="photo"><img loading="lazy" alt="The Magician tarot card" src="${IMG("magician.jpg")}"><figcaption><small>Pamela Colman Smith · public domain</small></figcaption></figure>
          <div>
            <h3 style="margin-top:0">make sb do sth</h3>
            <p>The Magician <b>makes</b> things <b>happen</b>.<br>My parents <b>made me do</b> my homework. <i>(forced)</i><br>That video always <b>makes me laugh</b>. <i>(causes)</i></p>
            <div class="note">⚠️ <s>made me <b>to</b> do</s> → made me <b>do</b>. No “to” after make + person!</div>
          </div>
        </div>`
    },

    {
      type: "sort", label: "vocabulary · sort the deck", sticker: "cards",
      title: "Which card?",
      instructions: "Put each phrase under its verb. Tap a phrase, then tap a card.",
      categories: [
        { name: "make", words: ["a mistake", "noise", "friends with sb", "up your mind"] },
        { name: "do", words: ["the housework", "your best", "your hair"] },
        { name: "take", words: ["a photo", "a break", "notes"] }
      ]
    },

    {
      type: "mcq", label: "vocabulary · one or both?", sticker: "dizzy",
      title: "One verb — or both?",
      instructions: "Choose the correct answer. Sometimes <b>both</b> verbs are correct.",
      items: [
        { q: "Did he ___ many mistakes in the test?", options: ["do", "make", "both are correct"], answer: 1 },
        { q: "I couldn’t ___ the homework — it was too difficult.", options: ["do", "make", "both are correct"], answer: 0 },
        { q: "We must ___ a decision before Friday.", options: ["make", "take", "both are correct"], answer: 2 },
        { q: "Next summer I want to ___ a course in nail design.", options: ["do", "take", "both are correct"], answer: 2 },
        { q: "Could you ___ a look at my nails? One of them is broken.", options: ["take", "have", "both are correct"], answer: 2 },
        { q: "How many photos did you ___ at the party?", options: ["make", "take", "both are correct"], answer: 1 },
        { q: "I hate ___ the housework.", options: ["making", "doing", "both are correct"], answer: 1 },
        { q: "The neighbours ___ a lot of noise last night.", options: ["did", "made", "both are correct"], answer: 1 },
        { q: "I don’t ___ much exercise, I know.", options: ["do", "take", "both are correct"], answer: 2 },
        { q: "Wait for me — I’m just going to ___ a shower.", options: ["make", "take", "both are correct"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "vocabulary · in context", sticker: "notepad",
      title: "Complete the sentence",
      instructions: "Write <b>make, do</b> or <b>take</b> in the correct form (made, doing, taken…).",
      items: [
        { text: "Someone has [[taken]] my phone! It was on the table a minute ago.", why: "take = remove without permission; has + taken." },
        { text: "I’m tired of studying. I’m going to [[take]] a break for ten minutes.", why: "take a break = stop and rest." },
        { text: "We [[made]] friends with two girls from Lviv at summer camp.", why: "make friends with sb; past → made." },
        { text: "It was a lazy Sunday — I [[did]] nothing all day.", why: "do something / nothing; past → did." },
        { text: "They offered her a job in a nail studio, and she [[took]] it.", why: "take = accept; past → took." },
        { text: "Could you take a [[look]] at my essay? I think there are mistakes in it.", why: "take a look = look quickly." },
        { text: "That video always [[makes]] me laugh.", why: "make sb laugh = cause; he/she/it → makes." },
        { text: "What size shoes do you [[take]]?", why: "take = wear a particular size." },
        { text: "I’m always tired because I don’t [[do|take]] enough exercise.", why: "do / take exercise — both are correct." },
        { text: "I’ve [[made]] up my mind: I’m going to study in Kyiv.", why: "make up your mind = decide; have + made." }
      ]
    },

    {
      type: "mcq", label: "vocabulary · a, the or nothing?", sticker: "star",
      title: "The little words",
      instructions: "The phrases come <b>with</b> their articles. Choose <b>a / an</b>, <b>the</b> or <b>— (nothing)</b>.",
      items: [
        { q: "Oh no, I’ve made ___ mistake.", options: ["a", "the", "—"], answer: 0 },
        { q: "I usually do ___ housework on Saturday mornings.", options: ["a", "the", "—"], answer: 1 },
        { q: "Doctors say we should do ___ exercise every day.", options: ["an", "the", "—"], answer: 2 },
        { q: "Let’s take ___ ten-minute break.", options: ["a", "the", "—"], answer: 0 },
        { q: "Could you take ___ photo of us, please?", options: ["a", "the", "—"], answer: 0 },
        { q: "We have to make ___ decision today.", options: ["a", "the", "—"], answer: 0 },
        { q: "Can you take ___ key out of my bag? It’s in the front pocket.", options: ["a", "the", "—"], answer: 1 },
        { q: "I always take ___ notes during the lesson.", options: ["a", "the", "—"], answer: 2 },
        { q: "Who took ___ last piece of cake?", options: ["a", "the", "—"], answer: 1 },
        { q: "My parents made ___ friends with our new neighbours.", options: ["a", "the", "—"], answer: 2 }
      ]
    },

    {
      type: "rephrase", label: "vocabulary · say it another way", sticker: "repeat",
      title: "Same idea, new phrase",
      instructions: "Rewrite the sentence with a phrase using the verb in the dark box. Keep the meaning.",
      items: [
        { prompt: "I clean the flat every Saturday.", key: "DO", answers: ["I do the housework every Saturday."] },
        { prompt: "My mum forced me to tidy my room.", key: "MAKE", answers: ["My mum made me tidy my room."] },
        { prompt: "I’m trying as hard as possible.", key: "DO", answers: ["I'm doing my best."] },
        { prompt: "Let’s stop working and relax for a bit.", key: "TAKE", answers: ["Let's take a break.", "Let's take a break for a bit."] },
        { prompt: "When are you going to decide?", key: "MAKE", answers: ["When are you going to make a decision?", "When are you going to make up your mind?"] },
        { prompt: "I’m going to relax and do nothing this weekend.", key: "TAKE", answers: ["I'm going to take it easy this weekend.", "I'm going to take things easy this weekend."] },
        { prompt: "During the lesson she wrote down the important points.", key: "TAKE", answers: ["During the lesson she took notes.", "During the lesson she took notes on the important points."] }
      ]
    },

    /* ================= 3 · A PAST STORY ================= */
    { type: "part", n: "03", icon: "nails", title: "A past story", text: "Time anchor: this is a PAST story. Stay in the past!" },

    {
      type: "gapfill", label: "story · stay in the past", sticker: "nails",
      title: "Saturday at the nail salon",
      instructions: "This story is <b>in the past</b>. Use <b>make, do</b> or <b>take</b> — in the past simple.",
      items: [
        { text: "Last Saturday I [[made]] an appointment at my favourite nail salon.", why: "make an appointment; past → made." },
        { text: "Before I left, I quickly [[did]] my hair and make-up.", why: "do your hair / make-up; past → did." },
        { text: "The salon was busy, so I [[took]] a seat and waited.", why: "take a seat = sit down; past → took." },
        { text: "While I was waiting, I [[took]] lots of photos of the nail designs on the wall.", why: "take a photo; past → took." },
        { text: "It was hard to [[make]] up my mind — they were all so beautiful!", why: "to + make up your mind (infinitive here)." },
        { text: "In the end, I [[made|took]] a decision: black with tiny gold stars.", why: "make / take a decision — both work." },
        { text: "The nail artist [[did]] her best, but the stars were really difficult.", why: "do your best; past → did." },
        { text: "She [[made]] one small mistake, but she fixed it in a second.", why: "make a mistake; past → made." },
        { text: "The girl next to me [[made]] me laugh with stories about her cat.", why: "make sb laugh; past → made." },
        { text: "When I got home, I [[took]] it easy for the rest of the day.", why: "take it easy; past → took." }
      ]
    },

    {
      type: "correct", label: "story · fix it", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake with make, do or take. Correct it in the box.",
      items: [
        { wrong: "I always make my homework in the evening.", answers: ["I always do my homework in the evening."] },
        { wrong: "Can you do a photo of us?", answers: ["Can you take a photo of us?"] },
        { wrong: "She did a big mistake in the test.", answers: ["She made a big mistake in the test."] },
        { wrong: "Please don't do so much noise!", answers: ["Please don't make so much noise!"] },
        { wrong: "I need to make a break.", answers: ["I need to take a break."] },
        { wrong: "We did friends with the new girl.", answers: ["We made friends with the new girl."] },
        { wrong: "My mum made me to clean my room.", answers: ["My mum made me clean my room."] }
      ]
    },

    /* ================= 4 · NMT ================= */
    { type: "part", n: "04", icon: "crystal", title: "Exam practice", text: "Words in a text — like Task 5 of the NMT." },

    {
      type: "mcq", label: "NMT style · words in context", sticker: "crystal",
      title: "Your reading for next week",
      instructions: "A fun “tarot reading”. Choose the word that fits each gap. Look at the word <b>after</b> the gap — it decides the answer.",
      items: [
        { q: "The Magician card says you will ___ an important decision.", options: ["do", "make", "give", "have"], answer: 1 },
        { q: "Don’t be afraid to ___ the opportunity when it comes.", options: ["make", "do", "take", "get"], answer: 2 },
        { q: "You will ___ friends with someone unexpected.", options: ["do", "take", "have", "make"], answer: 3 },
        { q: "At school, ___ your best — your effort will be noticed.", options: ["make", "take", "do", "give"], answer: 2 },
        { q: "Someone may ___ you laugh when you feel sad.", options: ["make", "let", "take", "do"], answer: 0 },
        { q: "Remember to ___ a break when you feel tired.", options: ["make", "take", "do", "keep"], answer: 1 },
        { q: "The cards say: ___ things easy at the weekend.", options: ["do", "make", "have", "take"], answer: 3 },
        { q: "Don’t worry if you ___ a mistake — everybody does.", options: ["do", "make", "take", "get"], answer: 1 },
        { q: "Try to ___ more exercise; your body will thank you.", options: ["make", "give", "do", "play"], answer: 2 },
        { q: "And finally, ___ notes of your dreams — they may tell you something!", options: ["do", "take", "make", "give"], answer: 1 }
      ]
    },

    /* ================= 5 · DRILL ================= */
    { type: "part", n: "05", icon: "zap", title: "Speed drill", text: "Sixteen phrases. Every one twice — until it’s automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "shooting-star",
      title: "Turn the cards",
      instructions: "Read the meaning, type the <b>phrase</b> with make, do or take and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "make, do or take?", prompt: "decide", answers: ["make a decision", "take a decision", "make up my mind", "make up your mind"] },
        { cue: "make, do or take?", prompt: "try as hard as you can", answers: ["do your best", "do my best"] },
        { cue: "make, do or take?", prompt: "relax and do nothing", answers: ["take it easy", "take things easy"] },
        { cue: "make, do or take?", prompt: "stop working and rest", answers: ["take a break"] },
        { cue: "make, do or take?", prompt: "start a friendship with someone", answers: ["make friends", "make friends with someone"] },
        { cue: "make, do or take?", prompt: "clean the flat", answers: ["do the housework"] },
        { cue: "make, do or take?", prompt: "get something wrong", answers: ["make a mistake"] },
        { cue: "make, do or take?", prompt: "use a camera", answers: ["take a photo", "take photos", "take a picture"] },
        { cue: "make, do or take?", prompt: "be loud", answers: ["make noise", "make a noise"] },
        { cue: "make, do or take?", prompt: "look at something quickly", answers: ["take a look", "have a look"] },
        { cue: "make, do or take?", prompt: "write down the important points", answers: ["take notes"] },
        { cue: "make, do or take?", prompt: "go to the gym, run, swim", answers: ["do exercise", "take exercise"] },
        { cue: "make, do or take?", prompt: "study on a course", answers: ["do a course", "take a course"] },
        { cue: "make, do or take?", prompt: "wash under running water", answers: ["take a shower", "have a shower"] },
        { cue: "make, do or take?", prompt: "cause someone to laugh", answers: ["make someone laugh", "make sb laugh", "make me laugh", "make them laugh", "make her laugh", "make him laugh"] },
        { cue: "make, do or take?", prompt: "arrange a time at the nail salon", answers: ["make an appointment"] }
      ]
    },

    /* ================= 6 · SPEAK & WRITE ================= */
    { type: "part", n: "06", icon: "speaking", title: "Speak & write", text: "Use the phrases — out loud, then on paper." },

    {
      type: "rule", label: "speaking · two minutes", sticker: "speaking",
      title: "Talk about it",
      html: `
        <p>Answer in <b>full sentences</b>. Use at least <b>two</b> phrases from the cards in every answer.</p>
        <ol class="qs">
          <li>What things <b>make</b> you happy? What <b>makes</b> you angry?</li>
          <li>What did your parents <b>make</b> you <b>do</b> when you were little?</li>
          <li>What’s the biggest decision you’ve <b>made</b> this year?</li>
          <li>Who <b>does</b> the housework in your family? Is it fair?</li>
          <li>How do you <b>take it easy</b> after a hard day?</li>
          <li>Tell a <b>past story</b>: the last time you <b>made</b> a funny mistake. Then tell it again — <b>no</b> switches to the present!</li>
        </ol>`
    },

    {
      type: "write", label: "writing · a past story", sticker: "notebook",
      title: "A day full of make, do and take",
      instructions: "Write <b>5–7 sentences</b> about a busy day last week. Say “This is a past story” to yourself first — and stay in the past.",
      words: ["mistake", "effort", "noise", "decision", "friends", "mind", "homework", "housework", "course", "exercise", "hair", "best", "photo", "shower", "look", "break", "easy", "notes"],
      checks: [
        { label: "made / did / took — at least 4 times", pattern: "\\b(made|did|took)\\b", min: 4 },
        { label: "5+ phrases from the cards (they light up above)", words: 5 },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Last Tuesday was crazy. I got up at six, took a quick shower and did my hair. At school we had a test and I made a stupid mistake in the first question. After lunch I took a break with my friends and we took lots of photos. In the evening my mum made me do the housework, but I did my best and finished quickly. Then I took it easy and watched a film."
    },

    /* ================= 7 · LAST CALL ================= */
    { type: "part", n: "07", icon: "shooting-star", title: "Last call", text: "Everything from today — one more time." },

    {
      type: "mcq", label: "review · everything", sticker: "sparkles",
      title: "One more spread",
      instructions: "All of today’s cards, plus last lesson’s. No looking back!",
      items: [
        { q: "Who ___ my pen? It was here a second ago.", options: ["has made", "has taken", "has done"], answer: 1 },
        { q: "I always ___ my best in tests.", options: ["make", "do", "take"], answer: 1 },
        { q: "Can you ___ me the way to the station?", options: ["say", "tell", "speak"], answer: 1 },
        { q: "It’s late — we need to ___ up our minds.", options: ["make", "do", "take"], answer: 0 },
        { q: "She ___ me a secret about her sister.", options: ["said", "told", "talked"], answer: 1 },
        { q: "You can’t ___ a course and work full time — it’s too much.", options: ["make", "give", "do"], answer: 2 },
        { q: "Do they ___ credit cards here, or only cash?", options: ["make", "do", "take"], answer: 2 },
        { q: "Stop ___ so much noise!", options: ["doing", "making", "taking"], answer: 1 },
        { q: "“I’m so tired,” she ___.", options: ["told", "said", "spoke"], answer: 1 },
        { q: "He ___ me wait for an hour!", options: ["made", "did", "took"], answer: 0 }
      ]
    },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
