import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { RadarHeroChart } from './radar-chart';
import { Switch } from './ui/switch';
import { useState } from 'react';
import HeroModel from './hero/hero';



type Props = {
  arrayOfCharacters: 
  {
    name: string;
    avatar: {
      src: string;
    };
    image: any;
    description: string;
    value: string;
    chartData: {
      value: number;
      label: string;
    }[];
    modelPath: string;
  }[];
  defaultValue: string;
};

export function Characters({ arrayOfCharacters, defaultValue }: Props) {
  const [is3DView, set3DView] = useState(false);
  return (
    <div className="w-full">
      <Tabs defaultValue={defaultValue} className="flex w-full flex-col justify-center">
        <TabsList className="my-2 justify-center gap-8">
          {arrayOfCharacters.map((character) => (
            <TabsTrigger
              key={character.name}
              value={character.value}
              backgroundImage={character.avatar.src}
              className="h-16 w-16 rounded-xl border-2 border-gray-600 bg-black/70"
            ></TabsTrigger>
          ))}
        </TabsList>

        {arrayOfCharacters.map((character) => (
          <TabsContent key={character.name} value={character.value}>
            <div className="mt-16 grid grid-cols-5">
              <div className="col-span-2">
                <div className="relative h-full">
                  <div>
                    <p className="text-2xl text-white inline mr-2">3D view</p>
                    <Switch onCheckedChange={() => {set3DView(!is3DView);}}/>
                  </div>
                  {is3DView ? 
                    <HeroModel modelPath={character.modelPath}/>
                    : 
                    <div className="relative h-full">
                      <Image
                        src={character.image}
                        alt={character.name}
                        layout="fill"
                        objectFit="contain"
                        className="relative z-10 drop-shadow-[-8px_0px_8px_rgba(0,0,0,0.40)]"
                      />
                      <div className="absolute bottom-4 left-[45%] h-[25px] w-[45%] -translate-x-1/2 transform bg-black opacity-90 blur-xl"></div>
                    </div>
                  }
                </div>
              </div>
              <div className="px-4 max-h-[463px] relative col-span-3 flex w-full flex-col border border-gray-600 bg-black/70 p-2 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)]">
                <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                  <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                </div>
                <p className="mx-auto my-2 border-b text-center text-xl text-white">
                  {character.name}
                </p>
                <p className="text-xl text-white">{character.description}</p>
                <div className='grid grid-cols-2 mt-4'>
                  <div className='flex flex-col justify-center ml-8'>
                    <div className='inline-flex'>
                      <div className='h-12 w-12 border-2 border-gray-600 rounded-lg bg-gray-500 my-2'/>
                      <p className='flex flex-col justify-center text-center text-xl text-white ml-4'>Adaptable Tactics</p>
                    </div>
                    <div className='inline-flex'>
                      <div className='h-12 w-12 border-2 border-gray-600 rounded-lg bg-gray-500 my-2'/>
                      <p className='flex flex-col justify-center text-center text-xl text-white ml-4'>Stalwart Defense</p>
                    </div>
                    <div className='inline-flex'>
                      <div className='h-12 w-12 border-2 border-gray-600 rounded-lg bg-gray-500 my-2'/>
                      <p className='flex flex-col justify-center text-center text-xl text-white ml-4'>Battle Command</p>
                    </div>
                    <div className='inline-flex'>
                      <div className='h-12 w-12 border-2 border-gray-600 rounded-lg bg-gray-500 my-2'/>
                      <p className='flex flex-col justify-center text-center text-xl text-white ml-4'>Tactical Insight</p>
                    </div>
                  </div>
                  <div>
                    <RadarHeroChart chartData={character.chartData}/>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
