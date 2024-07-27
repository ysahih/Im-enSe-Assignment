import React from 'react';
import TableSettings from './TableSettings';
import { Column, Worker} from '../../Types/types';
import EquipmentCell from './EquipmentCell';
import columns from '../Data/data';
import workers from '../Data/worker';


const WorkersTable: React.FC = () => {


  return (
    <div className="w-full bg-white border-t border-x border-[#DCDCDC] text-[#C4C4C4] rounded">
      <table className="w-full">
        <thead className='border-b'>
          <tr>
            <TableSettings />
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