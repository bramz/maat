import React, { FC } from 'react';
import { DashboardWrapper } from './Dashboard.styled';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
 <DashboardWrapper data-testid="Dashboard">
    Dashboard Component
 </DashboardWrapper>
);

export default Dashboard;
