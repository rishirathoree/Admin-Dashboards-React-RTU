import React from 'react'
import { Eye, PencilSimpleLine } from 'phosphor-react'

const WalletTable = () => {
    const wallet = []
    for (let i = 0; i < 8; i++) {
    const names = ['Eliza','Siemen','IshowSpeed','Adin Ross']
    wallet.push({
        name: names[Math.floor(Math.random() * names.length)],
        amount: Math.floor(Math.random() * 100)
    });
    
    }
  return (
        <div className='rounded px-4 py-2 pt-6 space-y-4'>
            <p className='font-medium text-[12px]'>Transaction History</p>
            <div className=" rounded-lg border-gray-200 border-[1px] overflow-x-auto">
                <table className="border-collapse table-auto w-full text-sm">
                    <thead>
                        <tr className="">
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Customer Name</th>
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-left">Amount</th>
                            <th className="font-semibold min-w-min py-2 px-4 text-[11px] text-center">CTA</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">

                        {wallet.map((item, index) => (
                            <tr key={index} className="border-y-[1px] cursor-pointer hover:bg-gray-100/40 last:border-y-0 border-slate-200">
                                <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.name}</td>
                                <td className="font-medium py-2 min-w-min text-left max-w-max p-4 text-[12px] ">{item.amount}</td>
                                <td className="font-medium py-2 min-w-min text-center w-full p-4 text-[12px] flex items-center justify-center">
                                    <span className='flex items-center gap-2'>
                                        <Eye size={20} />
                                        <p>View Details</p>
                                    </span>

                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default WalletTable