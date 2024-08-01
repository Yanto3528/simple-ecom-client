'use client';

import { Provider, Root, Trigger } from '@radix-ui/react-tooltip';

import { TooltipContent } from './components/TooltipContent';

const TooltipProvider = Provider;
const Tooltip = Root;
const TooltipTrigger = Trigger;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
