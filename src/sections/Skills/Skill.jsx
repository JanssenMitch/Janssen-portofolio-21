import styles from './SkillStyle.module.css';
import checkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skill() {
   return (
      <section id="skills" className={styles.container}>
         <h1 className="sectionTitle">Skills</h1>
         <div className={styles.list}>
            <SkillList source={checkIcon} skill="Algorithm"/>
            <SkillList source={checkIcon} skill="Data Structure"/>
            <SkillList source={checkIcon} skill="Algorithm Design"/>
            <SkillList source={checkIcon} skill="Database Management"/>
            <SkillList source={checkIcon} skill="Database Design"/>
            <SkillList source={checkIcon} skill="Software Engineering"/>
            <SkillList source={checkIcon} skill="Object Oriented Programming"/>
         </div>
         <hr />
         <div className={styles.list}>
            <SkillList source={checkIcon} skill="Artificial Intellegence"/>
            <SkillList source={checkIcon} skill="Machine Learning"/>
            <SkillList source={checkIcon} skill="Deep Neural Network"/>
            <SkillList source={checkIcon} skill="Natural Language Processing"/>
            <SkillList source={checkIcon} skill="Speech Recognition"/>
            <SkillList source={checkIcon} skill="Computer Vision"/>
         </div>
         <hr />
         <div className={styles.list}>
            <SkillList source={checkIcon} skill="C/C++"/>
            <SkillList source={checkIcon} skill="Python"/>
            <SkillList source={checkIcon} skill="Java"/>
            <SkillList source={checkIcon} skill="PHP"/>
            <SkillList source={checkIcon} skill="React.js"/>
            <SkillList source={checkIcon} skill="Laravel"/>
            <SkillList source={checkIcon} skill="Git"/>
         </div>
      </section>
   )
}

export default Skill
