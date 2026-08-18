
import { useReducer, useState } from 'react';
import styles from './JsQuest.module.css'

export const JsQuest = () =>{

    const quizData = [
    {
        id:1,
        question: "What is the tag to make the text bold (bold)?",
        options: ["bold", "strong", "bb", "italic"],
        correct: 1
    },
    {
         id:2,
        question: "Property CSS for which we will use to change color og text?",
        options: ["text-color", "font-color", "color", "background-color"],
        correct: 2
    },
    {
         id:3,
        question: "In CSS Grid, which property is used to determine the size of columns?",
        options: ["grid-template-columns", "grid-column-gap", "grid-flex-columns", "grid-layout-columns"],
        correct: 0
    },
    {
        id:4,
        question: "How do you call a function named 'myFunction' in JavaScript?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()", "execute myFunction()"],
        correct: 1
    },
    {
         id:5,
        question: "Which HTML attribute is used to specify alternative text if an image fails to load?",
        options: ["title", "src", "alt", "href"],
        correct: 2
    }
];

    let [currentQ,setcurrentQ] = useState(0)
    

  function questNav(action){

    switch(increment){

    }
  }



    return(
        <>
            <div>JS Questions</div>
            <div className={styles.container}>
    <div className={styles.quizbox}>
       
       
        
        <div className={styles.progress}>

            <span className={styles.progress}></span>
        </div>

        <h2 className={styles.question}>{quizData[currentQ].question}</h2>

        <div className={styles.options}>{quizData[currentQ].options.map((opt,index) => {return (
            <div key={index}>
            <input value={opt} type='radio'/><span>{opt}</span>
            </div>)})}</div>
        
        <div className={styles.progress}>
            <span className={styles.progress}></span>
        </div>

        <h2 className={styles.question}></h2>

        <div className={styles.options}></div>

        <div className={styles.buttons}>
            <button className={styles.prevBtn} onClick={()=>setcurrentQ(currentQ - 1)}>Previous</button>
            <button className={styles.nextBtn} onClick={()=>setcurrentQ(currentQ + 1)}>Next</button>
        </div>
    </div>
</div>
        </>
    )
}