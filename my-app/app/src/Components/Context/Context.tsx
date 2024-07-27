import { createContext } from 'react';
import { Column } from '../../Types/types';
import columns from '../Data/data';


export class columnContext {
    columnsState: Column[] = columns;
    setColumnsState: React.Dispatch<React.SetStateAction<Column[]>> = () => {};
}

const ColumnContext = createContext<columnContext | null>(null);

export default ColumnContext;

