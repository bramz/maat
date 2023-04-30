import React, { FC } from 'react';
import { NavigationWrapper } from './Navigation.styled';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
 <NavigationWrapper data-testid="Navigation">
    Organizer
 </NavigationWrapper>
);

export default Navigation;
