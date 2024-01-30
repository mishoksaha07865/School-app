'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component'


const columns = [
    {
        name:"Date",
        selector:row=>{return <><div className="text-lg text-white">{row.date}</div></>}
    },
    {
        name:"Title",
        selector:row=>{return <><div className="text-lg text-white">{row.title}</div></>}
    },
    {
        name:"View",
        selector:row=>{return <><Link href={row.fileUrl} target="_blank" className="py-1 px-3 bg-lime-500 cursor-pointer text-lg hover:bg-green-700   rounded-md text-white">Veiw</Link></>}
       
    },

];
const Notice = ({data}) => {
  const [loader, setLoader] = useState(true);
  // effect
  useEffect(() => {
    setLoader(false);
  }, []);

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');
if (loader) {
        return <div className="h-[100vh] w-full flex justify-center items-center text-2xl text-green-800 font-bold">Loading...</div>;
      }
      return <DataTable   columns={columns}
          data={data}
          theme="solarized"
          pagination />;
      
}

export default Notice