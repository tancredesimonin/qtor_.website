export declare interface LayoutProps {
  children: React.ReactNode;
  // pageProperties?: PageProperties;
}

export default function LayoutDefault({ children }: LayoutProps) {
  return (
    <main>
      <div className="py-10">
        <div className="px-4 mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
          {children}
        </div>
      </div>
    </main>
  );
}
