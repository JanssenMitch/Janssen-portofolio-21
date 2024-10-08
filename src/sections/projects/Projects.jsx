import React from 'react';
import styles from './ProjectStyle.module.css';
import stockPrediction from '../../assets/stockPrediction.png';
import sentimentAnalysis from '../../assets/sentiment-analysis.png';
import ProjectCard from '../../common/ProjectCard';
import MusicClassification from '../../assets/Music-genre-classification.png';
import movieRecommend from '../../assets/Movie Recomendation System.png';
import electricalConsumption from '../../assets/Household_electrical_power.png';

function Projects() {
   return (
      <section id="projects" className={styles.container}>
         <h1 className='sectionTitle'>Projects</h1>
         <div className={styles.projectContainer}>
            <ProjectCard src={stockPrediction} 
               link="https://github.com/JanssenMitch/ML_project"
               h3="Stock Market Prediction"
               p="Using LSTM & GRU Model"
            />
            <ProjectCard src={sentimentAnalysis} 
               link="https://github.com/JanssenMitch/NLP-Sentiment_Analysis"
               h3="Text Sentiment Analysis"
               p="Sentiment Analysis Using NLP."
            />
            <ProjectCard src={MusicClassification} 
               link="https://github.com/JanssenMitch/Music-Genre-Classification-Project---Deep-Learning"
               h3="Music Genre Classification"
               p="Predicting Genre by using CNN."
            />
            <ProjectCard src={movieRecommend} 
               link="https://github.com/JanssenMitch/Movie-Review-Recommendation"
               h3="Movie Recommendation"
               p="Recommendation Based Review"
            />
            <ProjectCard src={electricalConsumption} 
               link="https://github.com/JanssenMitch/Household-Energy"
               h3="Electrical Consumption"
               p="Implementing hybrid model"
            />
         </div>
      </section>
   );
}

export default Projects
