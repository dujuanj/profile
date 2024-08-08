'use client';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import styles from '../Product.module.css';
import { FaArrowUp } from 'react-icons/fa';

const ProductPage = (props) => {
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    console.log(props.params.productid);
    const id = props.params.productid;
    setProductId(id);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-link');

      let currentSectionId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.params.productid]);

  // 定义scrollToTop函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='container-fluid product-wrap'>
      <Container>
        <Row>
          <nav className={`d-none d-md-block sidebar ${styles.sidebar}`}>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link' href='#overview'>
                    Project
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#research'>
                    Design Brief
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#findings'>
                    User Research
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#proposal'>
                    Feature #1
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-one'>
                    Story One
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-two-a'>
                    Story Two - A
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-two-b'>
                    Story Two - B
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#story-three'>
                    Story Three
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#evaluation'>
                    Evaluation
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#details'>
                    Details
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#reflection'>
                    Reflection
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main role='main' className={`ml-sm-auto px-4 ${styles.content}`}>
            <section id='overview' className={styles.section}>
              <div className='wrap'>
                <h2 className='text-5xl mb-4 text-left font-serif'>Project</h2>
                <Image
                  src='/img/men-dash.png'
                  width={1000}
                  height={400}
                ></Image>
                <h1 className='text-4xl font-bold text-left mt-5'>Menti</h1>
                <p className='text-left text-3xl mt-3 font-thin'>
                  Platform for designers to practice for design interviews and
                  gain mentorship
                </p>
                <p className='text-left mt-3'>
                  For a class during my time in grad school, we were tasked with
                  creating a platform that filled an unmet need. My partner,
                  Amanda, and I decided to explore design interview preparation
                  as a domain. We designed coded and ran a very quick usability
                  test within 3 weeks. Given then short turn around, the goal
                  for this project was to build a solution and not to make the
                  most effective solution.
                </p>
                <h3 className='border-b-2 mt-5 text-left text-2xl pb-2'>
                  Overview
                </h3>
                <div className='flex'>
                  <div className='flex-1 mr-12'>
                    <p className='mt-4 text-left font-light'>
                      How might support designers who want to practice
                      whiteboarding, app critques and portfolio presentations?
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      We designed and coded a prototype for supporting designers
                      with design interviews in 2 weeks. You can view the site
                      here:
                    </p>
                  </div>
                </div>
                <Image
                  src='/img/menti-bg.jpg'
                  width={1000}
                  height={400}
                ></Image>
              </div>
            </section>
            <section id='research' className={styles.section}>
              <div className='wrap'>
                <h2 className='text-5xl py-9 font-serif'>Design Brief</h2>
                <div className='md:flex xs:flex-col'>
                  <div className='flex-1 mr-12'>
                    <p className='mt-4 text-left font-light font-mono text-3xl'>
                      From conception to design & coded prototype in 3 weeks
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      I'm proud of this project because we were able to design
                      and code a static prototype all within two weeks. While we
                      did conduct usability test, the goal was to build
                      something. Here is how the work was broken down.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16'>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>01</h1>
                    <p className='mt-4 text-left font-light'>
                      Amanda and I ran a survey to quickly learn what users were
                      currently experiencing. We had 15 responses. I designed
                      the first few set of screens to define the visual style
                      and information architecture.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>02</h1>
                    <p className='mt-4 text-left font-light'>
                      Once the overall basic designs were set, I coded the whole
                      thing using ReactJS and Bootstrap as a base for the UI
                      library. Amanda took over and designed the rest and we
                      collaborated on changes as needed before I coded the rest.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16'>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>03</h1>
                    <p className='mt-4 text-left font-light'>
                      Amanda and I ran 8 usability tests to test if the product
                      was usable and useful and wrote up our paper for the
                      project.
                    </p>
                  </div>
                  <div className='flex-1'></div>
                </div>
              </div>
            </section>
            <section id='findings' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                  User Research
                </h3>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1 mr-14'>
                    <p className='mt-4 text-left font-light font-mono text-3xl'>
                      User research results & findings
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      When practicing interviews, junior designers go to their
                      friends to practice with. They feel that friends are more
                      easy going and approaching them is easier. However,
                      friends don't always provide the best advice.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-16'>
                  <div className='flex-1 mr-14'>
                    <h1 className='text-left text-4xl'>87%</h1>
                    <p className='mt-4 text-left font-light'>
                      <span className='font-bold'>
                        of the survey takers ask for help from friends but the
                        advice isn't always great
                      </span>{' '}
                      <br />
                      When practicing interviews, junior designers go to their
                      friends to practice with. They feel that friends are more
                      easy going and approaching them is easier. However,
                      friends don't always provide the best advice.
                    </p>
                  </div>
                  <div className='flex-1'>
                    <h1 className='text-left text-4xl'>85%</h1>
                    <p className='mt-4 text-left font-light'>
                      <span className='font-bold'>
                        of survey takers believe that they'd trust designers
                        based on their years of experience
                      </span>{' '}
                      <br />
                      Followed closely by "senior" rank and if the designer
                      works for a FAANG company. Some survey takers trust help
                      from others only if they work for the specific company
                      they are applying for.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section id='proposal' className={styles.section}>
              <div className='wrap'>
                <h3 className='border-b-2 mt-5 text-left text-5xl pb-2'>
                  Feature #1
                </h3>
                <div className='md:flex xs:flex-col mt-10'>
                  <div className='flex-1 mr-14'>
                    <p className='mt-4 text-left font-light font-mono text-3xl'>
                      Mentorship as a default concept
                    </p>
                  </div>
                  <div className='flex-1'>
                    <p className='mt-4 text-left font-light'>
                      The best place to get interview practice is from senior
                      designers. We added a mentorship feature as a default
                      experience. Users sign up for interview practice sessions
                      with more experienced designers.
                    </p>
                  </div>
                </div>
                <div className='md:flex xs:flex-col mt-20'>
                  <div className='flex-1'>
                    <Image
                      src='/img/men-men-1.jpg'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                  <div className='flex-1'>
                    <Image
                      src='/img/men-men-2.jpg'
                      width={450}
                      height={400}
                    ></Image>
                  </div>
                </div>
              </div>
            </section>
            <section id='story-one' className={styles.section}>
              <div className='wrap'>
                <h2>Story One</h2>
                <p>Content for Story One</p>
              </div>
            </section>
            <section id='story-two-a' className={styles.section}>
              <div className='wrap'>
                <h2>Story Two - A</h2>
                <p>Content for Story Two - A</p>
              </div>
            </section>
            <section id='story-two-b' className={styles.section}>
              <div className='wrap'>
                <h2>Story Two - B</h2>
                <p>Content for Story Two - B</p>
              </div>
            </section>
            <section id='story-three' className={styles.section}>
              <div className='wrap'>
                <h2>Story Three</h2>
                <p>Content for Story Three</p>
              </div>
            </section>
            <section id='evaluation' className={styles.section}>
              <div className='wrap'>
                <h2>Evaluation</h2>
                <p>Content for Evaluation</p>
              </div>
            </section>
            <section id='details' className={styles.section}>
              <div className='wrap'>
                <h2>Details</h2>
                <p>Content for Details</p>
              </div>
            </section>
            <section id='reflection' className={styles.section}>
              <div className='wrap'>
                <h2>Reflection</h2>
                <p>Content for Reflection</p>
              </div>
            </section>
          </main>
        </Row>
      </Container>
      {/* Back to Top Button */}
      <div className='fixed bottom-1/4 right-10 p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition duration-300 z-[100000] cursor-pointer'>
        <FaArrowUp onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default ProductPage;
