import React from 'react'
import '../styles/services.scss'
import service1 from "../assets/fullstack-development.png";
import service2 from "../assets/mobile.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/artificial-intelligence.png";


const Services = () => {
    const data = [
        {
          icon: service1,
          title: "Full Stack Application Development",
          subTitle:
            "Pay through our application and save thousands and get amazing rewards.",
        },
        {
          icon: service2,
          title: "Mobile App Development",
          subTitle:
            "We have all the curated hotels that have all the precaution for a covid safe environment.",
        },
       
        {
          icon: service4,
          title: "AI Development",
          subTitle:
            "Find the best hotels and places to visit near you in a single click.",
        },
        {
          icon: service3,
          title: "Flexible Payment",
          subTitle:
            " Enjoy the flexible payment through our app and get rewards on every payment.",
        },
      ];

  return (
        <>
            <div>
                <h2 className='text-uppercase'>Our Services</h2>
                <section id="services">
                {data.map((service, index) => {
                    return (
                    <div className="service text-center">
                        
                        <div className="icon text-center">
                        <img src={service.icon} alt="" />
                        </div>
                        <h3>{service.title}</h3>
                        <p>{service.subTitle}</p>
                    </div>
                    );
                })}
                </section>


            </div>
        
        
        </>
  )
}

export default Services