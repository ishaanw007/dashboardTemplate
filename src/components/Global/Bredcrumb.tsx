"use client"
import React from 'react';
import { SparklesCore } from '../ui/sparkles';
import { useTheme } from 'next-themes';
import { useColorTheme } from '@/providers/ColorThemeProvider';

type BreadcrumbProps = {
  title: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const { currentColor } = useColorTheme()
  return (
    <div className='h-12 relative w-full flex items-center dark:bg-black  bg-black text-white'>
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className={`'text-xl font-bold p-1 w-full text-center  md:w-3/4 mx-auto pl-5  '`}>{title}</div>
    </div>
  );
};

export default Breadcrumb;
