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
      },
      {
           index: 11,
           question: '"Siapa nama kamu?" written on the blackboard in Chwa Mia Tee\'s National Language Class, 1959, means?',
           answers: ['What time is it?', 'When do we eat?', 'Where are you going?', 'What is your name?'],
           correct_answer: 'What is your name?'
      },
      {
           index: 12,
           question: 'Which of the following items is not seen in Chwa Mia Tee\'s Epic Poem of Malaysia, 1955?',
           answers: ['a cup', 'a mosquito', 'a newspaper', 'a watch'],
           correct_answer: 'a newspaper'
      },
      {
           index: 13,
           question: 'What is the most depicted subject matterin the DBS Singapore Gallery?',
           answers: ['Self Portraits', 'The Singapore River', 'Kampong Living', 'Forests'],
           correct_answer: 'The Singapore River'
      },
      {
           index: 14,
           question: 'Liu Kang\'s Souri, 1953, depicts a woman from this country?',
           answers: ['Cambodia', 'Philippines', 'Indonesia', 'Singapore'],
           correct_answer: 'Indonesia'
      }
  ],
    questions_en_GB: [
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
      },
      {
           index: 11,
           question: '"Siapa nama kamu?" written on the blackboard in Chwa Mia Tee\'s National Language Class, 1959, means?',
           answers: ['What time is it?', 'When do we eat?', 'Where are you going?', 'What is your name?'],
           correct_answer: 'What is your name?'
      },
      {
           index: 12,
           question: 'Which of the following items is not seen in Chwa Mia Tee\'s Epic Poem of Malaysia, 1955?',
           answers: ['a cup', 'a mosquito', 'a newspaper', 'a watch'],
           correct_answer: 'a newspaper'
      },
      {
           index: 13,
           question: 'What is the most depicted subject matterin the DBS Singapore Gallery?',
           answers: ['Self Portraits', 'The Singapore River', 'Kampong Living', 'Forests'],
           correct_answer: 'The Singapore River'
      },
      {
           index: 14,
           question: 'Liu Kang\'s Souri, 1953, depicts a woman from this country?',
           answers: ['Cambodia', 'Philippines', 'Indonesia', 'Singapore'],
           correct_answer: 'Indonesia'
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
