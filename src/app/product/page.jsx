'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Porduct() {
  const lines = [
    'I have been to 14 1',
    'I value empathy &value',
    'I value empathy',
    'I have been to 14',
    'I value empathy',
    'I value empathy &value',
  ];
  const lineHeight = 45; // Adjust based on your line height
  const pauseDuration = 1; // Pause duration in seconds
  const totalLines = lines.length;
  const shortPauseDuration = 2; // 第一行短暂停顿时间（秒）

  const keyframes = lines
    .flatMap((_, index) => [index * -lineHeight, index * -lineHeight])
    .concat([
      totalLines * -lineHeight,
      // totalLines * -lineHeight,
      // totalLines * -lineHeight,
    ]);

  // 调整 times 数组以缩短第一行的停顿时间
  const times = Array.from(
    { length: totalLines * 2 },
    (_, i) => i / (totalLines * 2)
  ).concat([
    1 -
      shortPauseDuration /
        (totalLines * (pauseDuration + 1) + shortPauseDuration),
    1,
  ]);
  return (
    <>
      <Container className='mt-10'>
        {/* ------------top--------------- */}
        <Row>
          <Col xs={12} md={6}>
            <div className='py-20  md:border-r-2 text-left md:text-left'>
              <h1 className='md:text-5xl text-4xl font-medium'>
                <i>Hello </i>! I'm Tammy,
              </h1>
              <div
                class=' mt-4 h-24 md:h-14'
                style={{
                  overflow: 'hidden',
                  height: `${lineHeight}px`,
                  position: 'relative',
                }}
              >
                <motion.div
                  animate={{ y: keyframes }}
                  transition={{
                    duration:
                      totalLines * (pauseDuration + 1) + shortPauseDuration, // Adjust total duration
                    ease: 'linear',
                    times: times,
                    repeat: Infinity,
                  }}
                  style={{ position: 'absolute', top: 0 }}
                >
                  {lines.concat(lines[0]).map((line, index) => (
                    <div
                      key={index}
                      style={{
                        height: `${lineHeight}px`,
                        lineHeight: `${lineHeight}px`,
                      }}
                      className='text-3xl md:text-4xl text-[#646464]'
                    >
                      <p class='line'>{line}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* <div className='py-20  md:border-r-2 text-left md:text-left'>
              <h1 className='md:text-5xl text-4xl font-medium'>
                <i>Hello </i>! I'm Tammy,
              </h1>
              <div class='scrolling-text mt-4 h-24 md:h-14'>
                <div className='text-3xl md:text-4xl text-[#646464] '>
                  <p class='line'>I have been to 14</p>
                  <p class='line'>I value empathy &value</p>
                  <p class='line'>I value empathy</p>
                  <p class='line'>I have been to 14</p>
                  <p class='line'>I value empathy &value</p>
                  <p class='line'>I value empathy </p>
                  <p class='line'>I have been to 14</p>
                  <p class='line'>I value empathy &value</p>
                  <p class='line'>I value empathy </p>
                  <p class='line'>I have been to 14</p>
                  <p class='line'>I value empathy &value</p>
                  <p class='line'>I value empathy </p>
                </div>
              </div>
            </div> */}
          </Col>
          <Col xs={12} md={6}>
            <div className='ml-5 py-4'>
              <h2 className='text-base font-bold'>Welcome to my portfolio</h2>
              <p className='mt-3 text-2xl'>
                I am a product designer & front-end engineer with some
                illustration chops. I have a wide range of experience from big
                tech and agency to and startups. Co-Founder @ Octoshop. Incoming
                @ Figma. Previously @ Meta, Xbox & Wish
              </p>
              <p className='mt-8 font-bold'>
                It’s nice to meet you, check out my work below
              </p>
            </div>
          </Col>
        </Row>
        <div class='d-flex justify-content-between border-b-2 mt-20 py-2 '>
          <p>Work</p>
          <p>001</p>
          {/* -----------content---------------- */}
        </div>
        <Row className='mt-5'>
          <Col md={6}>
            <Link href='/product/Menti'>
              <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
                <h1 className='font-semibold text-2xl'>Menti</h1>
                <p className='mt-2'>Overview • School • Coded Prototype</p>
                <div className='my-4'>
                  <Image
                    src='/img/men-dash.png'
                    width={550}
                    height={400}
                  ></Image>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6}>
            <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col md={6}>
            <div className='bg-[#ad4219]  m-auto p-3 rounded-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
          <Col md={6} className='mt-4 d_mt_4'>
            <div className='bg-[#223230]  m-auto p-3 rounded-lg text-white shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer'>
              <h1 className='font-semibold text-2xl'>Menti</h1>
              <p className='mt-2'>Overview • School • Coded Prototype</p>
              <div className='my-4'>
                <Image src='/img/men-dash.png' width={550} height={400}></Image>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
