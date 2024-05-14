import React from 'react'

import Infocube from '../Assets/Images/infocube.svg';
import LinkedIn from '../Assets/Images/LinkedIn.svg';
import facebook from '../Assets/Images/Facebook.svg';
import Instagram from '../Assets/Images/Instagram.svg';
import X from '../Assets/Images/X.svg';
import Youtube from '../Assets/Images/Youtube.svg';
import Whatsapp from '../Assets/Images/whatsapp.svg';

import {Link} from 'react-scroll';
import {Link as KLink} from 'react-router-dom';

export default function Footer() {
  return (
    <>
  {/* NEW FOOTER */}
      <div className=" w-full relative bg-black flex flex-col items-center justify-start pt-[2.068rem] md:pt-[5rem] pb-[1.031rem] md:pb-[2.5rem] pr-[0.956rem] md:pr-[2.312rem] pl-[1.031rem] md:pl-[2.5rem] box-border gap-[1.162rem] md:gap-[2.812rem] text-left text-[0.4rem] md:text-[0.875rem] text-white font-roboto">
      <img className="w-[2.581rem] md:w-[6.45rem] relative h-[0.344rem] md:h-[0.938rem]" alt="" src={Infocube} />

      <div className="flex flex-row items-start justify-start gap-1.5 md:gap-[2.837rem]">
      <a href='https://www.facebook.com/profile.php?id=61557941863861'><img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.581rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={facebook} /></a>

      <a href='https://www.instagram.com/infocube.guru?igsh=MTF6dG1zdnhoeXl4bQ=='><img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.481rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={Instagram} /></a>

      <img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.481rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={X} />

      <a href='https://www.linkedin.com/company/infocube-guru'><img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.481rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={LinkedIn}/></a>

      <a href='https://youtube.com/@infocube.education?si=sBMz4Pf2w_D57seO'><img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.481rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={Youtube} /></a>

      <a href='https://chat.whatsapp.com/HcXAGjFKEL9JqBA9zriFbq'><img className="w-[1.481rem] md:w-[3.588rem] relative h-[1.481rem] md:h-[3.588rem] overflow-hidden shrink-0" alt="" src={Whatsapp}/></a>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-1">
      <div className="self-stretch flex flex-row items-start justify-between ">
      <div className="relative leading-[150%]">All rights reserved. @infocube.guru</div>
      <div className="flex flex-row items-start justify-start gap-[1.5rem]">
      <div className="relative [text-decoration:underline] leading-[150%]">Privacy Policy</div>
      <KLink to="Terms">
      <div className="relative [text-decoration:underline] leading-[150%]">Terms of Service</div></KLink>
      <div className="relative [text-decoration:underline] leading-[150%]">Cookies Settings</div>
      </div>
      </div>
      </div>
      </div>
  </>
  )
}
