import React from 'react';
import './Blogs.css';

import zohra from '../../../images/dt1.png';
import humayun from '../../../images/dt2.png';
import nilofer from '../../../images/dt3.png';

import BlogPost from '../BlogPost/BlogPost';

const blogData = [
      {
            title: 'The Right Time for Your Child’s First Dental Visit',
            description: 'When should your child visit the dentist for the first time? All things considered, the earlier the better. Studies have shown that visiting the dentist at an early age (around 1-2 years old), followed by regular dental visits, is positively correlated with lifelong oral health. Teeth and gum health is important for young children.',
            author: 'Dr. Zohra Begum Kazi',
            authorImg: zohra,
            date: '2 January 2021'
      },
      {
            title: 'Gum Disease and Pregnancy Complications? What the Latest Research Shows',
            description: 'Let’s do a quick pop quiz on the link between oral health and overall health. What are the benefits of regularly taking care of your teeth and gums? Better chance of avoiding sickness Decreased odds for diabetes, heart disease, and other diseases Helps in avoiding pregnancy complications',
            author: 'Dr. Humayun Kabir',
            authorImg: humayun,
            date: '3 April 2021'
      },
      {
            title: 'At-Home Dental Care Tips',
            description: 'Your dentists can’t take care of you and your family 24/7. At some point, you have to practice solid dental care habits at home to maintain healthy teeth and gums – the more consistent and disciplined the habits, the better.',
            author: 'Dr. Nilofer Sultan Sheikh',
            authorImg: nilofer,
            date: '13 April 2021'
      },
]

const Blogs = () => {
      return (
            <section className="blogs my-5 py-5">
                  <div className="container">
                        <div className="section-header text-center">
                              <h5 style={{ color: '#22d1ee' }}>DOCTOR'S BLOG</h5>
                              <h1>From Our Doctor's Blog News</h1>
                        </div>
                        <div className="card-deck row mt-5">
                              {
                                    blogData.map(blog => <BlogPost blog={blog} key={blog.title} />)
                              }
                        </div>
                  </div>
            </section>
      );
};

export default Blogs;