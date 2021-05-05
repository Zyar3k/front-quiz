export const data = [
  {
    id: 1,
    question:
      "Która metoda w JavaScript zwraca nową tablicę na podstawie wyników wykonania określonej akcji w każdym elemencie oryginalnej tablicy?",
    answers: [
      {
        text: "map",
        correct: true,
      },
      {
        text: "reduce",
        correct: false,
      },
      {
        text: "forEach",
        correct: false,
      },
      {
        text: "transform",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question:
      "Jaka jest kolejność modelu pudełkowego od wewnątrz na zewnątrz w CSS?",
    answers: [
      {
        text: "Content, Padding, Border, Margin",
        correct: true,
      },
      {
        text: "Content, Margin , Border,Padding ",
        correct: false,
      },
      {
        text: "Content, Border, Padding, Margin",
        correct: false,
      },
      {
        text: "Padding, Content, Border, Margin",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "Który z poniższych nie jest typem w JavaScript?",
    answers: [
      {
        text: "number",
        correct: false,
      },
      {
        text: "integer",
        correct: true,
      },
      {
        text: "string",
        correct: false,
      },
      {
        text: "boolean",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question:
      "Która jednostka w CSS jest oparta na rozmiarze szerokości ekranu?",
    answers: [
      {
        text: "vx",
        correct: false,
      },
      {
        text: "sw",
        correct: false,
      },
      {
        text: "vw",
        correct: true,
      },
      {
        text: "%",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "Jak w node.js, zaimportować moduł przy użyciu CommonJS",
    answers: [
      {
        text: "const t = include('f')",
        correct: false,
      },
      {
        text: "const t = require('f')",
        correct: true,
      },
      {
        text: "const t = import('f')",
        correct: false,
      },
      {
        text: "import t from 'f'",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "W jakiej kolejności margin i padding są definiowane w CSS?",
    answers: [
      {
        text: "Right, Bottom, Left, Top",
        correct: false,
      },
      {
        text: "Top, Bottom, Left, Right",
        correct: false,
      },
      {
        text: "Left, Right, Top, Bottom",
        correct: false,
      },
      {
        text: "Top, Right, Bottom, Left",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question:
      "Które z poniższych jest nieprawidłowym kodem JavaScript do importowania z modułu",
    answers: [
      {
        text: "import * as n2, { t } from './f.js'",
        correct: true,
      },
      {
        text: "import n, { t as t2 } from './f.js'",
        correct: false,
      },
      {
        text: "import n, { t } from './f.js'",
        correct: false,
      },
      {
        text: "import { default as n2, t } from './f.js'",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question: "Jaki jest wynik 100 / 0 w JavaScript?",
    answers: [
      {
        text: "NaN",
        correct: false,
      },
      {
        text: "0",
        correct: false,
      },
      {
        text: "It throws an error",
        correct: false,
      },
      {
        text: "infinity",
        correct: true,
      },
    ],
  },
  {
    id: 9,
    question: "Jaki jest prawidłowy sposób sprawdzenia NaN w JavaScript?",
    answers: [
      {
        text: "isNaN(10)",
        correct: true,
      },
      {
        text: "10 == NaN",
        correct: false,
      },
      {
        text: "10 === NaN",
        correct: false,
      },
      {
        text: "isNumber(10)",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Która przeglądarka jest najpopularniejsza?",
    answers: [
      {
        text: "Safari for iOS",
        correct: false,
      },
      {
        text: "Firefox",
        correct: false,
      },
      {
        text: "Chrome for Android",
        correct: true,
      },
      {
        text: "Chrome for Desktop",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "Które z poniższych stwierdzeń da wynik false?",
    answers: [
      {
        text: "' ' == false",
        correct: false,
      },
      {
        text: "NaN == NaN",
        correct: true,
      },
      {
        text: "false === false",
        correct: false,
      },
      {
        text: "null == undefined",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "Jak nazwać grid line w CSS?",
    answers: [
      {
        text: "grid-template-columns: 1fr [name]",
        correct: true,
      },
      {
        text: "grid-template-columns: 1fr <name>",
        correct: false,
      },
      {
        text: "grid-template-columns: 1fr (name)",
        correct: false,
      },
      {
        text: "grid-template-columns: [1fr], [name]",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question:
      "Co ta funkcja zwraca, jeśli przekażesz 2 jako x: function f(x) {x++; (x = x -3) && ++x; return x--}",
    answers: [
      {
        text: "1",
        correct: false,
      },
      {
        text: "2",
        correct: false,
      },
      {
        text: "0",
        correct: true,
      },
      {
        text: "-1",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Jak zdefiniujesz multiple transitions w CSS",
    answers: [
      {
        text: "transition: width, height 1s, 2s",
        correct: false,
      },
      {
        text: "transition: width height, 1s 2s",
        correct: false,
      },
      {
        text: "transition: width 1s, height 2s",
        correct: true,
      },
      {
        text: "transition: width 1s / height 2s",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "Jakie jest najczęściej wyszukiwane hasło na caniuse.com?",
    answers: [
      {
        text: "flexbox",
        correct: true,
      },
      {
        text: "grid",
        correct: false,
      },
      {
        text: "position sticky",
        correct: false,
      },
      {
        text: "transforms",
        correct: false,
      },
    ],
  },
];
