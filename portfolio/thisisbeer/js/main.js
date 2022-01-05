var quests = [
  {
    img: 'img/q1.png',
    question: 'ЕГО МОЖНО ВЫПИТЬ ЗА 3 ГЛОТКА',
    answers: ['BUD 66', 'БАЛТИКА 9', 'ANALDISORDER', 'GAYSLOVE'],
    true_ansId: 0
  },
  {
    img: 'img/q2.png',
    question: 'ОН БУДЕТ ПОКРЕПЧЕ СВОЕГО МЛАДЖЕГО СОРОДИЧА',
    answers: ['BUD', 'BUD 66', 'GAYGOLD', 'HEINEKEN'],
    true_ansId: 0
  },
  {
    img: 'img/q3.jpg',
    question: 'САМЫЙ ЛЕГКИЙ ИЗ СЕРИИ',
    answers: ['BUD 66', 'BUD LIGHT', 'GOLD MINE BEER', 'GAYLORD'],
    true_ansId: 1
  },
  {
    img: 'img/q4.jpeg',
    question: 'НАШЕ, ОТЕЧЕСТВЕННОЕ. УБИВАЕТ ТОЛЬКО ТАК',
    answers: ['ОХОТА КРЕПКАЯ', 'БАЛТИКА 9', 'ЖИГУЛЕВСКОЕ', 'ПИВО'],
    true_ansId: 1
  },
  {
    img: 'img/q5.jpg',
    question: 'Х** В ЛЕСУ',
    answers: ['ОХОТА КРЕПКАЯ', 'HEINEKEN', 'HOOEGARDEN', 'ПИВО'],
    true_ansId: 2
  },
  {
    img: 'img/q6.jpg',
    question: 'С НЕГО ОЧЕНЬ ХОРОШО РЫГАЕТСЯ',
    answers: ['БАЛТИКА 9', 'HEINEKEN', 'HOOEGARDEN', 'ЖИГУЛЕВСКОЕ'],
    true_ansId: 2
  },
  {
    img: 'img/q7.jpeg',
    question: 'НА ЗАПАХ КАК ПОДОШВА ГОРЯЩИХ БЕРЕЦ',
    answers: ['GOLD MINE BEER', 'HEINEKEN', 'HOOEGARDEN', 'ЖИГУЛЕВСКОЕ'],
    true_ansId: 0
  },
  {
    img: 'img/q8.jpg',
    question: 'МЕЧТА ТВОЕГО БАТИ',
    answers: ['ОХОТА', 'GUINNES', 'ESSA', 'ЖИГУЛЕВСКОЕ'],
    true_ansId: 3
  },

];

function getQuests(value) {

  var result = [];
  while(value--) {

    result[value] = this.quests[value];
  }
  console.log(result);
  return result;

}




let app = new Vue({
  el: '#app',
  data: {
    rounds: 8,
    quests: null,
    gameActive: false,
    gameDone: false,
    success: 0,
    current: 0,
    blur: 6,
    stats: '',
    quest: this.quests[0],


    winmsg: 'А ты меня удивил'
  },

  methods: {

    change(value) {
      if (this.rounds < 8) {
        this.rounds += value;
      }

    },
    start(rounds) {
      this.gameActive = true;
      this.quests = getQuests(this.rounds);

    },

    restart() {
      window.location.reload();
    },

    doanswer(ans_id) {
      if (ans_id === this.quest.true_ansId) {
        this.success++;
      }

      this.blur = 0;
      setTimeout(() => { this.next_quest(); this.blur = 10;}, 1500);


    },
    next_quest() {
      this.current++;
      console.log(this.current);
      if (this.quests[this.current]) {
        this.quest = this.quests[this.current];


      }
      else {
        this.gameDone = true;
        var succes_koef = (this.success/this.rounds) * 100;
        if (succes_koef >= 70) {
          this.winmsg = 'А ты меня удивил';
        }
        else if (succes_koef >= 50){
          this.winmsg = 'Неплохо, но есть куда расти';
        }

        else {
          this.winmsg = 'Твои знания пива не очень';
        }
        this.stats = this.success + '/' + this.rounds;
      }

    },
  }
});



