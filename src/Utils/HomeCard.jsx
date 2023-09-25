import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  
  
  
   
  export function HomeCard() {
   // profile menu component
  
  
   const DetailedData = [
    {title:"Website Migration",
  contant:'Our remote React developers have proven expertise in migrating or upgrading your existing web app to the ReactJS platform without losing your data.',
  images:'images/Website Migration.png'
  },
  {title:"Front-End Development",
  contant:'Leverage our React front end developer\'s skill to build effective SPAs, multiple architectures, and real-time data exchange applications. ',
  images:'images/Front-End Development.jpg'
  },
  {title:"UI/UX Development",
  contant:' Choose us as your ReactJS development partner to build ReactJS applications with captivating UI/UX and interactive features.',
  images:'images/UI-UX Development.jpg'
  },
  {title:"Plugin Development",
  contant:'We have a team of the best React specialists who have top-of-the-line expertise in developing and integrating plugins as well as modules. ',
  images:'images/Plugin Development.png'
  },
  {title:"Integration",
  contant:' We have a pool of skillful ReactJS developers who have proven expertise in integrating your existing web app and system with ReactJS.',
  images:'images/Integration.jpg'
  },
  {title:"Support & Maintenance",
  contant:'Leverage our on-time maintenance and support services to meet your business objectives under all the scenarios. ',
  images:'images/Support & Maintenance.png'
  },
   ]
  
   
    return (
  
     <>
  
  
  
  <section className="section-padding section-paragraph resp-row bg-graylight">
  <div className="contvscode-file://vscode-app/c:/Users/Prithika/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.htmlainer">
  <div className="row">
  <div className="col-12">
  <div className="section-title-and-desc text-center">
  <div className="section-title-block">
  <h1 className="section-title-text " style={{fontSize:'40px'}}>Custom <span className="text-col">React</span> Application
  Development Services</h1>
  </div>
  </div>
  </div>
  <div className="col-12">
  <div className="row gy-4">
  
  
  {
    DetailedData.map((data,index)=>(
  <div className="col-md-6 col-lg-4">
  
      <Card className="mt-6 w-96 gradient-border ">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={`${data.images}`}
          alt="card-image"
          style={{height:'inherit'}}
          className="transition duration-300 ease-in-out hover:scale-110"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="#EEA323" className="mb-2 text-col">
        {data.title}
        
        </Typography>
        <Typography>
      {data.contant}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#form">
        <Button 
        className="glow-on-hover"
        >Choose Servise</Button>
  </a>
        
        
      </CardFooter>
    </Card>
    </div>
    ))
  }
  
    </div>
  </div>
  </div>
  </div>
  </section>
  
  
  
  
     
  
      </>
    );
  }