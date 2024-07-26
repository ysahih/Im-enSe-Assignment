import React from 'react';
import { RiSettings5Fill } from "react-icons/ri";
import { Column, Worker, EquipmentCellProps} from '../../Types/types';

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
  

const EquipmentCell: React.FC<EquipmentCellProps> = ({ value }) => (
  <td className="border-b border-[#DCDCDC] p-2">
    <div className={`h-11 mx-auto flex justify-center items-center w-11 rounded-full ${
      value > 0 ? (value >= 10 ? 'bg-[red] text-white' : 'bg-[yellow] text-[black]') : ''
    }`}>
      {value > 0 ? value : '-'}
    </div>
  </td>
);


const WorkersTable: React.FC = () => {


  return (
    <div className="w-full bg-white border-t border-x border-[#DCDCDC] text-[#C4C4C4] rounded">
      <table className="w-full">
        <thead className='border-b'>
          <tr>
            <th className=" p-2">
              <RiSettings5Fill className='size-[20px]'/>
            </th>
            <th className="border-x border-[#DCDCDC] font-medium text-xs text-[#909090] p-2">Workers</th>

            {columns.map((column, index) => (
              <th key={index} className=" p-1">
                <img src={column.imgSrc} alt={column.label } className="w-28 h-28 mx-auto" />
              </th>
            ))}

          </tr>
        </thead>

        <tbody>
          {workers.map((worker, index) => (
            <tr key={index}>
            <td className="p-2 border-r border-b mb-1 border-[#DCDCDC] ">
              <p className='flex text-[#909090] justify-center '>
                {index + 1}
              </p>
            </td>
            <td className="border-r border-b mr-[-0.3px] mb-[-0.5px] border-[#DCDCDC] p-2 min-w-[240px] flex items-center justify-between">
              
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

             {columns.map(column => (
                <EquipmentCell key={column.key} value={worker[column.key] as number} />
              ))}
            
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Table = () => {
  return (
    <div className='h-[95%] mt-4 w-full'>
      <WorkersTable />
    </div>
  );
}

export default Table;