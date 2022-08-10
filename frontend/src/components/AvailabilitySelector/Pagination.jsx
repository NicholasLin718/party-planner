import React, { useState } from 'react';

const Pagination = (props) => {
    const { columnsPerPage, totalColumns, paginate } = props;
    const [active, setActive] = useState(1);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalColumns / columnsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className='flex items-center justify-center select-none pt-3'>
                {active > 1 && (
                    <div
                        onClick={() => {
                            paginate(active - 1);
                            setActive(active - 1);
                        }}
                        className='rounded-l-lg px-4 py-2 bg-gray-200 hover:transition hover:duration-300 hover:ease-in-out hover:bg-gray-400 hover:cursor-pointer'>
                        {'<<'}
                    </div>
                )}
                {pageNumbers.map((number) => (
                    <div
                        onClick={() => {
                            paginate(number);
                            setActive(number);
                            console.log(number);
                        }}
                        className={
                            'px-4 py-2 hover:duration-500 hover:ease-in-out hover:cursor-pointer ' +
                            (active === number
                                ? 'bg-rose-500'
                                : 'bg-gray-200 border-gray-300 hover:bg-gray-500')
                        }>
                        {number}
                    </div>
                ))}
                {active < Math.ceil(totalColumns / columnsPerPage) && (
                    <div
                        onClick={() => {
                            paginate(active + 1);
                            setActive(active + 1);
                        }}
                        className='rounded-r-lg px-4 py-2 bg-gray-200 hover:duration-300 hover:ease-in-out hover:bg-gray-400 hover:cursor-pointer'>
                        {'>>'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pagination;
