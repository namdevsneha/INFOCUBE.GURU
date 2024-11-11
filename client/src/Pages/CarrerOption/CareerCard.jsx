import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Navigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
export default function ActionAreaCard({category, image, title, description,career }) {
  return (
    <Link to={career}>
    <Card sx={{ maxWidth:innerWidth>768? 416:300,borderRadius: innerWidth>768? '16px':'8px' }} elevation={10}>
      <CardActionArea onClick={Navigate}> 
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
          <div className='font-roboto mt-[12px] md:mt-[24px] mb-[8px] md:mb-[12px] mx-[8px] flex flex-col gap-[8px]'>
          <span className=' font-bold text-[12px] md:text-[14px] '>
            {category}
            </span>
            <h2 className='font-poppins font-bold text-[14px] md:text-[18px] lg:text-[20px] xl:text-[24px] md:overflow-hidden md:text-nowrap text-ellipsis '>{title}</h2>
          <p className='text-[12px] md:text-[14px] xl:text-[16px] md:max-h-[60px] lg:max-h-[96px] overflow-hidden text-ellipsis line-clamp-2 md:line-clamp-3 lg:line-clamp-4' >{description}</p>
          <span className='text-center font-poppins text-[10px] md:text-[12px] '>Infocube@2024</span>
          </div>
      </CardActionArea>
    </Card>
    </Link>
  );
}