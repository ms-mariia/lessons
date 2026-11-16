const IMG = f => "assets/img/" + f;
const H = v => ` <span class=hint>(${v})</span>`;
const LESSON = {
  id: "where-were-you-egiu10-12-us",
  kicker: "case file · was / were · past simple",
  titleHTML: 'Where <em>were</em> you?',
  title: "Where were you?",
  subtitle: "A laptop is missing. Ask the questions, check the stories, find the mistake.",
  stickers: ["folder", "search"],
  confetti: ["search", "oldkey", "check", "star", "footprints"],

  sections: [

    /* ================= 1 · WARM-UP ================= */
    { type: "part", n: "01", icon: "footprints", title: "Warm-up", text: "Where were you last Friday?" },

    {
      type: "rule", label: "warm-up · look and talk", sticker: "search",
      title: "Were you here?",
      html: `
        <div class="photos">
          <figure class="photo wide"><img loading="lazy" alt="The main hall of a big train station" src="${IMG("station.jpg")}"><figcaption><b>A · a train station</b><small>Photo: Axel Tschentscher · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="An empty airport check-in hall" src="${IMG("airport.jpg")}"><figcaption><b>B · an airport</b><small>Photo: Jacek Rużyczka · CC BY-SA 4.0 · Wikimedia Commons</small></figcaption></figure>
          <figure class="photo"><img loading="lazy" alt="A small movie theater on a street" src="${IMG("movies.jpg")}"><figcaption><b>C · a movie theater</b><small>Photo: Trougnouf (Benoit Brummer) · CC BY 4.0 · Wikimedia Commons</small></figcaption></figure>
        </div>
        <ol class="qs">
          <li>When were you last in a place like A, B or C? Who were you with?</li>
          <li>What did you do there? Did you like it?</li>
          <li>Where were you last Friday at 4 p.m.? And at 9 p.m.?</li>
          <li>Photo B: the airport is empty. Why do you think nobody was there?</li>
        </ol>`
    },

    /* ================= 2 · WAS / WERE ================= */
    { type: "part", n: "02", icon: "clipboard", title: "was / were", text: "Essential Grammar in Use · Unit 10" },

    {
      type: "rule", label: "grammar · was / were", sticker: "clipboard",
      title: "am / is → was · are → were",
      html: `
        <table class="qtable">
          <tr><th></th><th>+</th><th>−</th><th>?</th></tr>
          <tr><td>I / he / she / it</td><td><b>was</b></td><td><b>wasn’t</b> (was not)</td><td><b>Was</b> she…?</td></tr>
          <tr><td>we / you / they</td><td><b>were</b></td><td><b>weren’t</b> (were not)</td><td><b>Were</b> they…?</td></tr>
        </table>
        <div class="colloc">
          <div>I <b>am</b> tired now. → I <b>was</b> tired last night.</div>
          <div>They <b>aren’t</b> here now. → They <b>weren’t</b> here last Sunday.</div>
          <div><b>Was</b> the weather nice on your vacation? · Your sneakers are nice. <b>Were</b> they expensive?</div>
          <div><b>Where were</b> you at 4 p.m.? · <b>Why were</b> you late this morning?</div>
        </div>
        <h3>Short answers</h3>
        <div class="colloc">
          <div>“Were you late?” — “No, I <b>wasn’t</b>.”</div>
          <div>“Was Tom at work yesterday?” — “Yes, he <b>was</b>.”</div>
          <div>“Were Sue and Steve at the party?” — “No, they <b>weren’t</b>.”</div>
        </div>
        <div class="note">⚠️ <b>was / were</b> is the only verb here: <s>I was go home.</s> → <b>I went home.</b> · <s>She was tired and was sleep.</s> → <b>She was tired and slept.</b></div>`
    },

    {
      type: "gapfill", label: "grammar · now or then?", sticker: "calendar2",
      title: "am / is / are or was / were?",
      instructions: "Look at the time words. Write <b>am, is, are, was, were, wasn’t</b> or <b>weren’t</b>.",
      items: [
        { text: "Last year she [[was]] 15, so she [[is]] 16 now.", why: "last year → was; now → is." },
        { text: "Today the weather [[is]] nice, but yesterday it [[was]] very cold.", why: "today → is; yesterday → was." },
        { text: "Where [[were]] you at 4 o’clock last Friday?", why: "you + past → were." },
        { text: "Don’t buy those sneakers. They [[are]] very expensive.", why: "now → are." },
        { text: "I [[wasn’t|wasnt|was not]] at school yesterday because I [[was]] sick.", why: "I + past → was / wasn’t." },
        { text: "“[[Were]] Emma and Jake at the party?” “Emma [[was]] there, but Jake [[wasn’t|wasnt|was not]].”", why: "Emma and Jake = they → were; Emma → was; Jake → wasn’t." },
        { text: "Where are my keys? They [[were]] on the table a minute ago!", why: "a minute ago → past; they → were." },
        { text: "This time last year we [[were]] in Florida.", why: "last year; we → were." },
        { text: "“Was the movie good?” “No, it [[wasn’t|wasnt|was not]]. It was boring.”", why: "short answer: No, it wasn’t." },
        { text: "Why [[were]] you late this morning?", why: "this morning is over → past; you → were." }
      ]
    },

    {
      type: "build", label: "grammar · was / were questions", sticker: "search",
      title: "Ask the suspects",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { qw: "Where", aux: "were", who: "you", when: "at 4 p.m.", wrong: "was", end: "?" },
        { aux: "Was", who: "Emma", where: "in the library", when: "at 3 p.m.", wrong: "Were", end: "?" },
        { aux: "Were", who: "your parents", where: "at home", when: "last night", wrong: "Was", end: "?" },
        { qw: "Where", aux: "was", who: "Jake", when: "on Friday afternoon", wrong: "were", end: "?" },
        { aux: "Was", who: "the laptop", where: "on the desk", when: "at 4:15", wrong: "Did", end: "?" },
        { aux: "Were", who: "Olivia and Emma", where: "at school", when: "yesterday", wrong: "Did", end: "?" }
      ]
    },

    /* ================= 3 · PAST SIMPLE ================= */
    { type: "part", n: "03", icon: "oldkey", title: "Past simple", text: "Essential Grammar in Use · Unit 11" },

    {
      type: "rule", label: "grammar · worked / got / went", sticker: "oldkey",
      title: "Regular and irregular",
      html: `
        <p><b>Regular verbs</b> + <b>-ed</b> — the same for I / you / he / she / we / they:</p>
        <div class="colloc">
          <div>work → work<b>ed</b> · clean → clean<b>ed</b> · start → start<b>ed</b> · stay → stay<b>ed</b></div>
          <div>dance → danc<b>ed</b> · need → need<b>ed</b></div>
          <div>Spelling: try → tr<b>ied</b> · study → stud<b>ied</b> · stop → sto<b>pped</b> · plan → pla<b>nned</b></div>
        </div>
        <p><b>Irregular verbs</b> — no -ed. Learn them by heart:</p>
        <div class="vtable">
          <span>begin → <b>began</b></span><span>break → <b>broke</b></span><span>bring → <b>brought</b></span><span>build → <b>built</b></span>
          <span>buy → <b>bought</b></span><span>catch → <b>caught</b></span><span>come → <b>came</b></span><span>do → <b>did</b></span>
          <span>drink → <b>drank</b></span><span>eat → <b>ate</b></span><span>fall → <b>fell</b></span><span>find → <b>found</b></span>
          <span>fly → <b>flew</b></span><span>forget → <b>forgot</b></span><span>get → <b>got</b></span><span>give → <b>gave</b></span>
          <span>go → <b>went</b></span><span>have → <b>had</b></span><span>hear → <b>heard</b></span><span>know → <b>knew</b></span>
          <span>leave → <b>left</b></span><span>lose → <b>lost</b></span><span>make → <b>made</b></span><span>meet → <b>met</b></span>
          <span>pay → <b>paid</b></span><span>put → <b>put</b></span><span>read → <b>read</b> 🔊 “red”</span><span>ring → <b>rang</b></span>
          <span>say → <b>said</b></span><span>see → <b>saw</b></span><span>sell → <b>sold</b></span><span>sit → <b>sat</b></span>
          <span>sleep → <b>slept</b></span><span>speak → <b>spoke</b></span><span>stand → <b>stood</b></span><span>take → <b>took</b></span>
          <span>tell → <b>told</b></span><span>think → <b>thought</b></span><span>win → <b>won</b></span><span>write → <b>wrote</b></span>
        </div>
        <div class="colloc">
          <div>I usually get up early, but this morning I <b>got</b> up at 9.</div>
          <div>James <b>came</b> into the room, <b>took</b> off his coat and <b>sat</b> down.</div>
        </div>`
    },

    {
      type: "match", label: "irregular verbs · match", sticker: "tabs",
      title: "Find the past",
      instructions: "Match each verb with its past simple.",
      pairs: [
        ["fly", "flew"], ["leave", "left"], ["pay", "paid"], ["sell", "sold"], ["speak", "spoke"],
        ["know", "knew"], ["lose", "lost"], ["win", "won"], ["catch", "caught"], ["think", "thought"]
      ]
    },

    {
      type: "drill", label: "automaticity · irregular verbs", sticker: "stopwatch",
      title: "Sixteen verbs, twice each",
      instructions: "Write the <b>past simple</b> and press <b>Enter</b>. Each verb must be right <b>twice</b>.",
      items: [
        { cue: "past", prompt: "begin", answers: ["began"] }, { cue: "past", prompt: "bring", answers: ["brought"] },
        { cue: "past", prompt: "buy", answers: ["bought"] }, { cue: "past", prompt: "catch", answers: ["caught"] },
        { cue: "past", prompt: "drink", answers: ["drank"] }, { cue: "past", prompt: "fall", answers: ["fell"] },
        { cue: "past", prompt: "find", answers: ["found"] }, { cue: "past", prompt: "forget", answers: ["forgot"] },
        { cue: "past", prompt: "leave", answers: ["left"] }, { cue: "past", prompt: "lose", answers: ["lost"] },
        { cue: "past", prompt: "pay", answers: ["paid"] }, { cue: "past", prompt: "speak", answers: ["spoke"] },
        { cue: "past", prompt: "think", answers: ["thought"] }, { cue: "past", prompt: "win", answers: ["won"] },
        { cue: "past", prompt: "write", answers: ["wrote"] }, { cue: "past", prompt: "sell", answers: ["sold"] }
      ]
    },

    {
      type: "gapfill", label: "past simple · a trip", sticker: "tickets",
      title: "Sam’s trip to Chicago",
      instructions: "Put the verbs in the <b>past simple</b>. Some are regular, some are irregular.",
      items: [
        { text: "Last Tuesday Sam [[flew]]" + H("fly") + " from New York to Chicago.", why: "fly → flew." },
        { text: "He [[got]]" + H("get") + " up at 5 a.m. and [[had]]" + H("have") + " a cup of coffee.", why: "get → got; have → had." },
        { text: "At 5:30 he [[left]]" + H("leave") + " home and [[drove]]" + H("drive") + " to the airport.", why: "leave → left; drive → drove." },
        { text: "When he [[arrived]]" + H("arrive") + " there, he [[parked]]" + H("park") + " the car.", why: "regular: arrived, parked." },
        { text: "He [[walked]]" + H("walk") + " to the terminal and [[checked]]" + H("check") + " in.", why: "regular: walked, checked." },
        { text: "Then he [[ate]]" + H("eat") + " breakfast at a café.", why: "eat → ate." },
        { text: "He [[bought]]" + H("buy") + " a magazine and [[read]]" + H("read") + " it on the plane.", why: "buy → bought; read → read (say “red”)." },
        { text: "The plane [[left]]" + H("leave") + " on time.", why: "leave → left." },
        { text: "It [[landed]]" + H("land") + " in Chicago two hours later.", why: "regular: landed." },
        { text: "Finally he [[took]]" + H("take") + " a taxi downtown and [[called]]" + H("call") + " his mom.", why: "take → took; call → called." }
      ]
    },

    /* ================= 4 · DIDN'T / DID ================= */
    { type: "part", n: "04", icon: "folder", title: "didn’t / did", text: "Essential Grammar in Use · Unit 12" },

    {
      type: "rule", label: "grammar · didn’t / did … ?", sticker: "folder",
      title: "did + the first form",
      html: `
        <table class="qtable">
          <tr><th>+</th><th>−</th><th>?</th></tr>
          <tr><td>I <b>went</b></td><td>I <b>didn’t go</b></td><td><b>Did</b> you <b>go</b>?</td></tr>
          <tr><td>she <b>saw</b></td><td>she <b>didn’t see</b></td><td><b>Did</b> she <b>see</b>?</td></tr>
          <tr><td>they <b>had</b></td><td>they <b>didn’t have</b></td><td><b>Did</b> they <b>have</b>?</td></tr>
        </table>
        <div class="note">⚠️ The past is already in <b>did</b> — the verb goes back to its first form: <s>I didn’t went</s> → <b>I didn’t go</b> · <s>Did you saw?</s> → <b>Did you see?</b></div>
        <h3>Word order</h3>
        <div class="legend">
          <div class="lg c-qw"><b>Question word</b><span>Where</span></div>
          <div class="lg c-aux"><b>Helper</b><span>did</span></div>
          <div class="lg c-who"><b>Who?</b><span>your parents</span></div>
          <div class="lg c-does"><b>Did what?</b><span>go</span></div>
          <div class="lg c-when"><b>When?</b><span>last summer?</span></div>
        </div>
        <div class="colloc">
          <div><b>What did</b> you do last night? · <b>How did</b> the accident happen?</div>
          <div>“Did you see Joe?” — “No, I <b>didn’t</b>.” · “Did it rain on Sunday?” — “Yes, it <b>did</b>.”</div>
        </div>
        <h3>was / were or did?</h3>
        <div class="rcard">
          <div><b>be</b><span><b>Were</b> you tired? · <b>Was</b> it expensive? · I <b>wasn’t</b> at home.</span></div>
          <div><b>other verbs</b><span><b>Did</b> you sleep well? · <b>Did</b> it cost a lot? · I <b>didn’t go</b> out.</span></div>
        </div>`
    },

    {
      type: "gapfill", label: "grammar · negative", sticker: "clipboard",
      title: "Yes to one, no to the other",
      instructions: "Complete with the verb in the <b>negative</b> (didn’t + verb) or with <b>did / didn’t</b>.",
      items: [
        { text: "I saw Emma, but I [[didn’t see|didnt see|did not see]] Jake.", why: "saw → didn’t see." },
        { text: "They worked on Monday, but they [[didn’t work|didnt work|did not work]] on Tuesday.", why: "worked → didn’t work." },
        { text: "We went to the post office, but we [[didn’t go|didnt go|did not go]] to the bank.", why: "went → didn’t go." },
        { text: "She had a pen, but she [[didn’t have|didnt have|did not have]] any paper.", why: "had → didn’t have." },
        { text: "He studied French in school, but he [[didn’t study|didnt study|did not study]] German.", why: "studied → didn’t study." },
        { text: "I bought a T-shirt, but I [[didn’t buy|didnt buy|did not buy]] the jeans.", why: "bought → didn’t buy." },
        { text: "We watched the movie, but we [[didn’t enjoy|didnt enjoy|did not enjoy]]" + H("enjoy") + " it.", why: "didn’t + enjoy." },
        { text: "“Did you call Chris?” “No, I [[didn’t have|didnt have|did not have]]" + H("have") + " time.”", why: "didn’t + have." },
        { text: "“[[Did]] it rain yesterday?” “No, it [[didn’t|didnt|did not]]. It was sunny.”", why: "rain is not be → Did…? / No, it didn’t." },
        { text: "“How [[did]] you [[break]]" + H("break") + " your phone?” “I dropped it.”", why: "How did you + first form (break)." }
      ]
    },

    {
      type: "build", label: "grammar · did questions", sticker: "search",
      title: "The detective asks",
      instructions: "Tap a card, then tap a slot. <b>One card is wrong</b> — leave it out.",
      items: [
        { qw: "Where", aux: "did", who: "you", does: "go", when: "last weekend", wrong: "went", end: "?" },
        { aux: "Did", who: "Emma", does: "see", what: "the laptop", wrong: "saw", end: "?" },
        { qw: "What time", aux: "did", who: "the movie", does: "start", wrong: "started", end: "?" },
        { qw: "What", aux: "did", who: "Jake", does: "do", when: "after school", wrong: "does", end: "?" },
        { aux: "Did", who: "they", does: "take", what: "a taxi", where: "to the airport", wrong: "took", end: "?" },
        { qw: "How", aux: "did", who: "you", does: "get", where: "home", wrong: "got", end: "?" },
        { qw: "Who", aux: "did", who: "Olivia", does: "meet", where: "in the gym", wrong: "met", end: "?" },
        { aux: "Did", who: "your parents", does: "buy", what: "the tickets", when: "yesterday", wrong: "bought", end: "?" }
      ]
    },

    {
      type: "mcq", label: "grammar · was, were or did?", sticker: "oldkey",
      title: "Choose the right word",
      instructions: "Is there another verb in the sentence? Then you need <b>did</b>.",
      items: [
        { q: "___ you at home last night?", options: ["Did", "Were", "Was"], answer: 1 },
        { q: "___ you watch the game last night?", options: ["Did", "Were", "Was"], answer: 0 },
        { q: "Where ___ Emma at 4 p.m.?", options: ["did", "were", "was"], answer: 2 },
        { q: "I ___ tired, so I went to bed early.", options: ["did", "was", "were"], answer: 1 },
        { q: "___ the movie good?", options: ["Was", "Did", "Were"], answer: 0 },
        { q: "What time ___ the movie start?", options: ["was", "did", "does"], answer: 1 },
        { q: "We ___ go out last weekend. We stayed home.", options: ["weren’t", "wasn’t", "didn’t"], answer: 2 },
        { q: "The tickets ___ expensive — only $8.", options: ["weren’t", "didn’t", "wasn’t"], answer: 0 },
        { q: "___ your parents at the party?", options: ["Did", "Was", "Were"], answer: 2 },
        { q: "How ___ you get to the airport?", options: ["were", "did", "was"], answer: 1 }
      ]
    },

    {
      type: "correct", label: "fix it · past simple", sticker: "detective",
      title: "Find and fix the mistake",
      instructions: "Each sentence has <b>one</b> mistake. Write the correct sentence.",
      items: [
        { wrong: "I didn't went to school yesterday.", answers: ["I didn't go to school yesterday.", "I did not go to school yesterday."] },
        { wrong: "Did you saw the game?", answers: ["Did you see the game?"] },
        { wrong: "She was go to the station at 6.", answers: ["She went to the station at 6."] },
        { wrong: "Where you were last night?", answers: ["Where were you last night?"] },
        { wrong: "We was very tired after the flight.", answers: ["We were very tired after the flight."] },
        { wrong: "He buyed a new phone.", answers: ["He bought a new phone."] },
        { wrong: "They didn't was at home.", answers: ["They weren't at home.", "They were not at home."] },
        { wrong: "Was you at the movie theater?", answers: ["Were you at the movie theater?"] }
      ]
    },

    {
      type: "rephrase", label: "grammar · negative and questions", sticker: "footprints",
      title: "Change the sentence",
      instructions: "<b>−</b> = make it negative · <b>?</b> = make a yes/no question · a question word = ask with it.",
      items: [
        { prompt: "Emma went home by bus.", key: "−", answers: ["Emma didn't go home by bus.", "Emma did not go home by bus."] },
        { prompt: "Jake had a dentist appointment.", key: "?", answers: ["Did Jake have a dentist appointment?"] },
        { prompt: "They were at the station.", key: "−", answers: ["They weren't at the station.", "They were not at the station."] },
        { prompt: "Olivia forgot her jacket.", key: "?", answers: ["Did Olivia forget her jacket?"] },
        { prompt: "I paid for the tickets.", key: "−", answers: ["I didn't pay for the tickets.", "I did not pay for the tickets."] },
        { prompt: "The laptop was on the desk.", key: "?", answers: ["Was the laptop on the desk?"] },
        { prompt: "They saw a horror movie.", key: "?", answers: ["Did they see a horror movie?"] },
        { prompt: "He locked the door at 4:30.", key: "WHAT TIME", answers: ["What time did he lock the door?", "When did he lock the door?"] }
      ]
    },

    /* ================= 5 · THE CASE ================= */
    { type: "part", n: "05", icon: "detective", title: "The case", text: "Read the statements. Who is not telling the truth?" },

    {
      type: "tf2", label: "reading · case file", sticker: "detective",
      title: "Case 214: the missing laptop",
      instructions: "Read the case file. True or false? If it’s false, choose the correct sentence.",
      text: `<div class="casefile"><span class="stamp">CASE 214</span>
          <h4>What happened</h4>
          <p>On Friday, Ms. Parker left her laptop on a desk in the school library at 3 p.m. At 5 p.m. it wasn’t there.</p>
          <h4>Statements</h4>
          <p><b>Emma:</b> “I was in the library from 3 to 4. I did my history homework. I didn’t see a laptop. At 4 I went home by bus.”</p>
          <p><b>Jake:</b> “I wasn’t at school after 2:30. I had a dentist appointment. Then I went to the movies with my brother. We saw a horror movie.”</p>
          <p><b>Olivia:</b> “I was in the gym. I played basketball until 4:30. At 4:45 I came back to the library because I forgot my jacket there. The door was open, but nobody was there.”</p>
          <p><b>Mr. Lopez, the janitor:</b> “I cleaned the library at 4:15. The laptop was on the desk. I locked the door at 4:30.”</p>
        </div>`,
      items: [
        { q: "Ms. Parker left the laptop in the library at 3 p.m.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Emma did her math homework.", answer: false, fix: ["She did her history homework.", "She didn’t do any homework.", "She read a book."], fixAnswer: 0 },
        { q: "Emma saw the laptop.", answer: false, fix: ["She took the laptop.", "She didn’t see a laptop.", "She saw it at 5 p.m."], fixAnswer: 1 },
        { q: "Jake was at school at 4 p.m.", answer: false, fix: ["He wasn’t at school after 2:30.", "He was in the gym.", "He was in the library."], fixAnswer: 0 },
        { q: "Jake went to the movies with his brother.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Olivia played basketball until 4:30.", answer: true, fix: [], fixAnswer: 0 },
        { q: "Mr. Lopez cleaned the library at 4:15.", answer: true, fix: [], fixAnswer: 0 },
        { q: "The laptop wasn’t on the desk at 4:15.", answer: false, fix: ["It was in the gym.", "It was on the desk.", "Nobody knows."], fixAnswer: 1 },
        { q: "Mr. Lopez locked the door at 4:45.", answer: false, fix: ["He locked it at 4:30.", "He didn’t lock it.", "He locked it at 5."], fixAnswer: 0 },
        { q: "Olivia’s story doesn’t match Mr. Lopez’s story.", answer: true, fix: [], fixAnswer: 0 }
      ]
    },

    {
      type: "rule", label: "speaking · interview", sticker: "search",
      title: "Your turn, detective",
      html: `
        <p>The door was locked at 4:30 — but Olivia says it was open at 4:45. I am Olivia. Ask me <b>8 questions</b> with <b>was / were</b> and <b>did</b>. Then I ask you about <i>your</i> Friday.</p>
        <div class="colloc">
          <div>Where <b>were</b> you at 4:15? · <b>Was</b> anybody with you?</div>
          <div>What time <b>did</b> you leave the gym? · Why <b>did</b> you go back to the library?</div>
          <div><b>Did</b> you see the laptop? · How <b>did</b> you get into the library?</div>
        </div>`
    },

    /* ================= 6 · SPEED ================= */
    { type: "part", n: "06", icon: "stopwatch", title: "Speed", text: "Make it automatic." },

    {
      type: "drill", label: "automaticity · speed drill", sticker: "stopwatch",
      title: "Twelve sentences, twice each",
      instructions: "Build the full sentence and press <b>Enter</b>. Each one must be right <b>twice</b>. A mistake sends it back.",
      items: [
        { cue: "was / were ?", prompt: "where / you / at 8 p.m.", answers: ["Where were you at 8 p.m.?", "Where were you at 8 pm?"] },
        { cue: "was / were −", prompt: "I / not / at home", answers: ["I wasn't at home.", "I was not at home."] },
        { cue: "was / were ?", prompt: "the movie / good", answers: ["Was the movie good?"] },
        { cue: "past +", prompt: "we / go / to the movies", answers: ["We went to the movies."] },
        { cue: "past +", prompt: "she / buy / a ticket", answers: ["She bought a ticket."] },
        { cue: "past −", prompt: "I / not / see / him", answers: ["I didn't see him.", "I did not see him."] },
        { cue: "past −", prompt: "they / not / pay", answers: ["They didn't pay.", "They did not pay."] },
        { cue: "past ?", prompt: "you / go / out / last night", answers: ["Did you go out last night?"] },
        { cue: "past ?", prompt: "where / you / go", answers: ["Where did you go?"] },
        { cue: "past ?", prompt: "what time / the plane / leave", answers: ["What time did the plane leave?"] },
        { cue: "short answer", prompt: "Did it rain? No, …", answers: ["No, it didn't.", "No, it did not."] },
        { cue: "short answer", prompt: "Were they late? Yes, …", answers: ["Yes, they were."] }
      ]
    },

    /* ================= 7 · WRITING ================= */
    { type: "part", n: "07", icon: "pencil", title: "Writing", text: "Your own statement." },

    {
      type: "write", label: "writing · my statement", sticker: "notebook",
      title: "Where were you last Friday?",
      instructions: "Write your statement: <b>5–7 sentences</b>. Where were you last Friday from 3 to 9 p.m.? What did you do? What didn’t you do?",
      words: ["went", "came", "got", "had", "took", "left", "saw", "met", "bought", "ate", "drank", "made", "found", "forgot", "paid", "spoke", "told", "thought", "slept", "watched", "played", "stayed", "called", "walked"],
      checks: [
        { label: "was / were — twice", pattern: "\\b(was|were|wasn['’]?t|weren['’]?t)\\b", min: 2 },
        { label: "4+ past verbs (they light up above)", words: 4 },
        { label: "one negative: didn’t / wasn’t / weren’t", pattern: "\\b(didn['’]?t|did not|wasn['’]?t|was not|weren['’]?t|were not)\\b" },
        { label: "no “didn’t + past” mistake", pattern: "^(?![\\s\\S]*\\bdid(n['’]?t| not)\\s+(went|saw|had|took|came|bought|ate|got|made|left|met|saw|did|was|watched|played|stayed|called|walked|liked|wanted|visited|studied|worked|cooked|cleaned)\\b)[\\s\\S]+$" },
        { label: "at least 5 sentences", sentences: 5 }
      ],
      sample: "Last Friday I was at school until 2:30. Then I went home and had lunch with my mom. At 4 p.m. I was at my piano lesson. After that I met my friend and we went to the movies. We saw a comedy, but it wasn’t very funny. I didn’t do my homework on Friday — I did it on Saturday."
    },

    /* ================= 8 · SELF-CHECK ================= */
    { type: "part", n: "08", icon: "star", title: "Self-check", text: "What to look at again." },

    { type: "review", label: "self-check", title: "My mistakes today" }
  ]
};
