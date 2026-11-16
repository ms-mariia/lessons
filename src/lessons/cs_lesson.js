const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "now-or-always-egiu3-4-8",
  kicker: "am / is / are + -ing · I do · now or always?",
  titleHTML: 'Now or <em>always</em>?',
  title: "Now or always?",
  subtitle: "Is it happening right now — or does it happen every day? Two tenses, one easy question.",
  stickers: ["camera", "calendar"],
  confetti: ["camera", "star", "sparkles", "check", "redheart"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "camera", title: "Warm-up", text: "What’s happening in the photos?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "camera",
      title: "Right now",
      html: `
        <div class="photos">
          <figure class="photo"><img loading="lazy" alt="Two street musicians playing guitars" src="${IMG("buskers.jpg")}"><figcaption><b>A</b><small>Photo: Touam (Hervé Agnoux) · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A woman lying on a pier reading a book next to her bike" src="${IMG("readingbike.jpg")}"><figcaption><b>B</b><small>Photo: Jules Verne Times Two · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>A: What <b>are</b> they <b>doing</b>? These musicians <b>play</b> in the street every day. Do you see street musicians in your city?</li>
          <li>B: What <b>is</b> she <b>doing</b>? Where <b>is</b> she <b>lying</b>? How do you think she usually <b>gets</b> to work?</li>
          <li>What <b>are</b> you <b>wearing</b> right now? What do you usually <b>wear</b> to school?</li>
        </ol>`
    },

    /* ================= 2 · RIGHT NOW ================= */
    { type: "part", n: "02", icon: "camera", title: "Right now", text: "Essential Grammar in Use · Unit 3" },

    {
      type: "rule", label: "grammar · present continuous", sticker: "camera",
      title: '<span class="live">LIVE</span> am / is / are + -ing',
      html: `
        <div class="lines">
          <div class="ln"><b class="dot">I</b><p><b>I am</b> (I’m) work<b>ing</b>. · I’m <b>not</b> watching TV.</p></div>
          <div class="ln"><b class="dot">she</b><p><b>he / she / it is</b> (’s) eat<b>ing</b>. · The bus <b>is</b> coming. · It <b>isn’t</b> raining.</p></div>
          <div class="ln"><b class="dot">we</b><p><b>we / you / they are</b> (’re) play<b>ing</b>. · The kids <b>aren’t</b> sleeping.</p></div>
        </div>
        <div class="note">Two parts — always! <s>I working</s> → I <b>am</b> working · <s>I am work</s> → I am work<b>ing</b><br>Spelling: come → com<b>ing</b> · write → writ<b>ing</b> · run → ru<b>nn</b>ing · swim → swi<b>mm</b>ing · sit → si<b>tt</b>ing · lie → l<b>y</b>ing</div>`
    },

    {
      type: "sort", label: "spelling · -ing", sticker: "pencil",
      title: "How do you spell it?",
      instructions: "Put each verb in the right box.",
      categories: [
        { name: "just + ing (play → playing)", words: ["play", "read", "cook", "wait"] },
        { name: "e → ing (come → coming)", words: ["write", "dance", "make", "ride"] },
        { name: "double (run → running)", words: ["swim", "sit", "stop", "get"] },
        { name: "ie → ying (lie → lying)", words: ["die", "tie"] }
      ]
    },

    {
      type: "gapfill", label: "present continuous · write it", sticker: "camera",
      title: "What’s happening?",
      instructions: "Write <b>am / is / are + -ing</b>. Use the verb in brackets.",
      items: [
        { text: "Please be quiet. I [[am working|'m working]]." + H("work"), why: "I + am + working." },
        { text: "“Where’s Dad?” “He [[is cooking|'s cooking]] in the kitchen.”" + H("cook"), why: "he + is + cooking." },
        { text: "Look! Somebody [[is swimming|'s swimming]] in the river." + H("swim"), why: "swim → swimming (double m)." },
        { text: "Take an umbrella. It [[is raining|'s raining]]." + H("rain"), why: "it + is + raining." },
        { text: "The kids [[are playing|'re playing]] in the yard." + H("play"), why: "they + are + playing." },
        { text: "Sorry, I can’t talk now. We [[are having|'re having]] dinner." + H("have"), why: "have → having (no e)." },
        { text: "You can turn off the TV. I [[am not watching|'m not watching]] it." + H("not / watch"), why: "I’m not + watching." },
        { text: "Why [[are]] you [[sitting]] on the floor?" + H("sit"), why: "question: are + you + sitting (double t)." }
      ]
    },

    /* ================= 3 · QUESTIONS ================= */
    { type: "part", n: "03", icon: "question", title: "What are you doing?", text: "Essential Grammar in Use · Unit 4" },

    {
      type: "build", label: "grammar · questions", sticker: "question",
      title: "Is she working?",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { aux: "Is", who: "Ben", does: "working", when: "today", wrong: "Does", end: "?" },
        { qw: "What", aux: "are", who: "the kids", does: "doing", wrong: "do", end: "?" },
        { aux: "Are", who: "you", does: "listening", what: "to me", wrong: "listen", end: "?" },
        { qw: "Where", aux: "are", who: "your friends", does: "going", wrong: "is", end: "?" },
        { qw: "Why", aux: "are", who: "you", does: "wearing", what: "a coat", wrong: "wear", end: "?" },
        { qw: "What", aux: "is", who: "your mom", does: "cooking", wrong: "cooks", end: "?" }
      ]
    },

    {
      type: "mcq", label: "short answers", sticker: "question",
      title: "Yes, I am. / No, she isn’t.",
      instructions: "Choose the right short answer.",
      items: [
        { q: "“Are you watching TV?” “No, ___.”", options: ["I don’t", "I’m not", "I amn’t"], answer: 1 },
        { q: "“Is it raining?” “Yes, ___.”", options: ["it is", "it’s", "it does"], answer: 0 },
        { q: "“Are your parents working today?” “No, ___.”", options: ["they don’t", "they isn’t", "they aren’t"], answer: 2 },
        { q: "“Is Masha sleeping?” “No, ___. She’s reading.”", options: ["she isn’t", "she doesn’t", "she not"], answer: 0 },
        { q: "“Are we going now?” “Yes, ___.”", options: ["we’re", "we are", "we do"], answer: 1 }
      ]
    },

    /* ================= 4 · NOW OR ALWAYS ================= */
    { type: "part", n: "04", icon: "calendar", title: "Now or always?", text: "Essential Grammar in Use · Unit 8" },

    {
      type: "rule", label: "grammar · I am doing / I do", sticker: "calendar",
      title: "One question: is it happening NOW?",
      html: `
        <div class="lines">
          <div class="ln"><b class="dot">NOW</b><p><span class="live">LIVE</span> <b>am / is / are + -ing</b> = it’s happening now: <i>Jack <b>is watching</b> TV.</i> · <i>Listen! Somebody <b>is singing</b>.</i></p></div>
          <div class="ln al"><b class="dot">ALL</b><p><span class="alw">ALWAYS</span> <b>I do / he does</b> = in general, every day, sometimes: <i>Jack <b>plays</b> the guitar.</i> · <i>It <b>rains</b> a lot in November.</i></p></div>
          <div class="ln y"><b class="dot">!</b><p>These verbs are <b>never</b> -ing: like · want · need · know · understand · remember · forget · prefer · mean · believe → <i>I <b>want</b> pizza.</i> <s>I’m wanting</s></p></div>
        </div>
        <div class="note">Jack <b>plays</b> the guitar, but he <b>isn’t playing</b> it now. · <b>Is</b> he <b>playing</b> now? — No, he isn’t. · <b>Does</b> he <b>play</b>? — Yes, he does.</div>`
    },

    {
      type: "sort", label: "signal words", sticker: "calendar",
      title: "Which tense do they like?",
      instructions: "Put each time word in the right box.",
      categories: [
        { name: "NOW → am / is / are + -ing", words: ["now", "right now", "at the moment", "Look!", "Listen!", "today, this minute"] },
        { name: "ALWAYS → I do / he does", words: ["every day", "usually", "often", "never", "on Mondays", "twice a week"] }
      ]
    },

    {
      type: "mcq", label: "now or always? · choose", sticker: "camera",
      title: "Live or every day?",
      instructions: "Choose the right form.",
      items: [
        { q: "Jack ___ the guitar very well.", options: ["is playing", "plays", "play"], answer: 1 },
        { q: "Look! Jack ___ the guitar in the street.", options: ["is playing", "plays", "play"], answer: 0 },
        { q: "My mom ___ in a hospital. She’s a nurse.", options: ["is working", "work", "works"], answer: 2 },
        { q: "Be quiet! The baby ___.", options: ["sleeps", "is sleeping", "sleep"], answer: 1 },
        { q: "I ___ a new phone. Mine is very old.", options: ["want", "am wanting", "wanting"], answer: 0 },
        { q: "We usually ___ to school by bus.", options: ["are going", "go", "goes"], answer: 1 },
        { q: "“Where’s Kate?” “She ___ a shower.”", options: ["has", "is having", "have"], answer: 1 },
        { q: "Sorry, I ___ what you mean.", options: ["am not understanding", "don’t understand", "not understand"], answer: 1 },
        { q: "It ___ a lot here in winter.", options: ["snows", "is snowing", "snow"], answer: 0 },
        { q: "Why ___ you laughing? What’s funny?", options: ["do", "are", "is"], answer: 1 }
      ]
    },

    {
      type: "gapfill", label: "now or always? · write it", sticker: "calendar",
      title: "Write the verb",
      instructions: "Present continuous (<b>am -ing</b>) or present simple (<b>I do / he does</b>)?",
      items: [
        { text: "Listen! Somebody [[is singing|'s singing]]." + H("sing"), why: "Listen! → now." },
        { text: "My brother [[plays]] basketball on Fridays." + H("play"), why: "on Fridays → always; he → plays." },
        { text: "“Where’s Tom?” “He [[is doing|'s doing]] his homework.”" + H("do"), why: "right now → is doing." },
        { text: "I [[don't watch|do not watch]] TV very often." + H("not / watch"), why: "very often → present simple." },
        { text: "Sarah is tired. She [[wants]] to go home." + H("want"), why: "want → never -ing." },
        { text: "How often [[do]] you [[use]] your phone? Every hour?" + H("you / use"), why: "how often → do you use." },
        { text: "Excuse me, you [[are sitting|'re sitting]] in my seat." + H("sit"), why: "now → are sitting." },
        { text: "My dad [[doesn't drive|does not drive]] to work. He usually walks." + H("not / drive"), why: "usually → present simple; he → doesn’t." },
        { text: "What time [[does]] your sister [[finish]] school every day?" + H("your sister / finish"), why: "every day → does … finish." },
        { text: "Turn off the radio. I [[am not listening|'m not listening]] to it." + H("not / listen"), why: "now → am not listening." }
      ]
    },

    {
      type: "correct", label: "classic mistakes · fix it", sticker: "tools",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I am go to school every day.", answers: ["I go to school every day."] },
        { wrong: "She is play tennis now.", answers: ["She is playing tennis now.", "She's playing tennis now."] },
        { wrong: "My dad work in a bank.", answers: ["My dad works in a bank."] },
        { wrong: "I am wanting a pizza.", answers: ["I want a pizza."] },
        { wrong: "Are you like chocolate?", answers: ["Do you like chocolate?"] },
        { wrong: "What you are doing?", answers: ["What are you doing?"] },
        { wrong: "It rain a lot in November.", answers: ["It rains a lot in November."] },
        { wrong: "Look! The baby sleeps.", answers: ["Look! The baby is sleeping.", "Look! The baby's sleeping."] }
      ]
    },

    /* ================= 5 · READING ================= */
    { type: "part", n: "05", icon: "mobile", title: "A video call", text: "Read and check." },

    {
      type: "tf2", label: "reading · a video message", sticker: "mobile",
      title: "Hi from Lviv!",
      instructions: "Read the message. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="stream"><span class="live">LIVE</span>
          <p>Hi, Grandma! I’m sending you this video from Lviv. It’s Saturday, and I’m sitting in a small café with my mom. We’re drinking hot chocolate, and Mom is reading a map.</p>
          <p>Lviv is so beautiful! It’s snowing right now, and some people are singing in the square. A man is playing the violin. He plays here every weekend, the waiter says.</p>
          <p>At home I usually get up at 7 and go to school, but on this trip we get up at 9! We walk a lot every day. I don’t like museums very much, but I love the old streets. Bye! I miss you!</p></div>`,
      items: [
        { q: "She is in a café now.", answer: true, fix: [], fixAnswer: 0 },
        { q: "She is drinking coffee.", answer: false, fix: ["She is drinking hot chocolate.", "She is eating cake.", "She is drinking tea."], fixAnswer: 0 },
        { q: "Her mom is reading a book.", answer: false, fix: ["Her mom is reading a map.", "Her mom is talking on the phone.", "Her mom is sleeping."], fixAnswer: 0 },
        { q: "It is snowing at the moment.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The man plays the violin there every weekend.", answer: true, fix: [], fixAnswer: 0 },
        { q: "At home she usually gets up at 9.", answer: false, fix: ["At home she usually gets up at 7.", "At home she gets up at 10.", "She never gets up early."], fixAnswer: 0 },
        { q: "She likes museums a lot.", answer: false, fix: ["She doesn’t like museums very much.", "She goes to a museum every day.", "She is in a museum now."], fixAnswer: 0 },
        { q: "They walk a lot on the trip.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    /* ================= 6 · TALK ================= */
    { type: "part", n: "06", icon: "speech", title: "Over to you", text: "Spin it — answer both: now and usually. Then ask me." },

    {
      type: "wheel", label: "speaking · now & usually", sticker: "speech",
      title: "Spin the live stream",
      start: "Spin the wheel. Answer two questions: one about NOW, one about USUALLY. Then ask me the same.",
      colors: ["#FF2D55", "#5B5BD6", "#FFD84D", "#1E1B3A"],
      items: [
        { icon: "👕", short: "clothes", q: "What <b>are</b> you <b>wearing</b> now? What do you usually <b>wear</b> on weekends?" },
        { icon: "🏠", short: "family", q: "What <b>is</b> your mom <b>doing</b> right now, do you think? What <b>does</b> she <b>do</b> in the evenings?" },
        { icon: "🎧", short: "music", q: "<b>Are</b> you <b>listening</b> to anything these days? What music do you usually <b>listen</b> to?" },
        { icon: "🌦️", short: "weather", q: "What’s the weather like now — <b>is</b> it <b>raining</b>, <b>snowing</b>? <b>Does</b> it <b>snow</b> a lot in your city?" },
        { icon: "📱", short: "phone", q: "<b>Are</b> you <b>using</b> your phone now? How often <b>do</b> you <b>use</b> it every day?" },
        { icon: "🍽️", short: "food", q: "<b>Are</b> you <b>eating</b> or <b>drinking</b> anything now? What do you usually <b>have</b> for breakfast?" },
        { icon: "🐾", short: "pet", q: "<b>Do</b> you <b>have</b> a pet? What <b>is</b> it <b>doing</b> right now?" },
        { icon: "📚", short: "school", q: "What <b>are</b> you <b>learning</b> at school this week? What subject <b>do</b> you <b>like</b>?" }
      ]
    },

    /* ================= 7 · SPEED ================= */
    { type: "part", n: "07", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve quick answers, twice each",
      instructions: "Write the answer and press <b>Enter</b>. Each one must be right <b>twice</b>.",
      items: [
        { cue: "-ing", prompt: "swim", answers: ["swimming"] },
        { cue: "-ing", prompt: "write", answers: ["writing"] },
        { cue: "-ing", prompt: "sit", answers: ["sitting"] },
        { cue: "-ing", prompt: "lie", answers: ["lying"] },
        { cue: "now", prompt: "she / read", answers: ["she is reading", "she's reading"] },
        { cue: "now", prompt: "they / play", answers: ["they are playing", "they're playing"] },
        { cue: "always", prompt: "she / read", answers: ["she reads"] },
        { cue: "always", prompt: "he / watch", answers: ["he watches"] },
        { cue: "now", prompt: "I / not / work", answers: ["i am not working", "i'm not working"] },
        { cue: "always", prompt: "he / not / work", answers: ["he doesn't work", "he does not work"] },
        { cue: "question now", prompt: "you / sleep", answers: ["are you sleeping?", "are you sleeping"] },
        { cue: "question always", prompt: "you / sleep", answers: ["do you sleep?", "do you sleep"] }
      ]
    },

    /* ================= 8 · WRITING ================= */
    { type: "part", n: "08", icon: "pencil", title: "Writing", text: "Live now — and usually." },

    {
      type: "write", label: "writing · now and usually", sticker: "pencil",
      title: "My video message",
      instructions: "Write a video message to a friend — <b>6–8 sentences</b>. Say what is happening <b>right now</b> (3 sentences with am / is / are + -ing) and what you <b>usually</b> do (3 sentences with I do / he does).",
      words: ["right now", "at the moment", "usually", "every day", "often", "never", "on Saturdays", "sitting", "wearing", "watching", "playing"],
      checks: [
        { label: "am / is / are + -ing — 3 times", pattern: "\\b(am|is|are|’m|'m|’s|'s|’re|'re)\\s+(not\\s+)?[a-z]+ing\\b", min: 3 },
        { label: "usually / every … / often / never — 2 times", pattern: "\\b(usually|every|often|always|never|sometimes)\\b", min: 2 },
        { label: "no “I am go” (am / is / are + verb without -ing)", pattern: "^(?![\\s\\S]*\\b(am|is|are)\\s+(go|play|watch|eat|read|do|like|want|work|live|sit|wear|have|sleep|listen|drink|cook|write|walk|study|use)\\b)[\\s\\S]+$" },
        { label: "4+ words from the list (they light up)", words: 4 },
        { label: "at least 6 sentences", sentences: 6 }
      ],
      sample: "Hi, Liza! I’m sitting in my room right now. I’m wearing my favorite hoodie and I’m drinking tea. My little brother is playing a video game. I usually do my homework after school, but today is Saturday! On Saturdays I often go to the park with my friends. My mom never works on weekends. See you soon!"
    },

    /* ================= 9 · SELF-CHECK ================= */
    { type: "part", n: "09", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
