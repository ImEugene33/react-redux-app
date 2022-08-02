import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import Paginator, { AppPagination } from './Paginator';
import User from './User';

const Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <Container>
            <Grid  >
                <AppPagination
                    users={users}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    totalItemsCount={totalUsersCount}
                    pageSize={pageSize} />
                <Box sx={{
                    display: 'grid',
                    gap: 1,
                    gridTemplateColumns: 'repeat(4, 1fr)',
                }} >
                    {users.map((u) => (
                        <User user={u} followingInProgress={props.followingInProgress} key={u.id}
                            unfollow={props.unfollow} follow={props.follow} />
                    ))}</Box>
            </Grid>
        </Container>
    );
};

export default Users;
