import React from 'react'
interface ElementProps {
    value: number;
}
export const Element: React.FC<ElementProps> = ({ value }) => {
    return (
        <div
            className="flex flex-col h-14 w-14 p-4 text-white rounded-xl shadow-md  bg-gray-200 bg-opacity-15 backdrop-filter backdrop-blur-lg border-solid border-2 border-gray-50">
            <div className="font-semibold text-center text-sm tracking-tight">{ value }</div>
        </div>
    )
}

export default Element
