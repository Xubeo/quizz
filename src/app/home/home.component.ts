import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  questions = [
    {
      title: "Quel est le nom de la planète sur laquelle se déroule l'histoire de World of Warcraft ?",
      answers: [
        { text: "La Terre" },
        { text: "Draenor" },
        { text: "Azeroth" },
        { text: "Sinnoh" }
      ],
      correctAnswerIndex: 2,
    },
    {
      title: "Durant World of Warcraft 'Vanilla', une classe était unique à l'Alliance, et une autre à la Horde. Lesquelles ?",
      answers: [
        { text: "Alliance : Chaman, Horde : Paladin" },
        { text: "Alliance : Moine, Horde : Voleur" },
        { text: "Alliance : Paladin, Horde : Chaman" },
        { text: "Alliance : Guerrier, Horde : Mage" }
      ],
      correctAnswerIndex: 2,
    },
    {
      title: "L'extension \"Burning Crusade\" rajouta deux races, lesquelles ?",
      answers: [
        { text: "Worgens et Gobelins" },
        { text: "Elfes du vide et Trolls Zandalari" },
        { text: "Elfes de sang et Draeneï" },
        { text: "Morts-vivants et Nains" }
      ],
      correctAnswerIndex: 2,
    },
    {
      title: "En terme d'histoire (et non de gameplay), quelle extension proposa les boss les plus puissants ?",
      answers: [
        { text: "Cataclysm" },
        { text: "Battle for Azeroth" },
        { text: "Wrath of the Lich King" },
        { text: "Legion" }
      ],
      correctAnswerIndex: 3,
    },
    {
      title: "Comment s'appelle le chef de guerre de la Horde durant l'extension Legion ?",
      answers: [
        { text: "Vol'Jin" },
        { text: "Thrall" },
        { text: "Baine" },
        { text: "Sylvanas" }
      ],
      correctAnswerIndex: 3,
    },
    {
      title: "Quelle est la dernière classe qui fut ajoutée au jeu ?",
      answers: [
        { text: "Évocateur" },
        { text: "Chasseur de démons" },
        { text: "Chevalier de la mort" },
        { text: "Moine" }
      ],
      correctAnswerIndex: 0,
    },
    {
      title: "A quelle classe appartient le sort \"Dévastation Gangrenée\" ?",
      answers: [
        { text: "Chasseur de démons Vengeance" },
        { text: "Démoniste démonologie" },
        { text: "Chevalier de la mort Impie" },
        { text: "Voleur Hors-La-Loi" }
      ],
      correctAnswerIndex: 0,
    },
    {
      title: "Comment s'appelle la zone de départ des Orcs ?",
      answers: [
        { text: "Bois de la Pénombre" },
        { text: "Orgrimmar" },
        { text: "Durotar" },
        { text: "Valdrakken" }
      ],
      correctAnswerIndex: 2,
    },
    {
      title: "En quelle année est sorti World of Warcraft (en Europe) ?",
      answers: [
        { text: "2004" },
        { text: "2005" },
        { text: "2006" },
        { text: "2007" }
      ],
      correctAnswerIndex: 1,
    },
    {
      title: "Quelle est (objectiviment bien entendu :p) la meilleure faction ?",
      answers: [
        { text: "La Horde" },
        { text: "L'Alliance" },
        { text: "La réponse D" },
        { text: "La mer Noire" }
      ],
      correctAnswerIndex: 0,
    },
  ];

  selectedAnswers: number[] = [];
  score: number | null = null;

  selectAnswer(questionIndex: number, answerIndex: number) {
    this.selectedAnswers[questionIndex] = answerIndex;
  }

  submitAnswers() {
    // Initialisez le score à 0
    this.score = 0;

    // Parcourez les questions et comparez les réponses sélectionnées avec les réponses correctes
    this.questions.forEach((question, i) => {
      const selectedAnswerIndex = this.selectedAnswers[i];
      if (selectedAnswerIndex !== undefined && question.correctAnswerIndex === selectedAnswerIndex) {
        // Vérifiez que this.score n'est pas null ou undefined avant d'incrémenter
        if (this.score !== null && this.score !== undefined) {
          this.score++;
        }
      }
    });
  }

}
