'use strict';
/*
 * Copyright 2018 Amazon.com, Inc. and its affiliates. All Rights Reserved.
 * Licensed under the Amazon Software License (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 * http://aws.amazon.com/asl/
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


/**
 * Questions library
 *
 * Use this file to create your own set of questions.
 *
 * Object properties:
 *      index:          The index of the question in this list
 *      question:       The question you want Alexa to ask
 *      answers:        The list of available answers
 *      correct_answer: The correct answer to the question
 *
 * When adding or updating questions and answers, you must take the list of all values
 * in each of the 'answers' arrays for all questions and add them to a custom slot
 * in your skill called 'answers'.
 *
 * The 'answers' custom slot is be mapped to a couple of intents in the interaction model.
 * One intent, named 'AnswerOnlyIntent', contains only the slot, by itself, in order
 * to maximize the accuracy of the model.
 *
 * For example:
 *      AnswerOnlyIntent {answers}
 *
 * The other intent, 'AnswerQuestionIntent', provides more complex speech patterns
 * to match other utternaces users may include with their answers.
 *
 * For example:
 *      AnswerQuestionIntent is it {answers}
 *      AnswerQuestionIntent it is {answers}
 *      AnswerQuestionIntent the answer is {answers}
 *      AnswerQuestionIntent I think the answer is {answers}
 *
 * See model file at models/en-US.json for a complete example.
 */
