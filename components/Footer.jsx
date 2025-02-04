import React from 'react';
import ScrollBaseAnimation from './ui/text-maruque';

function index() {
  return (
    <>
      <div className='h-[300px] grid place-content-center'>
        <ScrollBaseAnimation
          // delay={500}
          baseVelocity={3}
          scrollDependent={true}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
        Vugitive: Elevate Your Style, Elevate Your Life
        </ScrollBaseAnimation>
      </div>
    </>
  );
}

export default index;
