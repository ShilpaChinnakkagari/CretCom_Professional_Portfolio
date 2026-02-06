
import React from 'react';

export enum LineType {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
  JSX = 'JSX'
}

export interface CommandResult {
  type: LineType;
  content: string | React.ReactNode;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  imageUrl?: string;
}
