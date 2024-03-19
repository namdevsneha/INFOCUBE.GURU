// import React from 'react'
// import image from '../../Assets/Images/expertise.svg';
// import arrow from '../../Assets/Images/arrow.svg';

// export default function Expertise() {
//   return (
    
// <div className="columns-2">
//         {/* remove br while joining components */}
//         <br/>

//         {/* part 1a */}
//     <div>
//         <h3 className='font-semibold font-roboto'>Alumini Center</h3>

//         <div>
//         <h1 className='font-bold font-roboto text-5xl'>Personalized Guidance from Experienced Alumni and Mentors</h1>
//         <br/>
//         <p className='font-roboto text-justify'>Our platform connects you with knowledgeable alumni and mentors who provide personalized guidance in various fields. Benefit from their expertise and experience to navigate your career path with confidence.</p>
//         </div>

//         {/* part 1b */}
//         <div className='columns-2'>
//             <div>
//                 <h1 className='font-roboto text-3xl'>Expertise</h1>
//                 <p className='font-roboto'>Tap into the expertise of our alumni and mentors to gain valuable insights and advice.</p>
//             </div>

//             <div>
//                 <h1 className='font-roboto text-3xl'>Support</h1>
//                 <p className='font-roboto'>Our community is always available to provide support and assistance whenever you need it.</p>
//             </div>
//         </div>
//     </div>

//     {/* part 1c buttons */}
//     <div>
//         <button className='rounded-3xl bg-buttonColor border-current w-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 '>Join</button>
//         <button>Learn More</button>
//         <button><img className='pl-3' src={arrow}/></button>
//     </div>

// {/* part 2 */}
//     <div>
//         <img className="" src={image} alt=""/>
//     </div>
// </div>
//   )
// }

import { FunctionComponent } from 'react';
import styles from './Layout.module.css'


export default function Expertise(){
  	return (
    		<div className={styles.layout3}>
      			<div className={styles.container}>
        				<div className={styles.content}>
          					<div className={styles.content1}>
            						<div className={styles.sectionTitle}>
              							<div className={styles.subheading}>Alumini Center</div>
              							<div className={styles.content2}>
                								<b className={styles.heading}>Personalized Guidance from Experienced Alumni and Mentors</b>
                								<div className={styles.text}>Our platform connects you with knowledgeable alumni and mentors who provide personalized guidance in various fields. Benefit from their expertise and experience to navigate your career path with confidence.</div>
              							</div>
            						</div>
            						<div className={styles.list}>
              							<div className={styles.listItem}>
                								<div className={styles.heading}>Expertise</div>
                								<div className={styles.text1}>Tap into the expertise of our alumni and mentors to gain valuable insights and advice.</div>
              							</div>
              							<div className={styles.listItem}>
                								<div className={styles.heading}>Support</div>
                								<div className={styles.text1}>Our community is always available to provide support and assistance whenever you need it.</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.actions}>
            						<div className={styles.button}>
              							<div className={styles.join}>Join</div>
            						</div>
            						<div className={styles.button1}>
              							<div className={styles.join}>Learn More</div>
              							<img className={styles.iconChevronRight} alt="" src="Icon / Chevron Right.svg" />
            						</div>
          					</div>
        				</div>
        				<img className={styles.icon} alt="" src="10819567_4574120 1.svg" />
      			</div>
    		</div>);
};

