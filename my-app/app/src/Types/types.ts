export interface Column {
    key: keyof Worker;
    label: string;
    imgSrc: string;
  }
  
  export interface Worker {
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

  // export default interface EquipmentCellProps {
  //   value: number;
  // }
  
 

  