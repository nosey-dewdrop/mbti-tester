// =========================================
// mbti field guide — types data & questions
// =========================================

const TYPES_DATA = {
    INTJ: {
        code: 'INTJ',
        nickname: 'the mastermind',
        hearts: '',
        damlaRating: 'i don\'t like intjs :D',
        avatar: 'assets/types/intj.png',
        description: 'the strategic villain of mbti. they have a plan, they have a backup plan, and they have a plan for if you find out about their plan. they will sacrifice you for their goals and not lose sleep. cold? maybe. effective? terrifyingly.',
        damlaNote: 'intjs will kebab-skewer you and grill you alive for their goals. do they have hearts? debatable. BUT — they\'re not evil for fun. they\'re materialist and pragmatic. as nietzsche (also an intj) said: people aren\'t evil, they just act according to their goals. like a gila monster — it would eat you, but nothing personal, just business. saruman, thanos — every truly cold villain you know is probably an intj. the sinister version who doesn\'t even hide it? that\'s an entj.',
        greenFlags: [
            'insanely competent at everything they do',
            'will always have a plan when everyone else is panicking',
            'loyal to the few people they actually respect',
            'self-improvement is their whole personality',
            'brutally honest — you always know where you stand'
        ],
        redFlags: [
            'will use you as a stepping stone and call it "efficiency"',
            'emotional intelligence of a brick wall',
            'think they\'re always the smartest person in the room (sometimes they are)',
            'will ghost you the second you stop being useful',
            'can\'t apologize without making it sound like a strategy'
        ],
        howToSpot: [
            'they always have a long-term plan, even for lunch',
            'they correct people without caring about feelings',
            'they read non-fiction for fun and judge your book choices',
            'they have strong opinions about everything and won\'t budge',
            'they seem cold until you earn their respect, then they\'re ride or die'
        ],
        famous: ['Nietzsche', 'Elon Musk', 'Thanos', 'Saruman', 'Walter White', 'Gandalf', 'Dr. Strange']
    },
    INTP: {
        code: 'INTP',
        nickname: 'the absent-minded professor',
        hearts: '',
        damlaRating: 'chaotic neutral geniuses',
        avatar: 'assets/types/intp.png',
        description: 'lives entirely inside their head. they\'re either solving quantum physics or forgetting to eat for 14 hours. they question everything, including whether you exist.',
        damlaNote: 'intps are the type to explain why your feelings are logically inconsistent. not because they\'re mean — they genuinely don\'t understand why you\'re upset. they live in a world of ideas and your emotions are just... noise. lovable weirdos tho.',
        greenFlags: [
            'genuinely brilliant and creative thinkers',
            'will never judge your weird interests',
            'give you space — they need it too',
            'surprisingly funny in a dry, unexpected way',
            'will teach you things you never knew you wanted to learn'
        ],
        redFlags: [
            'will forget your birthday, your name, and that you exist',
            'emotional availability of a pdf file',
            'starts 47 projects, finishes 2',
            'will debate you into the ground on something nobody cares about',
            'might not text back for 3 days because they were "thinking"'
        ],
        howToSpot: [
            'they say "actually..." more than any word',
            'their room/desk is chaos but they know where everything is',
            'they zone out mid-conversation because a thought was more interesting',
            'they\'d rather be right than be liked',
            'they have a niche obsession they can talk about for 4 hours straight'
        ],
        famous: ['Einstein', 'Bill Gates', 'Sherlock Holmes', 'Neo (Matrix)', 'Yoda']
    },
    ENTJ: {
        code: 'ENTJ',
        nickname: 'the commander',
        hearts: '',
        damlaRating: 'intj but louder and somehow worse',
        avatar: 'assets/types/entj.png',
        description: 'the ceo of the friend group. they walk into a room and somehow everyone starts doing what they say. they\'re intj\'s evil twin who actually bothers to lead instead of scheme from the shadows.',
        damlaNote: 'entjs are the sinister version of intjs. same cold pragmatism, but they\'re not quiet about it. they\'ll reorganize your entire life, tell you it\'s for your own good, and somehow make you thank them for it. terrifying. at least intjs scheme in silence.',
        greenFlags: [
            'will organize chaos into order in seconds',
            'extremely driven — their energy is contagious',
            'natural leaders who actually get things done',
            'direct and clear communicators',
            'will push you to be your best (whether you want it or not)'
        ],
        redFlags: [
            'will steamroll your opinions if they\'re "inefficient"',
            'their way is the only way, always',
            'will schedule your free time if you let them',
            'see vulnerability as weakness',
            'will promote themselves at your expense and call it leadership'
        ],
        howToSpot: [
            'they take charge in every group situation, even ordering food',
            'they interrupt because they already know what you\'re going to say',
            'their calendar is color-coded and they judge yours',
            'they give unsolicited advice that\'s annoyingly accurate',
            'they walk fast and get impatient with slow walkers'
        ],
        famous: ['Steve Jobs', 'Gordon Ramsay', 'Sauron', 'Miranda Priestly', 'Margaret Thatcher']
    },
    ENTP: {
        code: 'ENTP',
        nickname: 'the devil\'s advocate',
        hearts: '',
        damlaRating: 'exhausting but entertaining',
        avatar: 'assets/types/entp.png',
        description: 'will argue any side of any argument just for fun. they don\'t even believe half of what they say — they just want to see your reaction. chaotic energy personified.',
        damlaNote: 'entps are the people who say "well actually" and then convince you the earth is flat for 20 minutes before going "just kidding." they\'re fun until you realize you can never win an argument with them. ever. about anything.',
        greenFlags: [
            'never boring — always have something wild to say',
            'incredibly quick-witted and funny',
            'open-minded about almost everything',
            'great at brainstorming and seeing all angles',
            'will challenge you to think differently (in a good way)'
        ],
        redFlags: [
            'will argue with you for sport, not because they care',
            'commitment allergic — to plans, projects, and sometimes people',
            'get bored of you once they\'ve figured you out',
            'will play devil\'s advocate when you just need support',
            'their charm is a weapon and they know it'
        ],
        howToSpot: [
            'they switch sides mid-argument just to keep it going',
            'they have 12 hobbies and are mediocre at all of them',
            'they laugh when plans fall apart',
            'they know a little bit about everything',
            'they flirt by debating you'
        ],
        famous: ['Tony Stark', 'Joker', 'Deadpool', 'Tyrion Lannister', 'Socrates']
    },
    INFJ: {
        code: 'INFJ',
        nickname: 'the mystic',
        hearts: '&#10084;&#10084;',
        damlaRating: 'rare and precious',
        avatar: 'assets/types/infj.png',
        description: 'the rarest type. they understand you before you understand yourself. they\'re the ones who look at you and somehow know what you\'re feeling, which is either beautiful or terrifying depending on what you\'re hiding.',
        damlaNote: 'infjs just get it. they get you. they get everyone. it\'s almost scary how well they read people. they\'re idealists with depth. protect them.',
        greenFlags: [
            'empathetic on a level that feels almost psychic',
            'genuinely want to make the world better',
            'deep, meaningful conversations are their love language',
            'loyal to their core values — they don\'t bend',
            'will remember things about you that you forgot you said'
        ],
        redFlags: [
            'can door-slam you out of their life with zero warning',
            'so private you might never really know them',
            'idealize people and then crash when reality hits',
            'absorb everyone\'s emotions until they burn out',
            'passive-aggressive when hurt instead of just saying it'
        ],
        howToSpot: [
            'they ask you deep questions on the first meeting',
            'they seem to know what you\'re about to say',
            'they have a cause or mission they care deeply about',
            'they need alone time to recharge, even from people they love',
            'they have an old soul vibe, even if they\'re young'
        ],
        famous: ['Gandalf', 'Aragorn', 'MLK Jr.', 'Lady Galadriel', 'Fyodor Dostoevsky']
    },
    INFP: {
        code: 'INFP',
        nickname: 'the dreamer',
        hearts: '',
        damlaRating: 'that\'s me. we\'re a lot.',
        avatar: 'assets/types/infp.png',
        description: 'lives in a world of feelings and possibilities that may or may not exist. either the most creative person you\'ve ever met or the most dramatically sad. usually both.',
        damlaNote: 'i\'m an infp so let me be honest: we are EXHAUSTING. we\'re dramatic, we overthink everything, and we have this lone wolf energy where we might just leave your wedding to go live in the alps. we feel everything at 200% volume. kurt cobain, tolkien, arwen, syd barrett, jim morrison, arthur fleck — all infps. see a pattern? we\'re either genius or unhinged. often both.',
        greenFlags: [
            'deeply creative — writing, art, music, they make beauty',
            'will love you unconditionally if you earn it',
            'see the best in people, even when they shouldn\'t',
            'emotionally deep in a way that makes you feel seen',
            'authentic — they\'d rather be real than popular'
        ],
        redFlags: [
            'will ghost you to "find themselves" for 6 months',
            'takes everything personally, even the weather',
            'idealize relationships until reality disappoints them',
            'avoids conflict until they explode dramatically',
            'might write a sad poem about you and post it online'
        ],
        howToSpot: [
            'they stare out windows dramatically even in normal situations',
            'they have very strong opinions about music/art/books',
            'they cry at movies, commercials, a really nice sunset',
            'they talk about "meaning" and "purpose" like it\'s groceries',
            'they seem chill until you violate their values — then it\'s war'
        ],
        famous: ['Kurt Cobain', 'Tolkien', 'Shakespeare', 'Syd Barrett', 'Jim Morrison', 'Arthur Fleck']
    },
    ENFJ: {
        code: 'ENFJ',
        nickname: 'the protagonist',
        hearts: '&#10084;&#10084;',
        damlaRating: 'warm and genuinely good',
        avatar: 'assets/types/enfj.png',
        description: 'the natural-born leader who actually cares about people. they\'ll organize the group project, check if everyone\'s doing okay, and somehow make you feel like the most important person in the room.',
        damlaNote: 'enfjs are the people you want on your side. warm, driven, caring. they somehow make everyone feel special and they mean it. the only risk is they give so much they forget about themselves.',
        greenFlags: [
            'make you feel valued and understood instantly',
            'natural motivators — they bring out your best',
            'incredibly socially aware and emotionally intelligent',
            'will fight for you if they believe in you',
            'great communicators who actually listen'
        ],
        redFlags: [
            'can be people-pleasers to the point of losing themselves',
            'might manipulate situations "for your own good"',
            'take rejection very hard because they gave everything',
            'can be preachy about their values',
            'will burn out trying to save everyone'
        ],
        howToSpot: [
            'they introduce people to each other at parties',
            'they remember everyone\'s name and something about them',
            'they ask "how are you?" and actually wait for the answer',
            'they organize group events and make sure no one\'s left out',
            'they give motivational speeches at random moments'
        ],
        famous: ['Obama', 'Oprah', 'Morpheus', 'Dumbledore', 'Moana']
    },
    ENFP: {
        code: 'ENFP',
        nickname: 'the campaigner',
        hearts: '',
        damlaRating: 'sweet and fun but sometimes shallow',
        avatar: 'assets/types/enfp.png',
        description: 'the golden retriever of mbti. they\'re excited about everything, they love everyone, and they have the attention span of a butterfly in a flower field. infectious energy.',
        damlaNote: 'enfps are sweet and genuinely funny. they light up rooms. BUT — and i say this with love — they can be a bit shallow? like, they\'re so busy being excited about everything that they sometimes don\'t go deep on anything. they\'ll be your best friend for 3 weeks and then discover a new hobby and a new best friend.',
        greenFlags: [
            'make everything fun — even boring tasks',
            'genuinely enthusiastic about your interests',
            'creative and full of wild ideas',
            'emotionally open and warm',
            'will hype you up like no one else'
        ],
        redFlags: [
            'attention span of a goldfish on caffeine',
            'promise the moon but forget by tuesday',
            'can be superficially deep — lots of words, less substance',
            'fall in love with the IDEA of you, not actually you',
            'will accidentally flirt with everyone and not realize it'
        ],
        howToSpot: [
            'they talk to strangers like they\'re old friends',
            'they change topics 5 times in one sentence',
            'they use words like "amazing" and "obsessed" about everything',
            'they have 20 tabs open in their brain at all times',
            'they laugh loud and often and make you laugh too'
        ],
        famous: ['Robin Williams', 'Robert Downey Jr.', 'Anne Frank', 'Spider-Man', 'Rapunzel']
    },
    ISFP: {
        code: 'ISFP',
        nickname: 'the artist',
        hearts: '&#10084;&#10084;&#10084;',
        damlaRating: 'absolute favorites',
        avatar: 'assets/types/isfp.png',
        description: 'quiet, gentle, and artistic. they experience the world through feeling and beauty. they won\'t tell you what they think — they\'ll show you through their art, their style, their carefully curated spotify playlist.',
        damlaNote: 'isfps are my absolute favorites. gentle souls with incredible taste. they don\'t talk much but when they create something — music, art, even just how they decorate their room — it says everything. they feel deeply but show it quietly. precious humans.',
        greenFlags: [
            'incredibly artistic and aesthetically gifted',
            'genuinely kind without expecting anything back',
            'live authentically — they are who they are',
            'notice beautiful details others miss',
            'calm presence that makes you feel peaceful'
        ],
        redFlags: [
            'avoid confrontation until they just... leave',
            'can be so go-with-the-flow they never commit',
            'hard to read — you might never know what they\'re thinking',
            'take criticism very personally, even constructive ones',
            'might put their art/passion above relationships'
        ],
        howToSpot: [
            'their personal style is very intentional — clothes, room, everything',
            'they\'re quiet in groups but deeply present',
            'they create things — art, music, food, aesthetics',
            'they prefer doing over talking about doing',
            'they have a gentle vibe that\'s hard to describe but easy to feel'
        ],
        famous: ['Bob Ross', 'Lana Del Rey', 'Frida Kahlo', 'Legolas', 'Keanu Reeves']
    },
    ESFP: {
        code: 'ESFP',
        nickname: 'the entertainer',
        hearts: '&#10084;&#10084;&#10084;',
        damlaRating: 'life of the party, genuinely',
        avatar: 'assets/types/esfp.png',
        description: 'the human embodiment of a party. they live in the moment so hard that "future" is basically a foreign concept. they\'re fun, they\'re loud, they\'re living their best life RIGHT NOW.',
        damlaNote: 'esfps are impossible not to love. they don\'t overthink anything. they just LIVE. while i\'m writing sad poems about the meaning of rain, they\'re out dancing in it. honestly? i envy that. they\'re everything infps wish they could be sometimes.',
        greenFlags: [
            'make every situation more fun just by being there',
            'generous and warm — they share everything',
            'live fully in the present moment',
            'adaptable — nothing phases them',
            'natural performers who make you feel included'
        ],
        redFlags: [
            'future planning is genuinely not in their vocabulary',
            'can be impulsive to a dangerous degree',
            'avoid serious conversations like the plague',
            'might party their problems away instead of solving them',
            'attention span shorter than their latest tiktok'
        ],
        howToSpot: [
            'they\'re always the center of attention and LOVING it',
            'they suggest spontaneous plans at 11pm on a tuesday',
            'they know everyone at the party somehow',
            'they react to things physically — touching, hugging, dancing',
            'they live by "we\'ll figure it out" and somehow always do'
        ],
        famous: ['Marilyn Monroe', 'Elvis', 'Will Smith', 'Jack Sparrow', 'Phoebe Buffay']
    },
    ISTJ: {
        code: 'ISTJ',
        nickname: 'the inspector',
        hearts: '',
        damlaRating: 'reliable but kinda boring ngl',
        avatar: 'assets/types/istj.png',
        description: 'the backbone of society. they follow rules, they keep records, they show up on time. every time. they\'re the reason civilization hasn\'t collapsed. exciting? no. necessary? absolutely.',
        damlaNote: 'istjs are the people who actually read the terms and conditions. they\'re reliable and solid but having a spontaneous adventure with them is like trying to make a rock dance. bless them though, someone has to keep things running.',
        greenFlags: [
            'most reliable person you will ever meet',
            'their word is their bond — they don\'t break promises',
            'organized, disciplined, and consistent',
            'quietly competent — they just get things done',
            'loyal once you\'re in their circle'
        ],
        redFlags: [
            'flexibility of a steel beam',
            'will follow rules even when the rules are stupid',
            'emotionally expressive as a spreadsheet',
            'resistant to change even when change is clearly needed',
            'will judge you silently for being messy/late/unplanned'
        ],
        howToSpot: [
            'they arrive exactly on time or 5 minutes early',
            'they have a system for everything',
            'they reference rules or policies in casual conversation',
            'their workspace is immaculate',
            'they give practical advice, never emotional'
        ],
        famous: ['George Washington', 'Angela Merkel', 'Hermione Granger', 'Stannis Baratheon', 'Ned Stark']
    },
    ISFJ: {
        code: 'ISFJ',
        nickname: 'the protector',
        hearts: '&#10084;',
        damlaRating: 'sweetest humans alive',
        avatar: 'assets/types/isfj.png',
        description: 'the quiet caretaker. they remember your coffee order, they notice when you\'re sad, and they\'ll do anything for the people they love — even if it destroys them in the process.',
        damlaNote: 'isfjs are the people who bring you soup when you\'re sick without being asked. they care SO much. sometimes too much. they give and give and forget to take. protect your isfj friends.',
        greenFlags: [
            'remember every little thing you ever told them',
            'selflessly caring — they put you first',
            'create warm, safe spaces wherever they go',
            'incredibly dependable and consistent',
            'show love through actions, not words'
        ],
        redFlags: [
            'martyr complex — will sacrifice themselves and resent you for it',
            'avoid confrontation until they snap',
            'can be passive-aggressive instead of direct',
            'resist change even when it\'s necessary',
            'might guilt-trip you without realizing it'
        ],
        howToSpot: [
            'they offer you food/drink within 5 minutes of seeing you',
            'they notice when something is off with you before you do',
            'they have traditions they never break',
            'they keep gifts and mementos from years ago',
            'they apologize too much'
        ],
        famous: ['Samwise Gamgee', 'Queen Elizabeth II', 'Captain America', 'Cinderella', 'Mother Teresa']
    },
    ESTJ: {
        code: 'ESTJ',
        nickname: 'the executive',
        hearts: '',
        damlaRating: 'your strict manager',
        avatar: 'assets/types/estj.png',
        description: 'they run everything and everyone. they believe in hard work, rules, and doing things the right way (their way). they\'re the group project member who assigns tasks and sends follow-up emails.',
        damlaNote: 'estjs are that one friend who turns a casual hangout into a scheduled event with an agenda. they mean well but they\'re SO intense about organization that it sucks the fun out of everything. good to have on your team tho — they deliver.',
        greenFlags: [
            'gets. things. done. period.',
            'organized and efficient — nothing falls through cracks',
            'clear expectations — no guessing games',
            'strong sense of duty and responsibility',
            'will protect and provide for their people'
        ],
        redFlags: [
            'my way or the highway, always',
            'will manage your life without asking',
            'emotional sensitivity? never heard of it',
            'rigid about rules and traditions even when outdated',
            'will judge you for not meeting their standards'
        ],
        howToSpot: [
            'they take charge in any group situation',
            'they reference how things "should" be done',
            'they have opinions about your work ethic',
            'they dress appropriately for every occasion, always',
            'they send reminder texts about things you forgot'
        ],
        famous: ['Judge Judy', 'Cersei Lannister', 'Dwight Schrute', 'Darth Vader', 'Martha Stewart']
    },
    ESFJ: {
        code: 'ESFJ',
        nickname: 'the host',
        hearts: '&#10084;',
        damlaRating: 'the social glue',
        avatar: 'assets/types/esfj.png',
        description: 'the person who remembers everyone\'s birthday, plans the surprise party, and makes sure nobody feels left out. they run on social harmony and die a little when people fight.',
        damlaNote: 'esfjs are the mom friends. they feed you, they check on you, they organize the group chat. sometimes they gossip too much but it comes from caring (they tell themselves). they keep friend groups alive.',
        greenFlags: [
            'make everyone feel welcome and included',
            'remember important dates and details about your life',
            'incredibly generous with their time and energy',
            'natural hosts — their home is always warm',
            'loyal to their friend group'
        ],
        redFlags: [
            'gossip is their oxygen',
            'need external validation constantly',
            'can be controlling about social dynamics',
            'take sides in conflicts and make it worse',
            'will be devastated if you don\'t appreciate their efforts'
        ],
        howToSpot: [
            'they know everyone\'s relationship status and drama',
            'they plan group events and get upset if people cancel',
            'they bring snacks/gifts without being asked',
            'they introduce themselves to new people immediately',
            'they mediate conflicts even when not involved'
        ],
        famous: ['Taylor Swift', 'Jennifer Garner', 'Woody (Toy Story)', 'Monica Geller', 'Molly Weasley']
    },
    ISTP: {
        code: 'ISTP',
        nickname: 'the mechanic',
        hearts: '',
        damlaRating: 'cool and mysterious',
        avatar: 'assets/types/istp.png',
        description: 'the quiet badass. they don\'t talk much but they can fix anything, build anything, and figure out how anything works. they\'re the person who calmly handles a crisis while everyone else is screaming.',
        damlaNote: 'istps are the people who take things apart to see how they work and somehow put them back together better. they\'re cool in a way that\'s not performative — they just genuinely don\'t care what you think. respect.',
        greenFlags: [
            'calm under pressure — literally nothing phases them',
            'incredibly handy and practical',
            'give you space without being asked',
            'quietly loyal to the people they care about',
            'adventurous in a grounded, real way'
        ],
        redFlags: [
            'emotionally unavailable as a default setting',
            'will leave the moment things get "too emotional"',
            'commitment-phobic — they need freedom',
            'can seem cold even when they care',
            'might take dangerous risks for the thrill'
        ],
        howToSpot: [
            'they fix things without being asked',
            'they prefer doing to talking about doing',
            'they stay calm when everything is falling apart',
            'they have a hobby that involves their hands — building, sports, tools',
            'they answer questions with as few words as possible'
        ],
        famous: ['James Bond', 'Clint Eastwood', 'Arya Stark', 'Indiana Jones', 'John Wick']
    },
    ESTP: {
        code: 'ESTP',
        nickname: 'the daredevil',
        hearts: '',
        damlaRating: 'fun but will break your stuff',
        avatar: 'assets/types/estp.png',
        description: 'lives on adrenaline. they\'re the friend who says "watch this" right before something goes horribly wrong (or amazingly right). they live in the moment so aggressively that consequences are a future-them problem.',
        damlaNote: 'estps are the people who would bet their rent money on a dare. they\'re incredibly fun to be around but exhausting if you have any sense of self-preservation. they don\'t think before they act — they act, and then maybe think about it later. maybe.',
        greenFlags: [
            'fearless — they make you feel alive',
            'incredibly charismatic and fun',
            'adaptable to any situation instantly',
            'action-oriented — they don\'t just talk, they do',
            'great in emergencies'
        ],
        redFlags: [
            'impulse control? what\'s that?',
            'will break things (including hearts) by accident',
            'get bored easily and need constant stimulation',
            'avoid deep conversations like they\'re allergic',
            'might not take your feelings seriously'
        ],
        howToSpot: [
            'they\'re the first to try something new or dangerous',
            'they tell stories about crazy things they\'ve done',
            'they get restless sitting still for more than 10 minutes',
            'they\'re competitive about everything, even trivial stuff',
            'they read the room instantly and adapt'
        ],
        famous: ['Ernest Hemingway', 'Madonna', 'Han Solo', 'James Kirk', 'Thor']
    }
};

