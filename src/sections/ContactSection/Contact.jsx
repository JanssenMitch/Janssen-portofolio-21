import styles from './ContactStyle.module.css';

function Contact() {
   return (
      <section id="contact" className={styles.container}>
         <h1 className="sectionTitle">
            Contact Section
         </h1>
         <form action="https://formspree.io/f/meojykag" method="post">
            <div className='form-group'>
               <label htmlFor="name" hidden>
                  Name
               </label>
               <input type="text" name='name' id='name' placeholder='Name' />
            </div>
            <div className='form-group'>
               <label htmlFor="email" hidden>
                  E-mail
               </label>
               <input type="text" name='email' id='email' placeholder='E-mail' />
            </div>
            <div className='form-group'>
               <label htmlFor="message" hidden>
                  Message
               </label>
               <textarea type="text" name='message' id='message' placeholder='Message' required></textarea>
            </div>
            <input className="hover btn" type="submit" value="Submit"/>
         </form>
      </section>
   )
}

export default Contact
