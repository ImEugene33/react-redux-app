import { Box, Pagination } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import styles from "./users.module.css";

// onPageChanged(p)-функция принимает номер страницы,возвращает текущую страницу с 20 пользователями

export function AppPagination({ totalItemsCount, onPageChanged, pageSize }) {
    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const handlePageChange = (event, page) => {
        const from = (page - 1) * pageSize;
        const to = (page - 1) * pageSize + pageSize;
        // setPagination({ ...pagination, from: from, to: to })
        onPageChanged(page);
    };

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{ margin: '20px 0' }}>
            <Pagination color="primary" variant="outlined" shape="rounded" onChange={handlePageChange} count={pagesCount} />
        </Box>
    )
}

// const [, setUsers] = useState([])

// const service = {
//     getData: ({ from, to }) => {
//         return new Promise((resolve, reject) => {

//             const data = users.slice(from, to)

//             resolve({
//                 count: users.length,
//                 data: data,
//             });

//         });
//     },
// };

// const [pagination, setPagination] = useState({
//     count: 0,
//     from: 0,
//     to: pageSize
// })

// useEffect(() => {
//     service.getData({ from: pagination.from, to: pagination.to }).then(response => {
//         setPagination({ ...pagination, count: response.count })

//         onPageChanged(response.data)

//         console.log((response.data));
//     })
// }, [pagination.from, pagination.to])
