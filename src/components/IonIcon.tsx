import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcon = ({name, color = '#900', size = 30}: IconProps) => {
  return <Icon name={name} size={size} color={color} />;
};
