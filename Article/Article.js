/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Star Wars',
    date: 'Today',
    firstParagraph: `Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this things safe?`,

    secondParagraph: `Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made. An escape pod was jettisoned during the fighting, but no life forms were aboard. She must have hidden the plans in the escape pod. Send a detachment down to retrieve them. See to it personally, Commander. There'll be no one to stop us this time. Yes, sir.`,

    thirdParagraph: `Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.`
  },
  {
    title: 'Pokemon',
    date: 'Yesterday',
    firstParagraph: `Pokem ipsum dolor sit amet Parasect Persian Hitmontop Swellow Sandile Cradily. Ice Mirror Move Burnt Berry Beartic Zorua Roggenrola consectetur adipisicing elit. Glacier Badge but nothing happened Ice Berry Tympole Buneary Drilbur Blue. S.S. Anne Staraptor Espeon Eevee Kricketot Bellossom what kind of Pokemon are you. Bulbasaur Tropius Igglybuff Emboar Flying Sapphire Chimchar. `,

    secondParagraph: `Pokem ipsum dolor sit amet Parasect Persian Hitmontop Swellow Sandile Cradily. Ice Mirror Move Burnt Berry Beartic Zorua Roggenrola consectetur adipisicing elit. Glacier Badge but nothing happened Ice Berry Tympole Buneary Drilbur Blue. S.S. Anne Staraptor Espeon Eevee Kricketot Bellossom what kind of Pokemon are you. Bulbasaur Tropius Igglybuff Emboar Flying Sapphire Chimchar. `,

    thirdParagraph: `Pokem ipsum dolor sit amet Parasect Persian Hitmontop Swellow Sandile Cradily. Ice Mirror Move Burnt Berry Beartic Zorua Roggenrola consectetur adipisicing elit. Glacier Badge but nothing happened Ice Berry Tympole Buneary Drilbur Blue. S.S. Anne Staraptor Espeon Eevee Kricketot Bellossom what kind of Pokemon are you. Bulbasaur Tropius Igglybuff Emboar Flying Sapphire Chimchar. `
  },

  {
    title: 'Bacon',
    date: 'Tomorrow',
    firstParagraph: `

    Bacon ipsum dolor amet chicken jowl turducken kielbasa picanha bresaola cupim flank strip steak tail. T-bone ground round pork short loin ham hock meatloaf. Doner prosciutto kielbasa, drumstick picanha beef ribs sirloin short loin ham frankfurter. Alcatra frankfurter turducken, meatball beef tail shankle swine tri-tip rump pig burgdoggen strip steak sausage.`,

    secondParagraph: `

    Bacon ipsum dolor amet chicken jowl turducken kielbasa picanha bresaola cupim flank strip steak tail. T-bone ground round pork short loin ham hock meatloaf. Doner prosciutto kielbasa, drumstick picanha beef ribs sirloin short loin ham frankfurter. Alcatra frankfurter turducken, meatball beef tail shankle swine tri-tip rump pig burgdoggen strip steak sausage.`,

    thirdParagraph: `

    Bacon ipsum dolor amet chicken jowl turducken kielbasa picanha bresaola cupim flank strip steak tail. T-bone ground round pork short loin ham hock meatloaf. Doner prosciutto kielbasa, drumstick picanha beef ribs sirloin short loin ham frankfurter. Alcatra frankfurter turducken, meatball beef tail shankle swine tri-tip rump pig burgdoggen strip steak sausage.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

function createArticle(articleData) {
  // Article container
  const VarArticle = document.createElement('div');
  VarArticle.classList.add('article');

  // Article h2
  const VarArticleH2 = document.createElement('h2');
  VarArticleH2.textContent = articleData.title;
  VarArticle.appendChild(VarArticleH2);

  // Date
  const VarArticleDate = document.createElement('p');
  VarArticleDate.classList.add('date');
  VarArticleDate.textContent = articleData.date;
  VarArticle.appendChild(VarArticleDate);

  // First article paragraph
  const VarArticlePar1 = document.createElement('p');
  VarArticlePar1.textContent = articleData.firstParagraph;
  VarArticle.appendChild(VarArticlePar1);

  // Second article paragraph
  const VarArticlePar2 = document.createElement('p');
  VarArticlePar1.textContent = articleData.secondParagraph;
  VarArticle.appendChild(VarArticlePar2);

  // Third article paragraph
  const VarArticlePar3 = document.createElement('p');
  VarArticlePar3.textContent = articleData.thirdParagraph;
  VarArticle.appendChild(VarArticlePar3);

  // Expand button
  const VarExpandButton = document.createElement('span');
  VarExpandButton.classList.add('expandButton');
  VarExpandButton.textContent = "Expand";

  VarExpandButton.addEventListener('click', (event) => {
    console.log(event.target);

    // Display correct button
    if (VarArticle.classList.toggle('article-open')) {
      VarExpandButton.textContent = "Close";

    } else {
      VarExpandButton.textContent = "Expand";
    }
  })

  VarArticle.appendChild(VarExpandButton);

  const VarReadButton = document.createElement('span');
  VarReadButton.classList.add('VarReadButton');
  VarReadButton.textContent = "Finished";
  VarReadButton.addEventListener('click', (event) => {
    VarArticle.style.display = 'none';
    articleData.read = true;
  })

  VarArticle.appendChild(VarReadButton);



  return VarArticle;

}

const articles = document.querySelector('.articles');
let VarData = data.map((dataItem) => {
  if (!dataItem.read) {
    const newArticle = createArticle(dataItem);
    articles.appendChild(newArticle);
  }

});