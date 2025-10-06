import React from "react";
//import frontendCertificateImg from "../assets/frontend-certificate.png";.....
import { ExternalLink, Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Programming Fundamentals",
      issuer: "Udacity",

      image:
        "https://i.pinimg.com/originals/ba/0e/b8/ba0eb82dbe74fb21925083c2ea7475b4.jpg",
      verificationLink:
        "https://www.udacity.com/certificate/e/4e0181be-7fc3-11ef-9552-0b8f594e770a",
      date: "2024",
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      image:
        "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // Local image
      verificationLink:
        "https://www.freecodecamp.org/certification/fcc-d16d3e86-a21b-4a2a-ab99-596ba796001d/front-end-development-libraries",
      date: "2024",
    },
    {
      title: "Java for Beginners",
      issuer: "amigoscode",

      image:
        "https://blog.lesjeudis.com/wp-content/uploads/2023/10/les-meilleurs-astuces-pour-ameliorer-votre-code-java.png",
      verificationLink:
        "https://amigoscode.com/certificates/b4973a4a-6108-45d3-8905-9ee778205a9d",
      date: "2025",
    },
    {
      title: "Spring Boot ",
      issuer: "amigoscode",
      image:
        "https://cdn.educba.com/academy/wp-content/uploads/2022/05/spring-boot-hibernate.jpg",
      verificationLink:
        "https://amigoscode.com/certificates/710805da-3cf2-47e8-9170-a409910e533b",
      date: "2025",
    },
  ];

  return (
    <section id='certificates' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center text-gray-900 mb-16'>
            My <span className='text-yellow-600'>Certificates</span>
          </h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            {certificates.map((cert, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105'
              >
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold'>
                    {cert.date}
                  </div>
                </div>

                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <Award className='text-yellow-600' size={20} />
                    <h3 className='text-xl font-bold text-gray-900'>
                      {cert.title}
                    </h3>
                  </div>

                  <p className='text-gray-600 mb-4'>Issued by {cert.issuer}</p>

                  <a
                    href={cert.verificationLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold transition-colors duration-200'
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
