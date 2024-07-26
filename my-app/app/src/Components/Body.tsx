import React from 'react';
import Head from './Body/Head';
import { RiSettings5Fill } from "react-icons/ri";
import { Columns } from 'lucide-react';

interface Column {
  key: string;
  label: string;
  imgSrc: string;
}

const columns: Column[] = [
  { key: 'protectiveGloves', label: 'Protective Gloves', imgSrc: './Columns/image.svg' },
  { key: 'safetyGlasses', label: 'Safety Glasses', imgSrc: './Columns/image (1).svg' },
  { key: 'earProtection', label: 'Ear Protection', imgSrc: './Columns/image (2).svg' },
  { key: 'maskProtection', label: 'Mask Protection', imgSrc: './Columns/image (3).svg' },
  { key: 'kneePads', label: 'Knee Pads', imgSrc: './Columns/image (4).svg' },
  { key: 'safetyShoes', label: 'Safety Shoes', imgSrc: './Columns/image (5).svg' },
  { key: 'coverall', label: 'Coverall', imgSrc: './Columns/image (6).svg' },
  { key: 'hiVisJacket', label: 'Hi-Vis Jacket', imgSrc: './Columns/image (7).svg' },
  { key: 'safetyHarness', label: 'Safety Harness', imgSrc: './Columns/image (8).svg' },
  { key: 'faceShield', label: 'Face Shield', imgSrc: './Columns/image (9).svg' },
  { key: 'hardHat', label: 'Hard Hat', imgSrc: './Columns/image (10).svg' },
  { key: 'weldingHelmet', label: 'Welding Helmet', imgSrc: './Columns/image (11).svg' },
];

interface Worker {
  name: string;
  role: string;
  protectiveGloves: number;
  safetyGlasses: number;
  earProtection: number;
  maskProtection: number;
  kneePads: number;
  safetyShoes: number;
  coverall: number;
  hiVisJacket: number;
  safetyHarness: number;
  faceShield: number;
  hardHat: number;
  weldingHelmet: number;
}

const workers: Worker[] = [
  {
    name: 'Blaise DEFLOO',
    role: 'Manager',
    protectiveGloves: 2,
    safetyGlasses: 0,
    earProtection: 0,
    maskProtection: 10,
    kneePads: 0,
    safetyShoes: 0,
    coverall: 1,
    hiVisJacket: 0,
    safetyHarness: 0,
    faceShield: 3,
    hardHat: 0,
    weldingHelmet: 0,
  },
];

const WorkersTable: React.FC = () => {


  return (
    <div className="">
      <table className="min-w-full bg-white border border-[#DCDCDC] text-[#737373]">
        <thead>
          <tr>
            <th className="border p-2">
              <RiSettings5Fill className='size-[20px]'/>
            </th>
            <th className="border font-medium text-xs p-1">Workers</th>

            {columns.map((column, index) => (
              <th key={index} className="p-1">
                <img src={column.imgSrc} alt={column.label } className="w-28 h-28 mx-auto" />
              </th>
            ))}

          </tr>
        </thead>

        <tbody>
          {workers.map((worker, index) => (
            <tr key={index}>
            <td className="border border-[#DCDCDC] p-1">
              <p className='flex justify-center '>
                {index + 1}
              </p>
            </td>
            <td className="p-2 min-w-[240px] flex items-center justify-between">
              
              <div className='flex items-center gap-2'>
                <img src="./Columns/photo.svg" alt="Avatar" className="w-11 h-11 rounded-full" />
                
                <div className=''>
                  <div className='text-[#484848] font-small text-xs'>{worker.name}</div>
                  <div className="text-[#909090] text-[11px] ">{worker.role}</div>
                </div>
              </div>

              <div>
                <img src="./Columns/img.svg" alt="Avatar" className="w-12 h-12"/>
              </div>
            </td>

            <td className={`border border-[#DCDCDC] p-1 ${worker.protectiveGloves > 0 ? (worker.protectiveGloves >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 

            <div>
              {worker.protectiveGloves > 0 ? worker.protectiveGloves : '-'} 
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.safetyGlasses > 0 ? ( worker.safetyGlasses >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.safetyGlasses > 0 ? worker.safetyGlasses : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.earProtection > 0 ?  (worker.earProtection >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.earProtection > 0 ? worker.earProtection : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.maskProtection > 0 ?  (worker.maskProtection >= 10  ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.maskProtection > 0 ? worker.maskProtection : '-'}
            </div>
            </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.kneePads > 0 ?  (worker.kneePads >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.kneePads > 0 ? worker.kneePads : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.safetyShoes > 0 ?  (worker.safetyShoes >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.safetyShoes > 0 ? worker.safetyShoes : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.coverall > 0 ?  (worker.coverall >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.coverall > 0 ? worker.coverall : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.hiVisJacket > 0 ?  (worker.hiVisJacket >= 10  ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.hiVisJacket > 0 ? worker.hiVisJacket : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.safetyHarness > 0 ?  (worker.safetyHarness >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.safetyHarness > 0 ? worker.safetyHarness : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.faceShield > 0 ?  (worker.faceShield >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.faceShield > 0 ? worker.faceShield : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.hardHat > 0 ?  (worker.hardHat >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
              {worker.hardHat > 0 ? worker.hardHat : '-'}
            </div>
             </td>
            
            <td className={`border border-[#DCDCDC] p-1 ${worker.weldingHelmet > 0 ?  (worker.weldingHelmet >= 10 ? 'bg-red  text-white' : 'bg-yellow text-[black]') : ''}`}> 
            <div>
            {worker.weldingHelmet > 0 ? worker.weldingHelmet : '-'}
            </div>
             </td>

            
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// export default WorkersTable;


// export default SafetyEquipmentTable;



const Table = () => {
  return (
    <div className='h-[95%] mt-4 w-full'>
      <WorkersTable />
    </div>
  );
}

const Body = () => {

  return (
    <div className="bg-[#F2F2F2] border-t border-[#C4C4C4] h-full p-8">
      <Head />
      <Table/>
    </div>
  );
};



export default Body;    