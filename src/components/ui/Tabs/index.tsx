import { Tabs as BaseTabs, TabsProps } from '@radix-ui/react-tabs';
import { useQueryState } from 'nuqs';

import { TabsContent } from './components/TabsContent';
import { TabsList } from './components/TabsList';
import { TabsTrigger } from './components/TabsTrigger';

function Tabs({ children, value, onValueChange, ...props }: TabsProps) {
  const [tabs, setTabs] = useQueryState('tabs');

  const handleChange = (selectedTab: string) => {
    onValueChange?.(selectedTab);
    setTabs(selectedTab);
  };

  return (
    <BaseTabs value={tabs || value} onValueChange={handleChange} {...props}>
      {children}
    </BaseTabs>
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
