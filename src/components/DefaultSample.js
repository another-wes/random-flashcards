const SAMPLE_CARDS = [
  {
    id: 0,
    question: 'What does “www” stand for in a website browser?',
    category: 'General Knowledge',
    correct_answer: 'World Wide Web',
    difficulty: 'easy',
    incorrect_answers: ['Webbed Wonder of the World','Wigwam Woolnet']
  },
  {
    id: 1,
    question: 'How long is an Olympic swimming pool (in meters)?',
    category: 'General Knowledge',
    correct_answer: '50 meters',
    difficulty: 'medium',
    incorrect_answers: ['75 meters','100 meters']
  },
  {
    id: 2,
    question: 'What countries made up the original Axis powers in World War II?',
    category: 'General Knowledge',
    correct_answer: 'Germany, Italy, and Japan',
    difficulty: 'easy',
    incorrect_answers: []
  },
  {
    id: 3,
    question: '"Cynophobia" is the fear of what?',
    category: 'General Knowledge',
    correct_answer: 'Dogs',
    difficulty: 'medium',
    incorrect_answers: ['Bogs','Frogs','Logs']
  },
  {
    id: 4,
    question: 'What punctuation mark(s) ends an imperative sentence?',
    category: 'General Knowledge',
    correct_answer: 'A period or exclamation point',
    difficulty: 'easy',
    incorrect_answers: ['An exclamation point','A period','A question mark','An exclamation point or question mark','A period, exclamation point or question mark','A comma']
  },
  {
    id: 5,
    question: 'Who named the Pacific Ocean?',
    category: 'General Knowledge',
    difficulty: 'medium',
    correct_answer: 'Ferdinand Magellan',
    incorrect_answers: ['Amerigo Vespucci','Nicolaus Copernicus','Diego']
  },
  {
    id: 6,
    question: 'How many languages are written from right to left?',
    category: 'General Knowledge',
    difficulty: 'hard',
    correct_answer:'12',
    incorrect_answers: ['8','10','14']
  },
  {
    id: 7,
    question: 'How many countries still use the "shilling" as currency?',
    category: 'General Knowledge',
    correct_answer: '4',
    difficulty: 'hard',
    incorrect_answers: ['3','5','6','7']
  },
  {
    id: 8,
    question: 'What is the name of the man who launched eBay back in 1995?',
    category: 'General Knowledge',
    correct_answer: 'Pierre Omidyar',
    difficulty: 'medium',
    incorrect_answers: []
  },
  {
    id: 9,
    question: 'What is the name of the biggest technology company in South Korea?',
    category: 'General Knowledge',
    correct_answer: 'Samsung',
    difficulty: 'easy',
    incorrect_answers: ['Lenova','LG','Sony','BTS']
  },
  {
    id: 10,
    question: 'Which animal can be seen on the Porsche logo?',
    category: 'General Knowledge',
    correct_answer: 'Horse',
    difficulty: 'easy',
    incorrect_answers: ['Tiger','Bull','Pig']
  },
  {
    id: 11,
    question: 'Which monarch officially made Valentine\'s Day a holiday in 1537?',
    category: 'General Knowledge',
    correct_answer: 'Henry VIII',
    difficulty: 'medium',
    incorrect_answers: ['Francis I','Charles V','Elizabeth I']
  },
  {
    id: 12,
    question: 'Who was the first woman to win a Nobel Prize (in 1903)',
    category: 'General Knowledge',
    correct_answer: 'Marie Curie',
    difficulty: 'easy',
    incorrect_answers: ['Selma Lagerlöf','Bertha von Suttner','Amelia Earhart']
  },
  {
    id: 13,
    question: 'The first dictionary was written by whom?',
    category: 'General Knowledge',
    correct_answer: 'Robert Cawdrey',
    difficulty: 'hard',
    incorrect_answers: ['George Merriam', 'Charles Merriam‎','Noah Webster']
  },
  {
    id: 14,
    question: 'Worship of Krishna was originally observed by which Religious Faith?',
    category: 'General Knowledge',
    correct_answer: 'Hinduism',
    difficulty: 'easy',
    incorrect_answers: ['Jainism','Hare Krishna','Buddhism']
  },
  {
    id: 15,
    question: 'What is the name of the largest ocean on earth?',
    category: 'General Knowledge',
    correct_answer: 'Pacific Ocean',
    difficulty: 'easy',
    incorrect_answers: ['Atlantic Ocean','Indian Ocean','Southern Ocean','Arctic Ocean']
  },
  {
    id: 16,
    question: 'Demolition of the Berlin wall separating East and West Germany began in what year?',
    category: 'General Knowledge',
    correct_answer: '1989',
    difficulty: 'medium',
    incorrect_answers: ['1990','1991','1992']
  },
  {
    id: 17,
    question: 'What is the romanized Arabic word for "moon"?',
    category: 'General Knowledge',
    correct_answer: 'Qamar',
    difficulty: 'medium',
    incorrect_answers: ['Halal','Lune','Salam']
  },
  {
    id: 18,
    question: 'Who was the first woman pilot to fly solo across the Atlantic?',
    category: 'General Knowledge',
    correct_answer: 'Amelia Earhart',
    difficulty: 'easy',
    incorrect_answers: ['Marie Curie','Selma Lagerlöf','Bertha von Suttner']
  },
  {
    id: 19,
    question: 'What is the rarest (standard) M&M color?',
    category: 'Food & Drink',
    correct_answer: 'Brown',
    difficulty: 'medium',
    incorrect_answers: ['Green','Orange','Red','Blue']
  },
  {
    id: 20,
    question: 'What is the common name for dried plums?',
    category: 'Food & Drink',
    correct_answer: 'Prunes',
    difficulty: 'easy',
    incorrect_answers: ['Dates','Raisins','Craisins','Plaisins']
  },
  {
    id: 21,
    question: 'Which country consumes the most chocolate per capita?',
    category: 'Food & Drink',
    correct_answer: 'Switzerland',
    difficulty: 'medium',
    incorrect_answers: ['Germany','Belgium','Austria','Netherlands']
  },
  {
    id: 22,
    question: 'What is the name given to Indian food cooked over charcoal in a clay oven?',
    category: 'Food & Drink',
    correct_answer: 'Tandoori',
    difficulty: 'easy',
    incorrect_answers: ['Tikka','Masala','Madras','Baghar']
  },
  {
    id: 23,
    question: 'What was the first soft drink in space?',
    category: 'Food & Drink',
    correct_answer: 'Coca-Cola',
    difficulty: 'easy',
    incorrect_answers: ['PepsiCola','Barq\'s Root Beer','Minute Maid Lemonade','Tonic Water']
  },
  {
    id: 24,
    question: 'What is the most consumed type of manufactured drink in the world?',
    category: 'Food & Drink',
    correct_answer: 'Tea',
    difficulty: 'easy',
    incorrect_answers: ['Coffee','Soda pop','Juice drinks','Beer']
  },
  {
    id: 25,
    question: 'Which is the only edible food that, when sealed, never goes bad?',
    category: 'Food & Drink',
    correct_answer: 'Honey',
    difficulty: 'easy',
    incorrect_answers: ['Tea','Beef Jerky','Apples','Velveeta']
  },
  {
    id: 26,
    question: 'Which country invented ice cream?',
    category: 'Food & Drink',
    correct_answer: 'China',
    difficulty: 'hard',
    incorrect_answers: ['France','Egypt','England','Mesopotamia','Spain','Italy']
  },
  {
    id: 27,
    question: '"Hendrick’s," "Larios," and "Seagram’s" are some of the best-selling brands of which spirit?',
    category: 'Food & Drink',
    correct_answer: 'Gin',
    difficulty: 'medium',
    incorrect_answers: ['Whiskey','Rum','Vodka','Malt Liquor']
  },
  {
    id: 28,
    question: 'From which country does Gouda cheese originate?',
    category: 'Food & Drink',
    correct_answer: 'Netherlands',
    difficulty: 'medium',
    incorrect_answers: ['France','Greece','Netherlands','Italy']
  },
  {
    id: 29,
    question: 'What vegetable is also called a "courgette"?',
    category: 'Food & Drink',
    correct_answer: 'Zucchini',
    difficulty: 'hard',
    incorrect_answers: ['Carrot','Radish','Cucumber','Celery']
  },
  {
    id: 30,
    question: 'What was the first toy to be advertised on television?',
    category: 'Entertainment',
    correct_answer: 'Mr. Potato Head',
    difficulty: 'medium',
    incorrect_answers: ['The Beatles','Marilyn Monroe','Kevin Bacon']
  },
  {
    id: 31,
    question: 'What was the first feature-length animated movie ever released to the English-speaking market?',
    category: 'Entertainment',
    correct_answer: 'Snow White and the Seven Dwarves',
    difficulty: 'easy',
    incorrect_answers: ['Pinocchio','Sleeping Beauty','Little Red Riding Hood']
  },
  {
    id: 32,
    question: 'What TV series showed the first interracial kiss on American network television?',
    category: 'Entertainment',
    correct_answer: 'Star Trek',
    difficulty: 'easy',
    incorrect_answers: ['The Twilight Zone','Bonanza!','Gilligan\'s Island', 'The Ed Sullivan Show']
  },
  {
    id: 33,
    question: 'What were the four main characters\' names in the TV series "Golden Girls" that ran from 1985-1992?',
    category: 'Entertainment',
    correct_answer: 'Dorothy, Rose, Blanche, and Sophia',
    difficulty: 'medium',
    incorrect_answers: ['Coco, Rose, Blanche, and Sophia','Dorothy, Coco, Sophia, and Blanche','Sophia, Dorothy, Coco, and Rose','Blanche, Dorothy, Coco, and Rose']
  },
  {
    id: 34,
    question: 'Who created Sherlock Holmes?',
    category: 'Entertainment',
    correct_answer: 'Arthur Conan Doyle',
    difficulty: 'easy',
    incorrect_answers: ['H.G. Wells','Robert Louis Stevenson','Edgar Rice Burroughs','G. K. Chesterton']
  },
  {
    id: 35,
    question: 'Which member of the Beatles married Yoko Ono?',
    category: 'Entertainment',
    correct_answer: 'John Lennon',
    difficulty: 'easy',
    incorrect_answers: ['Paul McCartney','George Harrison','Ringo Starr','Pete Best']
  },
  {
    id: 36,
    question: 'What are the names of Cinderella’s stepsisters?',
    category: 'Entertainment',
    correct_answer: 'Anastasia and Drizella',
    difficulty: 'hard',
    incorrect_answers: []
  },
  {
    id: 37,
    question: 'What awards has an EGOT winner won?',
    category: 'Entertainment',
    correct_answer: 'An Emmy, a Grammy, an Oscar, and a Tony',
    difficulty: 'easy',
    incorrect_answers: []
  },
  {
    id: 38,
    question: 'What famous US festival hosted over 350,000 fans in 1969?',
    category: 'Entertainment',
    correct_answer: 'Woodstock',
    difficulty: 'easy',
    incorrect_answers: ['The Us Festival','The Harlem Cultural Festival','The Freaknik']
  },
  {
    id: 39,
    question: 'What was the biggest selling music single of all time on the US and UK charts?',
    category: 'Entertainment',
    correct_answer: 'Candle in the Wind (1997)',
    difficulty: 'hard',
    incorrect_answers: ['White Christmas (1942)','Rock Around the Clock (1954)','I Will Always Love You (1992)','The Humpty Dance (1990)']
  },
  {
    id: 40,
    question: 'Besides Greece, which is the only other country not to have missed one of the modern-day (post-1896) Olympics?',
    category: 'Sports',
    correct_answer: 'Australia',
    difficulty: 'hard',
    incorrect_answers: ['France','Switzerland','Great Britain']
  },
  {
    id: 41,
    question: 'Which is the only American Football team to go a whole season undefeated, including the Super Bowl?',
    category: 'Sports',
    correct_answer: 'The Miami Dolphins',
    difficulty: 'medium',
    incorrect_answers: ['The Chicago Bears','The New England Patriots','The Oakland Raiders']
  },
  {
    id: 42,
    question: 'Who has won more tennis grand slam titles: Venus Williams or Serena Williams?',
    category: 'Sports',
    correct_answer: 'Serena Williams',
    difficulty: 'easy',
    incorrect_answers: ['Venus Williams']
  },
  {
    id: 43,
    question: 'Which country won the first-ever soccer World Cup in 1930?',
    category: 'Sports',
    correct_answer: 'Uruguay',
    difficulty: 'medium',
    incorrect_answers: ['Italy','Argentina','Brazil','Hungary']
  },
  {
    id: 44,
    question: 'Which Former NBA Player Was Nicknamed “Agent Zero”?',
    category: 'Sports',
    correct_answer: 'Gilbert Arenas',
    difficulty: 'medium',
    incorrect_answers: ['Rajon Rondo','Rasheed Wallace','Sidney Wicks']
  },
  {
    id: 45,
    question: 'What sport is dubbed the "king of sports"?',
    category: 'Sports',
    correct_answer: 'Soccer',
    difficulty: 'medium',
    incorrect_answers: ['Tennis','League Rugby','Yu-Gi-Oh']
  },
  {
    id: 46,
    question: 'What is the name of the professional ice hockey team currently based in Toronto, Canada?',
    category: 'Sports',
    correct_answer: 'Toronto Maple Leafs',
    difficulty: 'easy',
    incorrect_answers: ['Toronto Senators','Toronto Canucks','Toronto Blueshirts','Toronto Jets','Toronto Oilers']
  },
  {
    id: 47,
    question: 'Who was the first gymnast to score a perfect 10 score?',
    category: 'Sports',
    correct_answer: 'Nadia Comaneci',
    difficulty: 'medium',
    incorrect_answers: ['Simone Biles','Nastia Liukin','Svetlana Khorkina']
  },
  {
    id: 48,
    question: 'Dump, floater, and wipe are terms used in which team sport?',
    category: 'Sports',
    correct_answer: 'Volleyball',
    difficulty: 'hard',
    incorrect_answers: ['Curling','Ice Hockey','Polo','Dual Wrestling']
  },
  {
    id: 49,
    question: 'Who was the first female driver to score points in a Grand Prix?',
    category: 'Sports',
    correct_answer: 'Lella Lombardi',
    difficulty: 'hard',
    incorrect_answers: ['Maria Teresa de Filippis','Danica Patrick','Divina Galica']
  },
  {
    id: 50,
    question: 'On the farm, what is a "kid"?',
    category: "Kids' Questions",
    correct_answer: 'A baby goat',
    difficulty: 'medium',
    incorrect_answers: ['A baby cow','A chicken','A child laborer']
  },
  {
    id: 51,
    question: 'In "Little Red Riding Hood," who does the wolf dress up as?',
    category: "Kids' Questions",
    correct_answer: 'The grandmother',
    difficulty: 'easy',
    incorrect_answers: ['The huntsman','Red Riding Hood','A normal dog','A basket of treats']
  },
  {
    id: 52,
    question: '“Stars and Stripes” is the nickname of the flag of which country?',
    category: "Kids' Questions",
    correct_answer: 'United States of America',
    difficulty: 'medium',
    incorrect_answers: ['Cape Verde','Liberia','Chile','Croatia','Texas','Aruba','Azerbaijan']
  },
  {
    id: 53,
    question: 'Who is the patron saint of Ireland?',
    category: "Kids' Questions",
    correct_answer: 'St. Patrick',
    difficulty: 'medium',
    incorrect_answers: ['St. Andrew','St. Teresa','St. Potato Head']
  },
  {
    id: 54,
    question: 'How many colors are there in the rainbow?',
    category: "Kids' Questions",
    correct_answer: 'Seven',
    difficulty: 'hard',
    incorrect_answers: ['Five','Six','Eight']
  },
  {
    id: 55,
    question: 'What color is a ruby?',
    category: "Kids' Questions",
    correct_answer: 'Red',
    difficulty: 'easy',
    incorrect_answers: ['Yellow','Pink','Green','Purple','Orange','Blue']
  },
  {
    id: 56,
    question: 'In the poem Humpty Dumpty, where was Humpty when he fell?',
    category: "Kids' Questions",
    correct_answer: 'On the wall',
    difficulty: 'easy',
    incorrect_answers: ['At the mall','Behind the back','In the yard']
  },
  {
    id: 57,
    question: 'Who was the REAL first president of the United States?',
    category: "Kids' Questions",
    correct_answer: 'John Hanson',
    difficulty: 'hard',
    incorrect_answers: ['George Washington','Elias Boudinot','Richard Henry Lee','John Hancock','John Adams','Thomas Jefferson']
  },
  {
    id: 58,
    question: 'What were Jack and Jill going up the hill to fetch?',
    category: "Kids' Questions",
    correct_answer: 'A pail of water',
    difficulty: 'easy',
    incorrect_answers: ['Their curds and whey','A tisket','A tasket','A tuffet']
  },
  {
    id: 59,
    question: 'What country is responsible for creating the Olympic Games?',
    category: "Kids' Questions",
    correct_answer: 'Greece',
    difficulty: 'hard',
    incorrect_answers: ['United States','France','Netherlands','Italy']
  },
  {
    id: 60,
    question: 'What is Earth\'s largest continent?',
    category: 'Geography',
    correct_answer: 'Asia',
    difficulty: 'easy',
    incorrect_answers: ['America','Europe','Africa','Australia','Antarctica','Atlantis']
  },
  {
    id: 61,
    question: 'Area 51 is located in which state?',
    category: 'Geography',
    correct_answer: 'Nevada',
    difficulty: 'easy',
    incorrect_answers: ['Utah','Colorado','Texas','California','New Mexico']
  },
  {
    id: 62,
    question: 'What country touches the Indian Ocean, the Arabian Sea, and the Bay of Bengal?',
    category: 'Geography',
    correct_answer: 'India',
    difficulty: 'easy',
    incorrect_answers: ['Bangladesh','China','Iran','Sri Lanka']
  },
  {
    id: 63,
    question: 'The ancient Phoenician city of Constantine is located in what modern-day Arab country?',
    category: 'Geography',
    correct_answer: 'Algeria',
    difficulty: 'medium',
    incorrect_answers: ['Tunisia','Libya','Iraq','Turkey','Morocco']
  },
  {
    id: 64,
    question: 'Which country borders 14 nations and crosses 8 time zones?',
    category: 'Geography',
    correct_answer: 'Russia',
    difficulty: 'medium',
    incorrect_answers: ['China','India','United States','Canada']
  },
  {
    id: 65,
    question: 'Havana is the capital of what country?',
    category: 'Geography',
    correct_answer: 'Cuba',
    difficulty: 'easy',
    incorrect_answers: ['Venezuela','Dominican Republic','Jamaica','Bolivia']
  },
  {
    id: 66,
    question: 'What country has the most natural lakes?',
    category: 'Geography',
    correct_answer: 'Canada',
    difficulty: 'hard',
    incorrect_answers: ['Russia','United States','China','Sweden','Brazil']
  },
  {
    id: 67,
    question: 'Riyadh is the capital of which Middle Eastern country?',
    category: 'Geography',
    correct_answer: 'Saudi Arabia',
    difficulty: 'medium',
    incorrect_answers: ['Yemen','Qatar','Oman','Iran']
  },
  {
    id: 68,
    question: 'Which Central American country has a name which translates to English as “The Saviour”?',
    category: 'Geography',
    correct_answer: 'El Salvador',
    difficulty: 'easy',
    incorrect_answers: ['Puerto Rico','Guatemala','Nicaragua']
  },
  {
    id: 69,
    question: 'In what country would you find Lake Bled?',
    category: 'Geography',
    correct_answer: 'Slovenia',
    difficulty: 'hard',
    incorrect_answers: ['Austria','Italy','Hungary','Croatia','Ukraine']
  },
  {
    id: 70,
    question: 'What is the loudest animal on Earth?',
    category: 'Animals',
    correct_answer: 'Sperm whale',
    difficulty: 'medium',
    incorrect_answers: ['Tiger pistol shrimp','Bulldog bat','Kakapo','Green Grocer Cicada','Lion','Howler monkey']
  },
  {
    id: 71,
    question: 'How many hearts does an octopus have?',
    category: 'Animals',
    correct_answer: '3',
    difficulty: 'medium',
    incorrect_answers: ['1','2','4']
  },
  {
    id: 72,
    question: 'The unicorn is the national animal of which country?',
    category: 'Animals',
    correct_answer: 'Scotland',
    difficulty: 'easy',
    incorrect_answers: ['England','Ireland','China','Norway']
  },
  {
    id: 73,
    question: 'What are the folds of skin on a cat\'s ears called?',
    category: 'Animals',
    correct_answer: '"Henry\'s pockets" or cutaneous marginal pouches',
    difficulty: 'hard',
    incorrect_answers: []
  },
  {
    id: 74,
    question: 'What is group of ravens known as?',
    category: 'Animals',
    correct_answer: 'An unkindness',
    difficulty: 'medium',
    incorrect_answers: ['A murder','A flock','A troupe']
  },
  {
    id: 75,
    question: 'How many legs does a spider have?',
    category: 'Animals',
    correct_answer: '8',
    difficulty: 'easy',
    incorrect_answers: ['4','6','10','12']
  },
  {
    id: 76,
    question: 'How long do elephant pregnancies last?',
    category: 'Animals',
    correct_answer: '22 months',
    difficulty: 'hard',
    incorrect_answers: ['12 months','17 months','18 months','24 months','30 months']
  },
  {
    id: 77,
    question: 'What mammals lay eggs?',
    category: 'Animals',
    correct_answer: 'The spiny anteater and the duck-billed platypus',
    difficulty: 'medium',
    incorrect_answers: []
  },
  {
    id: 78,
    question: 'What type of animal is a Flemish giant?',
    category: 'Animals',
    correct_answer: 'Rabbit',
    difficulty: 'medium',
    incorrect_answers: ['Cat','Horse','Chicken','Cow']
  },
  {
    id: 79,
    question: 'The name of which African animal means "river horse"?',
    category: 'Animals',
    correct_answer: 'Hippopotamus',
    difficulty: 'easy',
    incorrect_answers: ['Elephant','Rhinoceros','Water buffalo']
  },
  {
    id: 80,
    question: 'In what state of matter are atoms most tightly packed?',
    category: 'Science',
    correct_answer: 'Solid',
    difficulty: 'easy',
    incorrect_answers: ['Liquid','Gas','Plasma','Antimatter']
  },
  {
    id: 81,
    question: 'What is the hottest planet in the solar system?',
    category: 'Science',
    correct_answer: 'Venus',
    difficulty: 'easy',
    incorrect_answers: ['Mercury','Earth','Mars','Pluto']
  },
  {
    id: 82,
    question: 'What is the particulate "opposite" of matter?',
    category: 'Science',
    correct_answer: 'Antimatter',
    difficulty: 'medium',
    incorrect_answers: ['Velocity','Energy','Plasma']
  },
  {
    id: 83,
    question: 'Which of Newton’s Laws states that "for every action, there is an equal and opposite reaction"?',
    category: 'Science',
    correct_answer: 'The third law of motion',
    difficulty: 'medium',
    incorrect_answers: ['The first law of motion','The second law of motion','The law of gravity','The law of dialectics']
  },
  {
    id: 84,
    question: 'In 2004, what was discovered on the island of Flores in Indonesia?',
    category: 'Science',
    correct_answer: 'Remains of a small, "hobbit-sized" human',
    difficulty: 'hard',
    incorrect_answers: []
  },
  {
    id: 85,
    question: 'What is the nearest planet to the sun?',
    category: 'Science',
    correct_answer: 'Mercury',
    difficulty: 'easy',
    incorrect_answers: ['Venus','Earth','Mars','Pluto']
  },
  {
    id: 86,
    question: 'What color is your blood when it’s inside your body?',
    category: 'Science',
    correct_answer: 'Red',
    difficulty: 'easy',
    incorrect_answers: ['Blue','Clear']
  },
  {
    id: 87,
    question: 'What type of body is Pluto considered?',
    category: 'Science',
    correct_answer: 'A dwarf planet',
    difficulty: 'medium',
    incorrect_answers: ['A planet','A minor planet (planetoid)','A comet','An asteroid']
  },
  {
    id: 88,
    question: 'How many teeth does an adult human have?',
    category: 'Science',
    correct_answer: '32',
    difficulty: 'easy',
    incorrect_answers: ['20','24','28','36']
  },
  {
    id: 89,
    question: 'What tissues connect the muscles to the bones?',
    category: 'Science',
    correct_answer: 'Tendons',
    difficulty: 'easy',
    incorrect_answers: ['Lymphs','Wires','Nerves']
  },
  {
    id: 90,
    question: 'What is a duel between three people called?',
    category: '"Funny" Questions',
    correct_answer: 'A truel',
    difficulty: 'hard',
    incorrect_answers: ['A double duel','A double-dog duel','Triple trouble']
  },
  {
    id: 91,
    question: 'In the state of Georgia, it’s illegal to eat what with a fork?',
    category: '"Funny" Questions',
    correct_answer: 'Fried chicken',
    difficulty: 'medium',
    incorrect_answers: ['Grits','Corn bread','Gravy','Fried okra']
  },
  {
    id: 92,
    question: 'Which Tasmanian marsupial is known for its temper?',
    category: '"Funny" Questions',
    correct_answer: 'Tasmanian devil',
    difficulty: 'easy',
    incorrect_answers: ['Red kangaroo','Tasmanian tiger','Thylacine','Quoll','Wombat']
  },
  {
    id: 93,
    question: 'Iceland diverted roads to avoid disturbing communities of what?',
    category: '"Funny" Questions',
    correct_answer: 'Elves',
    difficulty: 'medium',
    incorrect_answers: ['Vagrants','Gnomes','Trolls']
  },
  {
    id: 94,
    question: 'In public places in the state of Florida, what\'s specifically illegal to do when wearing a swimsuit?',
    category: '"Funny" Questions',
    correct_answer: 'Sing',
    difficulty: 'hard',
    incorrect_answers: ['Dance','Duel','Host a party','Sell boiled legumes']
  },
  {
    id: 95,
    question: 'Who invented the word "vomit"?',
    category: '"Funny" Questions',
    correct_answer: 'William Shakespeare',
    difficulty: 'easy',
    incorrect_answers: ['Sir Francis Bacon','Elizabeth I','Charles V']
  },
  {
    id: 96,
    question: 'How long is New Zealand’s Ninety Mile Beach?',
    category: '"Funny" Questions',
    correct_answer: '55 miles',
    difficulty: 'hard',
    incorrect_answers: []
  },
  {
    id: 97,
    question: 'What does come down but never goes up?',
    category: '"Funny" Questions',
    correct_answer: 'Rain',
    difficulty: 'medium',
    incorrect_answers: []
  },
  {
    id: 98,
    question: 'What is measured in "Mickeys"?',
    category: '"Funny" Questions',
    correct_answer: 'The speed of a computer mouse',
    difficulty: 'medium',
    incorrect_answers: []
  }
];
export default SAMPLE_CARDS;
