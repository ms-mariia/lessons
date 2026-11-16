const IMG = f => "assets/img/" + f;
const LESSON = {
  id: "snapshot-evuel38-egiu13-14",
  kicker: "have · was doing & did",
  titleHTML: 'Snap<em>shot</em>',
  title: "Snapshot",
  subtitle: "What were you doing when the photo was taken? And what did you have?",
  stickers: ["camera", "coffee"],
  confetti: ["camera", "cake", "coffee", "star", "icecream"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "frame", title: "Warm-up", text: "Four snapshots from one weekend." },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "pin",
      title: "What was happening?",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="A big breakfast with eggs, beans and sausages" src="${IMG("breakfast.jpg")}"><figcaption>Saturday, 9 a.m.<small>Photo: Acabashi · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="Two empty chairs in a barber shop" src="${IMG("barber.jpg")}"><figcaption>Saturday, 12 p.m.<small>Photo: Wilfredor · CC0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="People waiting on a station platform next to a train" src="${IMG("station.jpg")}"><figcaption>Sunday, 8 a.m.<small>Photo: mattbuck · CC BY-SA 3.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="An outdoor swimming pool in front of a hotel" src="${IMG("pool.jpg")}"><figcaption>Sunday, 6 p.m.<small>Photo: Marc Ryckaert · CC BY 3.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>Look at each photo. What can you <b>have</b> in this place? <i>(breakfast, a swim…)</i></li>
          <li>Imagine you were there. <b>What were you doing</b> at that time? <i>At 9 a.m. I was having…</i></li>
          <li>What were <b>you</b> doing at 9 a.m. last Saturday? And at 6 p.m. last Sunday?</li>
        </ol>`
    },

    /* ================= 2 · HAVE ================= */
    { type: "part", n: "02", icon: "coffee", title: "Have", text: "One verb — breakfast, a shower, a good time and more." },

    {
      type: "rule", label: "vocabulary · have / had / had", sticker: "cake",
      title: "What can you have?",
      html: `
        <div class="colloc">
          <div>have <b>breakfast</b> · <b>lunch</b> · <b>dinner</b> · <b>a meal</b></div>
          <div>have <b>a cup of tea / coffee</b> · <b>a drink</b> · <b>an ice cream</b></div>
          <div>have <b>a lesson</b> · <b>an exam</b> · <b>homework</b></div>
          <div>have <b>a party</b> · <b>a meeting</b> · <b>a game</b> (of football)</div>
          <div>have <b>a shower</b> · <b>a bath</b> · <b>a swim</b></div>
        </div>
        <h3>Expressions with have</h3>
        <div class="colloc">
          <div>Can I <b>have a look</b>? = look at it</div>
          <div>Can I <b>have a go</b>? = try / ride it</div>
          <div><b>Have a good journey!</b> — to someone going away</div>
          <div>Do you <b>have a moment</b>? = some time</div>
          <div>Can I <b>have a word with</b> you? = speak to you</div>
          <div>We <b>had a good time</b>. = fun, we enjoyed it</div>
          <div>I’m going to <b>have my hair cut</b>.</div>
          <div>I <b>don’t have the time</b>.</div>
        </div>
        <div class="grid2">
          <div class="box"><h4>have got (speaking)</h4><p>I’<b>ve got</b> two sisters. <b>Have</b> you <b>got</b> a pen? I’<b>ve got a cold</b> / <b>a headache</b>.</p></div>
          <div class="box sand"><h4>have (got) to = must</h4><p>You <b>have to</b> pay. I’<b>ve got to</b> walk to school.</p></div>
        </div>
        <div class="note">⚠️ In the past: <b>had to</b>, without <i>got</i>. I <b>had to</b> study yesterday. (not <s>I had got to</s>)</div>`
    },

    {
      type: "sort", label: "vocabulary · sort", sticker: "puzzle",
      title: "Have what?",
      instructions: "Put each word in the right group — or tap a word, then tap a group.",
      categories: [
        { name: "eat & drink", words: ["breakfast", "a cup of tea", "an ice cream"] },
        { name: "school", words: ["a lesson", "an exam", "homework"] },
        { name: "free time", words: ["a party", "a game of football"] },
        { name: "wash & swim", words: ["a shower", "a swim"] }
      ]
    },

    {
      type: "mcq", label: "vocabulary · what do you say?", sticker: "speech",
      title: "What do you say?",
      instructions: "Choose the best answer for each situation.",
      items: [
        { q: "Your friend is going to Lviv by train. You say: “Bye! Have ___!”", options: ["a good journey", "a good travel", "a nice go"], answer: 0 },
        { q: "Your classmate has a new phone. You say: “Wow! Can I have ___?”", options: ["a looking", "a look", "the look"], answer: 1 },
        { q: "Your brother has a new skateboard. You want to try it: “Can I have ___?”", options: ["a go", "a going", "a try on"], answer: 0 },
        { q: "You need to speak to your teacher: “Can I have ___ you?”", options: ["some words with", "a word with", "a talk to"], answer: 1 },
        { q: "“Do you have ___? I need some help with my homework.”", options: ["the moment", "a moment", "moments"], answer: 1 },
        { q: "Your friend sneezes and has a red nose: “Oh! Have you got ___?”", options: ["a cold", "the cold", "cold"], answer: 0 },
        { q: "“How was the party?” “Great! We had ___.”", options: ["a good fun", "a good time", "good times"], answer: 1 },
        { q: "“Your hair looks great!” “Thanks! I ___ yesterday.”", options: ["cut my hair at the hairdresser’s", "had my hair cut", "had cut my hair"], answer: 1 },
        { q: "I want to learn to ski, but I don’t have ___.", options: ["the time", "a time", "times"], answer: 0 },
        { q: "When I was little, I ___ go to bed at 9 o’clock.", options: ["had got to", "had to", "have got to"], answer: 1 }
      ]
    },

    /* ================= 3 · GRAMMAR ================= */
    { type: "part", n: "03", icon: "film", title: "Grammar", text: "I was doing and I did." },

    {
      type: "rule", label: "theory · past continuous + past simple", sticker: "clapper",
      title: "In the middle — or finished?",
      html: `
        <p>At 9 o’clock on Saturday I <b>was having</b> breakfast. I started before 9 and finished after 9.</p>
        <table class="form">
          <tr><th>+</th><td>I / he / she / it <b>was</b> having · we / you / they <b>were</b> having</td></tr>
          <tr><th>−</th><td>I <b>wasn’t</b> listening. · They <b>weren’t</b> looking.</td></tr>
          <tr><th>?</th><td><b>Was</b> she sleeping? · What <b>were</b> you <b>doing</b> at 9?</td></tr>
        </table>
        <div class="tl" aria-hidden="true">
          <div class="sp" style="--x:6%;--w:60%"><b>I was having a shower</b><i>background</i></div>
          <div class="pt e" style="--x:42%"><b>the phone rang</b><i>event</i></div>
          <div class="now"></div>
        </div>
        <p>I <b>was having</b> a shower when the phone <b>rang</b>. <span style="color:var(--muted)">(background + event)</span></p>
        <div class="grid2">
          <div class="box"><h4>past continuous = unfinished</h4><p>Jack <b>was reading</b> when his phone rang. <i>(in the middle)</i></p></div>
          <div class="box pink"><h4>past simple = complete</h4><p>Jack <b>read</b> a book yesterday. <i>(from beginning to end)</i></p></div>
        </div>
        <div class="note">⚠️ <b>when</b> + the event (past simple) · <b>while</b> + the background (past continuous).</div>
        <div class="rulecard"><h4>rule card — copy it into your notebook</h4>
          <p><b>Form:</b> was / were + verb-ing<br><b>Use:</b> in the middle of an action at a time in the past<br><b>Examples:</b> At 7 I was having dinner. · I was walking home when it started to rain.<br><b>Trap:</b> one finished action → past simple: I <u>had</u> dinner at 7.</p></div>`
    },

    {
      type: "gapfill", label: "grammar · was / were + -ing", sticker: "camera",
      title: "Where were they? What were they doing?",
      instructions: "Use <b>was / were + -ing</b>. Watch the negatives and questions!",
      items: [
        { text: "At 9 o’clock yesterday my parents [[were having]] <span class=hint>(have)</span> breakfast in the kitchen.", why: "they → were + having." },
        { text: "Sorry, I didn’t hear you. I [[wasn't listening|was not listening]] <span class=hint>(not / listen)</span>.", why: "I → wasn’t + -ing." },
        { text: "What [[were you doing]] <span class=hint>(you / do)</span> at 11 o’clock last night?", why: "Question: What + were + you + -ing." },
        { text: "My sister [[was swimming]] <span class=hint>(swim)</span> in the pool when I arrived.", why: "swim → swimming (double m)." },
        { text: "[[Was it raining]] <span class=hint>(it / rain)</span> when you left the house?", why: "Question: Was + it + -ing." },
        { text: "We [[were sitting]] <span class=hint>(sit)</span> at the back of the cinema, so we couldn’t see well.", why: "sit → sitting (double t)." },
        { text: "Why [[was Tom running]] <span class=hint>(Tom / run)</span>? Was he late for the train?", why: "Why + was + Tom + running." },
        { text: "They [[weren't looking|were not looking]] <span class=hint>(not / look)</span> at the camera, so the photo is terrible.", why: "they → weren’t + -ing." },
        { text: "This time last year I [[was living]] <span class=hint>(live)</span> in a different city.", why: "live → living (drop the e)." },
        { text: "Look at this photo! Here I [[was having]] <span class=hint>(have)</span> my hair cut.", why: "have → having (drop the e)." }
      ]
    },

    {
      type: "mcq", label: "grammar · was doing or did?", sticker: "film",
      title: "Background or event?",
      instructions: "Choose the correct form.",
      items: [
        { q: "I ___ a shower when the phone rang.", options: ["had", "was having"], answer: 1 },
        { q: "The phone ___ while I was having a shower.", options: ["rang", "was ringing"], answer: 0 },
        { q: "We ___ a party last Saturday. Everybody came!", options: ["had", "were having"], answer: 0 },
        { q: "“What were you doing at 8 p.m.?” “I ___ my homework.”", options: ["did", "was doing"], answer: 1 },
        { q: "When I ___ up this morning, the sun was shining.", options: ["woke", "was waking"], answer: 0 },
        { q: "She ___ her leg while she was playing football.", options: ["was breaking", "broke"], answer: 1 },
        { q: "We ___ to the beach every day when we were on holiday.", options: ["went", "were going"], answer: 0 },
        { q: "I saw Max in the café. He ___ a cup of coffee with a friend.", options: ["had", "was having"], answer: 1 },
        { q: "___ TV when I called you last night?", options: ["Did you watch", "Were you watching"], answer: 1 },
        { q: "When the teacher came in, we ___ our books and started the lesson. (= she came in, and then we did it)", options: ["opened", "were opening"], answer: 0 }
      ]
    },

    {
      type: "gapfill", label: "grammar · a picture story", sticker: "barber",
      title: "A bad hair day",
      instructions: "Look at the barber shop photo again and read the story. Put each verb in the <b>past simple</b> or the <b>past continuous</b>.",
      items: [
        { text: "Last Saturday I [[had]] <span class=hint>(have)</span> breakfast at nine and then went to the hairdresser’s.", why: "A complete action → past simple: have → had." },
        { text: "When I [[arrived]] <span class=hint>(arrive)</span>, two people were already waiting.", why: "when + the event → past simple." },
        { text: "While I [[was waiting]] <span class=hint>(wait)</span>, I read a magazine.", why: "while + the background → past continuous." },
        { text: "Finally, I sat in the chair, and the hairdresser [[started]] <span class=hint>(start)</span> to cut my hair.", why: "One thing after another → past simple." },
        { text: "She [[was talking]] <span class=hint>(talk)</span> to her friend on the phone the whole time.", why: "In the middle of it, all the time → past continuous." },
        { text: "She [[wasn't looking|was not looking]] <span class=hint>(not / look)</span> at my hair at all!", why: "Negative background → wasn’t + -ing." },
        { text: "Suddenly I [[saw]] <span class=hint>(see)</span> myself in the mirror. My fringe was very, very short!", why: "Suddenly → one moment → past simple: see → saw." },
        { text: "I [[didn't say|did not say]] <span class=hint>(not / say)</span> anything because I was too shocked.", why: "Negative past simple: didn’t + say." },
        { text: "When I got home, my brother [[was having]] <span class=hint>(have)</span> lunch in the kitchen.", why: "He was in the middle of it → past continuous." },
        { text: "He looked at me and [[laughed]] <span class=hint>(laugh)</span> for five minutes. I didn’t have a good time that day!", why: "Two actions one after another → past simple." }
      ]
    },

    {
      type: "rephrase", label: "grammar · when / while", sticker: "repeat",
      title: "Join the two snapshots",
      instructions: "Make <b>one</b> sentence. Use the word in the dark box.",
      items: [
        { prompt: "I was having a shower. The phone rang.", key: "WHEN", answers: ["I was having a shower when the phone rang.", "When the phone rang, I was having a shower."] },
        { prompt: "We were having lunch. It started to rain.", key: "WHEN", answers: ["We were having lunch when it started to rain.", "When it started to rain, we were having lunch."] },
        { prompt: "She was swimming in the pool. She lost her ring.", key: "WHILE", answers: ["She lost her ring while she was swimming in the pool.", "While she was swimming in the pool, she lost her ring."] },
        { prompt: "I was walking to the station. I met my teacher.", key: "WHEN", answers: ["I was walking to the station when I met my teacher.", "When I met my teacher, I was walking to the station."] },
        { prompt: "They were watching a film. The lights went out.", key: "WHILE", answers: ["The lights went out while they were watching a film.", "While they were watching a film, the lights went out."] },
        { prompt: "My dad was cooking dinner. He burned his hand.", key: "WHILE", answers: ["My dad burned his hand while he was cooking dinner.", "While my dad was cooking dinner, he burned his hand.", "My dad burned his hand while cooking dinner."] }
      ]
    },

    {
      type: "correct", label: "fix it · have + tenses", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Correct it in the box.",
      items: [
        { wrong: "I was have breakfast when you called.", answers: ["I was having breakfast when you called."] },
        { wrong: "What did you doing at 7 o'clock yesterday?", answers: ["What were you doing at 7 o'clock yesterday?"] },
        { wrong: "We was sitting in the café when it started to snow.", answers: ["We were sitting in the café when it started to snow."] },
        { wrong: "I was reading when my mum was coming home.", answers: ["I was reading when my mum came home."] },
        { wrong: "That phone looks great. Can I have a looking?", answers: ["That phone looks great. Can I have a look?"] },
        { wrong: "Yesterday I had got to stay at school until five.", answers: ["Yesterday I had to stay at school until five."] },
        { wrong: "We had a good fun at the party.", answers: ["We had a good time at the party."] }
      ]
    },

    /* ================= 4 · DRILL ================= */
    { type: "part", n: "04", icon: "zap", title: "Speed drill", text: "Until the phrases come out on their own." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "past continuous", prompt: "I / have / breakfast / at 9 o’clock", answers: ["I was having breakfast at 9 o'clock.", "I was having breakfast at nine o'clock.", "At 9 o'clock I was having breakfast."] },
        { cue: "past continuous + when", prompt: "I / have / a shower / when / the phone / ring", answers: ["I was having a shower when the phone rang."] },
        { cue: "while", prompt: "she / lose / her phone / while / she / swim", answers: ["She lost her phone while she was swimming."] },
        { cue: "question", prompt: "what / you / do / at 7 p.m.?", answers: ["What were you doing at 7 p.m.?", "What were you doing at 7 pm?"] },
        { cue: "negative", prompt: "I / not / listen", answers: ["I wasn't listening."] },
        { cue: "past simple", prompt: "we / have / a good time / at the party", answers: ["We had a good time at the party."] },
        { cue: "have", prompt: "can I / have / a look?", answers: ["Can I have a look?"] },
        { cue: "have", prompt: "have / a good journey!", answers: ["Have a good journey!"] },
        { cue: "have", prompt: "can I / have / a word with / you?", answers: ["Can I have a word with you?"] },
        { cue: "past simple", prompt: "I / have / my hair / cut / yesterday", answers: ["I had my hair cut yesterday.", "Yesterday I had my hair cut."] },
        { cue: "had to", prompt: "I / have to / study / last night", answers: ["I had to study last night.", "Last night I had to study."] },
        { cue: "have got", prompt: "I / have got / a headache", answers: ["I've got a headache.", "I have got a headache."] }
      ]
    },

    /* ================= 5 · WRITING ================= */
    { type: "part", n: "05", icon: "pencil", title: "Writing", text: "Your own snapshot." },

    {
      type: "write", label: "writing · yesterday at 7 p.m.", sticker: "notebook",
      title: "Yesterday at 7 p.m.",
      instructions: "Write <b>5–7 sentences</b>. Where were you yesterday at 7 p.m.? What were you and the people around you doing? Did something happen? What did you have for dinner?",
      words: ["breakfast", "lunch", "dinner", "a shower", "a bath", "a swim", "homework", "a lesson", "a party", "a good time", "a look", "a word", "a cup of", "had to"],
      checks: [
        { label: "was / were + -ing — at least twice", pattern: "\\b(was|were)\\s+(not\\s+)?\\w+ing\\b", min: 2 },
        { label: "when or while", pattern: "\\b(when|while)\\b" },
        { label: "have / had — at least twice", pattern: "\\b(have|has|had|having)\\b", min: 2 },
        { label: "3+ have-phrases from today (they light up above)", words: 3 },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Yesterday at 7 p.m. I was at home. My mum was cooking dinner and my dad was watching the news. I was doing my homework in my room. While I was writing an essay, my friend called me. We had a short chat, and then I had to finish my homework. After that we had dinner together, and I had a hot shower before bed."
    },

    /* ================= 6 · SELF-CHECK ================= */
    { type: "part", n: "06", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
