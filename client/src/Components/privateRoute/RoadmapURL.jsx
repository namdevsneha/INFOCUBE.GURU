import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import Roadmap from '../../Pages/CarrerOption/Roadmap/Roadmap';


export default function RoadmapURL () {
    const { career } = useParams();
  
    const roadmapComponents = {
      FilmDirector: <Roadmap title={"Film Director"} />,
      veterinary: <Roadmap title={"Veterinary"} />,
      Animator: <Roadmap title={"Animator"} />,
      Actuary:<Roadmap title={"Actuary"} />,
      // Add more mappings as needed
    };
  
    return roadmapComponents[career] ; // Handle undefined routes
  };