module.exports = Object.freeze({
    questions_en_US: [
        {
            index: 1,
            question: 'Which artist created a painting of her husband?',
            answers: ['Georgette Chen', 'Han Sai Por', 'Yoko Ono', 'Amanda Heng'],
            correct_answer: 'Georgette Chen'
        },
        {
          index: 2,
          question: 'Which artist created a painting with faceless figures?',
          answers: ['Tang Da Wu', 'Liu Kang', 'Chwa Mia Tee', 'Georgette Chen'],
          correct_answer: 'Liu Kang'
        },
        {
            index: 3,
            question: 'How many ladies were feeding the ducks in the work, Life by the River, Liu Kang?',
            answers: ['two', 'five', 'three', 'seven'],
            correct_answer: 'two'
        },
        {
            index: 4,
            question: 'What did the man wear on his head in the painting, Self Portrait, by Tchang Ju Chi?',
            answers: ['A baseball cap', 'A beret', 'A bandana','a fedora'],
            correct_answer: 'A beret'
        },
        {
            index: 5,
            question: 'Who sold rambutans in the painting, East Coast Vendor, by Georgette Chen?',
            answers: ['A Malaysian lady', 'everyone', 'the children', 'no one'],
            correct_answer: 'A Malaysian lady'
        },
        {
            index: 6,
            question: 'In the Portrait of Eugene Chen, what was the man holding in his hand?',
            answers: ['A phone', 'A drink', 'A newspaper', 'A book'],
            correct_answer: 'A book'
        },
        {
            index: 7,
            question: 'What fruits can be found in the painting which has a frame made of bamboo?',
            answers: ['Grapes and Bananas', 'Oranges and Apples', 'Blueberries and Pineapples'],
            correct_answer: 'Oranges and Apples'
        },
        {
            index: 8,
            question: 'Which of the following was NOT what the National Gallery used to be?',
            answers: ['Supreme Court', 'Port', 'Rice Field', 'City Hall'],
            correct_answer: 'Rice Field'
        },
        {
            index: 9,
            question: 'How many houses are there in Liu Kang\'s Life by the River, 1975?',
            answers: ['two', 'four', 'seven', 'one'],
            correct_answer: 'four'
        },
        {
            index: 10,
            question: 'Liu Kang\'s Life By the River, 1975, depicts daily life in a Kampong with this material?',
            answers: ['oil paint', 'acrylic paint', 'batik technique', 'watercolor paint'],
            correct_answer: 'oil paint'
        }

    ],
    questions_en_GB: [
      {
          index: 1,
          question: 'What is the name for a group of lions?',
          answers: ['pack', 'pride', 'den', 'frat'],
          correct_answer: 'pride'
      },
      {
          index: 2,
          question: 'What is the only type of bear native to South America?',
          answers: ['brown bear', 'kodiac', 'giant panda', 'spectacled bear'],
          correct_answer: 'spectacled bear'
      },
      {
          index: 3,
          question: 'What type of animal is a seahorse?',
          answers: ['crustacean', 'arachnid', 'fish', 'shell'],
          correct_answer: 'fish'
      },
      {
          index: 4,
          question: 'What color are zebras?',
          answers: ['white with black stripes', 'black with white stripes'],
          correct_answer: 'black with white stripes'
      },
      {
          index: 5,
          question: 'What is the fastest water animal?',
          answers: ['porpoise', 'sailfish', 'flying fish', 'tuna'],
          correct_answer: 'sailfish'
      },
      {
          index: 6,
          question: 'What is the only venomous snake found in Britain?',
          answers: ['cobra', 'coral snake', 'copperhead', 'adder'],
          correct_answer: 'adder'
      },
      {
          index: 7,
          question: 'What is a female donkey called?',
          answers: ['joey', 'jenny', 'janet'],
          correct_answer: 'jenny'
      },
      {
          index: 8,
          question: 'What land mammal other than man has the longest lifespan?',
          answers: ['blue whale', 'dolphin', 'elephant', 'orangutan'],
          correct_answer: 'elephant'
      },
      {
          index: 9,
          question: 'Eskimos call what kind of creature a nanook?',
          answers: ['penguin', 'narwhal', 'polar bear', 'caribou'],
          correct_answer: 'polar bear'
      },
      {
          index: 10,
          question: 'Lupus is the Latin name for what animal?',
          answers: ['dog', 'cat', 'wolf', 'fox'],
          correct_answer: 'wolf'
      }
  ],
  questions_de_DE: [
    {
        index: 1,
        question: 'Wie wird eine Gruppe von Löwen genannt?',
        answers: ['Rotte', 'Rudel', 'Schule', 'Meute'],
        correct_answer: 'Rudel'
    },
    {
        index: 2,
        question: 'Welches ist die einzige aus Südamerika stammende Bärenart?',
        answers: ['Braunbär', 'Kodiakbär', 'Riesenpanda', 'Brillenbär'],
        correct_answer: 'Brillenbär'
    },
    {
        index: 3,
        question: 'Was für eine Art Tier ist ein Seepferdchen?',
        answers: ['Krustentier', 'Spinnentier', 'Fisch', 'Muschel'],
        correct_answer: 'Fisch'
    },
    {
        index: 4,
        question: 'Welche Farbe haben Zebras?',
        answers: ['Weiß mit schwarzen Streifen', 'Schwarz mit weißen Streifen'],
        correct_answer: 'Schwarz mit weißen Streifen'
    },
    {
        index: 5,
        question: 'Was ist das schnellste Wassertier?',
        answers: ['Schweinswal', 'Fächerfisch', 'Fliegender Fisch', 'Thunfisch'],
        correct_answer: 'Fächerfisch'
    },
    {
        index: 6,
        question: 'Welches ist die einzige giftige Schlange in Großbritannien?',
        answers: ['Kobra', 'Korallenschlange', 'Mokassinschlange', 'Kreuzotter'],
        correct_answer: 'Kreuzotter'
    },
    {
        index: 7,
        question: 'Was ist der Name eines berühmten männlichen Eisbären?',
        answers: ['Sven', 'Knut', 'Olaf'],
        correct_answer: 'Knut'
    },
    {
        index: 8,
        question: 'Welches Landsäugetier hat abgesehen vom Menschen die längste Lebensdauer?',
        answers: ['Blauwal', 'Delfin', 'Elefant', 'Orang-Utan'],
        correct_answer: 'Elefant'
    },
    {
        index: 9,
        question: 'Welches Tier bezeichnen die Eskimos als Nanook?',
        answers: ['Pinguin', 'Narwal', 'Eisbär', 'Karibu'],
        correct_answer: 'Eisbär'
    },
    {
        index: 10,
        question: 'Lupus ist der lateinische Name für welches Tier?',
        answers: ['Hund', 'Katze', 'Wolf', 'Fuchs'],
        correct_answer: 'Wolf'
    }
]
});
