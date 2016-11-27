export default function Observer() {

  const Subject = () => {
    this.observers = [];

    return {
      subscribeObserver : (obs) => {
        this.observers.push(obs);
      },

      //is not used but i felt like i needed to write it anyway :)
      unsubscribeObserver: (obs) => {
        const index = this.observers.indexOf(obs);
        if (index > -1) {
          this.observers.splice(index, 1);
        }
      },

      notifyObservers: (type) => {
        for(let i = 0; i < this.observers.length; i++) {
          if (this.observers[i].type === type) {
            this.observers[i].notify();
          }
        }
      },
    };
  };

  const Observer = (type) => {
    return {
      type,
      notify: () => {
        const highlitedPlayers = document.getElementById('field').getElementsByClassName(type);
        const allPlayers = document.getElementById('field').getElementsByClassName('player');
        console.log('observer of '+ type + ' is notified');

        for(let i=0; i<allPlayers.length; i++) {
          allPlayers[i].classList.remove('highlight');
        }
        for(let i=0; i<highlitedPlayers.length; i++) {
          highlitedPlayers[i].classList.add('highlight');
        }
      }
    };
  };

  const subject = new Subject();

  const def = new Observer('defense');
  const hdef = new Observer('halfDefense');
  const attack = new Observer('attack');
  const goaly = new Observer('goaly');

  subject.subscribeObserver(def);
  subject.subscribeObserver(hdef);
  subject.subscribeObserver(attack);
  subject.subscribeObserver(goaly);

  return {
    notifyObservers: (type) =>{
      subject.notifyObservers(type);
    }
  };

};