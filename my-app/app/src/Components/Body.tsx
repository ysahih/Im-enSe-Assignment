import React from 'react';
import Head from './Body/Head';




interface Worker {
  name: string;
  role: string;
  company: string;
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
  // Add your workers data here
  {
    name: 'Blaise DEFLOO',
    role: 'Manager',
    company: 'biowanze',
    protectiveGloves: 2,
    safetyGlasses: 2,
    earProtection: 0,
    maskProtection: 10,
    kneePads: 0,
    safetyShoes: 0,
    coverall: 1,
    hiVisJacket: 1,
    safetyHarness: 0,
    faceShield: 3,
    hardHat: 0,
    weldingHelmet: 3,
  },
  // Add more workers as needed
];

const WorkersTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="border border-gray-300 px-4 py-2">Workers</th>
            <th className="border border-gray-300 px-4 py-2">Protective gloves</th>
            <th className="border border-gray-300 px-4 py-2">Safety glasses</th>
            <th className="border border-gray-300 px-4 py-2">Ear protection</th>
            <th className="border border-gray-300 px-4 py-2">Mask protection</th>
            <th className="border border-gray-300 px-4 py-2">Knee pads</th>
            <th className="border border-gray-300 px-4 py-2">Safety shoes</th>
            <th className="border border-gray-300 px-4 py-2">Coverall</th>
            <th className="border border-gray-300 px-4 py-2">Hi-Vis Jacket</th>
            <th className="border border-gray-300 px-4 py-2">Safety Harness</th>
            <th className="border border-gray-300 px-4 py-2">Face shield</th>
            <th className="border border-gray-300 px-4 py-2">Hard Hat</th>
            <th className="border border-gray-300 px-4 py-2">Welding helmet</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((worker, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 flex items-center space-x-2">
                <img src="/path-to-avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full" />
                <div>
                  <div>{worker.name}</div>
                  <div className="text-sm text-gray-500">{worker.role}</div>
                  <div className="text-sm text-gray-500">{worker.company}</div>
                </div>
              </td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.protectiveGloves > 0 ? 'bg-yellow-300' : ''}`}>{worker.protectiveGloves > 0 ? worker.protectiveGloves : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.safetyGlasses > 0 ? 'bg-yellow-300' : ''}`}>{worker.safetyGlasses > 0 ? worker.safetyGlasses : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.earProtection > 0 ? 'bg-yellow-300' : ''}`}>{worker.earProtection > 0 ? worker.earProtection : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.maskProtection > 0 ? 'bg-red-300' : ''}`}>{worker.maskProtection > 0 ? worker.maskProtection : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.kneePads > 0 ? 'bg-yellow-300' : ''}`}>{worker.kneePads > 0 ? worker.kneePads : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.safetyShoes > 0 ? 'bg-yellow-300' : ''}`}>{worker.safetyShoes > 0 ? worker.safetyShoes : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.coverall > 0 ? 'bg-yellow-300' : ''}`}>{worker.coverall > 0 ? worker.coverall : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.hiVisJacket > 0 ? 'bg-yellow-300' : ''}`}>{worker.hiVisJacket > 0 ? worker.hiVisJacket : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.safetyHarness > 0 ? 'bg-yellow-300' : ''}`}>{worker.safetyHarness > 0 ? worker.safetyHarness : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.faceShield > 0 ? 'bg-yellow-300' : ''}`}>{worker.faceShield > 0 ? worker.faceShield : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.hardHat > 0 ? 'bg-yellow-300' : ''}`}>{worker.hardHat > 0 ? worker.hardHat : '-'}</td>
              <td className={`border border-gray-300 px-4 py-2 ${worker.weldingHelmet > 0 ? 'bg-yellow-300' : ''}`}>{worker.weldingHelmet > 0 ? worker.weldingHelmet : '-'}</td>
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