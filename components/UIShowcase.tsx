import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface Props {
  onBack?: () => void;
}

const UIShowcase: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">UI Kit Demo</h1>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={onBack}>Voltar</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Buttons">
          <div className="flex gap-3">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>

        <Card title="Cards">
          <p className="text-sm text-gray-600">This is an example of a simple card component using Tailwind classes and box shadow.</p>
        </Card>

        <Card title="Existing Hero Component">
          <p className="text-sm text-gray-600">Below is the existing site Hero component rendered for comparison.</p>
          <div className="mt-4">
            {/* Importing and reusing the existing Hero component could be done here if desired */}
          </div>
        </Card>

        <Card title="Colors & Typography">
          <p className="text-sm text-gray-600">The demo uses the project's existing Tailwind configuration and fonts.</p>
        </Card>
      </div>
    </div>
  );
};

export default UIShowcase;