// =========================================
// GAME QUESTIONS - 10 observation questions
// each targets one of the 4 axes
// answers push toward one pole
// =========================================

const GAME_QUESTIONS = [
    // === E vs I (questions 1-3) ===
    {
        axis: 'EI',
        context: 'at a social event',
        question: 'you\'re at a party together. where is this person?',
        options: [
            { text: 'center of the room, talking to everyone, feeding off the energy', value: 'E' },
            { text: 'in a corner, deep in conversation with one person', value: 'I' },
            { text: 'floating around, chatting briefly with different groups', value: 'E' },
            { text: 'near the exit, looking for a quiet moment to recharge', value: 'I' }
        ]
    },
    {
        axis: 'EI',
        context: 'after a long day together',
        question: 'you\'ve spent the whole day together. what do they want now?',
        options: [
            { text: '"let\'s go grab dinner with some friends too!"', value: 'E' },
            { text: '"i need to go home and be alone for a bit, nothing personal"', value: 'I' },
            { text: 'they\'re already texting more people to join', value: 'E' },
            { text: 'they seem tired even though the day was fun', value: 'I' }
        ]
    },
    {
        axis: 'EI',
        context: 'meeting new people',
        question: 'you introduce them to someone new. how do they react?',
        options: [
            { text: 'instantly start talking like they\'ve known each other for years', value: 'E' },
            { text: 'polite but reserved — warm up slowly after a few meetings', value: 'I' }
        ]
    },
    // === S vs N (questions 4-5) ===
    {
        axis: 'SN',
        context: 'telling stories',
        question: 'they\'re telling you about something that happened. how do they tell it?',
        options: [
            { text: 'every detail — what time, what was said, what they were wearing', value: 'S' },
            { text: 'the big picture — what it meant, what pattern it fits, the deeper message', value: 'N' },
            { text: 'practically — what happened, what they did about it', value: 'S' },
            { text: 'with tangents — one thought leads to another and suddenly you\'re talking about the universe', value: 'N' }
        ]
    },
    {
        axis: 'SN',
        context: 'making plans',
        question: 'you\'re planning a trip together. what\'s their approach?',
        options: [
            { text: 'they research hotels, check reviews, plan the itinerary day by day', value: 'S' },
            { text: '"let\'s just book the flight and figure it out when we get there — i have a feeling about this place"', value: 'N' },
            { text: 'they focus on practical stuff — budget, transport, what to pack', value: 'S' },
            { text: 'they talk about the vibe of the place, what experiences they want to have, not logistics', value: 'N' }
        ]
    },
    // === T vs F (questions 6-8) ===
    {
        axis: 'TF',
        context: 'conflict resolution',
        question: 'you vent to them about a fight with a friend. what do they do?',
        options: [
            { text: '"here\'s what you should have said — want me to break it down?"', value: 'T' },
            { text: '"that sounds really hard. are you okay?"', value: 'F' },
            { text: 'analyze the situation logically: "well, were they technically wrong?"', value: 'T' },
            { text: 'validate your feelings first, even if they think you\'re overreacting', value: 'F' }
        ]
    },
    {
        axis: 'TF',
        context: 'decision making',
        question: 'they have to make a tough decision. how do they approach it?',
        options: [
            { text: 'pros and cons list, logical analysis, what makes sense objectively', value: 'T' },
            { text: 'how will this affect the people involved? what feels right?', value: 'F' },
            { text: 'they ask: "what\'s the most efficient outcome?"', value: 'T' },
            { text: 'they ask: "will everyone be okay with this?"', value: 'F' }
        ]
    },
    {
        axis: 'TF',
        context: 'honesty style',
        question: 'you ask them: "do i look good in this?" (you don\'t)',
        options: [
            { text: '"honestly? no. try the other one."', value: 'T' },
            { text: '"you look great! ...but have you considered the blue one?"', value: 'F' }
        ]
    },
    // === J vs P (questions 9-10) ===
    {
        axis: 'JP',
        context: 'when plans change',
        question: 'you cancel plans last minute and suggest something completely different. their reaction?',
        options: [
            { text: 'visibly stressed. "but we already planned this..."', value: 'J' },
            { text: '"oh cool, that actually sounds more fun! let\'s go"', value: 'P' },
            { text: 'they adapt but you can tell it bothers them inside', value: 'J' },
            { text: 'they get EXCITED because they love spontaneity', value: 'P' }
        ]
    },
    {
        axis: 'JP',
        context: 'lifestyle vibes',
        question: 'you visit their room/apartment for the first time. what does it look like?',
        options: [
            { text: 'clean, organized — everything has a place. maybe a planner on the desk', value: 'J' },
            { text: 'creative chaos — messy but somehow they find everything', value: 'P' },
            { text: 'functional and structured — their closet is color-coded', value: 'J' },
            { text: 'half-finished projects everywhere — "oh yeah i was gonna do that"', value: 'P' }
        ]
    }
];
